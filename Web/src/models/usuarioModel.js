var database = require("../database/config")

function autenticar(email, senha) {
    var instrucao = `
        SELECT id, nome, email, fk_empresa FROM funcionario WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


function cadastrarEmpresa(nomeEmpresa, telefone, cnpj) {

    var instrucao = `
        INSERT INTO empresa (nome, telefone, cnpj) VALUES ('${nomeEmpresa}', '${telefone}', '${cnpj}');

    `;
    
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
    
}

function cadastrarFuncionario(nomeAdm, email, senha){
    console.log('Nome adm usuario model ===>', nomeAdm);
        var instrucao = `
            INSERT INTO funcionario (nome, email, senha, fk_cargo) VALUES ('${nomeAdm}', '${email}', '${senha}', 1);
        `;
        
        console.log("Executando a instrução SQL: \n" + instrucao);
        return database.executar(instrucao);
    }

module.exports = {
    autenticar,
    cadastrarEmpresa,
    cadastrarFuncionario
};