// Part 1:
//  - What will print and why?
//  - What will change if we delete line 5? Why?

// Part 2:
// - change to ES6 syntax

// Part 3:
// - modify so that it prints 1, 2, 2 in that order. Console.logs must stay in place.

function x() {
  let a = 2;
  console.log(a);
}

function y() {
  let a = 2;
  console.log(a);
  x();
}

let a = 1;
console.log(a);
y();