/* Task 1: Declare a Destination Variable */
// TODO: Use `let` to declare a variable named `destination` and assign it the value `"Ancient Egypt"`. Print the destination to the console.

let destination = "Ancient Egypt";

console.log(destination);

/* Task 2: Change the Destination */
// TODO: Now, change the `destination` variable to `"Medieval Europe"`. Print the new destination to the console.

destination = "Medieval Europe";

console.log(destination);

/* Task 3: Declare a Constant Travel Date */
// TODO: Use `const` to declare a variable named `travelDate` and set it to `"2024-03-15"`. Try to change the `travelDate` to another value and observe and explain what happens as a comment.

const travelDate = "2024-03-15";

// travelDate = "today";

/*
 * Observations:
 *
 * It resulted in a TypeError because I tried to assign something new to a constant variable.
 */

/* Task 4: Experiment with Variable Hoisting */

console.log(timeMachineModel);

var timeMachineModel = "T-800";

// TODO: Before declaring any variable, try to print a variable named `timeMachineModel` to the console. Then, declare `timeMachineModel` using `var` and assign it the value `"T-800"`. Observe and explain what happens as a comment.
/*
 * Observations:
 * Before declaring the variable, I get a referenceError because the variable has not been defined. It then worked when it was declared. Var makes the variable declare as soon as the document runs, and not as the code is read.
 */
