
// console.log('Arquivo js plotar graficos')

    // const ctx = document.getElementById('myChart');
    var dataCpu = [];
    var dataRam = [];
    var dataDisco = [];

    function atualizarDados(dataList){
    
      console.log('atualizar dados ==> ',dataList);
      dataCpu.push(dataList[0])
      dataRam.push(dataList[1])
      dataDisco.push(dataList[2])
      // graficos();

      if(dataCpu.length >= 7)dataCpu.pop(0)
        if(dataRam.length >= 7)dataRam.pop(0)
        if(dataDisco.length >= 7)dataDisco.pop(0)
          
    }
    
    // dados.datasets[0].data.push(registro.umidade);
  function graficos() {
    // function atualizar(){
    //   ctx.dataset[0].data.push()
    // }
    
   
    console.log(dataCpu);
    console.log(dataRam);
    // console.log(dataDisco);
    // let labels = [];

    let dados = {
      labels: ['16:00', '16:05', '16:10', '16:15', '16:20', '16:25'],
      datasets: [{
          label: 'CPU',
          data: [],
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          backgroundColor: 'rgb(75, 192, 192)',
          tension: 0.1
      }
    ]}


    const config = {
      type: 'line',
      data: dados,
  };


  const myChart = new Chart(
      document.getElementById('myChart'),
      config
  );

  // dados.datasets[0].data.push(dataList[0])
  // if(dados.datasets[0].data.length >= 7) dados.datasets[0].data.shift();
    // const ctx =  document.getElementById('myChart');
   

    // new Chart(ctx,{
    //     type: 'line',
    //     data: {
    //         labels: ['16:00', '16:05', '16:10', '16:15', '16:20', '16:25'],
            
    //         datasets: [{
    //             label: 'CPU',
    //             data: [], 
    //             fill: false,
    //             borderColor: 'rgb(75, 192, 192)',
    //             backgroundColor: 'rgb(75, 192, 192)',
    //             tension: 0.1
    //         }]
            
    //         },
    //         options: {
    //           plugins: {
    //             legend: {
    //                 labels: {
    //                     color: 'white' // Altera a cor do texto dos rótulos
    //                 }
    //             }
    //         },
    //     scales: {
    //       y: {
    //         ticks: {
    //           color: 'white' // Define a cor do texto para azul
    //         }
    //       },
    //       x: {
    //         ticks: {
    //           color: 'white' // Define a cor do texto para azul
    //         }
    //       }
    //     }
    //   }
    //        }
    //     );
        const dadosDoGrafico = myChart.data;

// Etiquetas (labels)
// const etiquetas = dadosDoGrafico.labels;

// Conjunto de dados (datasets)
// const conjuntoDeDados = 
// console.log('teste ===> ',conjuntoDeDados);
        const ctx2 =  document.getElementById('myChart2');

new Chart(ctx2,{
    type: 'line',
    color: '#fff',
    data: {
        labels: ['16:00', '16:05', '16:10', '16:15', '16:20', '16:25'],
        datasets: [{
            label: 'MEMÓRIA RAM',
            data: dataRam,
            fill: false,
            borderColor: 'red',
            backgroundColor: 'red',
            tension: 0.1,
        }]
        },
        options: {
          plugins: {
            legend: {
                labels: {
                    color: 'white' // Altera a cor do texto dos rótulos
                }
            }
        },
        scales: {
          y: {
            ticks: {
              color: 'white' // Define a cor do texto para azul
            }
          },
          x: {
            ticks: {
              color: 'white' // Define a cor do texto para azul
            }
          }
        }
      }
       }
    );

    const ctx3 =  document.getElementById('myChart3');
    new Chart(ctx3,{
    type: 'pie',
    data: {
        labels: ['usado', 'Livre'],
        datasets: [{
            label:  ['Disco'],
            data: [40, 60],
            fill: false,
            
            // backgroundColor: ['red', 'blue'],
            borderColor: ['red', 'blue'],
            tension: 0.1,
            
        },]
        },
        options: {
          plugins: {
            legend: {
                labels: {
                    color: 'white' // Altera a cor do texto dos rótulos
                }
            }
        },
        }
       }
    );
}

    // document.write('<script src="../JsDashboard/dashGeral.js"></script>');

    //  document.addEventListener("DOMContentLoaded", function() {
    
    //             acharId(idComputador, modelo, numSerie);
    //         });

    function qnt(qntM, poucoEsp, poucaRa, criticos, alertas){
          qntMaquinas.innerHTML = qntM;
          PoucoEspaco.innerHTML = poucoEsp;
          poucaRam.innerHTML = poucaRa;
          componentesCriticos.innerHTML = criticos;
          componentesAlerta.innerHTML = alertas;
    }
  

    // function acharId(idComputador, modelo, numSerie){
    //     // window.location = '../usuario/dashboard.html';
    //     console.log("entrou na função")
    //     // var model = modelo;
    //     // var serie = numSerie;
    //    console.log('função achar id ===> ',idComputador)
    //    console.log(modelo)
    
    //    console.log('função achar id ===> ', numSerie)
    //    sessionStorage.numeroSerie = numSerie;
    //    sessionStorage.modelopc = modelo;

    // //    numeroSerie.innerHTML = numSerie;
    // //    modeloPc.innerHTML = modelo;
    
       
    // } 
    
