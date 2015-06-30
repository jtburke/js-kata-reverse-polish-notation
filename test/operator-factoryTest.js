import * as should from '../node_modules/should/should.js';
import {OperatorFactory} from '../src/operator-factory';
import {Add, Subtract, Multiply} from '../src/operator';

describe('Operator Factory', () => {
    it('should return an add operator for "+"', () => {
        OperatorFactory.create("+").should.be.a.instanceOf(Add)
    })

    it('should return an subtract operator for "-"', () => {
        OperatorFactory.create("-").should.be.a.instanceOf(Subtract)
    })
})