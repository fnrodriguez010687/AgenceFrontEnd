(function () {
    'use strict'
  
    feather.replace({ 'aria-hidden': 'true' })
  
    // Graphs
    var ctx = document.getElementById('myChartPastel')
    // eslint-disable-next-line no-unused-vars
    var myChart = new Chart(ctx, {
      type: 'pie',
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
          backgroundColor:[ '#83B1FF', '#A5FFCB', '#F7FC88', '#FDBE7A', '#FE7978', '#7FDEFD', '#FC8AAA' ],
          hoverOffset: 4
          
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