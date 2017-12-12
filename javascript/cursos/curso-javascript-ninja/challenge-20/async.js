(function (win, doc) {
  'use strict';

  console.log('inicio');
  // setInterval(function () {
  //   console.log('executou setInterval');
  // }, 1000);

  var counter = 0;
  function timer() {
    console.log('timer', counter++);
    if (counter > 3)
      return;
    setTimeout(timer, 1000);
  }
  timer();
  
})(window, document);