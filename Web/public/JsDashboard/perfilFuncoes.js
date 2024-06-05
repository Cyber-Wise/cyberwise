nomeDaEmpresa.innerHTML = sessionStorage.NomeEmpresa;


function dadosPerfil(){
   var idUser = sessionStorage.ID_USUARIO;

   fetch("/perfil/dadosPerfil", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        idUserServer: idUser,
    })
}).then(function (resposta) {
    console.log("ESTOU NO THEN DO PERFIL!")

    if (resposta.ok) {
        resposta.json().then(json => {
            console.log(JSON.stringify(json));
            
            var nome = json[0].nome;
            var emailU = json[0].email;
            var senha = json[0].senha;

            nomeDaConta.innerHTML = nome;
            nomePerfil.innerHTML = nome;
            email.innerHTML = emailU;

            inputNome.value = nome;
            inputEmail.value = emailU;
            inputSenha.value = senha;
                    });
                 } 

            })

}

function salvarPerfil(){
            var nome = inputNome.value;
            var email = inputEmail.value;
            var senha = inputSenha.value;
            var id = sessionStorage.ID_USUARIO;

            
        fetch("/perfil/atualizarPerfil", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                nomeServer: nome,
                emailServer: email,
                senhaServer: senha,
                idServer: id,
                
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO PERFIL!")

            if (resposta.ok) {
                const Toast = Swal.mixin({
                    toast: true,
                    position: "top-end",
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.onmouseenter = Swal.stopTimer;
                        toast.onmouseleave = Swal.resumeTimer;
                    }
                    });
                    Toast.fire({
                        title: "Perfil atualizado com sucesso!",
                    icon: "success",
                    color: "#fff",
                    background: "#011126",
                    iconColor : "green",
                    });

                resposta.json().then(json => {
                   
                    setTimeout(function () {
                        window.location = "./perfil.html";
                    }, 1000);

                        });
                    } 

                })
}

function funcionarios() {
    var idEmpresa = sessionStorage.empresa;

    fetch("/perfil/dadosFuncionarios1", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            empresaServer: idEmpresa,
        })
    }).then(function (resposta) {
        console.log("ESTOU NO THEN DO PERFIL!")
  
        if (resposta.ok) {

            resposta.json().then(json => {
                
            const ul = document.getElementById('listaFuncionarios');

                json.forEach((funcionario) => {
                  var nome = funcionario.nome;
                  var email =  funcionario.email;
                  var idFuncionario =  funcionario.id;
                  var senha =  funcionario.senha;
                  var fkCargo = funcionario.fk_cargo;
                  var cargo;

                switch(fkCargo){
                    case 1:
                        cargo = 'Administrador';
                        break;
                    case 2:
                        cargo = 'Gerente';
                        break;
                    case 3:
                        cargo = 'Funcionário'
                        break;

                }

                const li = document.createElement('li');
                
                if(fkCargo != 1){
                    li.innerHTML = `
                    <p class="funcionarioNome">${nome}</p>
                    <p class="funcionarioEmail">${email}</p>
                    <p class="funcionarioCargo">${cargo}</p>
                    <div class="botaosGerenciar">
                        <button class="removeFunc"><i class='bx bx-trash-alt' onclick="deletar(${idFuncionario})"></i></button>
                        <button class="editFunc" onclick="abrirEditar()"><i class='bx bxs-edit-alt' onclick="editarFuncionario1(${idFuncionario}, '${nome}', '${email}', '${senha}', ${fkCargo})"></i></button>
                    </div>
                    `;
                
                    ul.appendChild(li);}
                            });
                        });
                     } 

                })
}

    function deletar(idFuncionario){
        
    fetch("/perfil/deletarFuncionario", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            idFuncionarioServer: idFuncionario,
         
        })
    }).then(function (resposta) {
        console.log("ESTOU NO THEN DO PERFIL!")
       const Toast = Swal.mixin({
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.onmouseenter = Swal.stopTimer;
                    toast.onmouseleave = Swal.resumeTimer;
                }
                });
                Toast.fire({
                    title: "Funcionário deletado com sucesso!",
                icon: "success",
                color: "#fff",
                background: "#011126",
                iconColor : "green",
                });
        if (resposta.ok) {
            

            setTimeout(function () {
                window.location = "./perfil.html";
            }, 1000);
            resposta.json().then(json => {
  
            }
        );

        } 

    })

    }

    function editarFuncionario1(id, nome, email, senha, fkCargo){
        nomeEditarFuncionario.innerHTML = nome;
        emailEditarFuncionario.value = email;
        senhaEditarFuncionario.value = senha;
        sessionStorage.idFuncionario = id;

        selectCargo.innerHTML = ` <p>Cargo:</p>
        <select name="" id="cargoFuncionario222">
            <option value="0">default</option>
            <option value="3">Funcionário</option>
            <option value="2">Gerente</option>
        </select>`;

        if(fkCargo == 3){
            selectCargo.innerHTML = ` 
            <p>Cargo:</p>
            <select name="" id="cargoFuncionario222">
                <option value="3">Funcionário</option>
                <option value="2">Gerente</option>
            </select>`
        }else{
            selectCargo.style.display = "none";
        }
     
    }

    function cadastrarFuncionario(){
        var nome = nomeFuncionario.value;
        var email = emailFuncionario.value;
        var senha = senhaFuncionario.value;
        var confirmarSenha = confirmarSenhaFuncionario.value;
        var idEmpresa = sessionStorage.empresa;
        var cargo = cargoFuncionario.value;

    
    if (
        nome == "" ||
        email == "" ||
        senha == "" ||
        confirmarSenha == ""
      ) {
        const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.onmouseenter = Swal.stopTimer;
                toast.onmouseleave = Swal.resumeTimer;
            }
            });
            Toast.fire({
                title: "Erro",
            text: "Preencha todos os campos!",
            icon: "error",
            color: "#fff",
            background: "#011126",
            iconColor : "red",
            });
            return false;
      }
        else if(senha != confirmarSenha){
            const Toast = Swal.mixin({
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.onmouseenter = Swal.stopTimer;
                    toast.onmouseleave = Swal.resumeTimer;
                }
                });
                Toast.fire({
                    title: "Senha",
                text: "As senhas não são as mesmas!",
                icon: "error",
                color: "#fff",
                background: "#011126",
                iconColor : "red",
                });
            return false;
        } else if(cargo == 0){
            const Toast = Swal.mixin({
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.onmouseenter = Swal.stopTimer;
                    toast.onmouseleave = Swal.resumeTimer;
                }
                });
                Toast.fire({
                    title: "Cargp",
                text: "Selecione um cargo!",
                icon: "error",
                color: "#fff",
                background: "#011126",
                iconColor : "red",
                });
        }
        else{

            fetch("/perfil/cadastrarFuncionario", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    nomeServer: nome,
                    emailServer: email,
                    senhaServer: senha,
                    idEmpresaServer: idEmpresa,
                    cargoServer : cargo
                   
                })
            }).then(function (resposta) {
                console.log("ESTOU NO THEN DO PERFIL!")
               
                if (resposta.ok) {
                   const Toast = Swal.mixin({
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.onmouseenter = Swal.stopTimer;
                    toast.onmouseleave = Swal.resumeTimer;
                }
                });
                        Toast.fire({
                        title: "Cadastro de funcionário realizado!",
                        icon: "success",
                        color: "#fff",
                        background: "#011126",
                        iconColor : "green",
                        });
        
                    resposta.json().then(json => {
                        setTimeout(function () {
                            window.location = "./perfil.html";
                        }, 1000);
                        
                                });
                             } 
        
                        })

    }

    }

    function atualizarFuncionario(){
       var email = emailEditarFuncionario.value;
       var senha = senhaEditarFuncionario.value;
       var id = sessionStorage.idFuncionario;

       if(cargoFuncionario222.value != undefined){
        var cargo = cargoFuncionario222.value;
       } else{

        cargo = cargoFuncionario.value;
       }


       if(cargo == 2){

        fetch("/perfil/atualizarFuncionario1", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                emailServer: email,
                senhaServer: senha,
                idServer: id,
                cargoServer: cargo,
               
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO PERFIL!")
           
            if (resposta.ok) {
                const Toast = Swal.mixin({
                    toast: true,
                    position: "top-end",
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.onmouseenter = Swal.stopTimer;
                        toast.onmouseleave = Swal.resumeTimer;
                    }
                    });
                    Toast.fire({
                        title: "Funcionário atualizado com sucesso",
                    icon: "success",
                    color: "#fff",
                    background: "#011126",
                    iconColor : "green",
                    });
    
                resposta.json().then(json => {
                    setTimeout(function () {
                        window.location = "./perfil.html";
                    }, 1000);
                    
    
                            });
                         } 
    
                    })
       }
 else{
    fetch("/perfil/atualizarFuncionario", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            // nomeServer: nome,
            emailServer: email,
            senhaServer: senha,
            idServer: id,
           
        })
    }).then(function (resposta) {
        console.log("ESTOU NO THEN DO PERFIL!")
       
        if (resposta.ok) {
            const Toast = Swal.mixin({
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.onmouseenter = Swal.stopTimer;
                    toast.onmouseleave = Swal.resumeTimer;
                }
                });
                Toast.fire({
                    title: "Funcionário atualizado com sucesso",
                icon: "success",
                color: "#fff",
                background: "#011126",
                iconColor : "green",
                });

            resposta.json().then(json => {
                setTimeout(function () {
                    window.location = "./perfil.html";
                }, 1000);
                

                        });
                     } 

                })
            }

    }

    function maquinas() {
        var idEmpresa = sessionStorage.empresa;
    
        fetch("/perfil/dadosMaquinas", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                empresaServer: idEmpresa,
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO PERFIL!")
      
            if (resposta.ok) {
    
                resposta.json().then(json => {
                    
                const ul = document.getElementById('listaMaquinas');
    
         
      
                    json.forEach((maquina) => {
                      var modelo = maquina.modelo;
                      var numeroSerie =  maquina.numSerie;
                      var idmaquina =  maquina.id;
                       
    
                    const li = document.createElement('li');
                    
                    li.innerHTML = `
                    <i class='bx bx-laptop listaPCtop'></i>
                  <p class="funcionarioEmail maquinanome" id="maquinaNome">${modelo} : ${numeroSerie}</p>
                  <div class="botaosGerenciar">
                      <button><i class='bx bx-trash-alt' onclick="deletarMaquina(${idmaquina})"></i></button>
                      <button onclick="abrirEditar2()"><i class='bx bxs-edit-alt' onclick="editarMaquina1(${idmaquina}, '${modelo}', ${numeroSerie})"></i></button>
                  </div>
                    `;
                    ul.appendChild(li);
                                });
                            });
                         } 
    
                    })
    }

    var parametro;

    function buscarParametros(){
        var idEmpresa1 = sessionStorage.empresa;
        // console.log(idEmpresa1, "buscar parametro");

        fetch("/perfil/buscarParametros", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idEmpresa1Server: idEmpresa1,
             
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO PERFIL!")
            
        if (resposta.ok) {
            // console.log(resposta);

            resposta.json().then(json => {
                // console.log('PARAMETROS ====>',json);
                // console.log(JSON.stringify(json));
                
                if(Object.keys(json).length === 0){
                        parametro = 0;
                }
               
                var selectElement = document.getElementById("selectParametros");
              
                json.forEach(function(item) {[]
                    var optionText = item.nome;
                    var optionValue =  item.id;
                    var optionElement = document.createElement("option");

                    optionElement.textContent = optionText;
                    optionElement.value = optionValue; 
                    selectElement.appendChild(optionElement);
                });
               
                        });
                     } 
        })
    }

    function cadastrarMaquina(){
        var modelo = modeloCadastrarPc.value;
        var numeroSerie = numSerieCadastrarPc.value;
        // var Parametro = selectParametros.value;
        var idEmpresa = sessionStorage.empresa;
        var idParametro = selectParametros.value;
    
     if (
        modelo == "" ||
        numeroSerie == "" 
      ) {
        const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.onmouseenter = Swal.stopTimer;
                toast.onmouseleave = Swal.resumeTimer;
            }
            });
            Toast.fire({
                title: "Erro",
            text: "Preencha todos os campos!",
            icon: "error",
            color: "#fff",
            background: "#011126",
            iconColor : "red",
            });
            return false;
      } else if (
            idParametro == "default") 
        {
        const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.onmouseenter = Swal.stopTimer;
                toast.onmouseleave = Swal.resumeTimer;
            }
            });
            Toast.fire({
                title: "Erro",
            text: "Escolha um parametro!",
            icon: "error",
            color: "#fff",
            background: "#011126",
            iconColor : "red",
            });
            return false;
      }
      else{
        fetch("/perfil/cadastrarMaquina", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                modeloServer: modelo,
                numeroSerieServer: numeroSerie,
                idParametroServer: idParametro,
                idEmpresaServer: idEmpresa,
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO CADASTRAR MAQUINAS!")
           
            if (resposta.ok) {
                const Toast = Swal.mixin({
                    toast: true,
                    position: "top-end",
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.onmouseenter = Swal.stopTimer;
                        toast.onmouseleave = Swal.resumeTimer;
                    }
                    });
                    Toast.fire({
                        title: "Cadastro de máquina realizado!",
                    icon: "success",
                    color: "#fff",
                    background: "#011126",
                    iconColor : "green",
                    });
                // console.log(resposta);
    
                resposta.json().then(json => {
                    // console.log(json);
                    // console.log(JSON.stringify(json));
    
                    setTimeout(function () {
                        window.location = "./perfil.html";
                    }, 1000);
                    
                            });
                         } else {
                             exibirMensagemErro("Não é possível cadastrar máquinas com o mesmo código de acesso.");
                         }
    
                    })
    }
    

    function exibirMensagemErro(mensagem) {
        var mensagemErro = document.getElementById("mensagemErro");
        mensagemErro.textContent = mensagem;
        mensagemErro.style.display = "block";
      }

    }

    function editarMaquina1(id, modelo, numeroSerie){
           // console.log(nome, email, senha)
        // nomeEditarFuncionario.innerHTML = nome;
        modeloEditar.value = modelo;
        numeroSerieEditar.innerHTML = numeroSerie;
        sessionStorage.idMaquina = id;

    }

    function atualizarMaquina(){
        var modelo = modeloEditar.value;
        var parametro = selectParametro.value;
        var id = sessionStorage.idMaquina;
        // console.log(modelo, 'atualizar funcionario')
        
     fetch("/perfil/atualizarMaquina", {
         method: "POST",
         headers: {
             "Content-Type": "application/json"
         },
         body: JSON.stringify({
             // nomeServer: nome,
             modeloServer: modelo,
            //  senhaServer: senha,
             idServer: id,
            
         })
     }).then(function (resposta) {
         console.log("ESTOU NO THEN DO PERFIL!")
        
         if (resposta.ok) {
            const Toast = Swal.mixin({
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.onmouseenter = Swal.stopTimer;
                    toast.onmouseleave = Swal.resumeTimer;
                }
                });
                Toast.fire({
                    title: "Maquina realizado com sucesso!",
                icon: "success",
                color: "#fff",
                background: "#011126",
                iconColor : "green",
                });
             console.log(resposta);
 
             resposta.json().then(json => {
                //  console.log(json);
                //  console.log(JSON.stringify(json));
                 setTimeout(function () {
                     window.location = "./perfil.html";
                 }, 1000);
                 
 
                         });
                      } 
 
                 })
 
    }

    // function buscarParametros1(){
    //     var idEmpresa1 = sessionStorage.empresa;
    //     // console.log(idEmpresa1, "buscar parametro");

    //     fetch("/perfil/buscarParametros", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify({
    //             idEmpresa1Server: idEmpresa1,
             
    //         })
    //     }).then(function (resposta) {
    //         console.log("ESTOU NO THEN DO PERFIL!")
            
    //     if (resposta.ok) {
    //         console.log(resposta);

    //         resposta.json().then(json => {
    //             console.log('PARAMETROS ====>',json);
    //             console.log(JSON.stringify(json));
                
    //             if(Object.keys(json).length === 0){
    //                     console.log('VAZIO')
    //                     parametro = 0;
    //             }
    //             var selectElement = document.getElementById("selectParametros");
              
    //             json.forEach(function(item) {[]
    //                 var optionText = item.nome;
    //                 var optionValue =  item.id;
    //                 var optionElement = document.createElement("option");

    //                 optionElement.textContent = optionText;
    //                 optionElement.value = optionValue; 
    //                 selectElement.appendChild(optionElement);
    //             });
               
    //                     });
    //                  } 
    //     })
    // }

    function deletarMaquina(idMaquina){

        fetch("/perfil/deletarMonitoramento", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idMaquinaServer: idMaquina,
            
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO PERFIL!")
        
            if (resposta.ok) {

                deletarMaquina1();

                console.log(resposta);
    
                resposta.json().then(json => {
                    console.log(json);
                    console.log(JSON.stringify(json));
    
                }
            );
    
            } 
    
        })



       function deletarMaquina1(){ 
        fetch("/perfil/deletarMaquina", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    idMaquinaServer: idMaquina,
                
                })
            }).then(function (resposta) {
                console.log("ESTOU NO THEN DO PERFIL!")
            
                if (resposta.ok) {
                    const Toast = Swal.mixin({
                        toast: true,
                        position: "top-end",
                        showConfirmButton: false,
                        timer: 3000,
                        timerProgressBar: true,
                        didOpen: (toast) => {
                            toast.onmouseenter = Swal.stopTimer;
                            toast.onmouseleave = Swal.resumeTimer;
                        }
                        });
                        Toast.fire({
                            title: "Máquina deletada com sucesso",
                        icon: "success",
                        color: "#fff",
                        background: "#011126",
                        iconColor : "green",
                        });
                    // console.log(resposta);
        
                    setTimeout(function () {
                        window.location = "./perfil.html";
                    }, 1000);
                    resposta.json().then(json => {
                        // console.log(json);
                        // console.log(JSON.stringify(json));
        
                    }
                );
        
                } 
        
            })}
    }

    function cadastrarParametro(){

        var nome = nomeParametro.value;
        var cpuCritico = cpuCritico1.value;
        var cpuAlerta = cpuAlerta1.value;
        var ramCritico = ramCritico1.value;
        var ramAlerta = ramAlerta1.value;
        var discoCritico = discoCritico1.value;
        var discoAlerta = discoAlerta1.value;
        var idEmpresa = sessionStorage.empresa;
    
    if (
        nome == "" ||
        cpuCritico == "" ||
        cpuAlerta == "" ||
        ramCritico == "" ||
        ramAlerta == "" ||
        discoCritico == "" ||
        discoAlerta == "" 
      ) {
        const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.onmouseenter = Swal.stopTimer;
                toast.onmouseleave = Swal.resumeTimer;
            }
            });
            Toast.fire({
                title: "Erro",
            text: "Preencha todos os campos!",
            icon: "error",
            color: "#fff",
            background: "#011126",
            iconColor : "red",
            });
            return false;
      } else if(nomeParametro.value.length >= 30){

        const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.onmouseenter = Swal.stopTimer;
                toast.onmouseleave = Swal.resumeTimer;
            }
            });
            Toast.fire({
                title: "Erro",
            text: "Preencha o nome corretamente!",
            icon: "error",
            color: "#fff",
            background: "#011126",
            iconColor : "red",
            });
      }else if(
        (cpuCritico.length ||
        cpuAlerta.length || 
        ramCritico.length || 
        ramAlerta.length || 
        discoCritico.length || 
        discoAlerta.length) >= 3
     ){
        const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.onmouseenter = Swal.stopTimer;
                toast.onmouseleave = Swal.resumeTimer;
            }
            });
            Toast.fire({
                title: "Erro",
            text: "Insira parâmetros válidos!",
            icon: "error",
            color: "#fff",
            background: "#011126",
            iconColor : "red",
            });
            
            return false;

      }
        else{
            fetch("/perfil/cadastrarParametro", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    nomeServer: nome,
                    cpuCriticoServer: cpuCritico,
                    cpuAlertaServer: cpuAlerta,
                    ramCriticoServer: ramCritico,
                    ramAlertaServer: ramAlerta,
                    discoCriticoServer: discoCritico,
                    discoAlertaServer: discoAlerta,
                    idEmpresaServer: idEmpresa,
                })
            }).then(function (resposta) {
                console.log("ESTOU NO THEN DO PERFIL!")
                
                if (resposta.ok) {
                    const Toast = Swal.mixin({
                        toast: true,
                        position: "top-end",
                        showConfirmButton: false,
                        timer: 3000,
                        timerProgressBar: true,
                        didOpen: (toast) => {
                            toast.onmouseenter = Swal.stopTimer;
                            toast.onmouseleave = Swal.resumeTimer;
                        }
                        });
                        Toast.fire({
                            title: "Cadastro de parâmetro realizado!",
                        icon: "success",
                        color: "#fff",
                        background: "#011126",
                        iconColor : "green",
                        });
                    console.log(resposta);
        
                    resposta.json().then(json => {
                        // console.log(json);
                        // console.log(JSON.stringify(json));

                        setTimeout(function () {
                            window.location = "./perfil.html";
                        }, 1000);
                        
                                });
                             } 
        
                        })

    }

    }

    function atualizarParametro(){
        var nome = nomeParametroEditar.value;
        var cpuCritico = cpuCriticoEditar.value;
        var cpuAlerta = cpuAlertaEditar.value;
        var ramCritico = ramCriticoEditar.value;
        var ramAlerta = ramAlertaEditar.value;
        var discoCritico = discoCriticoEditar.value;
        var discoAlerta = discoAlertaEditar.value;
        // var idEmpresa = sessionStorage.empresa;
    
        if (
            nome == "" ||
            cpuCritico == "" ||
            cpuAlerta == "" ||
            ramCritico == "" ||
            ramAlerta == "" ||
            discoCritico == "" ||
            discoAlerta == "" 
          ) {
            const Toast = Swal.mixin({
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.onmouseenter = Swal.stopTimer;
                    toast.onmouseleave = Swal.resumeTimer;
                }
                });
                Toast.fire({
                    title: "Erro",
                text: "Preencha todos os campos!",
                icon: "error",
                color: "#fff",
                background: "#011126",
                iconColor : "red",
                });
                return false;
          } else if(nomeParametro.value.length >= 30){
    
            const Toast = Swal.mixin({
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.onmouseenter = Swal.stopTimer;
                    toast.onmouseleave = Swal.resumeTimer;
                }
                });
                Toast.fire({
                    title: "Erro",
                text: "Preencha o nome corretamente!",
                icon: "error",
                color: "#fff",
                background: "#011126",
                iconColor : "red",
                });
          }else if(
            (cpuCritico.length ||
            cpuAlerta.length || 
            ramCritico.length || 
            ramAlerta.length || 
            discoCritico.length || 
            discoAlerta.length) >= 3
         ){
            const Toast = Swal.mixin({
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.onmouseenter = Swal.stopTimer;
                    toast.onmouseleave = Swal.resumeTimer;
                }
                });
                Toast.fire({
                    title: "Erro",
                text: "Insira parâmetros válidos!",
                icon: "error",
                color: "#fff",
                background: "#011126",
                iconColor : "red",
                });
                
                return false;
    
          }
 
       else{ 
     fetch("/perfil/atualizarParametro", {
         method: "POST",
         headers: {
             "Content-Type": "application/json"
         },
         body: JSON.stringify({
            nomeServer: nome,
            cpuCriticoServer: cpuCritico,
            cpuAlertaServer: cpuAlerta,
            ramCriticoServer: ramCritico,
            ramAlertaServer: ramAlerta,
            discoCriticoServer: discoCritico,
            discoAlertaServer: discoAlerta,
            idParametroServer: idParametro,
            
         })
     }).then(function (resposta) {
         console.log("ESTOU NO THEN DO PERFIL!")
        
         if (resposta.ok) {
            const Toast = Swal.mixin({
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.onmouseenter = Swal.stopTimer;
                    toast.onmouseleave = Swal.resumeTimer;
                }
                });
                Toast.fire({
                    title: "Parâmetro atualizado com sucesso!",
                icon: "success",
                color: "#fff",
                background: "#011126",
                iconColor : "green",
                });
             console.log(resposta);
 
             resposta.json().then(json => {
                //  console.log(json);
                //  console.log(JSON.stringify(json));
                 setTimeout(function () {
                     window.location = "./perfil.html";
                 }, 1000);
                 
 
                         });
                      } 
 
                 })
                }
 
    }

    function listaParametros() {
        var idEmpresa = sessionStorage.empresa;
    
        fetch("/perfil/listaParametros", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                empresaServer: idEmpresa,
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO PERFIL!")
      
            if (resposta.ok) {
                console.log(resposta);
    
                resposta.json().then(json => {
                    // console.log('console ====> ',json);
                    // console.log(JSON.stringify(json));
                    
                const ul = document.getElementById('listaParametros');
    
         
                    json.forEach((parametro) => {
                      var idParametro = parametro.id;
                      var nome = parametro.nome;
                      var ramAlerta = parametro.alertaRAM;
                      var ramCritico = parametro.criticoRAM;
                      var cpuAlerta = parametro.alertaCPU;
                      var cpuCritico = parametro.criticoCPU;
                      var discoAlerta = parametro.alertaDISCO;
                      var discoCritico = parametro.criticoDISCO;
                       
    
                    const li = document.createElement('li');
                    if(nome == "Parâmetro padrão"){
                        //  console.log('parametro base foi');
                    li.innerHTML = `
                    <p class="funcionarioNome nomeParametro">${nome}</p> 
                  <div class="separacaoParametro">
                      <p>RAM alerta: ${ramAlerta}</p>
                      <p>RAM critico: ${ramCritico}</p>
                  </div>
                  <div class="separacaoParametro">
                      <p>CPU alerta: ${cpuAlerta}</p>
                      <p>CPU critico: ${cpuCritico}</p>
                  </div>
                  <div class="separacaoParametro">
                      <p>DISCO alerta: ${discoAlerta}</p>
                      <p>DISCO critico: ${discoCritico}</p>
                  </div>
                    <div class="botaosGerenciar">
                        
                    `;

                    }
                    else{
                        li.innerHTML = `
                        <p class="funcionarioNome nomeParametro">${nome}</p> 
                      <div class="separacaoParametro">
                          <p>RAM alerta: ${ramAlerta}</p>
                          <p>RAM critico: ${ramCritico}</p>
                      </div>
                      <div class="separacaoParametro">
                          <p>CPU alerta: ${cpuAlerta}</p>
                          <p>CPU critico: ${cpuCritico}</p>
                      </div>
                      <div class="separacaoParametro">
                          <p>DISCO alerta: ${discoAlerta}</p>
                          <p>DISCO critico: ${discoCritico}</p>        
                      </div>
                        <div class="botaosGerenciar">
                            <button><i class='bx bx-trash-alt' onclick="deletarParametro(${idParametro})"></i></button>
                            <button onclick="abrirEditar3()"><i class='bx bxs-edit-alt' onclick="editarParametro1('${nome}', ${cpuCritico}, ${cpuAlerta}, ${ramCritico}, ${ramAlerta}, ${discoCritico}, ${discoAlerta}, ${idParametro})"></i></button>
                        `;
                    }
                    ul.appendChild(li);
                                });
                            });
                         } 
    
                    })
    }
        var idParametro;
    function editarParametro1(nome, cpuCritico, cpuAlerta, ramCritico, ramAlerta, discoCritico, discoAlerta, idParametro1){
         nomeParametroEditar.value = nome;
         cpuCriticoEditar.value = cpuCritico;
         cpuAlertaEditar.value = cpuAlerta;
         ramCriticoEditar.value = ramCritico;
         ramAlertaEditar.value = ramAlerta;
         discoCriticoEditar.value = discoCritico;
         discoAlertaEditar.value = discoAlerta;
         idParametro = idParametro1
        //  sessionStorage.empresa;

    }


    function deletarParametro(idParametro){


        fetch("/perfil/updateParametro", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idParametroServer: idParametro,

            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO PERFIL!")

            if (resposta.ok) {
              
                delParametro();
                console.log(resposta);
    
                
                resposta.json().then(json => {
                    console.log(json);
                    console.log(JSON.stringify(json));
      
                }
            );
    
            } 
    
        })

        function delParametro(){
            fetch("/perfil/deletarParametro", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idParametroServer: idParametro,

            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO PERFIL!")

            if (resposta.ok) {
                const Toast = Swal.mixin({
                    toast: true,
                    position: "top-end",
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.onmouseenter = Swal.stopTimer;
                        toast.onmouseleave = Swal.resumeTimer;
                    }
                    });
                    Toast.fire({
                        title: "Sucesso",
                        text: "Parâmetro deletado com sucesso",
                    icon: "success",
                    color: "#fff",
                    background: "#011126",
                    iconColor : "green",
                    });
                console.log(resposta);
    
                setTimeout(function () {
                    window.location = "./perfil.html";
                }, 1000);
                resposta.json().then(json => {
                    // console.log(json);
                    // console.log(JSON.stringify(json));
      
                }
            );
    
            } 
    
        })
    }
    }


function filtrar(inputb, ul1, tagName){
        var input,
        filter,
        ul,
        li,
        a,
        i,
        txtvalue,
        count = 0;

        console.log(inputb, ul1, tagName)

        input = document.getElementById(inputb);
        ul = document.getElementById(ul1);

        filter = input.value.toUpperCase();

        li = ul.getElementsByTagName("li");


        for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByClassName(tagName)[0];

        txtvalue = a.textContent || a.innerText;

        if(txtvalue.toLocaleUpperCase().indexOf(filter) > -1){
        li[i].style.display = "";

        count++;

        }else{
            li[i].style.display = "none";
        }

        }
        if(count === 0) ul.style.display = "none";
        else ul.style.display = "block";
}

document.addEventListener("DOMContentLoaded", function() {
    var uploadInput = document.getElementById('uploadInput');
    var image = document.getElementById('perfilImgModal'); 

    uploadInput.addEventListener('change', function(event) {
        var file = event.target.files[0];
        if(!file.type.startsWith("image/"))
            {
                const Toast = Swal.mixin({
                    toast: true,
                    position: "top-end",
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.onmouseenter = Swal.stopTimer;
                        toast.onmouseleave = Swal.resumeTimer;
                    }
                    });
                    Toast.fire({
                        title: "Erro",
                        text: "Tipo de imagem inválido!",
                    icon: "error",
                    color: "#fff",
                    background: "#011126",
                    iconColor : "red",
                    });
                return;
            }
            
        var previewFile = URL.createObjectURL(file);
        image.src = previewFile;
    });
});


const converterfotoBase64 = (file) => {
    const fileReader = new FileReader();

    return new Promise((resolve, reject) => {
      fileReader.readAsDataURL(file);
  
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
  
      fileReader.onerror = () => {
        reject(fileReader.result);
      };
      
    });
  };

function handleSalvarFoto(){
    var uploadInput = document.getElementById('uploadInput');
    var loading = document.getElementById('loading');
    var file = uploadInput.files[0];
    var dataFoto = { metadata: "", foto: ""}

converterfotoBase64(file).then(data => {
         const foto = data.split(",")
         const metadataFoto = foto[0];
         const fotoBase64 = foto[1]

         dataFoto.foto = fotoBase64;
         dataFoto.metadata = metadataFoto

        var idUsuario = sessionStorage.ID_USUARIO
        var metadataDaFoto = dataFoto.metadata
        var fotoBase64Foto = dataFoto.foto
        console.log('base 64 teste 1',fotoBase64);

        fetch("/perfil/pegarFoto", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer : idUsuario,
            })
        }).then(function (resposta) { 
            console.log('entrou no then');       
            if (resposta.ok) {
                resposta.json().then(json => {
                    if(json.length == 0){
                        fetch("/perfil/inserirFoto", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({
                                idUsuarioServer : idUsuario,
                                metadataServer : metadataDaFoto,
                                fotobase64Server : fotoBase64Foto
                            })
                        }).then(function (resposta) {
                            console.log("ESTOU NO THEN DO PERFIL!")
                            if (resposta.ok) {
                                loading.style.display = 'block'
                                setTimeout(function () {
                                    window.location = "./perfil.html";
                                }, 1000);
                                resposta.json().then(json => {
                                    
                                }
                            );
                    
                            } 
                    
                        })
                    }else {
                        fetch("/perfil/atualizarFoto", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({
                                idUsuarioServer : idUsuario,
                                metadataServer : metadataDaFoto,
                                fotobase64Server : fotoBase64Foto
                            })
                        }).then(function (resposta) {
    console.log("ESTOU NO THEN DO PERFIL!")
                            if (resposta.ok) {
                                loading.style.display = 'block'
                                setTimeout(function () {
                                    window.location = "./perfil.html";
                                }, 1000);
                                resposta.json().then(json => {
                                    
                                }
                            );
                            } 
                        })
                    }
                }
            );
            } 
        })
     });    
     
}
function foto(){
    var idUsuario = sessionStorage.ID_USUARIO
    fetch("/perfil/pegarFoto", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            idUsuarioServer : idUsuario,
        })
    }).then(function (resposta) {        
        if (resposta.ok) {
            
            resposta.json().then(json => {
                var { metadata ,fotoConvertidaBase64: { data } } = json[0];                
                let fotoBase64 = String.fromCharCode(...data);
                var fotoConcat = `${metadata},${fotoBase64}`
                var image = document.getElementById('perfilImg'); 
                image.src = fotoConcat
            }
        );
        } 
    })
}