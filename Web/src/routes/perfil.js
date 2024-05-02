var express = require("express");
var router = express.Router();

var perfilController = require("../controllers/perfilController");

router.post("/atualizarPerfil", function (req, res) {
    perfilController.atualizarPerfil(req, res);
});

router.post("/dadosPerfil", function (req, res) {
    perfilController.dadosPerfil(req, res);
});

router.post("/dadosFuncionarios1", function (req, res) {
    perfilController.dadosFuncionarios1(req, res);
});

router.post("/deletarFuncionario", function (req, res) {
    perfilController.deletarFuncionario(req, res);
});

router.post("/atualizarFuncionario", function (req, res) {
    perfilController.atualizarFuncionario(req, res);
});

router.post("/dadosMaquinas", function (req, res) {
    perfilController.dadosMaquinas(req, res);
});

router.post("/buscarParametros", function (req, res) {
    perfilController.buscarParametros(req, res);
});

router.post("/cadastrarFuncionario", function (req, res) {
    perfilController.cadastrarFuncionario(req, res);
});

router.post("/cadastrarMaquina", function (req, res) {
    perfilController.cadastrarMaquina(req, res);
});

router.post("/atualizarMaquina", function (req, res) {
    perfilController.atualizarMaquina(req, res);
});

router.post("/deletarMaquina", function (req, res) {
    perfilController.deletarMaquina(req, res);
});

router.post("/cadastrarParametro", function (req, res) {
    perfilController.cadastrarParametro(req, res);
});


module.exports = router;