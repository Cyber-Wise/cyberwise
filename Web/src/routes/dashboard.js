var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");

router.post("/dadosDashboard", function (req, res) {
    dashboardController.dadosDashboard(req, res);
});
router.post("/maquinasComProblemas", function (req, res) {
    dashboardController.maquinasComProblemas(req, res);
});
router.post("/notificacao", function (req, res) {
    dashboardController.notificacao(req, res);
});
router.post("/componentesEmEstadoCritico", function (req, res) {
    dashboardController.componentesEmEstadoCritico(req, res);
});
router.post("/componentesEmEstadoAlerta", function (req, res) {
    dashboardController.componentesEmEstadoAlerta(req, res);
});
router.post("/maquinasComProblemasDeRede", function (req, res) {
    dashboardController.maquinasComProblemasDeRede(req, res);
});
router.post("/maquinasComPoucoEspaco", function (req, res) {
    dashboardController.maquinasComPoucoEspaco(req, res);
});
router.post("/maquinasComPoucaRam", function (req, res) {
    dashboardController.maquinasComPoucaRam(req, res);
});
router.post("/listaDeMaquinasComPoucoEspaco", function (req, res) {
    dashboardController.listaDeMaquinasComPoucoEspaco(req, res);
});
router.post("/listaDeMaquinasComPoucaRam", function (req, res) {
    dashboardController.listaDeMaquinasComPoucaRam(req, res);
});
router.post("/listaDeMaquinasProblemaRede", function (req, res) {
    dashboardController.listaDeMaquinasProblemaRede(req, res);
});
router.post("/listaDeMaquinasCOmComponentesCriticos", function (req, res) {
    dashboardController.listaDeMaquinasCOmComponentesCriticos(req, res);
});
router.post("/listaDeMaquinasCOmComponentesAlertas", function (req, res) {
    dashboardController.listaDeMaquinasCOmComponentesAlertas(req, res);
});
router.post("/listaDeAlertas", function (req, res) {
    dashboardController.listaDeAlertas(req, res);
});
router.post("/totalDeMaquinas", function (req, res) {
    dashboardController.totalDeMaquinas(req, res);
});
router.post("/maquinasEmpresa", function (req, res) {
    dashboardController.maquinasEmpresa(req, res);
});
//dash especifica
router.post("/informacoesAnalytics", function (req, res) {
    dashboardController.informacoesAnalytics(req, res);
});
router.post("/dadosAtual", function (req, res) {
    dashboardController.dadosAtual(req, res);
});


module.exports = router;