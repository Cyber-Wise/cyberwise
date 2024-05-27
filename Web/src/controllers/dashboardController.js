var dashboardModel = require("../models/dashboardModel");

function dadosDashboard(req, res) {
  var empresa = req.body.empresa;

  dashboardModel.dadosDashboard(empresa).then((resultado) => {
    console.log(`\nResultados encontrados dado: ${resultado}`);
    res.status(200).json(resultado);
  });
}
function maquinasComProblemas(req, res) {
  var empresa = req.body.empresa;

  dashboardModel.maquinasComProblemas(empresa).then((resultado) => {
    console.log(`\nResultados encontrados: ${resultado}`);
    res.status(200).json(resultado);
  });
}
function notificacao(req, res) {
  var empresa = req.body.empresa;

  dashboardModel.notificacao(empresa).then((resultado) => {
    console.log(`\nResultados encontrados: ${resultado}`);
    res.status(200).json(resultado);
  });
}
function totalDeMaquinas(req, res) {
  var empresa = req.body.empresa;
  dashboardModel.totalDeMaquinas(empresa).then((resultado) => {
    console.log(`\nResultados encontrados: ${resultado}`);
    res.status(200).json(resultado);
  });
}

function componentesEmEstadoCritico(req, res) {
  var empresa = req.body.empresa;
  dashboardModel.componentesEmEstadoCritico(empresa).then((resultado) => {
    console.log(`\nResultados encontrados: ${resultado}`);
    res.status(200).json(resultado);
  });
}
function componentesEmEstadoAlerta(req, res) {
  var empresa = req.body.empresa;
  dashboardModel.componentesEmEstadoAlerta(empresa).then((resultado) => {
    console.log(`\nResultados encontrados: ${resultado}`);
    res.status(200).json(resultado);
  });
}
function maquinasComProblemasDeRede(req, res) {
  var empresa = req.body.empresa;
  dashboardModel.maquinasComProblemasDeRede(empresa).then((resultado) => {
    console.log(`\nResultados encontrados: ${resultado}`);
    res.status(200).json(resultado);
  });
}
function maquinasEmpresa(req, res) {
  var empresa = req.body.empresa;
  dashboardModel.maquinasEmpresa(empresa).then((resultado) => {
    console.log(`\nResultados encontrados: ${resultado}`);
    res.status(200).json(resultado);
  });
}
function maquinasComPoucoEspaco(req, res) {
  var empresa = req.body.empresa;
  dashboardModel.maquinasComPoucoEspaco(empresa).then((resultado) => {
    console.log(`\nResultados encontrados: ${resultado}`);
    res.status(200).json(resultado);
  });
}
function maquinasComPoucaRam(req, res) {
  var empresa = req.body.empresa;
  dashboardModel.maquinasComPoucaRam(empresa).then((resultado) => {
    console.log(`\nResultados encontrados: ${resultado}`);
    res.status(200).json(resultado);
  });
}
function listaDeMaquinasComPoucoEspaco(req, res) {
  var empresa = req.body.empresa;
  dashboardModel.listaDeMaquinasComPoucoEspaco(empresa).then((resultado) => {
    console.log(`\nResultados encontrados: ${resultado}`);
    res.status(200).json(resultado);
  });
}
function listaDeMaquinasComPoucaRam(req, res) {
  var empresa = req.body.empresa;
  dashboardModel.listaDeMaquinasComPoucaRam(empresa).then((resultado) => {
    console.log(`\nResultados encontrados: ${resultado}`);
    res.status(200).json(resultado);
  });
}
function listaDeMaquinasProblemaRede(req, res) {
  var empresa = req.body.empresa;
  dashboardModel.listaDeMaquinasProblemaRede(empresa).then((resultado) => {
    console.log(`\nResultados encontrados: ${resultado}`);
    res.status(200).json(resultado);
  });
}
function listaDeMaquinasCOmComponentesCriticos(req, res) {
  var empresa = req.body.empresa;
  dashboardModel.listaDeMaquinasCOmComponentesCriticos(empresa).then((resultado) => {
    console.log(`\nResultados encontrados: ${resultado}`);
    res.status(200).json(resultado);
  });
}
function listaDeMaquinasCOmComponentesAlertas(req, res) {
  var empresa = req.body.empresa;
  dashboardModel.listaDeMaquinasCOmComponentesAlertas(empresa).then((resultado) => {
    console.log(`\nResultados encontrados: ${resultado}`);
    res.status(200).json(resultado);
  });
}
function listaDeAlertas(req, res) {
  var empresa = req.body.empresa;
  dashboardModel.listaDeAlertas(empresa).then((resultado) => {
    console.log(`\nResultados encontrados: ${resultado}`);
    res.status(200).json(resultado);
  });
}
// dash especifica 
function informacoesAnalytics(req, res) {
  var empresa = req.body.empresa;
  var idMaquinaSelecionada = req.body.idMaquinaSelecionada;
  dashboardModel.informacoesAnalytics(empresa, idMaquinaSelecionada).then((resultado) => {
    console.log(`\nResultados encontrados: ${resultado}`);
    res.status(200).json(resultado);
  });
}
function dadosAtual(req, res) {

  var idMaquinaSelecionada = req.body.idMaquinaSelecionada;
  dashboardModel.dadosAtual(idMaquinaSelecionada).then((resultado) => {
    console.log(`\nResultados encontrados: ${resultado}`);
    res.status(200).json(resultado);
  });
}
module.exports = {
dadosDashboard,
listaDeMaquinasCOmComponentesCriticos,
listaDeMaquinasProblemaRede,
maquinasComPoucaRam,
listaDeAlertas,
maquinasComProblemasDeRede,
listaDeMaquinasCOmComponentesAlertas,
maquinasComPoucoEspaco,
listaDeMaquinasComPoucoEspaco,
maquinasComProblemas,
dadosAtual,
listaDeMaquinasComPoucaRam,
totalDeMaquinas,
maquinasEmpresa,
componentesEmEstadoCritico,
componentesEmEstadoAlerta,
notificacao,
informacoesAnalytics,
};
