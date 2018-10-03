var botaoAdd = document.querySelector('#buscar-pacientes');

botaoAdd.addEventListener('click', function() {
  var xhr = new XMLHttpRequest();
  
  xhr.open('get', 'https://api-pacientes.herokuapp.com/pacientes');
  
  xhr.addEventListener('load', function () {
    var erroAjax = document.querySelector('#erro-ajax');
    if (this.status == 200) {
      erroAjax.classList.add('invisible');

      var patients = JSON.parse(this.responseText);
      
      patients.forEach(patient => {
        addPatient(patient);
      });      
    } else {
      erroAjax.classList.remove('invisible');
    }
    
  });

  xhr.send();

})