var lineItemCount = 3;
var currentItem = 0;
while (currentItem < lineItemCount) {
    console.log("item: " + currentItem);
    currentItem++;
};

var lineItemCount = 3;
var currentItem = 0;
while (currentItem < lineItemCount)
    console.log("item: " + currentItem++);

var lineItemCount = 3;
var currentItem = 0;
while (currentItem < lineItemCount)
    console.log("item: " + currentItem);

var lineItemCount = 3;
var currentItem = undefined;
do {
    console.log("item: " + currentItem);
    currentItem++;
} while (currentItem < lineItemCount);