// The only rule for this file is that you export a function that
// takes in a space separated string input and returns a number

import {MathTreeFactory} from './math-tree-factory'

/**
 * @param {string} input
 * @returns {number}
 */
export function rpn(input) {
    return MathTreeFactory.createFromRPN(input).evaluate()
}