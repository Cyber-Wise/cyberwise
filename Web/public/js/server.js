const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
require('dotenv').config();
const cors = require('cors');
const WebSocket = require('ws');

const app = express();

app.use(bodyParser.json());
app.use(cors());

const notificacoesEnviadas = {};

// const wss = new WebSocket.Server({ port: process.env.PORT || 3001 });

// wss.on('connection', function connection(ws) {
//   console.log('Cliente conectado ao servidor WebSocket');

//   ws.on('message', function incoming(message) {
//     console.log('Mensagem recebida do cliente WebSocket:', message);
//   });
// });


async function sendSlackNotification(message) {
  try {
    const webhookUrl = process.env.SLACK_WEBHOOK_URL;
    console.log('Webhook URL:', webhookUrl);

    if (!webhookUrl) {
      throw new Error('SLACK_WEBHOOK_URL não está definido no arquivo .env');
    }

    const payload = { text: message };

    const response = await axios.post(webhookUrl, payload);

    if (response.status === 200) {
      console.log('Notificação enviada para o Slack com sucesso!');
    } else {
      console.error('Erro ao enviar notificação para o Slack:', response.statusText);
    }
  } catch (error) {
    console.error('Erro ao enviar notificação para o Slack:', error.message);
  }
}

function formatarComponentes(componentes) {
  if (componentes.length > 1) {
    const ultimoComponente = componentes.pop();
    return componentes.join(', ') + ' e ' + ultimoComponente;
  }
  return componentes[0];
}

function construirMensagem(modelo, numSerie, componentes, estado) {
  const prefixo = componentes.length > 1 ? 'os componentes' : 'o componente';
  let emoji = '';

  if (estado === 'crítico') {
    emoji = ':warning:'; 
  } else if (estado === 'de alerta') {
    emoji = ':bell:'; 
  }

  return `\n${emoji} Máquina ${modelo} (${numSerie}) possui ${prefixo} ${formatarComponentes(componentes)} em estado ${estado}.`;

}


async function verificarEnviarNotificacoes(computadores) {
  const agora = Date.now();

  const notificacoesCriticas = [];
  const notificacoesAlerta = [];

  computadores.forEach(computador => {
    const { modelo, numSerie, medidaRam, medidaDisco, medidaCpu } = computador;
    const id = `${modelo}-${numSerie}`;

    // se a notificação foi enviada há menos de um minuto, não envia dnv
    if (notificacoesEnviadas[id] && (agora - notificacoesEnviadas[id] < 15 * 1000)) {
      return;
    }

    const componentesCriticos = [];
    const componentesAlerta = [];

    if (medidaRam >= 80) componentesCriticos.push('RAM');
    else if (medidaRam >= 60) componentesAlerta.push('RAM');

    if (medidaDisco >= 90) componentesCriticos.push('Disco');
    else if (medidaDisco >= 70) componentesAlerta.push('Disco');

    if (medidaCpu >= 70) componentesCriticos.push('CPU');
    else if (medidaCpu >= 50) componentesAlerta.push('CPU');

    if (componentesCriticos.length > 0) {
      const estado = 'crítico';
      notificacoesCriticas.push({ modelo, numSerie, componentes: componentesCriticos, estado });
      notificacoesEnviadas[id] = agora;
    } else if (componentesAlerta.length > 0) {
      const estado = 'de alerta';
      notificacoesAlerta.push({ modelo, numSerie, componentes: componentesAlerta, estado });
      notificacoesEnviadas[id] = agora;
    }
  });

  for (const notificacao of notificacoesCriticas) {
    const mensagem = construirMensagem(notificacao.modelo, notificacao.numSerie, notificacao.componentes, notificacao.estado);
    await sendSlackNotification(`*Atenção!*${mensagem}`);
    await new Promise(resolve => setTimeout(resolve, 5000)); // 5 segundos
  }

  for (const notificacao of notificacoesAlerta) {
    const mensagem = construirMensagem(notificacao.modelo, notificacao.numSerie, notificacao.componentes, notificacao.estado);
    await sendSlackNotification(`*Atenção!*${mensagem}`);
    await new Promise(resolve => setTimeout(resolve, 10000)); // 10 segundos
  }
}

setInterval(async () => {
  const computadores = [{
      id: 1,
      modelo: "Dell",
      numSerie: "1212",
      medidaRam: 30,
      medidaDisco: 30,
      medidaCpu: 30
    },
    {
      id: 2,
      modelo: "Dell",
      numSerie: "1414",
      medidaRam: 60,
      medidaDisco: 70,
      medidaCpu: 60
    },
    {
      id: 3,
      modelo: "Dell",
      numSerie: "1545",
      medidaRam: 40,
      medidaDisco: 30,
      medidaCpu: 30
    },
    {
      id: 4,
      modelo: "Acer",
      numSerie: "3434",
      medidaRam: 90,
      medidaDisco: 30,
      medidaCpu: 40
    },
    {
      id: 5,
      modelo: "Positivo",
      numSerie: "2232",
      medidaRam: 90,
      medidaDisco: 80,
      medidaCpu: 40
    },
    {
      id: 6,
      modelo: "Lg",
      numSerie: "3232",
      medidaRam: 50,
      medidaDisco: 60,
      medidaCpu: 60
    }
  ];

  await verificarEnviarNotificacoes(computadores);
}, 30 * 1000); // 30 segundos

console.log('Carregando...');

const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

process.on('SIGINT', () => {
  console.log('Encerrando aplicação. Enviando última notificação para o Slack...');
  sendSlackNotification('Aplicação sendo encerrada. Verifique o estado dos computadores.');
  server.close(() => {
    console.log('Aplicação encerrada.');
    process.exit(0);
  });
});

app.post('/dashboard/info', async (req, res) => {
  try {
    const {
      computadores
    } = req.body;
    await verificarEnviarNotificacoes(computadores);
    res.status(200).send("Dados recebidos com sucesso e notificações enviadas para o Slack.");
  } catch (error) {
    console.error('Erro ao processar dados do front-end:', error);
    res.status(500).send("Erro ao processar dados do front-end.");
  }
});
