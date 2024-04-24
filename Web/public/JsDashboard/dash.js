    
        function acharId(idComputador, modelo, numSerie){
            // var model = modelo;
            // var serie = numSerie;
           console.log(idComputador)
           console.log(modelo)
        //    console.log(serie)
           console.log(numSerie)
           numeroSerie.innerHTML = numSerie;
           modeloPc.innerHTML = modelo;

           
    } 
   
 
        function dashboardInfo() {
  
            const computadores = [{
                    id: 1,
                modelo: "Dell",
                numSerie: "1212"},{
                    id: 2,
                modelo: "Dell",
                numSerie: "1414"},{
                    id: 3,
                modelo: "Dell",
                numSerie: "1545"},{
                    id: 4,
                modelo: "Acer",
                numSerie: "3434"},{
                    id: 5,
                modelo: "Positivo",
                numSerie: "2232"},{
                    id: 6,
                modelo: "Lg",
                numSerie: "3232"}];

                
           
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
                            var listaId = [];
                            var listaNum = [];
                            var listaModelo = [];
                       
           
                        computadores.forEach((computador) => {
                            listaId.push(computador.id);
                            listaNum.push(computador.numSerie);
                            listaModelo.push(computador.modelo);

                            numeroSerie.innerHTML = listaNum[0];
                            modeloPc.innerHTML = listaModelo[0];
                            
                            console.log(listaId, "lista de id")
                            var modelo = computador.modelo;
                            var numSerie = computador.numSerie;
                            var idComputador = computador.id;
                           // console.log(modelo)
                           // console.log(numSerie)
                           // console.log(idComputador)
                            

                        const li = document.createElement('li');
                        li.innerHTML = `
                        <div class="computador">
                        <div class="descricao">
                        <h2 class="tituloComputadores">${computador.modelo} : ${computador.numSerie}</h2>
                        <div class="status">
                            <p>status</p>
                            <div class="statusVerde"></div>
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

