var basePrice = 100;
var discount = "10%";
var discountNumber = parseFloat(discount) / 100;

var finalPrice = basePrice - (basePrice * discountNumber);

console.log(finalPrice); 
