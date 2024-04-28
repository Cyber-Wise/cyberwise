// document.write('<script src="../JsDashboard/dash.js"></script>');


 
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
                        const ulCritico = document.getElementById('listaPcCritico');
                        const ulAlerta = document.getElementById('listaPcAlerta');
                       
                            var ParametroRamAlerta = 60;
                            var ParametroDiscoAlerta = 70;
                            var ParametroCpuAlerta = 50;

                            var ParametroRamCritico = 80;
                            var ParametroDiscoCritico = 90;
                            var ParametroCpuCritico = 70;

                            // var ParametroRamOk = 40;
                            // var ParametroDiscoOk = 30;
                            // var ParametroCpuOk = 30;
                            var espacoAlerta = 0;
                            var ramAlerta = 0;

                            var componenteCritico = 0;
                            var componenteAlerta = 0;

                        computadores.forEach((computador, i) => {

                            var modelo = computador.modelo;
                            var numSerie = computador.numSerie;
                            var idComputador = computador.id;                      
                            
                            var estadoRam = computador.medidaRam;
                            var estadoDisco = computador.medidaDisco;
                            var estadoCpu = computador.medidaCpu;

                            
                            
                            var estado = "normal";
                            var Parametro = "Parametro";
                            
                            var descricao = "Normal";
                            var qntAlerta = 0;
                            var qntCritico = 0;

                            if (estadoRam >= ParametroRamCritico) {
                                estado = "emergencia";
                                qntCritico++;
                                ramAlerta++;
                            }else if(estadoRam >= ParametroRamAlerta){
                                estado = "alerta";
                                qntAlerta++;
                                ramAlerta++;
                            }

                            if (estadoDisco >= ParametroDiscoCritico) {
                                estado = "emergencia";
                                qntCritico++;
                                espacoAlerta++;
                            }else if(estadoDisco >= ParametroDiscoAlerta){
                                estado = "alerta";
                                qntAlerta++;
                                espacoAlerta++;
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
                                descricao = `${qntCritico} Critico` ;
                            }
                            if(qntCritico > 0 && qntAlerta >= 1){               
                                descricao = `${qntCritico} Crítico, ${qntAlerta} Alerta`
                            }
                            else if(qntAlerta >= 1 && qntCritico == 0){
                                descricao = `${qntAlerta} Alerta`
                            }

                            if(qntCritico > 0){
                                componenteCritico++;
                            }
                            if(qntAlerta > 0){
                                componenteAlerta++;
                            }

                            Parametro += estado;
                            // console.log('quantidade Normal ===>', computador.modelo, qntNormal);
                            // console.log('quantidade alerta ===>', computador.modelo, qntAlerta , estado);
                            // console.log('quadade Critico ===>', computador.modelo, qntCritico, estado);
                            // console.log(descricao);
                            console.log(Parametro);

                            if(qntCritico > 0){
                                const li1 = document.createElement('li');
                                li1.innerHTML = 
                                `<span class="${Parametro + 1}">
                                <i class='bx bx-laptop emergencia'></i>
                                        <div class="descricaoPc">
                                            <p class="nomeComputador">${modelo} : ${numSerie}</p>
                                                <p class="componentePc">${descricao}</p>
                                        </div>
                                   <button class="btnVerificar" onclick="acharPc(${idComputador},'${modelo}', ${numSerie})">Verificar</button>
                                   </span>`;
                                   
        
                                ulCritico.appendChild(li1);
                            }

                            if(qntAlerta >= 1){
                                const li2 = document.createElement('li');
                                li2.innerHTML = 
                                `<span class="${Parametro + 1}">
                                <i class='bx bx-laptop ${estado}'></i>
                                        <div class="descricaoPc">
                                            <p class="nomeComputador">${modelo} : ${numSerie}</p>
                                                <p class="componentePc">${descricao}</p>
                                        </div>
                                   <button class="btnVerificar" onclick="acharPc(${idComputador},'${modelo}', ${numSerie})">Verificar</button>
                                   </span>`;
        
                                ulAlerta.appendChild(li2);
                            }

                            

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
                       
                    qnt(computadores.length, espacoAlerta, ramAlerta, componenteCritico, componenteAlerta)
          
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

        
              







