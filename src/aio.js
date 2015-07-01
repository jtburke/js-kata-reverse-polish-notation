class Operator {
    constructor (operation) {
        this.operation = operation
    }

    evaluate() {
        const left = (this.left instanceof Operator) ? this.left.evaluate() : this.left,
              right = (this.right instanceof Operator) ? this.right.evaluate() : this.right

        return this.operation(left, right)
    }
}

class OperatorFactory {
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

class Parser {
    static parse(input) {
        const float = parseFloat(input, 10)

        if (!isNaN(float)) {
            return float
        } else {
            return OperatorFactory.create(input)
        }
    }
}

class MathTreeFactory {
    static parse(input) {
        return input.split(' ').map(s => Parser.parse(s))
    }

    static createFromRPN(input) {
        const parsed = MathTreeFactory.parse(input),
              stack = []

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

export function rpn(input) {
    return MathTreeFactory.createFromRPN(input).evaluate()
}