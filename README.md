# JavaScript Debugging with Mocha

Testing is important no matter what language we're working with. There is always the chance that our code won't behave as expected. Tests and debugging skills help us make sure that our code always works appropriately. JavaScript provides tons of testing libraries; we're going to use [Mocha](mochajs.org). JavaScript comes with a built in debugging tool, called `debugger`.

## Objectives

1. Read Mocha tests
2. Run Mocha tests
3. Use `debugger` to run through code line by line

### Running the test suite

We've got a test suite set up for you, and we're going to walk through how to run Mocha tests to correct our code. The tests are located in `test/index-test.js`. You'll be writing your solution in `index.js`. Note that our test file has the same name as our application file, just with a `'-test'` prefix. This is a convention that we'll see (in various forms) a lot — and it's a good one to follow, as it makes it clear which tests cover which parts of the application.

To run Mocha tests, enter `learn` in your terminal (in the Learn IDE or in Terminal.app).

The command `learn` will automatically run every single test in your test suite. We'll cover how to run a single test file or even a single test below.

Let's go ahead and run the tests now. You should see the results for every test in the browser like this:

![mocha test output](https://curriculum-content.s3.amazonaws.com/skills-based-js/mocha_test_output.png)

Well, that's not very exciting. Let's make sure we can get these tests to pass!

### Solving the first test

We're just getting started, so we expected that all our tests would fail. Let's go ahead and tackle the first test. The first error we see from Jasmine is `ReferenceError: sayHey is not defined`. So let's go ahead and define that function in `index.js`.

```js
function sayHey() {

}
```
Save your changes and go back to the browser and click on the first test. You should see an error message that says `Expected undefined to be 'Hey!'`. This makes sense, because we haven't provided a return value for our function yet — so when the function runs, the result is simply `undefined`. Our test expects the result to be the string `'Hey!'`. Let's go ahead and add a return value to our function:

```js
function sayHey(){
  return "Hey!"
}
```

Run `learn` again — the test should now pass!

### Solving the last test with `debugger`

Our last test is failing. You should see the error `ReferenceError: sayHeyFriend is not defined`.

Let's go ahead and define that function in `index.js`:

```js
function sayHeyFriend() {

}
```

Instead of plowing through the tests by making assumptions about what they want, we're going to use the JavaScript `debugger` to test our code. We'll be following these steps:

1. Add the debugger to our code and save it
2. From the Mocha test, we'll open up a console in the browser
3. Investigate the state
4. Find the bug

#### Step One - Add the Debugger

Let's put the `debugger` inside our function definition, like so (we're also adding the `name` argument):

```javascript
function sayHeyFriend(name) {
  debugger;
}
```

#### Step Two - Open the Console

Now we'll run our tests so that they're aware of the debugger. Simply run `npm run debug` if you're working locally, or `npm run debug-ide` if you're working in the IDE.

**Flat fact**: `npm` is a package manager originally intended for the Node.js runtime but now used by the entire JavaScript ecosystem. We use it here because we want our tests to run flexibly in a lot of different environments — it helps us pull in the libraries that our code needs to run.

If you're working locally, an instance of Chrome should open up; from the IDE, you'll be presented with a URL like this

![ide debugger](https://curriculum-content.s3.amazonaws.com/skills-based-js/ide_debugger.png)

**Your URL will be slightly different.** Copy and paste this URL into Chrome (you _must_ use Chrome for debugging in this case).

From there, open your browser's console. (Remember, the shortcut to open the console in Chrome is `command` + `option` + `J`.)

The page will be mostly greyed out and the message "Paused in debugger" should appear up top.

#### Step Three - Investigate the State

You should see your function displayed in Chrome. Hover over the `name` arguemnt
— we expect it to be `'Kristin'`, and indeed, it is!

![name revealed in console](https://curriculum-content.s3.amazonaws.com/skills-based-js/javascript_debugger_open.png)

#### Step Four - Find the Bug

Around now, we might remember that our function is returning `undefined` instead of the value of the remainder because we didn't use the `return` keyword, so let's go ahead and add that and save the JavaScript file:

```javascript
function sayHeyFriend(name){
  return name;
}
```

Now we'll click the blue forward arrow button to exit debugger. It's pretty much the same as typing `exit` in Pry: ![debuggers blue unpause arrow](http://web-dev-readme-photos.s3.amazonaws.com/js/jasmine-and-debugging/blue-arrow.png)

Let's run our tests without the debugger (simply enter `learn`). We still get an error: `Expected 'Kristin' to be 'Hey, Kristin!'.`

We're just returning the name passed in as a parameter instead of greeting that person.

Change your solution in `index.js`:

```js
function sayHeyFriend(name){
  return `Hey, ${name}!`;
}
```

Go ahead and run `learn` again, and both tests should pass!


## Resources

* [MDN - Debugger](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/debugger)
