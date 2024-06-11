//process.env.AMBIENTE_PROCESSO = "desenvolvimento";
process.env.AMBIENTE_PROCESSO = "producao";

var express = require("express");
var cors = require("cors");
var path = require("path");
const axios = require('axios');

var PORTA = process.env.AMBIENTE_PROCESSO == "desenvolvimento" ? 3333 : 80;

var app = express();

var indexRouter = require("./src/routes/index");
var usuarioRouter = require("./src/routes/usuarios");
var dashboardRouter = require("./src/routes/dashboard");
var perfilRouter = require("./src/routes/perfil");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());


app.post('/api/chat', async (req, res) => {
    try {
        const userMessage = req.body.mensagem;
        const response = await axios.post('http://127.0.0.1:5000/', { mensagem: userMessage });
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Erro ao comunicar com o chatbot.');
    }
});

app.use("/", indexRouter);
app.use("/usuarios", usuarioRouter);
app.use("/dashboard", dashboardRouter);
app.use("/perfil", perfilRouter);

app.listen(PORTA, function () {
    console.log(`Servidor do seu site já está rodando! Acesse o caminho a seguir para visualizar: http://localhost:${PORTA} \n
    Você está rodando sua aplicação em Ambiente de ${process.env.AMBIENTE_PROCESSO} \n
    \t\tSe "desenvolvimento", você está se conectando ao banco LOCAL (MySQL Workbench). \n
    \t\tSe "producao", você está se conectando ao banco REMOTO (SQL Server em nuvem Azure) \n
    \t\t\t\tPara alterar o ambiente, comente ou descomente as linhas 1 ou 2 no arquivo 'app.js'`);
});
