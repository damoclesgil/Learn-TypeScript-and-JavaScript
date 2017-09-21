function sum() {
    return 1 + 2;
};
console.log(sum());

var sum2 = function () {
    return 3 + 2;
};
console.log(sum2());

var sum3 = function otherSum() {
    // console.log(otherSum());
    return 5 + 8;
}
console.log(sum3());
// console.log(otherSum()); // Não da Certo Jovem, porque ta dentro da variavel lesa boy

// FUNÇÃO LOCAL ACTIVATE MODAFOCA
(function () {
    // console.log(1 + 2);
})();