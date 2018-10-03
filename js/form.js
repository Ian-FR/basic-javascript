var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");
    var patient = obtemPacienteDoFormulario(form);
    var errors = patientValidation(patient);

    console.log(errors);
    
    if (errors.length > 0) {
        showErrorMessages(errors);
        return;
    }

    addPatient(patient);

    form.reset();

    var errors = document.querySelector('#error-messages');
    errors.innerHTML = '';

});

function obtemPacienteDoFormulario(form) {

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    return paciente;
}

function montaTr(paciente) {
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = dado;

    return td;
}

function showErrorMessages(errors) {
    var ul = document.querySelector('#error-messages');
    ul.innerHTML = '';

    errors.forEach(function(error) {
        var li = document.createElement('li');
        li.textContent = error;
        ul.appendChild(li);
    });
}

function patientValidation(patient) {
    var errors = [];

    if (patient.nome.length == 0) errors.push('O nome não pode ser em branco!');
    
    if (patient.altura.length == 0) errors.push('A altura não pode ser em branco!');
    
    if (patient.peso.length == 0) errors.push('O peso não pode ser em branco!');
    
    if (patient.gordura.length == 0) errors.push('A gordura não pode ser em branco!');

    if (!weightValidation(patient.peso)) errors.push('O peso é inválido!');

    if (!heightValidation(patient.altura)) errors.push('A altura é inválida!');

    return errors;
}

function addPatient(patient) {
    var patientTr = montaTr(patient);
    var table = document.querySelector('#tabela-pacientes');
    table.appendChild(patientTr);
}