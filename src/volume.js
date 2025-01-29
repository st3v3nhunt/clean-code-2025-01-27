import { Measurement } from './measurement.js';

export class Volume extends Measurement {
    constructor(amount, unit) {
        super(amount, unit);
    }

    add(other) {
        const newAmount = super.add(other);

        return new Volume(newAmount, new VolumeUnits());
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
        this.unit = unit// || VolumeUnits.BASEUNIT // Don't actually need this default as the switch statement handles it
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
