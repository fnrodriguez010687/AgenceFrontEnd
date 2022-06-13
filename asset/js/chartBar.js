(function () {
    'use strict'
  
    feather.replace({ 'aria-hidden': 'true' })
  
    // Graphs
    var ctx = document.getElementById('myChartBar')
    // eslint-disable-next-line no-unused-vars
    var myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: [
          'Sunday',
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday'
        ],
        datasets: [{
          data: [
            15339,
            21345,
            18483,
            24003,
            23489,
            24092,
            12034
          ],
          backgroundColor:[ '#A0C2FE', '#CCFFE3', '#FDFFCC', '#FFDCB3', '#FFB6B5', '#C2F0FF', '#F9ADC2' ],
          borderColor: ['#005DFF', '#03FF7C', '#F5FF04', '#FF8604', '#FC0805', '#04BFFC', '#F7225E'],
          borderWidth: 2
          
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    })
  })()