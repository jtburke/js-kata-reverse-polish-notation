class Operator {

}

export class Add {
    evaluate() {
        return this.left + this.right
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