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
function maquinasEmpresa(req, res) {
  var empresa = req.body.empresa;
  dashboardModel.maquinasEmpresa(empresa).then((resultado) => {
    console.log(`\nResultados encontrados: ${resultado}`);
    res.status(200).json(resultado);
  });
}
// function listar(req, res) {
//   empresaModel.listar().then((resultado) => {
//     res.status(200).json(resultado);
//   });
// }

// function buscarPorId(req, res) {
//   var id = req.params.id;

//   empresaModel.buscarPorId(id).then((resultado) => {
//     res.status(200).json(resultado);
//   });
// }

// function cadastrar(req, res) {
//   var cnpj = req.body.cnpj;
//   var razaoSocial = req.body.razaoSocial;

//   empresaModel.buscarPorCnpj(cnpj).then((resultado) => {
//     if (resultado.length > 0) {
//       res
//         .status(401)
//         .json({ mensagem: `a empresa com o cnpj ${cnpj} já existe` });
//     } else {
//       empresaModel.cadastrar(razaoSocial, cnpj).then((resultado) => {
//         res.status(201).json(resultado);
//       });
//     }
//   });
// }


module.exports = {
dadosDashboard,
maquinasComProblemas,
totalDeMaquinas,
maquinasEmpresa,
notificacao
};
