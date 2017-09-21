(function () {
  'use strict';

  var ajax = new XMLHttpRequest();
  // console.log(ajax.readyState);
  ajax.open('GET', 'data.json');
  ajax.send();

  console.log('Carregando...');
  var response = '';
  ajax.addEventListener('readystatechange', function () {
    if (isRequestOk()) {
      // var data = JSON.parse(ajax.responseText);
      // console.log('Requisição Ok\n', JSON.parse(ajax.responseText));
      try {
       response = JSON.parse(ajax.responseText);
      } catch (e) {
        response = ajax.responseText;
      }
      console.log(response);
    }
  }, false);

  function isRequestOk() {
    return ajax.readyState === 4 && ajax.status === 200;
  }

})();
