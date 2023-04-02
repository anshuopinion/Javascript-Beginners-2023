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
  #fixedCharge = 150;
  #isRefundable = true;

  get fixedCharge() {
    return this.#fixedCharge;
  }

  bookTicket(amount, source, destination, isRefundable) {
    super.bookTicket(amount, source, destination);
    this.amount += this.#fixedCharge;
    this.#isRefundable === isRefundable;
  }

  set fixedCharge(charge) {
    if (typeof charge !== "number") {
      throw Error("Not a Number");
    }

    this.fixedCharge = charge;
  }
}

const anshuTatkalTicket = new TatkalTicket("Anshu", 15565, "Duranto Express");
const anshuTicket = new Ticket("Anshu Plain Ticket", 15565, "Duranto Express");

anshuTatkalTicket.bookTicket(500, "dhn", "rnc", false);
anshuTicket.bookTicket(500, "dhn", "rnc");
console.log(anshuTatkalTicket, anshuTicket);
