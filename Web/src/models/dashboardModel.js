var database = require("../database/config");

// function buscarPorId(id) {
//   var query = `select * from empresa where id = '${id}'`;

//   return database.executar(query);
// }

// function listar() {
//   var query = `select * from empresa`;

//   return database.executar(query);
// }

function maquinasEmpresa(empresa) {
  console.log("Acessei dashboardModel dados")
var query = `select * from maquina join parametros on fk_parametros = parametros.id where maquina.fk_empresa = ${empresa};`;

console.log("Executando a instrução SQL: \n" + query);
return database.executar(query);
}
function maquinasComProblemas(empresa) {
  console.log("Acessei dashboardModel")
var query = `SELECT 
alertas.id AS idAlerta, 
criticidade, 
data_hora, 
componente, 
maquina.id AS idMaquina, 
modelo, 
numSerie, 
fk_parametros, 
maquina.fk_empresa AS idEmpresa 
FROM 
alertas 
JOIN 
maquina 
ON 
fk_maquina = maquina.id 
WHERE 
fk_empresa = ${empresa} 
AND data_hora >= DATE_SUB(NOW(), INTERVAL 0.4 MINUTE);`;

console.log("Executando a instrução SQL: \n" + query);
return database.executar(query);
}

function notificacao(empresa) {
  console.log("Acessei dashboardModel")
var query = `SELECT 
alertas.id AS idAlerta, 
criticidade, 
data_hora, 
componente, 
maquina.id AS idMaquina, 
modelo, 
numSerie, 
fk_parametros, 
maquina.fk_empresa AS idEmpresa 
FROM 
alertas 
JOIN 
maquina 
ON 
fk_maquina = maquina.id 
WHERE 
fk_empresa = ${empresa}
AND data_hora >= DATE_SUB(NOW(), INTERVAL 1440 MINUTE);;`;

console.log("Executando a instrução SQL: \n" + query);
return database.executar(query);
}
function totalDeMaquinas(empresa) {
  console.log("Acessei dashboardModel")
var query = `select COUNT(*) as contador from maquina where fk_empresa = ${empresa};`;

console.log("Executando a instrução SQL: \n" + query);
return database.executar(query);
}


module.exports = { 
    maquinasComProblemas,
    totalDeMaquinas,
    maquinasEmpresa,
    notificacao
 };
