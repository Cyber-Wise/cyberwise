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
alertas.criticidade, 
alertas.data_hora, 
alertas.componente, 
maquina.id AS idMaquina, 
maquina.modelo, 
maquina.NumeroSerieProcessador AS numSerie, 
maquina.fk_parametros, 
maquina.fk_empresa AS idEmpresa 
FROM 
alertas 
JOIN 
maquina 
ON 
alertas.fk_maquina = maquina.id 
WHERE 
maquina.fk_empresa = ${empresa} 
AND alertas.data_hora >= DATE_SUB(NOW(), INTERVAL 0.05 MINUTE);`;

console.log("Executando a instrução SQL: \n" + query);
return database.executar(query);
}

function notificacao(empresa) {
  console.log("Acessei dashboardModel")
var query = `SELECT 
alertas.id AS idAlerta, 
alertas.criticidade, 
alertas.data_hora, 
alertas.componente, 
maquina.id AS idMaquina, 
maquina.modelo, 
maquina.NumeroSerieProcessador AS numSerie, 
maquina.fk_parametros, 
maquina.fk_empresa AS idEmpresa 
FROM 
alertas 
JOIN 
maquina 
ON 
alertas.fk_maquina = maquina.id 
WHERE 
maquina.fk_empresa = ${empresa}
AND alertas.data_hora >= DATE_SUB(NOW(), INTERVAL 1440 MINUTE);`;

console.log("Executando a instrução SQL: \n" + query);
return database.executar(query);
}
function totalDeMaquinas(empresa) {
  console.log("Acessei dashboardModel")
var query = `select COUNT(*) as contador from maquina where fk_empresa = ${empresa};`;

console.log("Executando a instrução SQL: \n" + query);
return database.executar(query);
}
function componentesEmEstadoCritico(empresa) {
  console.log("Acessei dashboardModel")
var query = `SELECT 
COUNT(DISTINCT maquina.id) AS totalMaquinasCritico
FROM 
alertas 
JOIN 
maquina 
ON 
alertas.fk_maquina = maquina.id 
WHERE 
alertas.criticidade = 'Crítico' AND fk_empresa = ${empresa} AND alertas.data_hora >= DATE_SUB(NOW(), INTERVAL 0.05 MINUTE);`;

console.log("Executando a instrução SQL: \n" + query);
return database.executar(query);
}
function componentesEmEstadoAlerta(empresa) {
  console.log("Acessei dashboardModel")
var query = `SELECT 
COUNT(DISTINCT maquina.id) AS totalMaquinasCritico
FROM 
alertas 
JOIN 
maquina 
ON 
alertas.fk_maquina = maquina.id 
WHERE 
alertas.criticidade = 'Alerta' AND fk_empresa = ${empresa} AND alertas.data_hora >= DATE_SUB(NOW(), INTERVAL 0.05 MINUTE);`;
return database.executar(query);

}
function maquinasComProblemasDeRede(empresa) {
  console.log("Acessei dashboardModel")
var query = `SELECT 
COUNT(DISTINCT maquina.id) AS totalMaquinasCritico
FROM 
alertas 
JOIN 
maquina 
ON 
alertas.fk_maquina = maquina.id 
WHERE 
alertas.componente = 'rede' AND fk_empresa = ${empresa} AND alertas.data_hora >= DATE_SUB(NOW(), INTERVAL 0.05 MINUTE);`;

console.log("Executando a instrução SQL: \n" + query);
return database.executar(query);
}
function maquinasComPoucoEspaco(empresa) {
  console.log("Acessei dashboardModel")
var query = `SELECT 
COUNT(DISTINCT maquina.id) AS totalDeMaquinasComPoucaMemoria
FROM 
alertas 
JOIN 
maquina 
ON 
alertas.fk_maquina = maquina.id 
WHERE 
alertas.componente = 'disco' AND fk_empresa = ${empresa}
AND alertas.data_hora >= DATE_SUB(NOW(), INTERVAL 0.05 MINUTE);`;

console.log("Executando a instrução SQL: \n" + query);
return database.executar(query);
}

function maquinasComPoucaRam(empresa) {
  console.log("Acessei dashboardModel")
var query = `SELECT 
COUNT(DISTINCT maquina.id) AS totalDeMaquinasComPoucaRam
FROM 
alertas 
JOIN 
maquina 
ON 
alertas.fk_maquina = maquina.id 
WHERE 
alertas.componente = 'ram' AND fk_empresa = ${empresa}
AND alertas.data_hora >= DATE_SUB(NOW(), INTERVAL 0.05 MINUTE);`;

console.log("Executando a instrução SQL: \n" + query);
return database.executar(query);
}
function listaDeMaquinasComPoucoEspaco(empresa) {
  console.log("Acessei dashboardModel")
var query = `SELECT 
DISTINCT maquina.id AS idMaquina, 
maquina.status_maquina,
maquina.modelo,
parametros.nome,
maquina.NumeroSerieProcessador AS numSerie, 
maquina.fk_parametros, 
maquina.fk_empresa AS idEmpresa 
FROM 
alertas 
JOIN 
maquina 
ON 
alertas.fk_maquina = maquina.id
JOIN 
parametros 
ON 
maquina.fk_parametros = parametros.id
WHERE 
alertas.componente = 'disco'
AND maquina.fk_empresa = ${empresa}
AND alertas.data_hora >= DATE_SUB(NOW(), INTERVAL 0.5 MINUTE);
`;

console.log("Executando a instrução SQL: \n" + query);
return database.executar(query);
}
function listaDeMaquinasComPoucaRam(empresa) {
  console.log("Acessei dashboardModel")
var query = `SELECT 
maquina.id AS idMaquina, 
maquina.status_maquina,
maquina.modelo,
parametros.nome,
maquina.NumeroSerieProcessador AS numSerie, 
maquina.fk_parametros, 
maquina.fk_empresa AS idEmpresa 
FROM 
alertas 
JOIN 
maquina 
ON 
alertas.fk_maquina = maquina.id
JOIN parametros on fk_parametros = parametros.id
WHERE 
alertas.componente = 'ram'
AND maquina.fk_empresa = ${empresa}
AND alertas.data_hora >= DATE_SUB(NOW(), INTERVAL 00.5 MINUTE);`;

console.log("Executando a instrução SQL: \n" + query);
return database.executar(query);
}
function listaDeMaquinasProblemaRede(empresa) {
  console.log("Acessei dashboardModel")
var query = `SELECT 
maquina.id AS idMaquina, 
maquina.status_maquina,
maquina.modelo,
parametros.nome,
maquina.NumeroSerieProcessador AS numSerie, 
maquina.fk_parametros, 
maquina.fk_empresa AS idEmpresa 
FROM 
alertas 
JOIN 
maquina 
ON 
alertas.fk_maquina = maquina.id
JOIN parametros on fk_parametros = parametros.id
WHERE 
alertas.componente = 'rede'
AND maquina.fk_empresa = ${empresa}
AND alertas.data_hora >= DATE_SUB(NOW(), INTERVAL 00.5 MINUTE);`;

console.log("Executando a instrução SQL: \n" + query);
return database.executar(query);
}
function listaDeMaquinasCOmComponentesCriticos(empresa) {
  console.log("Acessei dashboardModel")
var query = `SELECT 
DISTINCT maquina.id AS idMaquina, 
maquina.status_maquina,
maquina.modelo,
parametros.nome,
maquina.NumeroSerieProcessador AS numSerie, 
maquina.fk_parametros, 
maquina.fk_empresa AS idEmpresa 
FROM 
alertas 
JOIN 
maquina 
JOIN parametros
ON maquina.fk_parametros = parametros.id
ON 
alertas.fk_maquina = maquina.id
WHERE 
alertas.criticidade = 'Crítico'
AND maquina.fk_empresa = ${empresa}
AND alertas.data_hora >= DATE_SUB(NOW(), INTERVAL 00.5 MINUTE
);`;

console.log("Executando a instrução SQL: \n" + query);
return database.executar(query);
}

function listaDeMaquinasCOmComponentesAlertas(empresa) {
  console.log("Acessei dashboardModel")
var query = `SELECT 
DISTINCT maquina.id AS idMaquina, 
maquina.status_maquina,
maquina.modelo,
parametros.nome,
maquina.NumeroSerieProcessador AS numSerie, 
maquina.fk_parametros, 
maquina.fk_empresa AS idEmpresa 
FROM 
alertas 
JOIN 
maquina 
JOIN parametros
ON maquina.fk_parametros = parametros.id
ON 
alertas.fk_maquina = maquina.id
WHERE 
alertas.criticidade = 'Alerta'
AND maquina.fk_empresa = ${empresa}
AND alertas.data_hora >= DATE_SUB(NOW(), INTERVAL 00.5 MINUTE
);`;

console.log("Executando a instrução SQL: \n" + query);
return database.executar(query);
}
function listaDeAlertas(empresa) {
  console.log("Acessei dashboardModel")
var query = `SELECT 
maquina.id AS idMaquina, 
maquina.modelo, 
maquina.NumeroSerieProcessador AS numSerie, 
SUM(CASE WHEN alertas.componente = 'CPU' THEN 1 ELSE 0 END) AS alertasCPU,
SUM(CASE WHEN alertas.componente = 'RAM' THEN 1 ELSE 0 END) AS alertasRAM,
SUM(CASE WHEN alertas.componente = 'DISCO' THEN 1 ELSE 0 END) AS alertasDisco,
SUM(CASE WHEN alertas.componente = 'REDE' THEN 1 ELSE 0 END) AS alertasRede
FROM 
alertas 
JOIN 
maquina 
ON 
alertas.fk_maquina = maquina.id
WHERE 
alertas.data_hora >= NOW() - INTERVAL 24 HOUR
AND
maquina.fk_empresa = ${empresa}
GROUP BY 
maquina.id, 
maquina.modelo, 
maquina.NumeroSerieProcessador;
`;

console.log("Executando a instrução SQL: \n" + query);
return database.executar(query);
}
module.exports = { 
  listaDeMaquinasComPoucoEspaco,
    maquinasComProblemas,
    listaDeMaquinasComPoucaRam,
    listaDeMaquinasCOmComponentesAlertas,
    listaDeMaquinasCOmComponentesCriticos,
    totalDeMaquinas,
    listaDeMaquinasProblemaRede,
    maquinasComPoucaRam,
    maquinasComProblemasDeRede,
    maquinasEmpresa,
    componentesEmEstadoCritico,
    listaDeAlertas,
    maquinasComPoucoEspaco,
    componentesEmEstadoAlerta,
    notificacao
 };
