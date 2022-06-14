const uri = 'https://localhost:7015/api/Desempeno';
let todos = [];

function getItems() {
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

  todos = data;
}