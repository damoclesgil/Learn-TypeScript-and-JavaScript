var total = 99.99;
var freeShipping = false;

if (total >= 50.00)
    freeShipping = true;

console.log(freeShipping);

var total = 99.99;
var freeShipping;

if (total >= 100.00)
    freeShipping = true;

else
    freeShipping = false;

console.log(freeShipping);

// ERRADO
var total = 99.99;
var freeShipping;
var savings;

if (total >= 100.00)
    freeShipping = true;
savings = 29.99;
};
else {
    freeShipping = false;
    savings = 0;
}

console.log(freeShipping);

// SWITCH
var orderType = 'business';
var shipMethod;

if (orderType == 'business')
    shipMethod = 'FedEx';
else if (orderType == 'personal')
    shipMethod = 'USP Ground';
else
    shipMethod = 'USPS';
console.log(shipMethod);

// SWITCH
var orderType = 'business';
var shipMethod;

switch (orderType) {
    case 'business':
        shipMethod = 'FedEx';
        break;
    case 'personal':
        shipMethod = 'USP Ground';
        break;
    default:
        shipMethod = 'USPS';
}
console.log(shipMethod);


var orderType = 'unknow';
var shipMethod;

switch (orderType) {
    case 'busniess':
    case 'personal':
        shipMethod = 'UPS Ground';
        break;
    default:
        shipMethod = 'USPS';
}
console.log(shipMethod);

//Diferencial do JavaScript em relação as outras linguagens
var orderTotal = 99.99;
var discount;

switch (true) {
    case orderTotal >= 50 && orderTotal < 75:
        discount = 10;
        break;
    case orderTotal >= 75 && orderTotal < 100:
        discount = 20;
        break;
    case orderTotal >= 100:
        discount = 30;
        break;
    default:
        discount = 0;
}
console.log(discount);