    
    function dashboardInfo() {
       
        fetch("/dashboard/dadosDashboard", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                empresaServer: empresa,
                // senhaServer: senhaVar
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DA DASH!")

            if (resposta.ok) {
                console.log(resposta);

                resposta.json().then(json => {
                    const ul = document.getElementById('listaComputadores');

                    json.forEach((computador) => {
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
                    <button>verificar</button>
                </div>
                    `;
                    // <div class="status">
                    //     <p>status</p>
                    //     <div class="statusVerde"></div>
                    // </div>
                   
                    // <button>verificar</button>

                    ul.appendChild(li);
                });
                    console.log(json);
                    // console.log(JSON.stringify(json));
                    // console.log(json)
                    console.log(json[0].modelo)
                    var modelo = json[0].modelo;
                    var numSerie = json[0].numSerie;
                    // var  = json.id;

                    modeloPc.innerHTML = modelo;
                    numeroSerie.innerHTML = numSerie;

                });

            } 
    
        })
    }

    
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

        span = li[i].querySelector("tituloComputadores");
        if(span){
            span.innerHTML = txtvalue.replace(new RegExp(filter, "gi"), (match)=>{
                return "<strong>" + match + "</strong>"
            })
        }
       }else{
            li[i].style.display = "none";
        }
        
    }
    if(count === 0) ul.style.display = "none";
    else ul.style.display = "block";
}

