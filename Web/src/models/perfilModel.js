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

function atualizarFuncionario1(email, senha, id, cargo) {
    console.log("Acessei perfil Model")
  var query = `UPDATE funcionario SET email = '${email}', senha = '${senha}', fk_cargo = ${cargo} WHERE id = ${id};`;

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

function atualizarMaquina(modelo, id) {
  console.log("Acessei perfil Model")
var query = `UPDATE maquina SET modelo = '${modelo}' WHERE id = ${id};`;

console.log("Executando a instrução SQL: \n" + query);
return database.executar(query);
}

function deletarMonitoramento(idMaquina) {
    console.log("Acessei perfil Model")
  var query = `DELETE FROM monitoramento WHERE fk_maquina = ${idMaquina};`;
  
  console.log("Executando a instrução SQL: \n" + query);
  return database.executar(query);
}

function deletarMaquina(idMaquina) {
    console.log("Acessei perfil Model")
  var query = `DELETE FROM maquina WHERE id = ${idMaquina};`;
  
  console.log("Executando a instrução SQL: \n" + query);
  return database.executar(query);
}

function cadastrarParametro(nome, cpuCritico, cpuAlerta, ramCritico, ramAlerta, discoCritico, discoAlerta, idEmpresa) {
    console.log("Acessei perfil Model")
  var query = `INSERT INTO parametros VALUES (NULL, '${nome}', ${cpuAlerta}, ${cpuCritico}, ${discoAlerta}, ${discoCritico}, ${ramAlerta}, ${ramCritico}, ${idEmpresa});`;
  
  console.log("Executando a instrução SQL: \n" + query);
  return database.executar(query);
}

function listaParametros(empresa) {
  console.log("Acessei perfil Model")
var query = `SELECT * FROM parametros WHERE fk_empresa = ${empresa};`;

console.log("Executando a instrução SQL: \n" + query);
return database.executar(query);
}

function updateParametro(idParametro) {
  console.log("Acessei perfil Model")
var query = `UPDATE maquina
            SET fk_parametros = 1
            WHERE fk_parametros = ${idParametro};`;

console.log("Executando a instrução SQL: \n" + query);
return database.executar(query);
}

function deletarParametro(idParametro) {
  console.log("Acessei perfil Model")
var query = `DELETE FROM parametros WHERE id = ${idParametro}`;

console.log("Executando a instrução SQL: \n" + query);
return database.executar(query);
}


module.exports = {
    dadosFuncionarios,
    deletarFuncionario,
    atualizarFuncionario,
    atualizarFuncionario1,
    dadosMaquinas,
    buscarParametros,
    cadastrarFuncionario,
    cadastrarMaquina,
    deletarMaquina,
    dadosPerfil,
    atualizarPerfil,
    cadastrarParametro,
    atualizarMaquina,
    listaParametros,
    deletarMonitoramento,
    deletarParametro,
    updateParametro
};