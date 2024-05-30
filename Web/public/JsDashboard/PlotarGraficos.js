
// console.log('Arquivo js plotar graficos')

    // const ctx = document.getElementById('myChart');
    var dataCpu = [];
    var dataRam = [];
    var dataDisco = [];

    function teste(){
      // while(true){
        console.log('teste set interval ====>');
        // }
      }
      // setInterval(teste, 5000);

    function graficos(resposta) {

  //     console.log('iniciando plotagem do gráfico...');

  //     // Criando estrutura para plotar gráfico - labels
  //     let labels = [];

  //     // Criando estrutura para plotar gráfico - dados
  //     let dados = {
  //         labels: labels,
  //         datasets: [{
  //             label: 'Umidade',
  //             data: [],
  //             fill: false,
  //             borderColor: 'rgb(75, 192, 192)',
  //             tension: 0.1
  //         },
  //         {
  //             label: 'Temperatura',
  //             data: [],
  //             fill: false,
  //             borderColor: 'rgb(199, 52, 52)',
  //             tension: 0.1
  //         }]
      };

  //     console.log('----------------------------------------------')
  //     console.log('Estes dados foram recebidos pela funcao "obterDadosGrafico" e passados para "plotarGrafico":')
  //     console.log(resposta)

  //     // Inserindo valores recebidos em estrutura para plotar o gráfico
  //     for (i = 0; i < resposta.length; i++) {
  //         var registro = resposta[i];
  //         labels.push(registro.momento_grafico);
  //         dados.datasets[0].data.push(registro.umidade);
  //         dados.datasets[1].data.push(registro.temperatura);
  //     }

  //     // console.log('----------------------------------------------')
  //     // console.log('O gráfico será plotado com os respectivos valores:')
  //     // console.log('Labels:')
  //     // console.log(labels)
  //     // console.log('Dados:')
  //     // console.log(dados.datasets)
  //     // console.log('----------------------------------------------')

  //     // Criando estrutura para plotar gráfico - config
  //     const config = {
  //         type: 'line',
  //         data: dados,
  //     };

  //     // Adicionando gráfico criado em div na tela
  //     let myChart = new Chart(
  //         document.getElementById(`myChartCanvas${idAquario}`),
  //         config
  //     );

  //     // setTimeout(() => atualizarGrafico(idAquario, dados, myChart), 2000);
  // }

    

  function graficos() {
    // function atualizar(){
    //   ctx.dataset[0].data.push()
    // }
    
   
    // console.log(dataCpu);
    // console.log(dataRam);
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

  myChart.update();
  console.log('passou no update do chat');

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



    function qnt(qntM, poucoEsp, poucaRa, criticos, alertas){
          qntMaquinas.innerHTML = qntM;
          PoucoEspaco.innerHTML = poucoEsp;
          poucaRam.innerHTML = poucaRa;
          componentesCriticos.innerHTML = criticos;
          componentesAlerta.innerHTML = alertas;
    }

    
    function atualizarDados(dataList){
    
      console.log('atualizar dados ==> ',dataList);
      dataCpu.push(Number(dataList[0]))
      dataRam.push(dataList[1])
      dataDisco.push(dataList[2])
      console.log('data cpu ===> ',dataCpu);

      if(dataCpu.length >= 7)dataCpu.pop(0)
        if(dataRam.length >= 7)dataRam.pop(0)
        if(dataDisco.length >= 7)dataDisco.pop(0)
          
          // myChart.update();
    }
  

 
    
