const { elements } = require("chart.js");

function maquinasEmpresa(){
                var empresa = sessionStorage.empresa
                    fetch("/dashboard/maquinasEmpresa", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            empresa : empresa,
                        })
                    }).then(function (resposta) {        
                        if (resposta.ok) {
                            resposta.json().then(json => {

                        const ul = document.getElementById('listaFiltroPc');


                        json.forEach(computador => {
                            // console.log(computador);
                            var modelo = computador.modelo;
                        
                            var idComputador = computador.maquina_id;                                       
                            var nomeParametro = computador.nome_parametro;  
                            var status = computador.status_maquina
                            var codigoAcesso = computador.codigoAcesso
                            // console.log('id pc', computador);
                        const li = document.createElement('li');
                        li.innerHTML = 
                        `<span style="display: flex; align-items: center; justify-content: space-between; width: 100%;" class="${status}">
                        <i class='bx bx-laptop ${status}'></i>
                                <div class="descricaoPc">
                                    <p class="nomePc">${modelo} : ${codigoAcesso}</p>
                                </div>
                                <p class="nomeParametro">${nomeParametro}</p>

                           <button class="btnVerificar" onclick="acharPc(${idComputador},'${modelo}', '${codigoAcesso}')">Verificar</button>
                           </span>`;

                        ul.appendChild(li);
                    });
                            }
                        );
                        
                        } 
                    })
            }
                // qnt(computadores.length, espacoAlerta, ramAlerta, componenteCritico, componenteAlerta)
          
                    

                    document.write('<script src="../JsDashboard/PlotarGraficos.js"></script>');
                    

        function acharPc(idComputador, modelo, numSerie){
        // console.log('oq tem auqi', idComputador);
        sessionStorage.idComputador = idComputador;
        sessionStorage.numeroSerie = numSerie;
        sessionStorage.modelopc = modelo;
        // console.log('achar pc ===> ', numSerie);
            // document.addEventListener("DOMContentLoaded", function() {
    
                // acharId(idComputador, modelo, numSerie);
            // });
            
            
            window.location = '../usuario/dashboard.html';

        }

function notificacao(){
    var empresa = sessionStorage.empresa
        fetch("/dashboard/notificacao", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                empresa : empresa,
            })
        }).then(function (resposta) {        
            if (resposta.ok) {
                listaDeNotificacao.innerHTML = ''
                resposta.json().then(json => {
                    json.forEach(element =>{
                        // console.log('Hora notificação ===> ',element);
                        var splitDate = element.data_hora.split('T')
                        var splitMinut = splitDate[1].split('.')
                        var horaParaConverter = splitMinut[0].split(':')
                        var horaConvertida = horaParaConverter[0] - 3
                        // console.log('ta funfanfo legal');
                        var horaCompleta = horaConvertida + ':' + horaParaConverter[1] + ':' + horaParaConverter[2]
                        listaDeNotificacao.innerHTML += `
                    <li><p class="tituloNotification">${element.modelo} ${element.numSerie}, ${element.componente}, ${element.criticidade} </p><p class="data">${splitDate[0]} ${horaCompleta}</p></li>
                    `
                    })
                }
            );
            } 
        })
}

function maquinasComPoucoEspaco(){
    var empresa = sessionStorage.empresa
        fetch("/dashboard/maquinasComPoucoEspaco", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                empresa : empresa,
            })
        }).then(function (resposta) {        
            if (resposta.ok) {
                
                resposta.json().then(json => {
                    // console.log('oq tem aquiii', json);
                    // qntMaquinas.innerHTML = json[0].contador
                    idMaquinasPoucoEspaco.innerHTML = json[0].maquinas_com_alerta_disco
                }
            );
            } 
        })
}
function maquinasComPoucaRam(){
    var empresa = sessionStorage.empresa
        fetch("/dashboard/maquinasComPoucaRam", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                empresa : empresa,
            })
        }).then(function (resposta) {        
            if (resposta.ok) {
                
                resposta.json().then(json => {
                    // console.log(json);
                    idMaquinasPoucaMemoria.innerHTML = json[0].maquinas_com_alerta_ram
                }
            );
            } 
        })
}

function totalDeMaquinas(){
    var empresa = sessionStorage.empresa
        fetch("/dashboard/totalDeMaquinas", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                empresa : empresa,
            })
        }).then(function (resposta) {        
            if (resposta.ok) {
                // console.log('hahahha');
                resposta.json().then(json => {
                    qntMaquinas.innerHTML = json[0].contador
                }
            );
            } 
        })
}

function componentesEmEstadoCritico(){
    var empresa = sessionStorage.empresa
        fetch("/dashboard/componentesEmEstadoCritico", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                empresa : empresa,
            })
        }).then(function (resposta) {        
            if (resposta.ok) {
                
                resposta.json().then(json => {
                    // console.log('asda', json);
                    componentesCriticos.innerHTML = json[0].quantidade_maquinas_com_critico
                }
            );
            } 
        })
}
function componentesEmEstadoAlerta(){
    var empresa = sessionStorage.empresa
        fetch("/dashboard/componentesEmEstadoAlerta", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                empresa : empresa,
            })
        }).then(function (resposta) {        
            if (resposta.ok) {
                
                resposta.json().then(json => {
                    componentesAlerta.innerHTML = json[0].quantidade_maquinas_com_alerta
                }
            );
            } 
        })
}

function maquinasComProblemasDeRede(){
    var empresa = sessionStorage.empresa
        fetch("/dashboard/maquinasComProblemasDeRede", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                empresa : empresa,
            })
        }).then(function (resposta) {        
            if (resposta.ok) {
                
                resposta.json().then(json => {
                //  console.log('oq aqui', json);
                    redeComProblema.innerHTML = json[0].quantidade_maquinas_com_alerta_rede
                }
            );
            } 
        })
}



function listaDeMaquinasComPoucoEspaco(){
    var empresa = sessionStorage.empresa
        fetch("/dashboard/listaDeMaquinasComPoucoEspaco", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                empresa : empresa,
            })
        }).then(function (resposta) {        
            if (resposta.ok) {
                
                resposta.json().then(json => {
           
                    json.forEach(computador => {
                        // console.log('comp', computador);
                    
                        var modelo = computador.modelo;
                        var idComputador = computador.maquina_id;                                       
                                                              
                        var nomeParametro = computador.nome_parametro;  
                        var status = computador.status_maquina
                        var codigoAcesso = computador.codigoAcesso

                    

                    const li = document.createElement('li');
                    li.innerHTML = 
                    `<span style="display: flex; align-items: center; justify-content: space-between; width: 100%;">
                    <i class='bx bx-laptop ${status}'></i>
                            <div class="descricaoPc">
                                <p class="nomePc">${modelo} : ${codigoAcesso}</p>
                            </div>
                            <p class="nomeParametro">${nomeParametro}</p>

                       <button class="btnVerificar" onclick="acharPc(${idComputador},'${modelo}', '${codigoAcesso}')">Verificar</button>
                       </span>`;

                       listaPcAlerta.appendChild(li);
                });
                }
            );
            } 
        })
}

function listaDeMaquinasComPoucaRam(){
    var empresa = sessionStorage.empresa
        fetch("/dashboard/listaDeMaquinasComPoucaRam", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                empresa : empresa,
            })
        }).then(function (resposta) {        
            if (resposta.ok) {
                
                resposta.json().then(json => {
         
                    json.forEach(computador => {

                     
                        var modelo = computador.modelo;
                        var idComputador = computador.maquina_id;                                       
                                                               
                        var nomeParametro = computador.nome_parametro;  
                        var status = computador.status_maquina
                        var codigoAcesso = computador.codigoAcesso
                    

                    const li = document.createElement('li');
                    li.innerHTML = 
                    `<span style="display: flex; align-items: center; justify-content: space-between; width: 100%;">
                    <i class='bx bx-laptop ${status}'></i>
                            <div class="descricaoPc">
                                <p class="nomePc">${modelo} : ${codigoAcesso}</p>
                            </div>
                            <p class="nomeParametro">${nomeParametro}</p>

                       <button class="btnVerificar" onclick="acharPc(${idComputador},'${modelo}', '${codigoAcesso}')">Verificar</button>
                       </span>`;

                       listaPcAlerta.appendChild(li);
                });
                }
            );
            } 
        })
}
function listaDeMaquinasProblemaRede(){
    var empresa = sessionStorage.empresa
        fetch("/dashboard/listaDeMaquinasProblemaRede", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                empresa : empresa,
            })
        }).then(function (resposta) {        
            if (resposta.ok) {
                
                resposta.json().then(json => {
            
                    json.forEach(computador => {

                   
                        var modelo = computador.modelo;
                        var idComputador = computador.maquina_id;                                       
                                                             
                        var nomeParametro = computador.nome_parametro;  
                        var status = computador.status_maquina
                        var codigoAcesso = computador.codigoAcesso

                    const li = document.createElement('li');
                    li.innerHTML = 
                    `<span style="display: flex; align-items: center; justify-content: space-between; width: 100%;">
                    <i class='bx bx-laptop ${status}'></i>
                            <div class="descricaoPc">
                                <p class="nomePc">${modelo} : ${codigoAcesso}</p>
                            </div>
                            <p class="nomeParametro">${nomeParametro}</p>

                       <button class="btnVerificar" onclick="acharPc(${idComputador},'${modelo}', '${codigoAcesso}')">Verificar</button>
                       </span>`;

                       listaPcAlerta.appendChild(li);
                });
                }
            );
            } 
        })
}


function listaDeAlertas(){
    var empresa = sessionStorage.empresa
        fetch("/dashboard/listaDeAlertas", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                empresa : empresa,
            })
        }).then(function (resposta) {        
            if (resposta.ok) {
                
                resposta.json().then(json => {
                    json.forEach(computador => {
                        var modelo = computador.modelo;
                    
                        var alertasCPU = computador.alertasCPU
                        var alertasDisco = computador.alertasDISCO
                        var alertasRAM = computador.alertasRAM
                        var alertasRede = computador.alertasREDE
                        console.log('testeAAlerta', computador);
                        const li = document.createElement('li');
                        tabelaAlertas.innerHTML = ''
                        li.innerHTML = 
                        `<p class="descricaoTabela">${modelo}</p>
                        <p class="descricaoTabela">${alertasCPU}</p>
                        <p class="descricaoTabela">${alertasRAM}</p>
                        <p class="descricaoTabela">${alertasDisco}</p>
                        <p class="descricaoTabela">${alertasRede}</p>`;
                        
                        tabelaAlertas.appendChild(li);
                    });
                }
            );
            } 
        })
}

    

    