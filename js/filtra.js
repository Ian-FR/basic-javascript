var filterField = document.querySelector('#filtrar-tabela');

filterField.addEventListener('input', function() {
  var pacientes = document.querySelectorAll('.paciente');
  
  if (this.value.length != 0) {
    
    for (let i = 0; i < pacientes.length; i++) {
      var nomePaciente = pacientes[i].querySelector('.info-nome').textContent;
      var expression = new RegExp(this.value.toLowerCase(), 'i');
      
      if (!expression.test(nomePaciente)) {
        pacientes[i].classList.add('invisible');
      } else {
        pacientes[i].classList.remove('invisible');
      }
    }
  } else {
    for (let i = 0; i < pacientes.length; i++) {
      pacientes[i].classList.remove('invisible');
      
    }
  }

});
