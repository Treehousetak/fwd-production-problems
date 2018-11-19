//  1. Correct the variable scope so that the console.log call
//  outputs the correct value for x (5) even after double(6) is
//  called:

var x = 5;
x === window.x;
function double(num) {
  x = num - 1;
  return x;
}

window.double(6);
console.log('The value of x is:', window.x, 'It should be 5.');

//  2. Rewrite the corrected JavaScript above as a self-executing
//  anonymous function that does not pollute the global
//  namespace (e.g., neither its variables nor the double
//  function can be accessed via the `window` global object,
//  like `window.x`):


//  3. Correct this function so that there is no i variable in
//  the global scope:

function arrayEach(array, func) {
  var i;
  for (i = 0; i < array.length; i++) {
    func(array[i]);
  }
}

arrayEach(['red','green','blue'], console.log);

//had to remove "console.log(i);" so I could view the rest of the outputs // should be 'undefined', not 3

//  4. Explain why this function does not modify the global
//  variable x declared on line 5 above. Write your explanation
//  as JavaScript comments.

function addTwo(x) {
  x = x + 2;
  return x;
}

console.log(addTwo(4)); // 6
console.log(x); // should be 5 if you corrected the double() function above

//* This function does not change the global variable x because when you are calling on the
// addTwo(x) function and replacing the x with the value of your choice then you are not changing the global variable.
// The reason for this is because everything inside the function is local and not global. So all the variable assignments
// inside it are local to that function only and thus are only subjected to change if told to do so inside the function.
// When called on the function then the function runs and it returns the given x value local to that function. So,
// since you called on the function to output on the console log then it outputs the local result of that function
// in the console but the global x variable stays the same. 
