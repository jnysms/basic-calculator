// *Variable Declaration*

// const is a keyword that declares it as a variable that WON'T change
// display is the variable name
// document.getElementById("display") is the method -- it connects your js to a specific HTML element so you can manipulate it
const display = document.getElementById("display");

// *Functions*
// are blocks of reusable code that perform a specific task
// defined using the keyword 'function'
// can take parameters and return values


// this whole function adds (concatenates) numbers/operators to the display
// input is a parameter that is a number/operator passed into the function
// display.value += input means "take the current value of the display and add new input"
// Example: if display shows "5" and you pass "+" to this function, it will show "5+"
function appendToDisplay(input) {
  display.value += input;
}

// this function clears the current display
function clearDisplay() {
  display.value = "";
}

// this function calculates what is on the display
function calculate() {
  // Surround this function with a try block. It will try the code inside it and catch any errors that happen instead of crashing the program.

  // Try block
  try {
    // eval is a js function that evaluates a string as a mathematical expression
    // If the calculation is successful, it replaces the display's value with the result
    display.value = eval(display.value);
  } 
  
  // Catch block
  catch (error) {    
    display.value = "Error";
  }
}

