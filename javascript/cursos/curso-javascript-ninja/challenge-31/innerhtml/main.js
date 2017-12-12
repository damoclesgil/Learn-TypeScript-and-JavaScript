(function () {
  'use strict';

  var $div = document.querySelector('[data-js="main"]');
  console.log(Object.prototype.toString.call($div));
  console.log(typeof $div.innerHTML); //getter

  var $h2 = document.createElement('h2');
  $div.textContent = '<h2>Título 2</h2>'; //setter

  $div.innerHTML += '<h2>Título 2</h2>';

  // $div.innerHTML = '<h2>Título 2</h2>';
})();
