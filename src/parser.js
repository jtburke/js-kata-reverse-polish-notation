import {OperatorFactory} from './operator-factory'

export class Parser {
    static parse(input) {
        let float = parseFloat(input, 10)

        if (!isNaN(float)) {
            return float
        } else {
            return OperatorFactory.create(input)
        }
    }
}