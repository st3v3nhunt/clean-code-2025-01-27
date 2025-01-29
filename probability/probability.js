export class Probability {
    constructor(numerator, denominator) {
        this.numerator = numerator;
        this.denominator = denominator;
    }

    equals(probability) {
        const v1 = this.numerator / this.denominator
        const v2 = probability.numerator / probability.denominator
        console.log(v1, v2)
        return this.numerator / this.denominator === probability.numerator / probability.denominator;
        // return this.numerator === probability.numerator && this.denominator === probability.denominator;
    }

    add(probability) {
        return new Probability(this.numerator + probability.numerator, this.denominator * probability.denominator);
    }
}
