var botaoAdd = document.querySelector('#buscar-pacientes');

botaoAdd.addEventListener('click', function() {
  var xhr = new XMLHttpRequest();
  xhr.open('get', 'https://api-pacientes.herokuapp.com/pacientes');
  xhr.addEventListener('load', function () {
    console.log(this.responseText);
  });
  xhr.send();

  // TODO: adicionar os pacientes buscados na lista
  
})