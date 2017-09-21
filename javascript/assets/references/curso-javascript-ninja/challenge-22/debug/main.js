(function () {
  'use strict';

var arr = [
  {item: 'Arroz', price: 'R$ 10', weight: '5kg'},
  {item: 'Feijão', price: 'R$ 12', weight: '2kg'},
  {item: 'Macarrão', price: 'R$ 20',  weight: '10kg'},
  {item: 'Carne', price: 'R$ 30',  weight: '5kg'}
];
console.table(arr);


  // console.time('Calculando tempo do for');
  // for (var i = 0; i < 1000; i++) {
  //   console.log('arroz...');
  // };
  // console.timeEnd('Calculando tempo do for');



  // function sum() {
  //   // debugger;
  //   return Array.prototype.reduce.call(arguments, function (accumulated, item) {
  //     return accumulated + item;
  //   });
  // }
  // console.log(sum(1, 21, 31, 4));
})();
