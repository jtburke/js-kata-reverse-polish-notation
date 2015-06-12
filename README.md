# Reverse Polish Notation
https://en.wikipedia.org/wiki/Reverse_Polish_notation

The input for the function should be a space separated string.

```
End date: Friday 3rd July (3 weeks)
```

# End Goal Test
`1` `2` `+` `4` `*` `5` `+` `3` `-` = `14`

However feel free to take it as far as you like.

# Baby step rules
1. Start a timer (3 minutes suggested but whatever you're comfortable with)
2. Write exactly 1 test
    * If the timer ends and the test is red then `git reset --hard`
    * If the test is green then `git commit -a -m "refactor {feature}"`
4. Restart timer
5. Refactor
    * If the timer ends and refactoring is not complete then `git reset --hard`
    * If the refactoring is complete before the timer ends `git commit -a -m "refactor {feature}"`
6. Goto 1 `goto statements ftw`

# Additional Challenges
* Smallest steps - Create the most tests (must show forward progress of code between commits).  
* ES6 - Use the most ES6 features.

# Setup/Running Tests
Install dependencies
```
npm install
```

Run tests
```
npm test
```

The test framework is [Mocha](http://mochajs.org/) and the assertion library is 
[Should](http://shouldjs.github.io/) feel free to set something else up if you're 
more comfortable with it, this has just been provided for your convenience.