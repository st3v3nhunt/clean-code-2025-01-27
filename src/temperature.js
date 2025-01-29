import { Measurement } from "./measurement";

export class Temperature extends Measurement {
    constructor(amount, unit) {
        super(amount, unit);
    }

    add(other) {
        let newAmount
        let newUnit
        if (this.unit.unit === other.unit.unit) {
            newAmount = this.amount + other.amount;
            newUnit = this.unit.unit
        } else {
            newAmount = super.add(other);
            newUnit = other.unit
        }

        return new Temperature(newAmount, new TemperatureUnits(newUnit));
    }
}

export class TemperatureUnits {
    static FAHRENHEIT = 'fahrenheit';
    static CELSIUS = 'celsius';

    constructor(unit) {
        this.unit = unit;
    }

    convertAmountToBaseUnit(amount) {
        switch (this.unit) {
            case TemperatureUnits.FAHRENHEIT:
                return (amount - 32) * 5 / 9
            default:
                return amount;
        }
    }
}
