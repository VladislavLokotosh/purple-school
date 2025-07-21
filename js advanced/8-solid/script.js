class Billing {
    constructor(amount) {
        this.amount = amount;
    }

    calculateTotal() {
        return this.amount;
    }
}

class FixedBilling extends Billing {
    constructor(amount) {
        super(amount);
    }
}

class HourBilling extends Billing {
    constructor(amount, hours) {
        super(amount);
        this.hours = hours;
    }

    calculateTotal() {
        return this.amount * this.hours;
    }
}

class ItemBilling extends Billing {
    constructor(amount, itemCount) {
        super(amount);
        this.itemCount = itemCount;
    }

    calculateTotal() {
        return this.amount * this.itemCount;
    }
}


const fixedInvoice = new FixedBilling(1000);
console.log(fixedInvoice.calculateTotal()); // 1000

const hourlyInvoice = new HourBilling(150, 10);
console.log(hourlyInvoice.calculateTotal()); // 1500

const itemInvoice = new ItemBilling(50, 25);
console.log(itemInvoice.calculateTotal()); // 1250