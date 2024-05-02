var database = require("../database/config")

function dadosPerfil(idUser) {
    console.log("Acessei perfil Model")
  var query = `SELECT nome, email, senha FROM funcionario WHERE id = ${idUser};`;

  console.log("Executando a instrução SQL: \n" + query);
  return database.executar(query);
}

function atualizarPerfil(nome, email, senha, id) {
    console.log("Acessei perfil Model")
  var query = `UPDATE funcionario SET nome = '${nome}', email = '${email}', senha = '${senha}' WHERE id = ${id};`;

  console.log("Executando a instrução SQL: \n" + query);
  return database.executar(query);
}

function dadosFuncionarios(empresa) {
    console.log("Acessei perfil Model")
  var query = `select * from funcionario where fk_empresa = ${empresa}`;

  console.log("Executando a instrução SQL: \n" + query);
  return database.executar(query);
}

function deletarFuncionario(funcionario) {
    console.log("Acessei perfil Model")
  var query = `DELETE FROM funcionario WHERE id = ${funcionario};`;
  
  console.log("Executando a instrução SQL: \n" + query);
  return database.executar(query);
}

function cadastrarFuncionario(nome, email, senha, idEmpresa, cargo) {
    console.log("Acessei perfil Model")
  var query = `INSERT INTO funcionario VALUES (NULL, '${nome}', '${email}', '${senha}', ${idEmpresa}, ${cargo});`;

  
  console.log("Executando a instrução SQL: \n" + query);
  return database.executar(query);
}

function atualizarFuncionario(email, senha, id) {
    console.log("Acessei perfil Model")
  var query = `UPDATE funcionario SET email = '${email}', senha = '${senha}' WHERE id = ${id};`;

  console.log("Executando a instrução SQL: \n" + query);
  return database.executar(query);
}

function dadosMaquinas(empresa) {
    console.log("Acessei perfil Model")
  var query = `select * from maquina where fk_empresa = ${empresa}`;

  console.log("Executando a instrução SQL: \n" + query);
  return database.executar(query);
}

function buscarParametros(empresa) {
    console.log("Acessei perfil Model")
  var query = `select * from parametros where fk_empresa = ${empresa}`;


  console.log("Executando a instrução SQL: \n" + query);
  return database.executar(query);
}

function cadastrarMaquina(modelo, numeroSerie, idParametro, idEmpresa) {
    console.log("Acessei perfil Model")
  var query = `INSERT INTO maquina VALUES (NULL, '${modelo}', '${numeroSerie}', '${idParametro}', ${idEmpresa});`;

  console.log("Executando a instrução SQL: \n" + query);
  return database.executar(query);
}

function deletarMaquina(idMaquina) {
    console.log("Acessei perfil Model")
  var query = `DELETE FROM maquina WHERE id = ${idMaquina};`;
  
  console.log("Executando a instrução SQL: \n" + query);
  return database.executar(query);
}


module.exports = {
    dadosFuncionarios,
    deletarFuncionario,
    atualizarFuncionario,
    dadosMaquinas,
    buscarParametros,
    cadastrarFuncionario,
    cadastrarMaquina,
    deletarMaquina,
    dadosPerfil,
    atualizarPerfil
};