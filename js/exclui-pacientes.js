var tabela = document.querySelector('table');

tabela = document.addEventListener('dblclick', function(event){
  
  var td = event.target;
  
  if (td.tagName == 'TD') {
    
    td.parentNode.classList.add('fadeOut');
    
    setTimeout(function() {
      td.parentNode.remove();
    }, 500);
  }
});