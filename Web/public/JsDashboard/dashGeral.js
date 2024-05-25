const { elements } = require("chart.js");

function maquinasEmpresa(){
                var empresa = sessionStorage.empresa
                    console.log('empresa id ', empresa);
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

                        console.log('json', json);
                        const ul = document.getElementById('listaFiltroPc');
                        const ulCritico = document.getElementById('listaPcCritico');
                        const ulAlerta = document.getElementById('listaPcAlerta');

                        json.forEach((computador, i) => {
                            var modelo = computador.modelo;
                            var numSerie = computador.numSerie;
                            var idComputador = computador.id;                      
                            var parametro = computador.parametro;                      
                            var nomeParametro = computador.nome;                      

                        const li = document.createElement('li');
                        li.innerHTML = 
                        `<span style="display: flex; align-items: center; justify-content: space-between; width: 100%;">
                        <i class='bx bx-laptop normal'></i>
                                <div class="descricaoPc">
                                    <p class="nomePc">${modelo} : ${numSerie}</p>
                                        <p class="componentePc">hardware</p>
                                </div>
                                <p class="nomeParametro">${nomeParametro}</p>

                           <button class="btnVerificar" onclick="acharPc(${idComputador},'${modelo}', ${numSerie})">Verificar</button>
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
        //     console.log('Dash geral ===> ', idComputador, modelo, numSerie);

        sessionStorage.idComputador = idComputador;
        sessionStorage.numeroSerie = numSerie;
        sessionStorage.modelopc = modelo;
            // document.addEventListener("DOMContentLoaded", function() {
    
                // acharId(idComputador, modelo, numSerie);
            // });
            
            
            window.location = '../usuario/dashboard.html';

        }

        // function buscarDadosDashboard() {
        //     fetch('/dashboard/dados')
        //         .then(response => response.json())
        //         .then(data => {
        //         })
        //         .catch(error => {
        //             console.error('Erro ao buscar dados do dashboard:', error.message);
        //         });
        // }
        
        // document.addEventListener('DOMContentLoaded', () => {
        //     enviarDadosDashboardParaServidor();
        //     setInterval(enviarDadosDashboardParaServidor, 10000);
        // });

        
        // function enviarDadosDashboardParaServidor() {
        //     fetch('http://localhost:3000/dashboard/info', {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json'
        //         },
        //         body: JSON.stringify({ computadores })
        //     })
        //     .then(response => {
        //         if (response.ok) {
        //             console.log('Dados enviados com sucesso para o servidor.');
        //         } else {
        //             console.error('Falha ao enviar dados para o servidor:', response.statusText);
        //         }
        //     })
        //     .catch(error => {
        //         console.error('Erro ao enviar dados para o servidor:', error.message);
        //     });
        // }
        // function enviarDadosPeriodicamente() {
        //     setInterval(() => {
        //         fetch('http://localhost:3000/dashboard/info', {
        //             method: 'POST',
        //             headers: {
        //                 'Content-Type': 'application/json'
        //             },
        //             body: JSON.stringify({ computadores })
        //         })
        //         .then(response => {
        //             if (response.ok) {
        //                 console.log('Dados enviados com sucesso para o servidor.');
        //             } else {
        //                 console.error('Falha ao enviar dados para o servidor:', response.statusText);
        //             }
        //         })
        //         .catch(error => {
        //             console.error('Erro ao enviar dados para o servidor:', error.message);
        //         });
        //     }, 30000); // 30 segundos 
        // }
        
        // enviarDadosPeriodicamente();
         
        function notificacao(){
            var empresa = sessionStorage.empresa
                console.log('empresa id ', empresa);
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
                        
                        resposta.json().then(json => {
                            json.forEach(element =>{
                                console.log(element);
                                var splitDate = element.data_hora.split('T')
                                var splitMinut = splitDate[1].split('.')
                                listaDeNotificacao.innerHTML += `
                            <li><p class="tituloNotification">${element.modelo} ${element.numSerie}, ${element.componente}, ${element.criticidade} </p><p class="data">${splitDate[0]} ${splitMinut[0]}</p></li>
                            `
                            })
                        }
                    );
                    } 
                })
        }

function kpisMaquinasComProblemas(){
    var empresa = sessionStorage.empresa
        console.log('empresa id ', empresa);
        fetch("/dashboard/maquinasComProblemas", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                empresa : empresa,
            })
        }).then(function (resposta) {        
            if (resposta.ok) {
                var listPc = []
                resposta.json().then(json => {
                    var nmrRamAlerta = 0
                    var nmrDiscoAlerta = 0
                    
                    json.forEach(element =>{
                        if(element.componente == 'disco'){
                            nmrDiscoAlerta++
                        }
                        if(element.componente == 'ram'){
                            nmrRamAlerta++
                        }
                       listPc.push(element)
                    })
                    idMaquinasPoucoEspaco.innerHTML = nmrDiscoAlerta
                    idMaquinasPoucaMemoria.innerHTML = nmrRamAlerta
                }
            );
            } 
        })
}
function notificacao(){
    var empresa = sessionStorage.empresa
        console.log('empresa id ', empresa);
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
                
                resposta.json().then(json => {
                    json.forEach(element =>{
                        var splitDate = element.data_hora.split('T')
                        var splitMinut = splitDate[1].split('.')
                        var horaParaConverter = splitMinut[0].split(':')
                        var horaConvertida = horaParaConverter[0] - 3
                        console.log(horaConvertida);
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
                
                resposta.json().then(json => {
                    console.log('json aqui', JSON.stringify(json));
                    qntMaquinas.innerHTML = json[0].contador
                }
            );
            } 
        })
}
// function atualizacoes(){
//     var dataAtual = new Date();

        
//         var dia = dataAtual.getDate(); 
//         var mes = dataAtual.getMonth() + 1; 
//         var ano = dataAtual.getFullYear(); 

        
//         var hora = dataAtual.getHours(); 
//         var minutos = dataAtual.getMinutes(); 
//         var segundos = dataAtual.getSeconds(); 

        
//         var dataHoraFormatada = dia + '/' + mes + '/' + ano + ' ' + hora + ':' + minutos + ':' + segundos;

//         console.log(dataHoraFormatada);
//         // diaAtualizacao.innerHTML = dia + '/' + '0'+mes + '/' + ano
//         // horaAtualizacao.innerHTML =  hora + ':' + minutos + ':' + segundos;
//         diaAtualizacao.innerHTML = '23/05/2024'
//         horaAtualizacao.innerHTML =  '14:05:32'
// } 

              







