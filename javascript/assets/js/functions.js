function printOrder() {
    console.log('Printing order: ' + orderId);
};

printOrder('9002');

function calcTotalPrice(quantity, price) {
    console.log('Total Price: ' + (quantity * price));
};

calcTotalPrice(2, 3.00);

function calcTotalPrice(quantity, price, indefinido) {
    console.log(indefinido);
};

function calcTotalPrice(quantity, price) {
    return quantity * price;
};
var totalPrice = calcTotalPrice(2, 3.00);
console.log(totalPrice);

totalPrice = calcTotalPrice(3, 4.00);
console.log(totalPrice);

function getOrder() {
    //nothing returned
};
var order = getOrder();
console.log(order);

var activateOrder = function() {
    console.log('Order Actived.');
};

console.log(typeof activateOrder);
activateOrder();