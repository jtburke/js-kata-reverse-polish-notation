export class Operator {
    constructor (operation) {
        this.operation = operation
    }

    evaluate() {
        const left = (this.left instanceof Operator) ? this.left.evaluate() : this.left,
              right = (this.right instanceof Operator) ? this.right.evaluate() : this.right

        return this.operation(left, right)
    }
}