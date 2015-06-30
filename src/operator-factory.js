import {Add, Subtract, Multiply} from '../src/operator';

export class OperatorFactory {
    static create(input) {
        if (input === '+') {
            return new Add()
        }

        if (input === '-') {
            return new Subtract()
        }

        if (input === '*') {
            return new Multiply()
        }
    }
}