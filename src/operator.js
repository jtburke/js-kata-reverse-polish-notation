class Operator {

}

export class Add {
    evaluate() {
        let left
        if (this.left instanceof Add) {
            left = this.left.evaluate()
        }  else {
            left = this.left
        }

        let right
        if (this.right instanceof Add) {
            right = this.right.evaluate()
        }  else {
            right = this.right
        }

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