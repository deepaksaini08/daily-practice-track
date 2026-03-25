// 1. even and odd check in js

function isEven(num) {
  if (num % 2 == 0) {
    console.log("Number is even");
  } else {
    console.log("Number is Odd");
  }
}

isEven(32);

// 2. check number is greater and less and equal
function checkNumber(num) {
  if (num == 0) {
    console.log("number is Zero");
  } else if (num < 0) {
    console.log("number is less than 0");
  } else {
    console.log("number is greater than 0");
  }
}
checkNumber(8);

// 3. Largest of 3 Numbers

function largestNum(a, b, c) {
  if (a >= b && a >= c) {
    return a;
  } else if (b >= a && b >= c) {
    return b;
  } else {
    return c;
  }
}

console.log(largestNum(22, 14, 89));

// 4. Simple Calculator

function calculator(a, b, operator) {
  if (operator === "+") {
    console.log(a + b);
  } else if (operator === "-") {
    console.log(a - b);
  } else if (operator === "*") {
    console.log(a * b);
  } else if (operator === "/") {
    console.log(a / b);
  } else {
    console.log("not a operator");
  }
}

calculator(12, 2, "n");

// 5 Convert String to Number

function convert(str) {
  return Number(str);
}
console.log(convert("123"));

// 6. Leap Year Checker

function leapYearChecker(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return "year is Leap year";
  } else {
    return "It is not a Leap year";
  }
}

console.log(leapYearChecker(1900));
console.log(leapYearChecker(2000));

// 7. FizzBuzz

function FizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log("FizzBuzz");
    } else if (i % 3 == 0) {
      console.log("Fizz");
    } else if (i % 5 == 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}
FizzBuzz(20);

// 8. Multiplication Table

function table(num){
    for (let i = 0; i <= 10; i++) {
        console.log(num*i)
        
    }
}
table(16)

// 9. Sum of Digits

function sumOfDigits(num) {
  let sum = 0;
  while (num>0) {
    sum += num % 10  // get last digit
    num = Math.floor(num/10);  // remove last digit 
  }
  return sum;
}

console.log(sumOfDigits(32)); //5


// 10. Reverse a Number