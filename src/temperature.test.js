import { TemperatureUnits, Temperature } from "./temperature";

describe("Comparing Temperature", () => {
    it("32 Fahrenheit is 0 Celsius", () => {
        const celsiusTemp = new Temperature(0, new TemperatureUnits(TemperatureUnits.CELSIUS));
        const fahrenheitTemp = new Temperature(32, new TemperatureUnits(TemperatureUnits.FAHRENHEIT));

        expect(fahrenheitTemp.equals(celsiusTemp)).toBe(true);
    });
    it("32 Fahrenheit is not 1 Celsius", () => {
        const celsiusTemp = new Temperature(1, new TemperatureUnits(TemperatureUnits.CELSIUS));
        const fahrenheitTemp = new Temperature(32, new TemperatureUnits(TemperatureUnits.FAHRENHEIT));

        expect(fahrenheitTemp.equals(celsiusTemp)).toBe(false);
    });

    describe.each([
        { celsiusTemp: 0, fahrenheitTemp: 32 },
        { celsiusTemp: 100, fahrenheitTemp: 212 },
        { celsiusTemp: 10, fahrenheitTemp: 50 },
        { celsiusTemp: -40, fahrenheitTemp: -40 }
    ])(
        "Check a Celsius temperature is equal to equivalent Fahrenheit temperature",
        ({ celsiusTemp, fahrenheitTemp }) => {
            test(`celsiusTemp: ${celsiusTemp} & fahrenheitTemp: ${fahrenheitTemp}`, () => {
                const temp1 = new Temperature(celsiusTemp, new TemperatureUnits(TemperatureUnits.CELSIUS));
                const temp2 = new Temperature(fahrenheitTemp, new TemperatureUnits(TemperatureUnits.FAHRENHEIT));

                expect(temp1.equals(temp2)).toBe(true);
            });
        }
    )
})

describe("Adding Temperature", () => {
    it("1 Celsius add 1 Celsius is 2 Celsius", () => {
        const temp1 = new Temperature(1, new TemperatureUnits(TemperatureUnits.CELSIUS));
        const temp2 = new Temperature(1, new TemperatureUnits(TemperatureUnits.CELSIUS));
        const expected = new Temperature(2, new TemperatureUnits(TemperatureUnits.CELSIUS));

        expect(temp1.add(temp2).equals(expected)).toBe(true);
    });
    it("32 Fahrenheit add 32 Fahrenheit is 64 Fahrenheit", () => {
        const temp1 = new Temperature(32, new TemperatureUnits(TemperatureUnits.FAHRENHEIT));
        const temp2 = new Temperature(32, new TemperatureUnits(TemperatureUnits.FAHRENHEIT));
        const expected = new Temperature(64, new TemperatureUnits(TemperatureUnits.FAHRENHEIT));

        expect(temp1.add(temp2).equals(expected)).toBe(true);
    });
    it("50 Fahrenheit add 10 Celsius is equal to 20 Celsius", () => {
        const temp1 = new Temperature(10, new TemperatureUnits(TemperatureUnits.CELSIUS));
        const temp2 = new Temperature(50, new TemperatureUnits(TemperatureUnits.FAHRENHEIT));
        const expected = new Temperature(20, new TemperatureUnits(TemperatureUnits.CELSIUS));

        expect(temp1.add(temp2).equals(expected)).toBe(true);
    });
    it("10 Celsius add 50 Fahrenheit is equal to 68 Fahrenheit", () => {
        const temp1 = new Temperature(50, new TemperatureUnits(TemperatureUnits.FAHRENHEIT));
        const temp2 = new Temperature(10, new TemperatureUnits(TemperatureUnits.CELSIUS));
        const expected = new Temperature(68, new TemperatureUnits(TemperatureUnits.FAHRENHEIT));
        console.log(`expected: ${expected.amount}, ${expected.unit.unit}`);

        expect(temp1.add(temp2).equals(expected)).toBe(true);
    });
})
