var arr = [1, 2, 3, 4, 5, 6, 7];
var some = arr.some(function (item) {
    return item % 2 === 0;
});
console.log(some); // Um item

// var every = arr.every(function (item) {
//     console.log(item);
//     return item < 8;
// });
// console.log(every);  // Todos Items

// var sum = 0;
// arr.forEach(function(item){
//     sum += item;
// });

// console.log( sum );