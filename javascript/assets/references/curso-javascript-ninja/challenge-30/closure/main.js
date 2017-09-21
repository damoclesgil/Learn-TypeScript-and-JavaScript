(function () {
  'use strict';

  var scope = 'global scope';

  function checkScope() {
    var scope = 'local scope';

    function func() {
      return scope;
    }
    return func;
  }
  console.log(checkScope());


  var increment = (function () {
    var counter = 0;
    return function () {
      return counter++;
    };
  })();

  // function otherFunction() {
  //   counter = 100;
  // }

  // otherFunction();

  console.log(increment());
  console.log(increment());
  console.log(increment());
  console.log(increment());

})();
