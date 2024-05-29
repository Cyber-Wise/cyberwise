var database = require("../database/config")

function autenticar(email, senha) {
            var instrucao = `
            SELECT 
            funcionario.id, 
            funcionario.nome, 
            funcionario.email, 
            funcionario.fk_empresa,
            empresa.nome AS nome_empresa,
            cargos.cargo AS nome_cargo
        FROM 
            funcionario
        JOIN 
            empresa ON funcionario.fk_empresa = empresa.id
        JOIN 
            cargos ON funcionario.fk_cargo = cargos.id
        WHERE  funcionario.email = '${email}' AND funcionario.senha = '${senha}';`;
        
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

// function checkarCredenciais(email, senha) {

//             var instrucao = `SELECT `;

//         console.log("Executando a instrução SQL: \n" + instrucao);
//         return database.executar(instrucao);
    
// }

function cadastrarEmpresa(nomeEmpresa, telefone, cnpj) {

    var instrucao = `
        INSERT INTO empresa (nome, telefone, cnpj) VALUES ('${nomeEmpresa}', '${telefone}', '${cnpj}');
        `;

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
    
}

function buscarEmpresa() {

    var instrucao = `
        SELECT COUNT(*) AS total_registros FROM empresa;
    `;
    
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
    
}

function cadastrarFuncionario(nomeAdm, email, senha, fkEmpresa){
    console.log('Nome adm usuario model ===>', nomeAdm);
        var instrucao = `
            INSERT INTO funcionario (nome, email, senha, fk_cargo, fk_empresa) VALUES ('${nomeAdm}', '${email}', '${senha}', 1, ${fkEmpresa});
        `;
        
        console.log("Executando a instrução SQL: \n" + instrucao);
        return database.executar(instrucao);
    }

function cadastrarParametro(fkEmpresa){

        var instrucao = `
            INSERT INTO parametros (nome, alertaCPU, crticoCPU, alertaDISCO, criticoDISCO, alertaRAM, criticoRAM) VALUES ('Parâmetro padrão', 80, 100, 80, 100, 80, 100, ${fkEmpresa});
        `;
        
        console.log("Executando a instrução SQL: \n" + instrucao);
        return database.executar(instrucao);
    }

module.exports = {
    autenticar,
    cadastrarEmpresa,
    cadastrarFuncionario,
    buscarEmpresa,
    cadastrarParametro,
    // checkarCredenciais
};