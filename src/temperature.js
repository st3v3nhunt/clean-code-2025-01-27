import { Measurement } from "./measurement";

export class Temperature extends Measurement {
    constructor(amount, unit) {
        super(amount, unit);
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
