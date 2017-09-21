var arr = [1, 2, 3, 4, 5, 6, 7];
var map = arr.map(function (item, index, array) {
    return {
        index: index,
        item: item
    };
});

console.log(arr, map);

var newArr = [];
arr.forEach(function (item, index, array) {
    newArr.push({
        index: index,
        item: item
    });
});

var filter = arr.filter(function (item, index, array) {
    return item > 2;

});
console.log(filter);