var arr = [1, 2, 3, 4, 5];
var reduce = arr.reduce(function (acumulado, atual, index, array) {
    return acumulado + atual;
}, 0);

/*
1ª - 0 + 1 = 1
2ª - 1 + 2 = 3
3ª - 3 + 3 = 6
4ª - 6 + 4 = 10
5ª - 10 + 5 = 15
*/

console.log(reduce);


var arr2 = ['G', 'I', 'L'];
var reduceRight = arr2.reduceRight(function (acumulado, atual, index, array) {
    return acumulado + atual;
});

console.log(reduceRight);