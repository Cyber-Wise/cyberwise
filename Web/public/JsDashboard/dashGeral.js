
 
        function dashboardInfo() {
  
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

                // critico
                //  >= 70
                // console.log(computadores[0].id)
           
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
                            var listaId = [];
                            var listaNum = [];
                            var listaModelo = [];
                       
                            var ParametroRamAlerta = 60;
                            var ParametroDiscoAlerta = 70;
                            var ParametroCpuAlerta = 60;

                            var ParametroRamCritico = 80;
                            var ParametroDiscoCritico = 90;
                            var ParametroCpuCritico = 70;

                            var ParametroRamOk = 40;
                            var ParametroDiscoOk = 30;
                            var ParametroCpuOk = 30;

                        computadores.forEach((computador, i) => {
                            listaId.push(computador.id);
                            listaNum.push(computador.numSerie);
                            listaModelo.push(computador.modelo);

                            var modelo = computador.modelo;
                            var numSerie = computador.numSerie;
                            var idComputador = computador.id;                      
                            
                            var estadoRam = computador.medidaRam;
                            var estadoDisco = computador.medidaDisco;
                            var estadoCpu = computador.medidaCpu;
                            
                            var estado = "";
                            var qnt;

                            // ermergencia, alerta.
                            if(
                                (estadoRam >= ParametroRamOk && estadoRam < ParametroRamAlerta) ||
                                (estadoDisco >= ParametroDiscoOk && estadoDisco < ParametroDiscoAlerta) ||
                                (estadoCpu >= ParametroCpuOk && estadoCpu < ParametroCpuAlerta)
                            ){
                                estado = "normal";
                            }else if(
                                (estadoRam >= ParametroRamAlerta && estadoRam < ParametroRamCritico) ||
                                (estadoDisco >= ParametroDiscoOk && estadoDisco < ParametroDiscoAlerta) ||
                                (estadoCpu >= ParametroCpuOk && estadoCpu < ParametroCpuAlerta)
                            ){
                                estado = "alerta";
                            }else if(
                                (estadoRam > ParametroRamCritico) ||
                                (estadoDisco > ParametroDiscoAlerta) ||
                                (estadoCpu > ParametroCpuAlerta) 
                            ){
                                estado = "emergencia";
                            }

                            
                            console.log(estado, i)
                        const li = document.createElement('li');
                        li.innerHTML = 
                        `<i class='bx bx-laptop ${estado}'></i>
                                <div class="descricaoPc">
                                    <p class="nomePc">${modelo}</p>
                                        <p class="componentePc">CPU ${numSerie}</p>
                                </div>
                           <button class="btnVerificar">Verificar</button>`;

                        ul.appendChild(li);
                    });
                    
                        // console.log(json);
                       
                        // console.log(json[0].modelo)
                        // var modelo = json[0].modelo;
                        // var numSerie = json[0].numSerie;
                        
          
                        // modeloPc.innerHTML = "modelo";
                       
          
                    }








