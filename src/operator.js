class Operator {

}

export class Add {
    evaluate() {
        return 3
    }
}

export class Subtract {
    evaluate() {
        return this.left - this.right
    }
}