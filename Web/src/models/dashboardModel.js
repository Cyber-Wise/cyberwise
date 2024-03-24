var database = require("../database/config");

// function buscarPorId(id) {
//   var query = `select * from empresa where id = '${id}'`;

//   return database.executar(query);
// }

// function listar() {
//   var query = `select * from empresa`;

//   return database.executar(query);
// }

function dadosDashboard(empresa) {
    console.log("Acessei dashboardModel")
  var query = `select * from maquina where fk_empresa = '${empresa}'`;

  console.log("Executando a instrução SQL: \n" + query);
  return database.executar(query);
}

// function cadastrar(razaoSocial, cnpj) {
//   var query = `insert into empresa (razao_social, cnpj) values ('${razaoSocial}', '${cnpj}')`;

//   return database.executar(query);
// }

module.exports = { 
    dadosDashboard
 };
