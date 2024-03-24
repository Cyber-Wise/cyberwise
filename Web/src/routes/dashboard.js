var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");

router.post("/dadosDashboard", function (req, res) {
    dashboardController.dadosDashboard(req, res);
});

// //Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
// router.post("/cadastrar", function (req, res) {
//     empresaController.cadastrar(req, res);
// })

// router.get("/buscar", function (req, res) {
//     empresaController.buscarPorCnpj(req, res);
// });

// router.get("/buscar/:id", function (req, res) {
//   empresaController.buscarPorId(req, res);
// });

// router.get("/listar", function (req, res) {
//   empresaController.listar(req, res);
// });

module.exports = router;