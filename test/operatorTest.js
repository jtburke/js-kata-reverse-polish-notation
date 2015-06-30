import * as should from '../node_modules/should/should.js';
import {Add} from '../src/operator';

describe('Operators', () => {
    describe('Add', () => {
        it('should add 2 operands', () => {
            let add = new Add()

            add.left = 1
            add.right = 2

            add.evaluate().should.equal(3)
        })
    })
})