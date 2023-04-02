function Ticket(name, trainNo, trainName) {
  this.name = name;
  this.trainName = trainName;
  this.trainNo = trainNo;
  this.status = "Not Booked";
}

Ticket.prototype.bookTicket = function bookTicket(amount, source, destination) {
  this.amount = amount;
  this.source = source;
  this.destination = destination;
  this.status = "booked";
  this.pnr = (Math.random() * 100000000).toFixed(0).toString();
};

Ticket.prototype.cancelTicket = function cancelTicket() {
  this.status = "cancelled";
};

const anshuTicket = new Ticket("Anshu Raj", 14546, "hwh to ndls");

anshuTicket.bookTicket(100, "delhi", "howrah");

const rohanTicket = new Ticket("Rohan Raj", 56548, "hwh to rph");
rohanTicket.bookTicket(50, "howrah", "Asansol");

rohanTicket.cancelTicket();
console.log({
  anshuTicket,
  rohanTicket,
});
