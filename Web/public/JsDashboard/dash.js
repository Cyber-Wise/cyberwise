function maquinasEmpresaLista() {
    var empresa = sessionStorage.empresa
    fetch("/dashboard/maquinasEmpresa", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            empresa: empresa,
        })
    }).then(function (resposta) {
        if (resposta.ok) {
            resposta.json().then(json => {

                const ul = document.getElementById('listaComputadores');
                const ulCritico = document.getElementById('listaPcCritico');
                const ulAlerta = document.getElementById('listaPcAlerta');

                json.forEach(computador => {

                    var modelo = computador.modelo;
                    var numSerie = computador.NumeroSerieProcessador;
                    var codigoAcesso = computador.codigoAcesso;
                    var idComputador = computador.id;
                    
                    var status = computador.status_maquina

                    const li = document.createElement('li');
                    li.innerHTML =
                        `<div class="computador">
                                <div class="descricao">
                                <h2 class="tituloComputadores">${modelo} : ${codigoAcesso}</h2>
                                <div class="status">
                                    <p>status</p>
                                    <div class="${status}"></div>
                                </div>
                                </div>
                                <button class="pointer" id="${idComputador}" onclick="acharId(${idComputador},'${modelo}', ${numSerie})">verificar</button>
                            </div>`;

                    ul.appendChild(li);
                });
            }
            );

        }
    })
}

function filtrar(inputb, ul1, tagName) {
    var input,
        filter,
        ul,
        li,
        a,
        i,
        span,
        txtvalue,
        count = 0;

    input = document.getElementById(inputb);
    ul = document.getElementById(ul1);

    filter = input.value.toUpperCase();

    li = ul.getElementsByTagName("li");
    //console.log(li);

    for (i = 0; i < li.length; i++) {
        //    a = li[i].getElementsByTagName("a")[0];
        a = li[i].getElementsByClassName(tagName)[0]

        txtvalue = a.textContent || a.innerText;

        if (txtvalue.toLocaleUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";

            count++;

            // span = li[i].querySelector("tituloComputadores");
            // if(span){
            //     span.innerHTML = txtvalue.replace(new RegExp(filter, "gi"), (match)=>{
            //         return "<strong>" + match + "</strong>"
            //     })
            // }
        } else {
            li[i].style.display = "none";
        }

    }
    if (count === 0) ul.style.display = "none";
    else ul.style.display = "block";
}
var parametroCpuAlerta;
var parametroCpuCritico;  
var parametroRamAlerta; 
var parametroRamCritico; 
var parametroDiscoAlerta; 
var parametroDiscoCritico; 
function informacoesAnalytics() {
    var empresa = sessionStorage.empresa
    var idMaquinaSelecionada = sessionStorage.idComputador
    console.log('sadadasda', idMaquinaSelecionada);
    fetch("/dashboard/informacoesAnalytics", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            empresa: empresa,
            idMaquinaSelecionada: idMaquinaSelecionada
        })
    }).then(function (resposta) {
        if (resposta.ok) {

            resposta.json().then(json => {
                parametroRamAlerta = json[0].alertaRAM
                parametroRamCritico = json[0].criticoRAM
                parametroCpuAlerta = json[0].alertaCPU
                parametroCpuCritico = json[0].criticoCPU
                parametroDiscoAlerta = json[0].alertaDISCO
                parametroDiscoCritico = json[0].criticoDISCO

                console.log(parametroRamAlerta);
                infoMainAnalytics.innerHTML = `
                        <div class="information"><span style="border-radius: 100%;" class="emergencia"></span><p class="nomeInfo">Emergência</p></div>
                        <p class="descricaoAlertas">RAM: ${json[0].criticoRAM}%</p>
                      <p class="descricaoAlertas">CPU: ${json[0].criticoCPU}%</p>
                      <p class="descricaoAlertas">DISCO: ${json[0].criticoDISCO}%</p>
                      <div class="information"><span class="alerta"></span><p class="nomeInfo">Alerta</p></div>
                      <p class="descricaoAlertas">RAM: ${json[0].alertaRAM}% a ${json[0].criticoRAM - 0.01}%</p>
                      <p class="descricaoAlertas">CPU: ${json[0].alertaCPU}% a ${json[0].criticoCPU - 0.01}%</p>
                      <p class="descricaoAlertas">DISCO: ${json[0].alertaDISCO}% a ${json[0].criticoDISCO - 0.01}%</p>
                      <div class="information"><span class="normal"></span><p class="nomeInfo">Normal</p></div>
                      <p class="descricaoAlertas">RAM: 0% a ${json[0].alertaRAM - 0.01}%</p>
                      <p class="descricaoAlertas">CPU: 0% a ${json[0].alertaCPU - 0.01}%</p>
                      <p class="descricaoAlertas">DISCO: 0% a ${json[0].alertaDISCO - 0.01}%</p>
                        `

            }
            );
        }
    })
}
function dadosAtual() {
    var idMaquinaSelecionada = sessionStorage.idComputador
    fetch("/dashboard/dadosAtual", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
        
            idMaquinaSelecionada: idMaquinaSelecionada
        })
    }).then(function (resposta) {
        if (resposta.ok) {

            resposta.json().then(json => {
                // console.log('id maquina', idMaquinaSelecionada);
                
                console.log('Dados maquinas ==> ', json);
                var dataCpuEmUso = json[0].cpuEmUso
                var dataRamEmUso = Number(json[0].ramEmUso)
                var dataDiscoEmUso = json[0].tamanhoEmUsoDisco.toFixed(2)
                var dataList = [dataCpuEmUso, dataRamEmUso, dataDiscoEmUso];
                // atualizarDados(dataList);
                // graficos(dataList);+
                

                //json[0].tamanhoDisponivelDisco
                ramEmUso.textContent = dataRamEmUso
                cpuEmUso.textContent = dataCpuEmUso
                discoEmUso.textContent = dataDiscoEmUso

                if(dataRamEmUso < parametroRamAlerta){
                    statusDadoAtuallRam.classList.add('normal')
                }else if (dataRamEmUso >= parametroRamAlerta && dataRamEmUso < parametroRamCritico){
                    statusDadoAtuallRam.classList.add('alerta')
                    
                }else if(dataRamEmUso >= parametroRamCritico) {
                    statusDadoAtuallRam.classList.add('emergencia')
                }

                if(dataCpuEmUso < parametroCpuAlerta){
                    statusDadoAtuallCpu.classList.add('normal')
                }else if (dataCpuEmUso >= parametroCpuAlerta && dataCpuEmUso < parametroCpuCritico){
                    statusDadoAtuallCpu.classList.add('alerta')
                }else if(dataCpuEmUso >= parametroCpuCritico) {
                    statusDadoAtuallCpu.classList.add('emergencia')
                }

                if(dataDiscoEmUso < parametroDiscoAlerta){
                    statusDadoAtuallDisco.classList.add('normal')
                }else if (dataDiscoEmUso >= parametroDiscoAlerta && dataDiscoEmUso < parametroDiscoCritico){
                    statusDadoAtuallDisco.classList.add('alerta')
                }else if(dataDiscoEmUso >= parametroDiscoCritico) {
                    statusDadoAtuallDisco.classList.add('emergencia')
                }
            }
            );
        }
    })
}
setInterval(dadosAtual, 5000);
// document.write('<script src="./PlotarGraficos.js"></script>');