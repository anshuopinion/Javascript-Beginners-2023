const priceValue = prompt("Enter the price of the item");
const FIXED_DELIVERY_FEE = 50;
function calculateTotalPrice(price, fixedDeliveryFee) {
  const convertedPrice = parseInt(price);

  if (isNaN(convertedPrice)) {
    alert("Please enter validate price");
    return;
  }
  return convertedPrice + fixedDeliveryFee;
}
const total = calculateTotalPrice(priceValue, 10);

if (total) {
  alert("The total price is $" + total);
}
