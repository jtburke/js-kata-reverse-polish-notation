import {Parser} from './parser'

export class MathTreeFactory {
    static parse(input) {
        return input.split(' ').map(s => Parser.parse(s))
    }

    static createFromRPN(input) {
        let parsed = MathTreeFactory.parse(input)

        parsed[2].left = parsed[0]
        parsed[2].right = parsed[1]

        return parsed[2]
    }
}