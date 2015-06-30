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

        return left + this.right
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