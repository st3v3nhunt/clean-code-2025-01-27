export class Measurement {
    constructor(amount, unit) {
        this.amount = amount;
        this.unit = unit;
    }

    equals(other) {
        const thisBaseAmount = this.unit.convertAmountToBaseUnit(this.amount)
        const otherBaseAmount = other.unit.convertAmountToBaseUnit(other.amount)
        return thisBaseAmount === otherBaseAmount
    }

    add(other) {
        const thisBaseAmount = this.unit.convertAmountToBaseUnit(this.amount)
        const otherBaseAmount = other.unit.convertAmountToBaseUnit(other.amount)
        return thisBaseAmount + otherBaseAmount;
    }

}
