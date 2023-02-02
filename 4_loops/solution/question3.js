// Write table for 19 using loop

const tableNumber = parseInt(prompt("Enter table number"));

for (let i = 1; i <= 10; i++) {
  console.log(`${tableNumber} X ${tableNumber}  =   ${i * tableNumber}  `);
}
