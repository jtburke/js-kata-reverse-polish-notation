import chai from '../node_modules/chai/chai'
import sinon from '../node_modules/sinon/lib/sinon'
import sinonChai from '../node_modules/sinon-chai/lib/sinon-chai'

import {MathTreeFactory} from '../src/math-tree-factory'
import {Parser} from '../src/parser'
import {Add} from '../src/operator'

chai.Should()
chai.use(sinonChai)

describe('Math Tree Factory', () => {
    var stub

    beforeEach(() => {
        stub = sinon.stub(Parser, 'parse')
    })

    afterEach(() => {
        Parser.parse.restore()
    })

    it('should parse the input', function () {
        stub.withArgs('1').returns(1)
        stub.withArgs('2').returns(2)
        stub.withArgs('+').returns(new Add())

        const parse = MathTreeFactory.parse('1 2 +');
        parse[0].should.equal(1)
        parse[1].should.equal(2)
        parse[2].should.be.an.instanceof(Add)
    })

    it('should return a tree for "1 2 +"', () => {
        stub.withArgs('1').returns(1)
        stub.withArgs('2').returns(2)
        stub.withArgs('+').returns(new Add())

        var add = new Add()
        add.left = 1
        add.right = 2

        MathTreeFactory.createFromRPN('1 2 +').should.eql(add)
    })
})