(function (win, doc) {
  'use strict';

  // $inputUsername.value = 'Dâmocles Gil';
  // $inputPassword.value = '123456';
  // console.log($inputUsername, $inputPassword);
  
  const $inputUsername = doc.querySelector('#username');
  const $inputPassword = doc.querySelector('#password');
  const $button = doc.querySelector('#button');

  $button.addEventListener('click', function(event){
    event.preventDefault();

    console.log('Click no botão');

  },false);

})(window, document);