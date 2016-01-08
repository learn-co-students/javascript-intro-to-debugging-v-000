# JavaScript Debugging with Jasmine

Testing is important no matter what language you're working with. There is always the chance that your code won't behave as expected. Tests and debugging skills help us make sure that our code always works appropriately. In JavaScript, Jasmine is our testing library, and Debugger is our favorite debugging tool.

## Objectives

+ Read Jasmine tests
+ Run Jasmine tests
+ Use JS debugger to run through code line by line


### Running the Test Suite
We've got a test suite set up for you, and we're going to walk through how to run Jasmine tests to correct our code. The tests are located in `spec/intro_spec.js`. You'll be coding your solution in `code.js`.

To run Jasmine tests, you enter `learn -b`. The `-b` flag tells the `learn` gem to open and run all the tests in the browser, which give them a much more readable output then in the terminal. To see the test output in the terminal, just enter `learn`.

The command `learn -b` will automatically run every single test in your test suite, just like running `learn` in a Ruby lab runs every Ruby test.

Let's go ahead and run the tests now. You should see the results for every test in the browser like this:

![jasmine test output](https://s3.amazonaws.com/learn-verified/jasmine-tests.png)

If you just want to rerun a single test, go ahead and click on that test
![view one test results](https://s3.amazonaws.com/learn-verified/jasmine-one-test.png)

That should take you to a new page with the output for just that test. To go back to the main page to run all tests, you can either navigate `back` in your browser manually or click the `- run all` link:

### Solving First Two Tests


We're just getting started, so we expected that all our tests would fail. Let's go ahead and tackle the first test. The first error we see from Jasmine is `ReferenceError: sayHey is not defined`. So let's go ahead and define that function in `code.js`.

```js
function sayHey(){

}
```
Save your changes and go back to the browser and click on the first test. You should see an error message that says `Expected undefined to be 'hey friends!'.` which basically means that the function return is currently `undefined` instead of `"hey friends!"`. Let's go ahead and add a return value to our function:

```js
function sayHey(){
  return "hey friends!"
}
```

Click the back arrow in the browser, and then click on the name of the first test to rerun that it. The test should now pass!

Click the back arrow again to go back to the main page with all the tests. You should notice the two green lights followed by two red x's in the top left corner. We actually passed the first two tests!

The second test just checked to make sure the return value was in fact a string. Because we had the correct return value, we automatically passed the second test because it was the correct return value.

### Last Two Tests With Debugger

Our last two tests are failing. You should see the error `ReferenceError: sayHeyFriend is not defined`.

Let's go ahead and define that function in `code.js`:

```js
function sayHeyFriend(){

}
```

Instead of plowing through the tests by making assumptions about what they want, we're going to use the JavaScript Debugger to test our code. We'll be following these steps:


1. Add the debugger to our code and save it
2. From the Jasmine test, we'll open the browser's console
3. Refresh the page
4. Investigate the state
5. Find the bug

#### Step One - Add the Debugger

Let's put the debugger inside our function definition, like so:

```javascript
function sayHeyFriend(name){
  debugger;
}
```

#### Step Two - Open the Console

Now we'll navigate back to our browser and open that single Jasmine test. From there, open your browser's console. (Remember, the shortcut to open the console in Chrome is `command` + `option` + `J` while the shortcut in Firefox uses a letter "K" instead of the letter "J".)

![one test console open](https://s3.amazonaws.com/learn-verified/debugger.png)

#### Step Three - Refresh the Page

Now we'll refresh the page in the browser. Sure, you can use your cursor and click on the circular refresh arrow but we're developers so we'll use the `command` + `R` shortcut instead. After refreshing, the page will be mostly greyed out and the message `Paused in debugger` should appear up top, like this:

![paused in debugger](https://s3.amazonaws.com/learn-verified/debugged-paused.png)

#### Step Four - Investigate the State

Navigate back to the console, either by clicking console or typing in the very bottom screen on Chrome, and enter `name`. We expect it to be `"kristin`, which is the parameter the spec is passing to our function, and it is:

![name revealed in console](https://s3.amazonaws.com/learn-verified/name-variable-debugger.png)

#### Step Five - Find the Bug

Around now, we might remember that our function is returning `undefined` instead of the value of the remainder because we didn't use the `return` keyword, so let's go ahead and add that and save the JavaScript file:

```javascript
function sayHeyFriend(name){
  return name;
}
```

Now we'll click the blue forward arrow button to exit debugger. It's pretty much the same as typing `exit` in Pry: ![debuggers blue unpause arrow](http://web-dev-readme-photos.s3.amazonaws.com/js/jasmine-and-debugging/blue-arrow.png)

Let's refresh the page now that we've removed the debugger from our code and replaced it with a return statement. We still get an error: `Expected 'kristin' to be 'hey kristin!!'.`

We're just returning the name passed in as a parameter instead of greeting that person.

Change your solution in `code.js`:

```js
function sayHeyFriend(name){
  return "hey " + name + "!!";
}
```

Go ahead and run `learn -b` again, and all four tests should pass!


## Resources

* [MDN - Debugger](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/debugger)

<a href='https://learn.co/lessons/intro-to-debugging.js' data-visibility='hidden'>View this lesson on Learn.co</a>
