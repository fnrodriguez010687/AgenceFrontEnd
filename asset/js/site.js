const uri = 'https://localhost:7015/api/Desempeno';
let todos = [];

function getConsultores() {
  fetch(uri)
    .then(response => response.json())
    .then(data => _displayItems(data))
    .catch(error => console.error('Unable to get items.', error));
}

function _displayItems(data) {
  const select = document.getElementById('avaible');
  select.innerHTML = '';

  //_displayCount(data.length);
  //const button = document.createElement('button');

  data.forEach(item => {
    const option = document.createElement("option");
    option.value = item.co_Usuario;
    option.text = item.no_Usuario;
    select.appendChild(option);
  });
}
function getReceitas() {

    var startDate = document.getElementById("startDate").value;
    var endDate = document.getElementById("endDate").value;
    params ="datein = "+startDate;
    params = "&dateend = "+endDate;
    var select = document.getElementById('selected').options;
    var txt = "";
    var i;
    for (i = 0; i < select.length; i++) {
      
        txt = txt + "&consultor = "+select[i].value;
     
    }
    params= params+txt;
    fetch(`${uri}/?${params}`)
      .then(response => response.json())
      .then(data => _displayItems(data))
      .catch(error => console.error('Unable to get items.', error));
}
function _displayReceitas(data) {
    const parent = document.getElementById('showResult');
    parent.innerHTML = '';
  
    //_displayCount(data.length);
    //const button = document.createElement('button');
  
    data.forEach(item => {
      const option = document.createElement("option");
      option.value = item.co_Usuario;
      option.text = item.no_Usuario;
      select.appendChild(option);
    });

    function tableCreate() {
      var body = document.getElementsByTagName('body')[0];
      var tbl = document.createElement('table');
      
      tbl.setAttribute('class', 'table caption-top');
      data.f
      var tbdy = document.createElement('tbody');
      for (var i = 0; i < 3; i++) {
        var tr = document.createElement('tr');
        for (var j = 0; j < 2; j++) {
          if (i == 2 && j == 1) {
            break
          } else {
            var td = document.createElement('td');
            td.appendChild(document.createTextNode('\u0020'))
            i == 1 && j == 1 ? td.setAttribute('rowSpan', '2') : null;
            tr.appendChild(td)
          }
        }
        tbdy.appendChild(tr);
      }
      tbl.appendChild(tbdy);
      body.appendChild(tbl)
    }
    tableCreate();
  todos = data;
}