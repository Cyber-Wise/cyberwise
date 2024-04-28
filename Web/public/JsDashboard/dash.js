    
 
   
 
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
                        const ul = document.getElementById('listaComputadores');

                        var ParametroRamAlerta = 60;
                        var ParametroDiscoAlerta = 70;
                        var ParametroCpuAlerta = 50;

                        var ParametroRamCritico = 80;
                        var ParametroDiscoCritico = 90;
                        var ParametroCpuCritico = 70;
          
                        computadores.forEach((computador) => {
          
                            var modelo = computador.modelo;
                            var numSerie = computador.numSerie;
                            var idComputador = computador.id;

                            var estadoRam = computador.medidaRam;
                            var estadoDisco = computador.medidaDisco;
                            var estadoCpu = computador.medidaCpu;

                            var status = "statusVerde";
                            // var Parametro = "Parametro";
                            
                            // var descricao = "Normal";
                            // var qntAlerta = 0;
                            // var qntCritico = 0;

                            if(estadoRam >= ParametroRamAlerta){
                                status = "statusAmarelo";
                               
                            }
                            if(estadoDisco >= ParametroDiscoAlerta){
                                status = "statusAmarelo";
                                
                            }
                            if(estadoCpu >= ParametroCpuAlerta){
                                status = "statusAmarelo";
                                
                            }
                            
                            if (estadoRam >= ParametroRamCritico) {
                                status = "statusVermelho";
                               
                            } 

                            if (estadoDisco >= ParametroDiscoCritico) {
                                status = "statusVermelho";
                               
                            } 
                            if (estadoCpu >= ParametroCpuCritico) {
                                status = "statusVermelho";
                            } 
                           

                        const li = document.createElement('li');
                        li.innerHTML = `
                        <div class="computador">
                        <div class="descricao">
                        <h2 class="tituloComputadores">${computador.modelo} : ${computador.numSerie}</h2>
                        <div class="status">
                            <p>status</p>
                            <div class="${status}"></div>
                        </div>
                        </div>
                        <button class="pointer" id="${idComputador}" onclick="acharId(${idComputador},'${modelo}', ${numSerie})">verificar</button>
                    </div>
                        `;
                     
          
                        ul.appendChild(li);
                    });
                    
                        // console.log(json);
                       
                        // console.log(json[0].modelo)
                        // var modelo = json[0].modelo;
                        // var numSerie = json[0].numSerie;
                        
          
                        // modeloPc.innerHTML = "modelo";
                       
          
                    }
      
                    

                // );

    //         } 
    
    //     })
    // }

    
    function filtrar(){
    var input,
    filter,
    ul,
    li,
    a,
    i,
    span,
    txtvalue,
    count = 0;

    input = document.getElementById('inputBusca');
    ul = document.getElementById('listaComputadores');

    filter = input.value.toUpperCase();

    li = ul.getElementsByTagName("li");
    //console.log(li);

    for (i = 0; i < li.length; i++) {
    //    a = li[i].getElementsByTagName("a")[0];
       a = li[i].getElementsByClassName("tituloComputadores")[0]

       txtvalue = a.textContent || a.innerText;

       if(txtvalue.toLocaleUpperCase().indexOf(filter) > -1){
        li[i].style.display = "";

        count++;

        // span = li[i].querySelector("tituloComputadores");
        // if(span){
        //     span.innerHTML = txtvalue.replace(new RegExp(filter, "gi"), (match)=>{
        //         return "<strong>" + match + "</strong>"
        //     })
        // }
       }else{
            li[i].style.display = "none";
        }
        
    }
    if(count === 0) ul.style.display = "none";
    else ul.style.display = "block";
}

