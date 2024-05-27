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

                            var modelo = computador.modelo;
                            var numSerie = computador.NumeroSerieProcessador;
                            var idComputador = computador.idMaquina;                                       
                            var nomeParametro = computador.nome;  
                            var status = computador.status_maquina
                            console.log('id pc', idComputador);
                        const li = document.createElement('li');
                        li.innerHTML = 
                        `<span style="display: flex; align-items: center; justify-content: space-between; width: 100%;">
                        <i class='bx bx-laptop ${status}'></i>
                                <div class="descricaoPc">
                                    <p class="nomePc">${modelo} : ${numSerie}</p>
                                </div>
                                <p class="nomeParametro">${nomeParametro}</p>

                           <button class="btnVerificar" onclick="acharPc(${idComputador},'${modelo}', '${numSerie}')">Verificar</button>
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
        console.log('oq tem auqi', idComputador);
        sessionStorage.idComputador = idComputador;
        sessionStorage.numeroSerie = numSerie;
        sessionStorage.modelopc = modelo;
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
                        console.log(element);
                        var splitDate = element.data_hora.split('T')
                        var splitMinut = splitDate[1].split('.')
                        var horaParaConverter = splitMinut[0].split(':')
                        var horaConvertida = horaParaConverter[0] - 3
                        console.log('ta funfanfo legal');
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
                    // qntMaquinas.innerHTML = json[0].contador
                    idMaquinasPoucoEspaco.innerHTML = json[0].totalDeMaquinasComPoucaMemoria
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
                    
                    idMaquinasPoucaMemoria.innerHTML = json[0].totalDeMaquinasComPoucaRam
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
                console.log('hahahha');
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
                    componentesCriticos.innerHTML = json[0].totalMaquinasCritico
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
                    componentesAlerta.innerHTML = json[0].totalMaquinasCritico
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
                 
                    redeComProblema.innerHTML = json[0].totalMaquinasCritico
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

                    
                        var modelo = computador.modelo;
                        var numSerie = computador.numSerie;
                        var idComputador = computador.idMaquina;                                       
                        var nomeParametro = computador.nome;  
                        var status = computador.status_maquina

                    const li = document.createElement('li');
                    li.innerHTML = 
                    `<span style="display: flex; align-items: center; justify-content: space-between; width: 100%;">
                    <i class='bx bx-laptop ${status}'></i>
                            <div class="descricaoPc">
                                <p class="nomePc">${modelo} : ${numSerie}</p>
                            </div>
                            <p class="nomeParametro">${nomeParametro}</p>

                       <button class="btnVerificar" onclick="acharPc(${idComputador},'${modelo}', '${numSerie}')">Verificar</button>
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
                        var numSerie = computador.numSerie;
                        var idComputador = computador.idMaquina;                                       
                        var nomeParametro = computador.nome;  
                        var status = computador.status_maquina

                    const li = document.createElement('li');
                    li.innerHTML = 
                    `<span style="display: flex; align-items: center; justify-content: space-between; width: 100%;">
                    <i class='bx bx-laptop ${status}'></i>
                            <div class="descricaoPc">
                                <p class="nomePc">${modelo} : ${numSerie}</p>
                            </div>
                            <p class="nomeParametro">${nomeParametro}</p>

                       <button class="btnVerificar" onclick="acharPc(${idComputador},'${modelo}', '${numSerie}')">Verificar</button>
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
                        var numSerie = computador.numSerie;
                        var idComputador = computador.idMaquina;                                       
                        var nomeParametro = computador.nome;  
                        var status = computador.status_maquina

                    const li = document.createElement('li');
                    li.innerHTML = 
                    `<span style="display: flex; align-items: center; justify-content: space-between; width: 100%;">
                    <i class='bx bx-laptop ${status}'></i>
                            <div class="descricaoPc">
                                <p class="nomePc">${modelo} : ${numSerie}</p>
                            </div>
                            <p class="nomeParametro">${nomeParametro}</p>

                       <button class="btnVerificar" onclick="acharPc(${idComputador},'${modelo}', '${numSerie}')">Verificar</button>
                       </span>`;

                       listaPcAlerta.appendChild(li);
                });
                }
            );
            } 
        })
}


function listaDeMaquinasCOmComponentesCriticos(){
    var empresa = sessionStorage.empresa
        fetch("/dashboard/listaDeMaquinasCOmComponentesCriticos", {
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
                        var numSerie = computador.numSerie;
                        var idComputador = computador.idMaquina;                                       
                        var nomeParametro = computador.nome;  
                        var status = computador.status_maquina

                    const li = document.createElement('li');
                    li.innerHTML = 
                    `<span style="display: flex; align-items: center; justify-content: space-between; width: 100%;">
                    <i class='bx bx-laptop ${status}'></i>
                            <div class="descricaoPc">
                                <p class="nomePc">${modelo} : ${numSerie}</p>
                            </div>
                            <p class="nomeParametro">${nomeParametro}</p>

                       <button class="btnVerificar" onclick="acharPc(${idComputador},'${modelo}', '${numSerie}')">Verificar</button>
                       </span>`;

                       listaPcAlerta.appendChild(li);
                });
                }
            );
            } 
        })
}


function listaDeMaquinasCOmComponentesAlertas(){
    var empresa = sessionStorage.empresa
        fetch("/dashboard/listaDeMaquinasCOmComponentesAlertas", {
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
                        var numSerie = computador.numSerie;
                        var idComputador = computador.idMaquina;                                       
                        var nomeParametro = computador.nome;  
                        var status = computador.status_maquina

                    const li = document.createElement('li');
                    li.innerHTML = 
                    `<span style="display: flex; align-items: center; justify-content: space-between; width: 100%;">
                    <i class='bx bx-laptop ${status}'></i>
                            <div class="descricaoPc">
                                <p class="nomePc">${modelo} : ${numSerie}</p>
                            </div>
                            <p class="nomeParametro">${nomeParametro}</p>

                       <button class="btnVerificar" onclick="acharPc(${idComputador},'${modelo}', '${numSerie}')">Verificar</button>
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
                        var numSerie = computador.numSerie;
                        var alertasCPU = computador.alertasCPU
                        var alertasDisco = computador.alertasDisco
                        var alertasRAM = computador.alertasRAM
                        var alertasRede = computador.alertasRede
                        
                        const li = document.createElement('li');
                        tabelaAlertas.innerHTML = ''
                        li.innerHTML = 
                        `<p class="descricaoTabela">${modelo}: ${numSerie}</p>
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

    

    