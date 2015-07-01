import * as should from '../node_modules/should/should.js'
import {Operator} from '../src/operator'

describe('Operators', () => {
    describe('Add', () => {
        it('should add 2 operands', () => {
            let add = new Operator((a,b) => a + b)

            add.left = 1
            add.right = 2

            add.evaluate().should.equal(3)
        })

        it('should add 2 different operands', () => {
            let add = new Operator((a,b) => a + b)

            add.left = 11
            add.right = 2

            add.evaluate().should.equal(13)
        })

        it('should add left nested operator', () => {
            let a1 = new Operator((a,b) => a + b)
            let a2 = new Operator((a,b) => a + b)

            a2.left = 3
            a2.right = 5

            a1.left = a2
            a1.right = 3

            a1.evaluate().should.equal(11)
        })

        it('should add right nested operator', () => {
            let a1 = new Operator((a,b) => a + b)
            let a2 = new Operator((a,b) => a + b)

            a2.left = 8
            a2.right = 3

            a1.left = 9
            a1.right = a2

            a1.evaluate().should.equal(20)
        })
    })

    describe('Subtract', () => {
        it('should subtract 2 operands', () => {
            let sub = new Operator((a,b) => a - b)

            sub.left = 7
            sub.right = 2

            sub.evaluate().should.equal(5)
        })

        it('should subtract 2 different operands', () => {
            let sub = new Operator((a,b) => a - b)

            sub.left = 8
            sub.right = 22

            sub.evaluate().should.equal(-14)
        })
    })

    describe('Multiply', () => {
        it('should multiply 2 operands', () => {
            let multiply = new Operator((a,b) => a * b)

            multiply.left = 7
            multiply.right = 2

            multiply.evaluate().should.equal(14)
        })

        it('should multiply 2 operands', () => {
            let multiply = new Operator((a,b) => a * b)

            multiply.left = 10
            multiply.right = 10

            multiply.evaluate().should.equal(100)
        })
    })
})