import * as should from '../node_modules/should/should.js';
import {Add, Subtract} from '../src/operator';

describe('Operators', () => {
    describe('Add', () => {
        it('should add 2 operands', () => {
            let add = new Add()

            add.left = 1
            add.right = 2

            add.evaluate().should.equal(3)
        })
    })

    describe('Subtract', () => {
        it('should subtract 2 operands', () => {
            let sub = new Subtract()

            sub.left = 7
            sub.right = 2

            sub.evaluate().should.equal(5)
        })
    })
})