function subtract(num1, num2) {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        return num1 - num2;
    }
    return 'Entre com two numbers jovem';
}

console.log(subtract(10, 2));
console.log(subtract('JS ', 2));
console.log(subtract({}, []));