import {Parser} from './parser'

export class MathTreeFactory {
    static parse(input) {
        return input.split(' ').map(s => Parser.parse(s))
    }

    static createFromRPN(input) {
        let parsed = MathTreeFactory.parse(input)
        let stack = []

        for (let i = 0; i < parsed.length; i++) {
            let v = parsed[i]

            if (!isNaN(v)) {
                stack.push(v)
            } else {
                v.right = stack.pop()
                v.left = stack.pop()

                if (i === parsed.length - 1) {
                    return v // root
                } else {
                    stack.push(v)
                }
            }
        }
    }
}