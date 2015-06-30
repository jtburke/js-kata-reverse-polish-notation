class Operator {
    evaluate() {
        let left, right
        if (this.left instanceof Add) {
            left = this.left.evaluate()
        }  else {
            left = this.left
        }

        if (this.right instanceof Add) {
            right = this.right.evaluate()
        }  else {
            right = this.right
        }

        return this.operate(left, right)
    }
}

export class Add extends Operator {
    operate(left, right) {
        return left + right
    }
}

export class Subtract {
    evaluate() {
        return this.left - this.right
    }
}

export class Multiply {
    evaluate() {
        return this.left * this.right
    }
}