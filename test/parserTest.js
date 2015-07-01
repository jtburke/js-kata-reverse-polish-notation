import chai from '../node_modules/chai/chai'
import sinon from '../node_modules/sinon/lib/sinon'
import sinonChai from '../node_modules/sinon-chai/lib/sinon-chai'

import {OperatorFactory} from '../src/operator-factory'
import {Parser} from '../src/parser'

chai.Should()
chai.use(sinonChai)

describe('Parser', () => {
    it('should parse numbers as floats', () => {
        Parser.parse('123.04').should.equal(123.04)
    })

    it('should parse non-numbers as operators', () => {
        var spy = sinon.spy(OperatorFactory, 'create')

        Parser.parse('+')
        spy.should.have.been.calledWith('+')
    })
})