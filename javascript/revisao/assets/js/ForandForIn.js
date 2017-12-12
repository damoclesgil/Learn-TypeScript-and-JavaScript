var lineItemCount = 3;
var i = 0;

for (; i < lineItemCount; i++)
    console.log(i);

var lineItemCount = 5;
for (var i = 0; i < lineItemCount; i++) {
    if (i == 1)
        continue;
    console.log(i);
}

var lineItemCount = 5;
outerLoop:
    for (var i = 0; i < lineItemCount; i++) {
        for (var j = 0; j < 3; j++) {
            if (j == 1)
                continue outerLoop;
        }
        console.log(i);
    }

var lineItem = {
    product: 'Widget 1',
    quantity: 4,
    price: 9.50
};

for (var field in lineItem)
    console.log(field);

var lineItem = {
    product: 'Widget 1',
    quantity: 4,
    price: 9.50
};

for (var field in lineItem)
    console.log(field + " : " + lineItem[field]);