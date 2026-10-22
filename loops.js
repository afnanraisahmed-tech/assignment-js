// Q1: Print numbers from 1 to 10

for (let i = 1; i <= 10; i++) {
    console.log(i);
}



// Q2: Calculate the sum of the first N natural numbers

let n = 5;
let i = 1;
let sum = 0;

while (i <= n) {
    sum = sum + i;
    i++;
}

console.log("Sum:", sum);



// Q3: Print the multiplication table of a given number

let number = 5;

for (let i = 1; i <= 10; i++) {
    console.log(number + " x " + i + " = " + (number * i));
}



// Q4: Calculate factorial using a while loop

let number = 5;
let i = 1;
let factorial = 1;

if (!Number.isInteger(number) || number < 0) {
    console.log("Enter a non-negative integer");
} else {
    while (i <= number) {
        factorial = factorial * i;
        i++;
    }

    console.log("Factorial:", factorial);
}



// Q5: Print numbers from 10 down to 1

for (let i = 10; i >= 1; i--) {
    console.log(i);
}



// Q6: Print even numbers up to N using do-while

let n = 10;
let i = 2;

if (n >= 2) {
    do {
        console.log(i);
        i += 2;
    } while (i <= n);
} else {
    console.log("No even numbers from 2 to N");
}



// Q7: Calculate the sum of digits using a while loop

let number = 1234;
let sum = 0;

number = Math.abs(number);

while (number > 0) {
    let digit = number % 10;
    sum = sum + digit;
    number = Math.floor(number / 10);
}

console.log("Sum of digits:", sum);



// Q8: Generate the first 10 terms of the Fibonacci series

let first = 0;
let second = 1;

for (let i = 1; i <= 10; i++) {
    console.log(first);

    let next = first + second;
    first = second;
    second = next;
}



// Q9: Keep asking for a guess until the correct number is found

const secretNumber = 7;
const guesses = [3, 5, 7];
let index = 0;
let guess;

do {
    guess = guesses[index];
    console.log("Your guess:", guess);

    if (guess !== secretNumber) {
        console.log("Wrong guess, try again");
    }

    index++;
} while (guess !== secretNumber && index < guesses.length);

if (guess === secretNumber) {
    console.log("Correct guess!");
}



// Q10: Check whether a number is prime using a for loop

let number = 17;
let isPrime = number > 1;

for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
        isPrime = false;
        break;
    }
}

if (isPrime) {
    console.log(number + " is a prime number");
} else {
    console.log(number + " is not a prime number");
}
