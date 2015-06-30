import * as should from '../node_modules/should/should.js';
import {OperatorFactory} from '../src/operator-factory';
import {Parser} from '../src/parser';

describe('Parser', () => {
    it('should parse numbers as floats', () => {
        Parser.parse('123.04').should.equal(123.04)
    })
})