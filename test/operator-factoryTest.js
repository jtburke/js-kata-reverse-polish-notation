import * as should from '../node_modules/should/should.js'
import {OperatorFactory} from '../src/operator-factory'
import {Operator} from '../src/operator'

describe('Operator Factory', () => {
    it('should return an add operator for "+"', () => {
        OperatorFactory.create("+").operation(3, 5).should.equal(8)
    })

    it('should return an subtract operator for "-"', () => {
        OperatorFactory.create("-").operation(3, 5).should.equal(-2)
    })

    it('should return an multiply operator for "*"', () => {
        OperatorFactory.create("*").operation(3, 5).should.equal(15)
    })
})