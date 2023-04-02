class Ticket {
  status = "Not Booked";

  constructor(name, trainNo, trainName) {
    this.name = name;
    this.trainName = trainName;
    this.trainNo = trainNo;
  }

  bookTicket(amount, source, destination) {
    this.amount = amount;
    this.source = source;
    this.destination = destination;
    this.status = "booked";
    this.pnr = (Math.random() * 100000000).toFixed(0).toString();
  }

  cancelTicket() {
    this.status = "cancelled";
  }
}

class TatkalTicket extends Ticket {
  fixedCharge = 150;
}

const anshuTatkalTicket = new TatkalTicket("Anshu", 15565, "Duranto Express");
const anshuTicket = new Ticket("Anshu", 15565, "Duranto Express");

console.log(anshuTatkalTicket.fixedCharge, anshuTicket.fixedCharge);
