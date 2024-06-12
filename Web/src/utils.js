// const mysql = require('mysql2');
// const stringSimilarity = require('string-similarity');

// async function conexaoBancoDeDados() {
//     return new Promise((resolve, reject) => {
//         const connection = mysql.createConnection({
//             host: "localhost",
//             user: "cyberwise",
//             password: "cyber100",
//             database: "chatterbot_database"
//         });

//         connection.connect(err => {
//             if (err) {
//                 console.error("Erro ao conectar ao banco de dados:", err);
//                 reject(null);
//             } else {
//                 resolve(connection);
//             }
//         });
//     });
// }

// async function carregarBaseDeConhecimentoDoBanco(conexao) {
//     return new Promise((resolve, reject) => {
//         const query = "SELECT question, answer FROM knowledge_base";
//         conexao.query(query, (err, results) => {
//             if (err) {
//                 console.error("Erro ao carregar a base de conhecimento do banco de dados:", err);
//                 resolve({ questions: [] });
//             } else {
//                 resolve({ questions: results });
//             }
//         });
//     });
// }

// async function salvarBaseDeConhecimentoNoBanco(conexao, dado) {
//     return new Promise((resolve, reject) => {
//         const query = "INSERT INTO knowledge_base (question, answer) VALUES ?";
//         const values = dado.questions.map(q => [q.question, q.answer]);
//         conexao.query(query, [values], (err, results) => {
//             if (err) {
//                 console.error("Erro ao salvar base de conhecimento no banco de dados:", err);
//                 reject(err);
//             } else {
//                 console.log("Base de conhecimento salva no banco de dados com sucesso!");
//                 resolve(results);
//             }
//         });
//     });
// }

// function findBestMatch(userQuestion, questions) {
//     const stringSimilarity = require("string-similarity");
//     const matches = stringSimilarity.findBestMatch(userQuestion, questions);
//     return matches.bestMatch.target;
// }

// function getAnswerForQuestion(question, knowledgeBase) {
//     const entry = knowledgeBase.questions.find(q => q.question === question);
//     return entry ? entry.answer : null;
// }

// async function salvarConversa(conexao, entrada_usuario, resposta) {
//     return new Promise((resolve, reject) => {
//         const query = "INSERT INTO conversa (entrada_usuario, resposta) VALUES (?, ?)";
//         conexao.query(query, [entrada_usuario, resposta], (err, results) => {
//             if (err) {
//                 console.error("Erro ao salvar conversa no banco de dados:", err);
//                 reject(err);
//             } else {
//                 console.log("Conversa salva no banco de dados com sucesso!");
//                 resolve(results);
//             }
//         });
//     });
// }

// module.exports = {
//     conexaoBancoDeDados,
//     carregarBaseDeConhecimentoDoBanco,
//     findBestMatch,
//     getAnswerForQuestion,
//     salvarBaseDeConhecimentoNoBanco,
//     salvarConversa
// };




const sql = require('mssql');
const stringSimilarity = require('string-similarity');

async function conexaoBancoDeDados() {
    const config = {
        user: 'cyberwise',
        password: 'cyber100',
        server: 'localhost',
        database: 'chatterbot_database',
        options: {
            encrypt: false // Desativar se você não estiver usando o SSL
        }
    };

    try {
        let pool = await sql.connect(config);
        console.log("Conexão bem-sucedida ao banco de dados");
        return pool;
    } catch (err) {
        console.error("Erro ao conectar ao banco de dados:", err);
        throw err;
    }
}

async function carregarBaseDeConhecimentoDoBanco(pool) {
    try {
        const result = await pool.request().query("SELECT question, answer FROM knowledge_base");
        return { questions: result.recordset };
    } catch (err) {
        console.error("Erro ao carregar a base de conhecimento do banco de dados:", err);
        return { questions: [] };
    }
}

async function salvarBaseDeConhecimentoNoBanco(pool, dado) {
    try {
        const query = "INSERT INTO knowledge_base (question, answer) VALUES (@question, @answer)";
        const request = pool.request();

        dado.questions.forEach(q => {
            request.input('question', sql.Text, q.question);
            request.input('answer', sql.Text, q.answer);
            request.query(query);
        });

        console.log("Base de conhecimento salva no banco de dados com sucesso!");
    } catch (err) {
        console.error("Erro ao salvar base de conhecimento no banco de dados:", err);
        throw err;
    }
}

function findBestMatch(userQuestion, questions) {
    const matches = stringSimilarity.findBestMatch(userQuestion, questions);
    return matches.bestMatch.target;
}

function getAnswerForQuestion(question, knowledgeBase) {
    const entry = knowledgeBase.questions.find(q => q.question === question);
    return entry ? entry.answer : null;
}

async function salvarConversa(pool, entrada_usuario, resposta) {
    try {
        const query = "INSERT INTO conversa (entrada_usuario, resposta) VALUES (@entrada_usuario, @resposta)";
        await pool.request()
            .input('entrada_usuario', sql.Text, entrada_usuario)
            .input('resposta', sql.Text, resposta)
            .query(query);
        console.log("Conversa salva no banco de dados com sucesso!");
    } catch (err) {
        console.error("Erro ao salvar conversa no banco de dados:", err);
        throw err;
    }
}

module.exports = {
    conexaoBancoDeDados,
    carregarBaseDeConhecimentoDoBanco,
    findBestMatch,
    getAnswerForQuestion,
    salvarBaseDeConhecimentoNoBanco,
    salvarConversa
};

