import { Probability } from "./probability";

describe('Probability', () => {
    test('two probabilities of the same value are equal - 2 in 5', () => {
        const probabilityOne = new Probability(2, 5);
        const probabilityTwo = new Probability(2, 5);

        expect(probabilityOne.equals(probabilityTwo)).toBe(true);
    })

    test('two probabilities of the same value are equal', () => {
        const probabilityOne = new Probability(1, 2);
        const probabilityTwo = new Probability(1, 2);

        expect(probabilityOne.equals(probabilityTwo)).toBe(true);
    })

    test('two probabilities of different values are not equal', () => {
        const probabilityOne = new Probability(1, 2);
        const probabilityTwo = new Probability(1, 3);

        expect(probabilityOne.equals(probabilityTwo)).toBe(false);
    })

    test('adding two probabilities generates correct new probability', () => {
        const probabilityOne = new Probability(1, 6);
        const probabilityTwo = new Probability(1, 6);

        expect(probabilityOne.add(probabilityTwo).equals(new Probability(1, 18))).toBe(true);
    })

    test('adding two probabilities generates correct new probability', () => {
        const probabilityOne = new Probability(2, 5);
        const probabilityTwo = new Probability(2, 5);

        expect(probabilityOne.add(probabilityTwo).equals(new Probability(4, 25))).toBe(true);
    })
})

// probability of the order being matched
