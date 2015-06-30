import * as should from '../node_modules/should/should.js';
import {Add, Subtract, Multiply} from '../src/operator';

describe('Operators', () => {
    describe('Add', () => {
        it('should add 2 operands', () => {
            let add = new Add()

            add.left = 1
            add.right = 2

            add.evaluate().should.equal(3)
        })

        it('should add 2 different operands', () => {
            let add = new Add()

            add.left = 11
            add.right = 2

            add.evaluate().should.equal(13)
        })
    })

    describe('Subtract', () => {
        it('should subtract 2 operands', () => {
            let sub = new Subtract()

            sub.left = 7
            sub.right = 2

            sub.evaluate().should.equal(5)
        })

        it('should subtract 2 different operands', () => {
            let sub = new Subtract()

            sub.left = 8
            sub.right = 22

            sub.evaluate().should.equal(-14)
        })
    })

    describe('Multiply', () => {
        it('should multiply 2 operands', () => {
            let multiply = new Multiply()

            multiply.left = 7
            multiply.right = 2

            multiply.evaluate().should.equal(14)
        })

        it('should multiply 2 operands', () => {
            let multiply = new Multiply()

            multiply.left = 10
            multiply.right = 10

            multiply.evaluate().should.equal(100)
        })
    })
})