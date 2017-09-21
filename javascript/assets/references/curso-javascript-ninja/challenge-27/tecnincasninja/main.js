(function () {
  'use strict';

  // var arr = [1, 2, 3, 4, 5];
  // var $divs = document.querySelectorAll('div');
  // var $divsCopy = Array.prototype.slice.call($divs);
  // var arr2 = arr.slice();
  // console.log(arr, arr2, arr === arr2);
  // console.log($divs, $divsCopy, $divs === $divs.$divsCopy)

  // console.log({prop1: 1, prop2: 2 }.toString());

  var arr = [1, 2, 3];

  function myFunc() {
    console.log(Object.prototype.toString.call(arguments));
  }
  myFunc();
  // console.log(typeof arr);

})();
