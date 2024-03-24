var dashboardModel = require("../models/dashboardModel");

function dadosDashboard(req, res) {
  var empresa = req.body.empresaServer;

  dashboardModel.dadosDashboard(empresa).then((resultado) => {
    console.log(`\nResultados encontrados: ${resultado}`);
    res.status(200).json(resultado);
    
    // res.json({
        // id: resultadoAutenticar[0].id,
        // email: resultadoAutenticar[0].email,
        // nome: resultadoAutenticar[0].nome,
        // senha: resultadoAutenticar[0].senha,
        // empresa: resultadoAutenticar[0].fk_empresa,
       
    // });
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
dadosDashboard
};
