import { Measurement } from './measurement.js';

export class Length extends Measurement {
    constructor(amount, unit) {
        super(amount, unit)
    }

    add(other) {
        const newAmount = super.add(other);
        return new Length(newAmount, new LengthUnits(LengthUnits.INCH));
    }
}

export class LengthUnits {
    static INCH = 'inch';
    static FOOT = 'foot';
    static YARD = 'yard';
    static FURLONG = 'furlong';
    static MILE = 'mile';

    constructor(unit) {
        this.unit = unit;
    }

    convertAmountToBaseUnit(amount) {
        switch (this.unit) {
            case LengthUnits.FOOT:
                return amount * 12;
            case LengthUnits.YARD:
                return amount * 36;
            case LengthUnits.FURLONG:
                return amount * 7920;
            case LengthUnits.MILE:
                return amount * 63360;
            default:
                return amount;
        }
    }
}
