export class Volume {
    constructor(amount, unit) {
        this.amount = amount;
        this.unit = unit;
    }

    equals(other) {
        const thisBaseAmount = this.#convertAmountToBaseUnit(this.unit, this.amount)
        const otherBaseAmount = this.#convertAmountToBaseUnit(other.unit, other.amount)
        return thisBaseAmount === otherBaseAmount
    }

    add(other) {
        const thisBaseAmount = this.#convertAmountToBaseUnit(this.unit, this.amount)
        const otherBaseAmount = this.#convertAmountToBaseUnit(other.unit, other.amount)
        const newAmount = thisBaseAmount + otherBaseAmount;

        return new Volume(newAmount, Units.TEASPOON);
    }

    #convertAmountToBaseUnit(unit, amount) {
        switch (unit) {
            case Units.TABLESPOON:
                return amount * 3;
            case Units.OUNCE:
                return amount * 6;
            case Units.CUP:
                return amount * 48;
            case Units.PINT:
                return amount * 96;
            case Units.QUART:
                return amount * 192;
            case Units.GALLON:
                return amount * 768;
            default:
                return amount;
        }

    }
}

export class Units {
    static TEASPOON = 'tsp';
    static TABLESPOON = 'tbsp';
    static OUNCE = 'oz';
    static CUP = 'cup';
    static PINT = 'pint';
    static QUART = 'quart';
    static GALLON = 'gallon';
}

// conversions to teaspoon
// 1 tbsp = 3 tsp
// 1 oz = 2 tbsp = 6 tsp
// 1 cup = 8 oz = 16 tbsp = 48 tsp
// 1 pint = 2 cups = 96 tsp
// 1 quart = 2 pints = 192 tsp
// 1 gallon = 4 quarts = 768 tsp
