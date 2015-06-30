import {Add, Subtract, Multiply} from '../src/operator';

export class OperatorFactory {
    static create() {
        return new Add()
    }
}