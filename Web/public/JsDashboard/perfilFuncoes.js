nomeDaConta.innerHTML = sessionStorage.NOME_USUARIO;
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
        // console.log(resposta, 'resposta aqui');

        resposta.json().then(json => {
            
            // console.log(resposta.nome, 'teste nome perfil');
            console.log(JSON.stringify(json));
            

            var nome = json[0].nome;
            var emailU = json[0].email;
            var senha = json[0].senha;

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
            // console.log(id, 'atualizar funcionario')

            
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
                console.log(resposta);

                resposta.json().then(json => {
                    console.log(json);
                    console.log(JSON.stringify(json));
                    // salvar();
                   
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
            console.log(resposta);

            resposta.json().then(json => {
                console.log(json);
                console.log(JSON.stringify(json));
                
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
                        <button class="editFunc" onclick="abrirEditar()"><i class='bx bxs-edit-alt' onclick="editarFuncionario1(${idFuncionario}, '${nome}', '${email}', '${senha}')"></i></button>
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
            console.log(resposta);

            setTimeout(function () {
                window.location = "./perfil.html";
            }, 1000);
            resposta.json().then(json => {
                console.log(json);
                console.log(JSON.stringify(json));
  
            }
        );

        } 

    })

    }

    function editarFuncionario1(id, nome, email, senha){
        console.log(nome, email, senha)
        nomeEditarFuncionario.innerHTML = nome;
        emailEditarFuncionario.value = email;
        senhaEditarFuncionario.value = senha;
        sessionStorage.idFuncionario = id;

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
                if (resposta.ok) {
                    console.log(resposta);
        
                    resposta.json().then(json => {
                        console.log(json);
                        console.log(JSON.stringify(json));

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
       console.log(id, 'atualizar funcionario')

       
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
        if (resposta.ok) {
            console.log(resposta);

            resposta.json().then(json => {
                console.log(json);
                console.log(JSON.stringify(json));
                setTimeout(function () {
                    window.location = "./perfil.html";
                }, 1000);
                

                        });
                     } 

                })

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
                console.log(resposta);
    
                resposta.json().then(json => {
                    console.log(json);
                    console.log(JSON.stringify(json));
                    
                const ul = document.getElementById('listaMaquinas');
    
         
      
                    json.forEach((maquina) => {
                      var modelo = maquina.modelo;
                      var numeroSerie =  maquina.numSerie;
                      var idmaquina =  maquina.id;
                       
    
                    const li = document.createElement('li');
                    
                    li.innerHTML = `
                    <!-- <p class="funcionarioNome"> -->
                    <i class='bx bx-laptop listaPCtop'></i>
                <!-- </p> -->
                  <p class="funcionarioEmail" id="maquinaNome">${modelo} : ${numeroSerie}</p>
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
            console.log(resposta);

            resposta.json().then(json => {
                console.log(json);
                console.log(JSON.stringify(json));
                
                
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

        // console.log('select do parametro ===> ',selectParametros.value);
    
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
                        title: "Cadastro de máquina realizado!",
                    icon: "success",
                    color: "#fff",
                    background: "#011126",
                    iconColor : "green",
                    });
                if (resposta.ok) {
                    console.log(resposta);
        
                    resposta.json().then(json => {
                        console.log(json);
                        console.log(JSON.stringify(json));

                        setTimeout(function () {
                            window.location = "./perfil.html";
                        }, 1000);
                        
                                });
                             } 
        
                        })

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
        // var senha = senhaEditarFuncionario.value;
        var id = sessionStorage.idMaquina;
        console.log(modelo, 'atualizar funcionario')
 
        
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
         if (resposta.ok) {
             console.log(resposta);
 
             resposta.json().then(json => {
                 console.log(json);
                 console.log(JSON.stringify(json));
                 setTimeout(function () {
                     window.location = "./perfil.html";
                 }, 1000);
                 
 
                         });
                      } 
 
                 })
 
    }

    function deletarMaquina(idMaquina){

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
            if (resposta.ok) {
                console.log(resposta);
    
                setTimeout(function () {
                    window.location = "./perfil.html";
                }, 1000);
                resposta.json().then(json => {
                    console.log(json);
                    console.log(JSON.stringify(json));
      
                }
            );
    
            } 
    
        })
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
                if (resposta.ok) {
                    console.log(resposta);
        
                    resposta.json().then(json => {
                        console.log(json);
                        console.log(JSON.stringify(json));

                        setTimeout(function () {
                            window.location = "./perfil.html";
                        }, 1000);
                        
                                });
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
