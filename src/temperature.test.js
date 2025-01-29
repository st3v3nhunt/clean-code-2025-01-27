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
        "Check a celsius temperature is equal to equivalent fahrenheit temperature",
        ({ celsiusTemp, fahrenheitTemp }) => {
            test(`celsiusTemp: ${celsiusTemp} & fahrenheitTemp: ${fahrenheitTemp}`, () => {
                const temp1 = new Temperature(celsiusTemp, new TemperatureUnits(TemperatureUnits.CELSIUS));
                const temp2 = new Temperature(fahrenheitTemp, new TemperatureUnits(TemperatureUnits.FAHRENHEIT));

                expect(temp1.equals(temp2)).toBe(true);
            });
        }
    )
})

