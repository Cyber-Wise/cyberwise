// document.write('<script src="../JsDashboard/dash.js"></script>');
// script.js
// Incluindo o arquivo com a função


// // Espera o documento ser carregado

 
        function dashboardInfo1() {
  
            const computadores = [{
                    // tres criticos
                    id: 1,
                modelo: "Dell",
                numSerie: "1212",
                medidaRam : 80,
                medidaDisco : 90,
                medidaCpu : 70
                },{
                    // tres alertas
                    id: 2,
                modelo: "Dell",
                numSerie: "1414",
                medidaRam : 60,
                medidaDisco : 70,
                medidaCpu : 60
                },{
                    //tres ok
                    id: 3,
                modelo: "Dell",
                numSerie: "1545",
                medidaRam : 40,
                medidaDisco : 30,
                medidaCpu : 30
                },{
                    // um critico, dois ok
                    id: 4,
                modelo: "Acer",
                numSerie: "3434",
                medidaRam : 90,
                medidaDisco : 30,
                medidaCpu : 40
                },{
                    // dois critico, um ok
                    id: 5,
                modelo: "Positivo",
                numSerie: "2232",
                medidaRam : 90,
                medidaDisco : 80,
                medidaCpu : 40
                },{
                    // 3 alertas
                    id: 6,
                modelo: "Lg",
                numSerie: "3232",
                medidaRam : 50,
                medidaDisco : 60,
                medidaCpu : 60
                }];

           
            // fetch("/dashboard/dadosDashboard", {
            //     method: "POST",
            //     headers: {
            //         "Content-Type": "application/json"
            //     },
            //     body: JSON.stringify({
            //         empresaServer: empresa,
            //         // senhaServer: senhaVar
            //     })
            // }).then(function (resposta) {
            //     console.log("ESTOU NO THEN DA DASH!")
          
            //     if (resposta.ok) {
            //         console.log(resposta);
          
            //         resposta.json().then(json => {
                        const ul = document.getElementById('listaFiltroPc');
                       
                            var ParametroRamAlerta = 60;
                            var ParametroDiscoAlerta = 70;
                            var ParametroCpuAlerta = 60;

                            var ParametroRamCritico = 80;
                            var ParametroDiscoCritico = 90;
                            var ParametroCpuCritico = 70;

                            // var ParametroRamOk = 40;
                            // var ParametroDiscoOk = 30;
                            // var ParametroCpuOk = 30;

                        computadores.forEach((computador, i) => {

                            var modelo = computador.modelo;
                            var numSerie = computador.numSerie;
                            var idComputador = computador.id;                      
                            
                            var estadoRam = computador.medidaRam;
                            var estadoDisco = computador.medidaDisco;
                            var estadoCpu = computador.medidaCpu;
                            
                            var estado = "normal";
                            var Parametro = "Parametro";
                            var descricao = "normal";
                            var qntAlerta = 0;
                            var qntCritico = 0;

                            if (estadoRam >= ParametroRamCritico) {
                                estado = "emergencia";
                                qntCritico++;
                            }else if(estadoRam >= ParametroRamAlerta){
                                estado = "alerta";
                                qntAlerta++;
                            }

                            if (estadoDisco >= ParametroDiscoCritico) {
                                estado = "emergencia";
                                qntCritico++;
                            }else if(estadoDisco >= ParametroDiscoAlerta){
                                estado = "alerta";
                                qntAlerta++;
                            }

                            if (estadoCpu >= ParametroCpuCritico) {
                                estado = "emergencia";
                                qntCritico++;
                            }else if(estadoCpu >= ParametroCpuAlerta){
                                estado = "alerta";
                                qntAlerta++;
                            }

    
                            if(qntCritico >= 1){
                                estado = 'emergencia';
                                descricao = `${qntCritico} Crítico, ${qntAlerta} Alerta`
                            }else if(qntAlerta >= 1){
                                descricao = `${qntAlerta} Alerta`
                            }

                            Parametro += estado;
                            // console.log('quantidade Normal ===>', computador.modelo, qntNormal);
                            console.log('quantidade alerta ===>', i, computador.modelo, qntAlerta , estado);
                            console.log('quantidade Critico ===>', i, computador.modelo, qntCritico, estado);
                            

                        const li = document.createElement('li');
                        li.innerHTML = 
                        `<span class="${Parametro}">
                        <i class='bx bx-laptop ${estado}'></i>
                                <div class="descricaoPc">
                                    <p class="nomePc">${modelo} : ${numSerie}</p>
                                        <p class="componentePc">${descricao}</p>
                                </div>
                           <button class="btnVerificar" onclick="acharPc(${idComputador},'${modelo}', ${numSerie})">Verificar</button>
                           </span>`;

                        ul.appendChild(li);
                    });
                       
          
                    }

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

        
              







