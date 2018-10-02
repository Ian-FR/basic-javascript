var filterField = document.querySelector('#filtrar-tabela');

filterField.addEventListener('input', function() {
  var pacientes = document.querySelectorAll('.paciente');
  
  for (let i = 0; i < pacientes.length; i++) {
    var nomePaciente = pacientes[i].querySelector('.info-nome').textContent;
  }

});
