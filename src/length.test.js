import { Length, LengthUnits } from './length';

describe('Length', () => {
    it('two lengths of the same type and different amounts should not equal one another', () => {
        const inch = new LengthUnits(LengthUnits.INCH);
        const length1 = new Length(1, inch);
        const length2 = new Length(2, inch);

        expect(length1.equals(length2)).toBe(false);
    });

    it('two lengths of different types and the same amount should equal one another', () => {
        const inch = new LengthUnits(LengthUnits.INCH);
        const foot = new LengthUnits(LengthUnits.FOOT);
        const length1 = new Length(1, inch);
        const length2 = new Length(1, foot);

        expect(length1.equals(length2)).toBe(false);
    });

    describe.each([
        { unit: LengthUnits.INCH, amount: 1 },
        { unit: LengthUnits.FOOT, amount: 12 },
        { unit: LengthUnits.YARD, amount: 36 },
        { unit: LengthUnits.FURLONG, amount: 7920 },
        { unit: LengthUnits.MILE, amount: 63360 }
    ])(
        "check a length is equal to equivalent inch length",
        ({ unit, amount }) => {
            test(`amount: ${amount} & unit: ${unit}`, () => {
                const length1 = new Length(amount, new LengthUnits(LengthUnits.INCH));
                const length2 = new Length(1, new LengthUnits(unit));

                expect(length1.equals(length2)).toBe(true);
            });
        }
    );
})

describe("Adding Lengths", () => {
    it("adding 1 inch to another inch should equal to 2 inches", () => {
        const length1 = new Length(1, new LengthUnits(LengthUnits.INCH));
        const length2 = new Length(1, new LengthUnits(LengthUnits.INCH));
        const length3 = new Length(2, new LengthUnits(LengthUnits.INCH));

        const addedLengths = length1.add(length2);

        expect(length1.equals(addedLengths)).toBe(false);
        expect(addedLengths.equals(length3)).toBe(true);
    })

    it("adding 1 inch to 1 foot should equal 13 inches", () => {
        const length1 = new Length(1, new LengthUnits(LengthUnits.INCH));
        const length2 = new Length(1, new LengthUnits(LengthUnits.FOOT));
        const length3 = new Length(13, new LengthUnits(LengthUnits.INCH));

        expect(length1.add(length2).equals(length3)).toBe(true);
    })
})

// conversions for length
// 1 foot = 12 inches
// 1 yard = 3 feet = 36 inches
// 1 furlong = 220 yards = 7920 inches
// 1 mile = 8 furlongs = 63360 inches
