var perfilModel = require("../models/perfilModel");

function atualizarPerfil(req, res) {
   var nome = req.body.nomeServer;
   var email = req.body.emailServer;
   var senha = req.body.senhaServer;
   var id = req.body.idServer;

   perfilModel.atualizarPerfil(nome, email, senha, id).then(function (resultado){
   //   console.log(`\nResultados encontrados: ${resultado}`);
    console.log(`Resultados: ${JSON.stringify(resultado)}`)
     res.status(200).json(resultado);

   });
  }

function dadosPerfil(req, res) {
    var idUser = req.body.idUserServer;
  
    perfilModel.dadosPerfil(idUser).then(function (resultado){
    //   console.log(`\nResultados encontrados: ${resultado}`);
    console.log(`Resultados: ${JSON.stringify(resultado)}`)
      res.status(200).json(resultado);
 
    });
  }

function dadosFuncionarios1(req, res) {
    var empresa = req.body.empresaServer;
  
    perfilModel.dadosFuncionarios(empresa).then(function (resultado){
    //   console.log(`\nResultados encontrados: ${resultado}`);
    console.log(`Resultados: ${JSON.stringify(resultado)}`)
      res.status(200).json(resultado);
 
    });
  }

  function deletarFuncionario(req, res) {
    var funcionario = req.body.idFuncionarioServer;
  
    perfilModel.deletarFuncionario(funcionario).then(function (resultado){
    //   console.log(`\nResultados encontrados: ${resultado}`);
     console.log(`Resultados: ${JSON.stringify(resultado)}`)
      res.status(200).json(resultado);
      
    });
  }

  function cadastrarFuncionario(req, res){
    var nome = req.body.nomeServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;
    var idEmpresa = req.body.idEmpresaServer;
    var cargo = req.body.cargoServer;

    perfilModel.cadastrarFuncionario(nome, email, senha, idEmpresa, cargo).then(function (resultado){
    //   console.log(`\nResultados encontrados: ${resultado}`);
    console.log(`Resultados: ${JSON.stringify(resultado)}`)
    res.status(200).json(resultado);

    });
  }

  function atualizarFuncionario(req, res) {
    // var nome = req.body.nomeServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;
    var id = req.body.idServer;

    perfilModel.atualizarFuncionario(email, senha, id).then(function (resultado){
    //   console.log(`\nResultados encontrados: ${resultado}`);
     console.log(`Resultados: ${JSON.stringify(resultado)}`)
      res.status(200).json(resultado);

    });
  }

  function atualizarFuncionario1(req, res) {
    var cargo = req.body.cargoServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;
    var id = req.body.idServer;

    perfilModel.atualizarFuncionario1(email, senha, id, cargo).then(function (resultado){
    //   console.log(`\nResultados encontrados: ${resultado}`);
     console.log(`Resultados: ${JSON.stringify(resultado)}`)
      res.status(200).json(resultado);

    });
  }

  function dadosMaquinas(req, res) {
    var empresa = req.body.empresaServer;
  
    perfilModel.dadosMaquinas(empresa).then(function (resultado){
    console.log(`Resultados: ${JSON.stringify(resultado)}`)
      res.status(200).json(resultado);

    });
  }


  function buscarParametros(req, res) {
    var empresa = req.body.idEmpresa1Server;
  
    perfilModel.buscarParametros(empresa).then(function (resultado){
   
    console.log(`Resultados: ${JSON.stringify(resultado)}`)
      res.status(200).json(resultado);
      
    });
  }

  function cadastrarMaquina(req, res) {
    var modelo = req.body.modeloServer;
    var numeroSerie = req.body.numeroSerieServer;
    var idParametro = req.body.idParametroServer;
    var idEmpresa = req.body.idEmpresaServer;
  
    perfilModel.verificarNumeroSerie(numeroSerie).then(function (existe) {
        if (existe) {
            res.status(400).json({ message: "Número de série já cadastrado." });
        } else {
            perfilModel.cadastrarMaquina(modelo, numeroSerie, idParametro, idEmpresa).then(function (resultado) {
                console.log(`Resultados: ${JSON.stringify(resultado)}`)
                res.status(200).json(resultado);
            });
        }
    }).catch(function (error) {
        res.status(500).json({ error: error.message });
    });
}


  function atualizarMaquina(req, res) {
    var modelo = req.body.modeloServer;
    var id = req.body.idServer;

    perfilModel.atualizarMaquina(modelo, id).then(function (resultado){
    //   console.log(`\nResultados encontrados: ${resultado}`);
     console.log(`Resultados: ${JSON.stringify(resultado)}`)
      res.status(200).json(resultado);

    });
  }
  
  function deletarAlerta(req, res) {
    var Maquina = req.body.idMaquinaServer;
    
    perfilModel.deletarAlerta(Maquina).then(function (resultado){
      //   console.log(`\nResultados encontrados: ${resultado}`);
      console.log(`Resultados: ${JSON.stringify(resultado)}`)
      res.status(200).json(resultado);
      
    });
  }

  function deletarMonitoramento(req, res) {
    var Maquina = req.body.idMaquinaServer;
    
    perfilModel.deletarMonitoramento(Maquina).then(function (resultado){
      //   console.log(`\nResultados encontrados: ${resultado}`);
      console.log(`Resultados: ${JSON.stringify(resultado)}`)
      res.status(200).json(resultado);
      
    });
  }

  function deletarMaquina(req, res) {
    var Maquina = req.body.idMaquinaServer;
    
    perfilModel.deletarMaquina(Maquina).then(function (resultado){
      //   console.log(`\nResultados encontrados: ${resultado}`);
      console.log(`Resultados: ${JSON.stringify(resultado)}`)
      res.status(200).json(resultado);
      
    });
  }
  
  function cadastrarParametro(req, res) {
    var nome = req.body.nomeServer;
    var cpuCritico = req.body.cpuCriticoServer;
    var cpuAlerta = req.body.cpuAlertaServer;
    var ramCritico = req.body.ramCriticoServer;
    var ramAlerta = req.body.ramAlertaServer;
    var discoCritico = req.body.discoCriticoServer;
    var discoAlerta = req.body.discoAlertaServer;
    var idEmpresa = req.body.idEmpresaServer;

  
    perfilModel.cadastrarParametro(nome, cpuCritico, cpuAlerta, ramCritico, ramAlerta, discoCritico, discoAlerta, idEmpresa).then(function (resultado){
   
    console.log(`Resultados: ${JSON.stringify(resultado)}`)
      res.status(200).json(resultado);
      
    });
  }
  function inserirFoto(req, res) {
    var idUsuario = req.body.idUsuarioServer
    var fotobase64 = req.body.fotobase64Server
    var metadata = req.body.metadataServer

  
    perfilModel.inserirFoto(idUsuario, fotobase64, metadata).then(function (resultado){
   
    console.log(`Resultados: ${JSON.stringify(resultado)}`)
      res.status(200).json(resultado);
      
    });
  }
  function atualizarFoto(req, res) {
    var idUsuario = req.body.idUsuarioServer
    var fotobase64 = req.body.fotobase64Server
    var metadata = req.body.metadataServer

  
    perfilModel.atualizarFoto(idUsuario, fotobase64, metadata).then(function (resultado){
   
    console.log(`Resultados: ${JSON.stringify(resultado)}`)
      res.status(200).json(resultado);
      
    });
  }
  function pegarFoto(req, res) {
    var idUsuario = req.body.idUsuarioServer
  
    perfilModel.pegarFoto(idUsuario).then(function (resultado){
   
    console.log(`Resultados: ${JSON.stringify(resultado)}`)
      res.status(200).json(resultado);
      
    });
  }
  function listaParametros(req, res) {
    var idEmpesa = req.body.empresaServer;
  
    perfilModel.listaParametros(idEmpesa).then(function (resultado){
    console.log(`Resultados: ${JSON.stringify(resultado)}`)
      res.status(200).json(resultado);

    });
  }

  function updateParametro(req, res) {
    var idParametro = req.body.idParametroServer;
  
    perfilModel.updateParametro(idParametro).then(function (resultado){
    console.log(`Resultados: ${JSON.stringify(resultado)}`)
      res.status(200).json(resultado);

    });
  }

  function atualizarParametro(req, res) {
    var nome = req.body.nomeServer;
    var cpuCritico = req.body.cpuCriticoServer;
    var cpuAlerta = req.body.cpuAlertaServer;
    var ramCritico = req.body.ramCriticoServer;
    var ramAlerta = req.body.ramAlertaServer;
    var discoCritico = req.body.discoCriticoServer;
    var discoAlerta = req.body.discoAlertaServer;
    var idParametro = req.body.idParametroServer;

  
    perfilModel.atualizarParametro(nome, cpuCritico, cpuAlerta, ramCritico, ramAlerta, discoCritico, discoAlerta, idParametro).then(function (resultado){
   
    console.log(`Resultados: ${JSON.stringify(resultado)}`)
      res.status(200).json(resultado);
      
    });
  }

  function deletarParametro(req, res) {
    var idParametro = req.body.idParametroServer;
  
    perfilModel.deletarParametro(idParametro).then(function (resultado){
    console.log(`Resultados: ${JSON.stringify(resultado)}`)
      res.status(200).json(resultado);

    });
  }
  
module.exports = {
    dadosFuncionarios1,
    deletarFuncionario,
    atualizarFuncionario,
    atualizarFuncionario1,
    dadosMaquinas,
    deletarAlerta,
    atualizarFoto,
    buscarParametros,
    cadastrarFuncionario,
    cadastrarMaquina,
    deletarMaquina,
    dadosPerfil,
    atualizarPerfil,
    cadastrarParametro,
    inserirFoto,
    pegarFoto,
    atualizarMaquina,
    listaParametros,
    deletarMonitoramento,
    deletarParametro,
    updateParametro,
    atualizarParametro
}