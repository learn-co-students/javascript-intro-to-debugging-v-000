# JavaScript Debugging with Mocha

Testing is important no matter what language we're working with. There is always the chance that our code won't behave as expected. Tests and debugging skills help us make sure that our code always works appropriately. JavaScript provides tons of testing libraries; we're going to use [Mocha](http://mochajs.org/). JavaScript comes with a built in debugging tool, called `debugger`.

## Objectives

1. Read Mocha tests
2. Run Mocha tests
3. Use `debugger` to run through code line by line

### Running the test suite

We've got a test suite set up for you, and we're going to walk through how to run Mocha tests to correct our code. The tests are located in `test/index-test.js`. You'll be writing your solution in `index.js`. Note that our test file has the same name as our application file, just with a `'-test'` suffix. This is a convention that we'll see (in various forms) a lot — and it's a good one to follow, as it makes it clear which tests cover which parts of the application.

To run Mocha tests, enter `learn` in your terminal (in the Learn IDE or in Terminal.app).

The command `learn` will automatically run every single test in your test suite. We'll cover how to run a single test file or even a single test below.

Let's go ahead and run the tests now. You should see the results for every test in the browser like this:

![mocha test output](https://curriculum-content.s3.amazonaws.com/skills-based-js/mocha_test_output.png)

Well, that's not very exciting. Let's make sure we can get these tests to pass!

### Solving the first test

We're just getting started, so we expected that all our tests would fail. Let's go ahead and tackle the first test. The first error we see from Mocha is `ReferenceError: sayHey is not defined`. So let's go ahead and define that function in `index.js`.

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

### Solving the last test with `debugger` — the hard way

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

Now open the file `test/index-test.html` in Google Chrome. [If you're on the Learn IDE, you can open it by typing `httpserver` in the terminal, going to the IP address that the Learn IDE spits out and then navigating to /test and then index-test.html.] We should see... well, nothing. Open the console (`command` + `option` + `J` on a Mac in Chrome), refresh the page, and _voilà_ — your debugger awaits. Your entire JavaScript console is now within the context of this function, meaning that you can enter `name` in console, and you should see `'Kristin'`. As you can probably guess, this debugger is enormously powerful — it provides a bit too much for us to cover here. But if you'd like to learn more, we recommend reading through [Debugging JavaScript][MDN - Debugging JavaScript] and [debugger][MDN - Debugger] on MDN.

![ide debugger](https://s3.amazonaws.com/learn-verified/javascript-intro-to-debugging-httpserver.png)
**Your URL will be slightly different.** Copy and paste this URL into Chrome (you _must_ use Chrome for debugging in this case).

>Note: Checkout running [background tasks](https://www.digitalocean.com/community/tutorials/how-to-use-bash-s-job-control-to-manage-foreground-and-background-processes) so that you can run `httpserver` _and_ still run other commands in the Learn IDE!

#### Step Three - Investigate the State

You should see your function displayed in Chrome. Hover over the `name` argument
— we expect it to be `'Kristin'`, and indeed, it is!

![name revealed in console](https://s3.amazonaws.com/learn-verified/javascript-intro-to-debugging-inspect-state.png)

#### Step Four - Find the Bug

Around now, we might remember that our function is returning `undefined` instead of the value of the remainder because we didn't use the `return` keyword, so let's go ahead and add that and save the JavaScript file:

```javascript
function sayHeyFriend(name){
  return name;
}
```

Now we'll click the blue forward arrow button to exit debugger. It's pretty much the same as typing `exit` in Pry: ![debuggers blue unpause arrow](http://web-dev-readme-photos.s3.amazonaws.com/js/jasmine-and-debugging/blue-arrow.png)

## Wrap up - Pass those tests

Let's run our tests without the debugger (simply enter `learn`). We still get an error: `Expected 'Kristin' to be 'Hey, Kristin!'.`

We're just returning the name passed in as a parameter instead of greeting that person.

Change your solution in `index.js`:

```js
function sayHeyFriend(name){
  return `Hey, ${name}!`;
}
```

Go ahead and run `learn` again, and both tests should pass!

## Why this works!

Here is a quick note on why this works and it will be _very_ helpful in understanding how to use this technique on other labs!

Take a look at the `index-test.html` file. Near the bottom you'll see this:

```js
<script src="mocha.js"></script>
<script src="https://unpkg.com/expect/umd/expect.min.js"></script>
<script>mocha.setup('bdd');</script>
<script src="../index.js"></script>
<script src="intro-test.js"></script>
<script>
  mocha.run();
</script>
```

What's happening here is that we're loading up all the Javascript files needed to run the test and the we're calling `mocha.run()`. This function will run our tests in the browser for us! The reason why this is so important is that you'll see some labs _do not call this by default_. You'll be able to open up pages like `index.html` to test the pages you build, but take a look and you'll probably see all the Javascript files loading up, but _not_ `mocha.run()`. No problem! Now that we know what the command is, we can just run it ourselves for these future labs. This will allow you to keep using debugger with the tests on Learn!

## Video Walkthrough

<iframe width="560" height="315" src="https://www.youtube.com/embed/orxiGMn0yCg" frameborder="0" allowfullscreen></iframe>

## Resources
- [MDN - Debugger]
- [MDN - Debugging JavaScript]

[MDN - Debugger]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/debugger
[MDN - Debugging JavaScript]: https://developer.mozilla.org/en-US/docs/Mozilla/Debugging/Debugging_JavaScript

<p class='util--hide'>View <a href='https://learn.co/lessons/javascript-intro-to-debugging'>Javascript Debugging with Mocha</a> on Learn.co and start learning to code for free.</p>
