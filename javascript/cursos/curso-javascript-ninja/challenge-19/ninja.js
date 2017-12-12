(function (win) {
  'use strict';
  var name = prompt('Qual é o seu name?')
  if (name)
    console.log('Olá', name)
  else
    console.log('Não respondeu :(');
  })(window);