var usuarioModel = require("../models/usuarioModel");
// var aquarioModel = require("../models/aquarioModel");

function autenticar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {

        usuarioModel.autenticar(email, senha)
            .then(
                function (resultadoAutenticar) {
                    console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`);

                    if (resultadoAutenticar.length == 1) {
                        console.log(resultadoAutenticar);

                                    res.json({
                                        id: resultadoAutenticar[0].id,
                                        email: resultadoAutenticar[0].email,
                                        nome: resultadoAutenticar[0].nome,
                                        senha: resultadoAutenticar[0].senha,
                                        empresa: resultadoAutenticar[0].fk_empresa,
                                        nome_empresa: resultadoAutenticar[0].nome_empresa,  
                                        cargo: resultadoAutenticar[0].nome_cargo,  
                                    });
                   
                    } else if (resultadoAutenticar.length == 0) {
                        res.status(403).send("Email e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function cadastrar(req, res) {
    var nomeEmpresa = req.body.nomeEmpresaServer;
    var cnpj = req.body.cnpjServer;
    var telefone = req.body.telefoneServer;

    if (nomeEmpresa == undefined) {
        res.status(400).send("Seu nome está undefined!");
    }else if (telefone == undefined) {
        res.status(400).send("Seu telefone está undefined!");
    } else if (cnpj == undefined) {
        res.status(400).send("Seu cnpj está undefined!");
    } else {
        // console.log('Nome adm usuario controler dentro do if ===>', nomeAdm);

        usuarioModel.cadastrarEmpresa(nomeEmpresa, telefone, cnpj)
        // ,
        // usuarioModel.buscarEmpresa()
            .then(
                function (resultado) {
                    res.json(resultado);
                    console.log(`Resultados: ${JSON.stringify(resultado)}`);
                    // console.log(`Resultados: ${JSON.stringify(result)}`);
                    // res.json({
                            // id: resultadoAutenticar[0].id,
                            // email: resultadoAutenticar[0].email,
                            // nome: resultadoAutenticar[0].nome,
                            // senha: resultadoAutenticar[0].senha,
                            // registros: result[0].total_registros,
                            // nome_empresa: resultadoAutenticar[0].nome_empresa,  
                        // });
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function buscarEmpresa(req, res) {
    usuarioModel.buscarEmpresa()
    .then(
        function (resultado) {
            console.log(`Resultados: ${JSON.stringify(resultado)}`);
           res.json({
                registros: resultado[0].total_registros
            });
        
        }
    ).catch(
        function (erro) {
            console.log(erro);
            console.log(
                "\nHouve um erro ao realizar o cadastro! Erro: ",
                erro.sqlMessage
            );
            res.status(500).json(erro.sqlMessage);
        }
    );
}


function cadastrarFuncionario(req, res) {
    var nomeAdm = req.body.nomeAdmServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;
    var idEmpresa = req.body.fkEmpresa;


    if (nomeAdm == undefined) {
        res.status(400).send("Nome da conta está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    }  
    else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else {
        console.log('Nome adm usuario controler dentro do if ===>', nomeAdm);

            usuarioModel.cadastrarFuncionario(nomeAdm, email, senha, idEmpresa),
            usuarioModel.cadastrarParametro(idEmpresa)
            .then(
                function (resultado) {
                    res.json(resultado);
                    // res.json({
                    //     id: resultadoAutenticar[0].id,
                    //     email: resultadoAutenticar[0].email,
                    //     nome: resultadoAutenticar[0].nome,
                    //     senha: resultadoAutenticar[0].senha,
                    //     empresa: resultadoAutenticar[0].fk_empresa,
                    //     nome_empresa: resultadoAutenticar[0].nome_empresa,  
                    // });
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    autenticar,
    cadastrar,
    cadastrarFuncionario,
    buscarEmpresa
    
}