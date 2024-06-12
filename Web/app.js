process.env.AMBIENTE_PROCESSO = "desenvolvimento";
//process.env.AMBIENTE_PROCESSO = "producao";
const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const PORTA = process.env.AMBIENTE_PROCESSO === "desenvolvimento" ? 3333 : 80;

const {
    conexaoBancoDeDados, carregarBaseDeConhecimentoDoBanco,
    findBestMatch, getAnswerForQuestion, salvarBaseDeConhecimentoNoBanco, salvarConversa
} = require('./src/utils');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());

// Rotas
app.use("/", require("./src/routes/index"));
app.use("/usuarios", require("./src/routes/usuarios"));
app.use("/dashboard", require("./src/routes/dashboard"));
app.use("/perfil", require("./src/routes/perfil"));

// Rota para o chatbot
app.post('/api/chat', async (req, res) => {
    try {
        console.log("Entrou na rota /api/chat 1");

        let userInput;
        if (req.is('application/json')) {
            userInput = req.body.mensagem;
        } else if (req.is('application/x-www-form-urlencoded')) {
            userInput = req.body.input_usuario;
        } else {
            return res.status(400).json({ "response": "Content-Type não suportado" });
        }

        console.log("Entrou na rota /api/chat 2 ---", userInput);

        const conexao = await conexaoBancoDeDados();
        if (!conexao) {
            console.log("Erro ao conectar ao banco de dados");
            return res.status(500).json({ "response": "Erro ao conectar ao banco de dados" });
        }

        console.log("Conexão com banco de dados estabelecida");

        const knowledgeBase = await carregarBaseDeConhecimentoDoBanco(conexao);
        console.log("Base de conhecimento carregada:", knowledgeBase);

        const questions = knowledgeBase.questions.map(q => q.question);
        const bestMatch = findBestMatch(userInput, questions);
        console.log("Melhor correspondência encontrada:", bestMatch);

        let answer;
        if (bestMatch) {
            answer = getAnswerForQuestion(bestMatch, knowledgeBase);
        } else {
            answer = "Poderia me fornecer mais informações";
        }

        console.log("Resposta do chatbot:", answer);

        await salvarConversa(conexao, userInput, answer);
        conexao.end();

        return res.json({ "response": answer });
    } catch (error) {
        console.error('Erro no chat:', error);
        res.status(500).json({ response: 'Erro interno no servidor' });
    }
});

app.post('/train', async (req, res) => {
    try {
        let userInput, newAnswer;
        if (req.is('application/json')) {
            userInput = req.body.mensagem;
            newAnswer = req.body.new_answer;
        } else if (req.is('application/x-www-form-urlencoded')) {
            userInput = req.body.mensagem;
            newAnswer = req.body.new_answer;
        }
        console.log("Treinamento recebido:", userInput, newAnswer);

        const conexao = await conexaoBancoDeDados();
        if (!conexao) {
            console.log("Erro ao conectar ao banco de dados");
            return res.status(500).json({ "response": "Erro ao conectar ao banco de dados" });
        }

        console.log("Conexão com banco de dados estabelecida para treinamento");

        const knowledgeBase = await carregarBaseDeConhecimentoDoBanco(conexao);
        console.log("Base de conhecimento antes do treinamento:", knowledgeBase);

        knowledgeBase.questions.push({ question: userInput, answer: newAnswer });
        await salvarBaseDeConhecimentoNoBanco(conexao, { questions: [{ question: userInput, answer: newAnswer }] });
        console.log("Nova base de conhecimento:", knowledgeBase);

        conexao.end();
        return res.json({ "response": "Obrigado! Eu aprendi uma nova resposta :)" });
    } catch (error) {
        console.error('Erro no treinamento:', error);
        res.status(500).json({ response: 'Erro interno no servidor' });
    }
});

// Iniciar o servidor
app.listen(PORTA, () => {
    console.log(`Servidor do seu site já está rodando! Acesse: http://localhost:${PORTA} \n
    Você está rodando sua aplicação em Ambiente de ${process.env.AMBIENTE_PROCESSO} \n
    \t\tSe "desenvolvimento", você está se conectando ao banco LOCAL (MySQL Workbench). \n
    \t\tSe "producao", você está se conectando ao banco REMOTO (SQL Server em nuvem Azure) \n
    \t\t\t\tPara alterar o ambiente, comente ou descomente as linhas 1 ou 2 no arquivo 'app.js'`);
});
