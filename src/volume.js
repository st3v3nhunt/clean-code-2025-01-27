export class Volume {
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
        const newAmount = thisBaseAmount + otherBaseAmount;

        return new Volume(newAmount, new VolumeUnits(VolumeUnits.TEASPOON));
    }

}

export class VolumeUnits {
    static TEASPOON = 'tsp';
    static TABLESPOON = 'tbsp';
    static OUNCE = 'oz';
    static CUP = 'cup';
    static PINT = 'pint';
    static QUART = 'quart';
    static GALLON = 'gallon';

    constructor(unit) {
        this.unit = unit;
    }

    convertAmountToBaseUnit(amount) {
        switch (this.unit) {
            case VolumeUnits.TABLESPOON:
                return amount * 3;
            case VolumeUnits.OUNCE:
                return amount * 6;
            case VolumeUnits.CUP:
                return amount * 48;
            case VolumeUnits.PINT:
                return amount * 96;
            case VolumeUnits.QUART:
                return amount * 192;
            case VolumeUnits.GALLON:
                return amount * 768;
            default:
                return amount;
        }
    }
}

// conversions to teaspoon
// 1 tbsp = 3 tsp
// 1 oz = 2 tbsp = 6 tsp
// 1 cup = 8 oz = 16 tbsp = 48 tsp
// 1 pint = 2 cups = 96 tsp
// 1 quart = 2 pints = 192 tsp
// 1 gallon = 4 quarts = 768 tsp
