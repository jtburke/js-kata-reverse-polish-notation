import chai from '../node_modules/chai/chai'
import sinon from '../node_modules/sinon/lib/sinon'
import sinonChai from '../node_modules/sinon-chai/lib/sinon-chai'

import {MathTreeFactory} from '../src/math-tree-factory'
import {Parser} from '../src/parser'
import {Add, Subtract} from '../src/operator'

chai.Should()
chai.use(sinonChai)

describe('Math Tree Factory', () => {
    let stub

    beforeEach(() => {
        stub = sinon.stub(Parser, 'parse')
        stub.withArgs('1').returns(1)
        stub.withArgs('2').returns(2)
        stub.withArgs('3').returns(3)
        stub.withArgs('+').returns(new Add())
        stub.withArgs('-').returns(new Subtract())
    })

    afterEach(() => {
        Parser.parse.restore()
    })

    it('should parse the input', function () {
        stub.withArgs('1').returns(1)
        stub.withArgs('2').returns(2)
        stub.withArgs('+').returns(new Add())

        MathTreeFactory.parse('1 2 +').should.eql([
            1, 2, new Add()
        ]);
    })

    it('should return a tree for "1 2 +"', () => {
        const add = new Add()
        add.left = 1
        add.right = 2

        MathTreeFactory.createFromRPN('1 2 +').should.eql(add)
    })

    it('should return a tree for "2 3 -"', () => {
        const sub = new Subtract()
        sub.left = 2
        sub.right = 3

        MathTreeFactory.createFromRPN('2 3 -').should.eql(sub)
    })

    it('should return a tree for 1 1 + 2 -', () => {
        const add = new Add()
        add.left = 1
        add.right = 1

        const sub = new Subtract()
        sub.left = add
        sub.right = 2

        MathTreeFactory.createFromRPN('1 1 + 2 -').should.eql(sub)
    })
})