
    const ctx =  document.getElementById('myChart');
    const ctx2 =  document.getElementById('myChart2');
    const ctx3 =  document.getElementById('myChart3');
    
    let myChart1, myChart2, myChart3;

    let dataCpu = []; 
    let labels1 = [];

    let dataRam = []; 
    let labels2 = [];

    let dataDisco = []; 
    
    

  function graficos() {
       myChart1 = new Chart(ctx,{
        type: 'line',
        data: {
            labels: labels1,
            
            datasets: [{
                label: 'CPU',
                data: dataCpu, 
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                backgroundColor: 'rgb(75, 192, 192)',
                tension: 0.1
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
              color: 'white' 
            }
          }
        }
      }
           }
        );

    myChart2 = new Chart(ctx2,{
      type: 'line',
      color: '#fff',
      data: {
          labels: labels2,
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
  

    new Chart(ctx3,{
    type: 'pie',
    data: {
        labels: ['usado', 'Livre'],
        datasets: [{
            label:  ['Disco'],
            data: dataDisco,
            fill: false,
            borderColor: ['red', 'blue'],
            tension: 0.1,
            
        },]
        },
        options: {
          plugins: {
            legend: {
                labels: {
                    color: 'white'
                }
            }
        },
        }
       }
    );
}

function fetchData(dataList) {
  const dateTimeString = dataList[3];
  const timeString = dateTimeString.substring(11, 19);
  ultimaAtualização.innerHTML = timeString;

    //  console.log('time string ==> ',timeString); // "19:07"
    //  console.log('data list fetch data ==> ',dataList);

  dataDisco = []
  // Cpu
  dataCpu.push(Number(dataList[0]));
  labels1.push(timeString);

  // Ram
  dataRam.push(dataList[1]);
  labels2.push(timeString);

 var discoUsado = dataList[2]
 var discoDisponivel = discoUsado - 100

 dataDisco.push(discoUsado)
 dataDisco.push(discoDisponivel)
  
  if (labels2.length > 7) {
      labels2.shift();
      dataRam.shift();
  }
  if (labels1.length > 7) {
      labels1.shift();
      dataCpu.shift();
  }
  myChart1.update();
  myChart2.update();
  myChart3.update();
}

    function qnt(qntM, poucoEsp, poucaRa, criticos, alertas){
          qntMaquinas.innerHTML = qntM;
          PoucoEspaco.innerHTML = poucoEsp;
          poucaRam.innerHTML = poucaRa;
          componentesCriticos.innerHTML = criticos;
          componentesAlerta.innerHTML = alertas;
    }


 
    
