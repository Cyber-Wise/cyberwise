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
listaDeMaquinasCOmComponentesCriticos,
listaDeMaquinasProblemaRede,
maquinasComPoucaRam,
listaDeAlertas,
maquinasComProblemasDeRede,
listaDeMaquinasCOmComponentesAlertas,
maquinasComPoucoEspaco,
listaDeMaquinasComPoucoEspaco,
maquinasComProblemas,
listaDeMaquinasComPoucaRam,
totalDeMaquinas,
maquinasEmpresa,
componentesEmEstadoCritico,
componentesEmEstadoAlerta,
notificacao
};
