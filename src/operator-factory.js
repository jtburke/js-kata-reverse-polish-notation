import {Operator} from '../src/operator'

export class OperatorFactory {
    static create(input) {
        if (input === '+') {
            return new Operator((a, b) => a + b)
        }

        if (input === '-') {
            return new Operator((a, b) => a - b)
        }

        if (input === '*') {
            return new Operator((a, b) => a * b)
        }
    }
}