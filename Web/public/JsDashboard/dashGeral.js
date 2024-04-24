
 
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
                       
           
                        computadores.forEach((computador) => {
                            listaId.push(computador.id);
                            listaNum.push(computador.numSerie);
                            listaModelo.push(computador.modelo);

                            // numeroSerie.innerHTML = listaNum[0];
                            // modeloPc.innerHTML = listaModelo[0];
                            
                            console.log(listaId, "lista de id")
                            var modelo = computador.modelo;
                            var numSerie = computador.numSerie;
                            var idComputador = computador.id;
                      
                        //    if()
                            var estadoRam = computador.medidaRam;
                            var estadoDisco = computador.medidaDisco;
                            var estadoCpu = computador.medidaCpu;


                            

                        const li = document.createElement('li');
                        li.innerHTML = 
                        `<i class='bx bx-laptop emergencia'></i>
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








