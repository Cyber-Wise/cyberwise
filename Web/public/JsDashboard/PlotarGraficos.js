
console.log('Arquivo js plotar graficos')

    // const ctx = document.getElementById('myChart');
 function graficos() {
      const ctx =  document.getElementById('myChart');

    new Chart(ctx,{
        type: 'line',
        data: {
            labels: ['16:00', '16:05', '16:10', '16:15', '16:20', '16:25'],
            
            datasets: [{
                label: 'CPU',
                data: [65, 59, 80, 81, 56, 55, 40],
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
              color: 'white' // Define a cor do texto para azul
            }
          }
        }
      }
           }
        );

        const ctx2 =  document.getElementById('myChart2');

new Chart(ctx2,{
    type: 'line',
    color: '#fff',
    data: {
        labels: ['16:00', '16:05', '16:10', '16:15', '16:20', '16:25'],
        datasets: [{
            label: 'MEMÓRIA RAM',
            data: [90, 39, 50, 81, 56, 55, 70],
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
    
