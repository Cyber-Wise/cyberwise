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
router.post("/totalDeMaquinas", function (req, res) {
    dashboardController.totalDeMaquinas(req, res);
});
router.post("/maquinasEmpresa", function (req, res) {
    dashboardController.maquinasEmpresa(req, res);
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