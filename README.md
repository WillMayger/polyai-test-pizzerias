# PolyAI - Question Two - Pizzeria

 > 14/14 Tests Passing

**This project requires the latest version of NodeJS at time of writing (v11.14.0).**
Without the correct version, it may not run as expected.


**This solution comes with a small test suite.**

## Contents
 - Interview test questions answers.
 - Running locally
 - Testing
 - Usage


### 1. Write down your thoughts on how would you approach this problem briefly.
I would first thoroughly understand the problem that exists, by reading the spec multiple times if needed, which is what I done for this.

I would then set up a small test suite with the expected outcome already set as a test, and do the minimum to make the test pass. After that I would start adding in more and more parameters until I get a failing test that I need to fix. This will eventually lead to the final solution.

Finally to finish off, I would refactor my code, and make sure that all the comments make sense.

### 3. What is the complexity of your approach? Can we do better?

I think that with a little more time, it is possible to improve my solution. However, I do believe my solution is simplistic, and readable which in turn makes code more maintainable as well.

-----------------

## To run locally
1. Ensure you have the latest version of NodeJS (https://nodejs.org/en/)[https://nodejs.org/en/]
2. Make sure you have a node package manager such as `yarn`, or `npm` (I recommend `yarn`).
3. Clone this repo.
4. Within the project directory, run `yarn`, or `npm install`.
5. Run `yarn start`, or `npm start`.

## To test
1. Follow the steps in `To run locally`.
2. Run `yarn test`.

## API / How to use
`calculateMostPizzerias(...)`

This function should be used like so:
```
n = size of city squared
m = amount of pizzerias in city

x = x coordinate of pizzeria
y = y coordinate of pizzeria
r = distance each pizzeria will travel

calculateMostPizzerias(n, m)(x, y, r)(x, y, r);
```

After the first function call, the function will start returning functions as closures to be called with the information for each pizzeria.

This means is you set the `m` parameter to 2, you must call the function twice, each time with the new pizzerias data.

## Current Output
```
Calculating blocks with shared pizzerias...
Using the following sequence of inputs: [5, 2], [3, 3, 2], [1, 1, 2]
Outcome: 2
Matrix (from top-left, instead of bottom-left):
[ [ 1, 1, 2, 0, 0 ],
  [ 1, 2, 1, 1, 0 ],
  [ 2, 1, 1, 1, 1 ],
  [ 0, 1, 1, 1, 0 ],
  [ 0, 0, 1, 0, 0 ] ]
```