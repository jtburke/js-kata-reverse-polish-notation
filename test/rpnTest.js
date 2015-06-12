import {rpn} from '../src/rpn';

describe('Reverse Polish Notation', () => {
    //
    it('"1 2 + 4 * 5 + 3" should equal 14', () => {
        rpn('1 2 + 4 * 5 + 3').should.equal(14);
    });
});