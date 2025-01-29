import { VolumeUnits, Volume } from "./volume";

describe("Volume and equals", () => {
    it("two volumes of the same type and amount should equal one another", () => {
        const volume1 = new Volume(1, VolumeUnits.TEASPOON);
        const volume2 = new Volume(1, VolumeUnits.TEASPOON);

        expect(volume1.equals(volume2)).toBe(true);
    });
    it("two volumes of the same type and different amount should not equal one another", () => {
        const volume1 = new Volume(1, VolumeUnits.TEASPOON);
        const volume2 = new Volume(2, VolumeUnits.TEASPOON);

        expect(volume1.equals(volume2)).toBe(false);
    });
    it("two volumes of a different type and the same amount should not equal one another", () => {
        const volume1 = new Volume(1, VolumeUnits.TEASPOON);
        const volume2 = new Volume(1, VolumeUnits.TABLESPOON);

        expect(volume1.equals(volume2)).toBe(false);
    });
    it("two volumes of different type and different amount but equivalent should equal one another", () => {
        const volume1 = new Volume(3, VolumeUnits.TEASPOON);
        const volume2 = new Volume(1, VolumeUnits.TABLESPOON);

        expect(volume1.equals(volume2)).toBe(true);
    });
    it("two volumes of different type and different amount and not equivalent should not equal one another", () => {
        const volume1 = new Volume(3, VolumeUnits.TEASPOON);
        const volume2 = new Volume(2, VolumeUnits.TABLESPOON);

        expect(volume1.equals(volume2)).toBe(false);
    });
    it("two volumes with the first volume not a teaspoon but of the equivalent volume should equal one another,", () => {
        const volume1 = new Volume(1, VolumeUnits.TABLESPOON);
        const volume2 = new Volume(3, VolumeUnits.TEASPOON);

        expect(volume1.equals(volume2)).toBe(true);
    })

    describe.each([
        { unit: VolumeUnits.TABLESPOON, amount: 3 },
        { unit: VolumeUnits.OUNCE, amount: 6 },
        { unit: VolumeUnits.CUP, amount: 48 },
        { unit: VolumeUnits.PINT, amount: 96 },
        { unit: VolumeUnits.QUART, amount: 192 },
        { unit: VolumeUnits.GALLON, amount: 768 }
    ])(
        "check a volume is equal to equivalent teaspoon volume",
        ({ unit, amount }) => {
            test(`amount: ${amount} & unit: ${unit}`, () => {
                const volume1 = new Volume(amount, VolumeUnits.TEASPOON);
                const volume2 = new Volume(1, unit);

                expect(volume1.equals(volume2)).toBe(true);
            });
        }
    );

    describe("Adding Volumes", () => {
        it("adding 1 teaspoon volume to 1 teaspoon should equal 2 teaspoons", () => {
            const volume1 = new Volume(1, VolumeUnits.TEASPOON);
            const volume2 = new Volume(1, VolumeUnits.TEASPOON);
            const volume3 = new Volume(2, VolumeUnits.TEASPOON);

            const addedVolumes = volume1.add(volume2);

            expect(volume1.equals(addedVolumes)).toBe(false);
            expect(addedVolumes.equals(volume3)).toBe(true);
        })

        it("adding 1 tablespoon to 1 teaspoon should equal 4 teaspoons", () => {
            const volume1 = new Volume(1, VolumeUnits.TABLESPOON);
            const volume2 = new Volume(1, VolumeUnits.TEASPOON);
            const volume3 = new Volume(4, VolumeUnits.TEASPOON);

            expect(volume1.add(volume2).equals(volume3)).toBe(true);
        })
    })
});
