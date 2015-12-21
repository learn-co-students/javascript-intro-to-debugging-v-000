# JavaScript Debugging with Jasmine

Testing is important no matter what language you're working with. There is always the chance that your code won't behave as expected. Tests and debugging skills help us make sure that our code always works appropriately. In JavaScript, Jasmine is our testing library, and Debugger is our favorite debugging tool.

## Objectives

+ Read Jasmine tests
+ Run Jasmine tests
+ Use JS debugger to run through code line by line


#### Running the Test Suite
We've got a test suite set up for you, and we're going to walk through how to run Jasmine tests to correct our code. The tests are located in `spec/intro_spec.js`. You'll be coding your solution in `code.js`.

To run Jasmine tests, you enter `learn -b`. The `-b` flag tells the `learn` gem to open and run all the tests in the browser, which give them a much more readable output then in the terminal. To see the test output in the terminal, just enter `learn`.

The command `learn -b` will automatically run every single test in your test suite, just like running `learn` in a Ruby lab runs every Ruby test. 



To just run the first test, you click on the description of the test with your cursor. 

![description underlined](http://web-dev-readme-photos.s3.amazonaws.com/js/jasmine-and-debugging/click-on-description.png)

This will take you to a new page that looks something like this:

![one test](http://web-dev-readme-photos.s3.amazonaws.com/js/jasmine-and-debugging/one-test.png)

To go back to the main page to run all tests, you can either navigate `back` in your browser manually or click the `- run all` link:

![run all tests link](http://web-dev-readme-photos.s3.amazonaws.com/js/jasmine-and-debugging/run-all.png)

Let's navigate back to running just one test by clicking on its description again. Cool, we're at the test:

```javascript
it("returns true for the number eight", function() {
  expect(isEven(8)).toBe(true);
});
```

Instead of `true`, our function is currently returning `undefined`. We'll investigate this using the debugger for demonstration purposes. To do this, we'll follow the six steps below:

1. Add the debugger to our code and save it
2. From the Jasmine test, we'll open the browser's console
3. Refresh the page
4. Investigate the state
5. Find the bug
6. Refactor

#### Step One - Add the Debugger

Let's put the debugger below where we created our `remainder` variable, like so:

```javascript
function isEven(number){
  var remainder = number % 2;
  debugger;
}
```

#### Step Two - Open the Console

Now we'll navigate back to our browser where that single Jasmine test is open and open our browser's console. (Remember, the shortcut to open the console in Chrome is `command` + `option` + `J` while the shortcut in Firefox uses a letter "K" instead of the letter "J".)

![one test console open](http://web-dev-readme-photos.s3.amazonaws.com/js/jasmine-and-debugging/one-test-open-console.png)

#### Step Three - Refresh the Page

Now we'll refresh the page in the browser. Sure, you can use your cursor and click on the circular refresh arrow but we're developers so we'll use the `command` + `R` shortcut instead. After refreshing, the page will be mostly greyed out and the message `Paused in debugger` should appear up top, like this:

![paused in debugger](http://web-dev-readme-photos.s3.amazonaws.com/js/jasmine-and-debugging/paused-in-debugger-2.png)

#### Step Four - Investigate the State

Navigate back to the console, either by clicking console or typing in the very bottom screen on Chrome, and enter `number`. We expect it to be eight, which is the parameter the spec is passing to our function, and it is:

![number revealed in console](http://web-dev-readme-photos.s3.amazonaws.com/js/jasmine-and-debugging/number.png)

Now let's enter `remainder`. It should be zero, as eight divided by two has a remainder of zero, and it is:

![number and remainder revealed in console](http://web-dev-readme-photos.s3.amazonaws.com/js/jasmine-and-debugging/number-remainder.png)


#### Step Five - Find the Bug

Around now, we might remember that our function is returning `undefined` instead of the value of the remainder because we didn't use the `return` keyword, so let's go ahead and add that and save the JavaScript file:

```javascript
function isEven(number){
  var remainder = number % 2;
  return remainder;
}
```

Now we'll click the blue forward arrow button to `exit` debugger. It's pretty much the same as typing `exit` in Pry: ![debuggers blue unpause arrow](http://web-dev-readme-photos.s3.amazonaws.com/js/jasmine-and-debugging/blue-arrow.png)

Let's refresh the page now that we've removed the debugger from our code and replaced it with a return statement. We still get an error: Expected `0` to be `true`

![expected 0 to be true error](http://web-dev-readme-photos.s3.amazonaws.com/js/jasmine-and-debugging/expected-zero-to-be-true.png)

Instead of returning the remainder from dividing by two, the spec wants us to return a boolean (`true`/`false`). Let's add some logic to accommodate this:

```javascript
function isEven(number){
  var remainder = number % 2;
  if (remainder == 0) {
    return true;
  } else {
    return false;
  }
}
```

Let's save our JavaScript and refresh the browser. We now see this:

![first test passing](http://web-dev-readme-photos.s3.amazonaws.com/js/jasmine-and-debugging/one-passing.png)

Now that the first test is passing, let's click on `run all`. Looks like we're passing all the tests:

![four passing tests](http://web-dev-readme-photos.s3.amazonaws.com/js/jasmine-and-debugging/all-passing.png)

#### Step Six - Refactor

Are we done? No way! The code we wrote is six lines, which is a crazy number of lines given how little the function is supposed to do. You might have noticed a couple ways the JavaScript above could be cleaned up. For instance, let's use a ternary operator instead of a five line if/else statement:

```javascript
function isEven(number){
  var remainder = number % 2;
  var bool = remainder == 0 ? true : false
  return bool;
}
```
That's a little better, but if you think about it, you could remove this ternary operator completely:

```javascript
function isEven(number){
  var remainder = number % 2;
  return remainder == 0;
}
```

Which could become a one-liner like this:

```javascript
function isEven(number){
  return number % 2 == 0;
}
```

So much better! Go ahead and take a deep whiff of that new, clean code smell.

## Resources

* [MDN - Debugger](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/debugger)

<a href='https://learn.co/lessons/intro-to-debugging.js' data-visibility='hidden'>View this lesson on Learn.co</a>
