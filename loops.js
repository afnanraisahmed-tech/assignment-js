// ============================================
// LOOPS - 10 Solutions
// ============================================

// Q1: Print numbers 1 to 10 using for loop
function lq1() {
  let result = "";
  for (let i = 1; i <= 10; i++) {
    result += i + " ";
  }
  console.log("Q1: " + result);
}

// Q2: Sum of first N natural numbers using while loop
function lq2() {
  let n = 10;
  let sum = 0;
  let i = 1;
  while (i <= n) {
    sum += i;
    i++;
  }
  console.log("Q2: Sum of first " + n + " numbers = " + sum);
}

// Q3: Multiplication table using for loop
function lq3() {
  let num = 5;
  console.log("Q3: Multiplication table of " + num + ":");
  for (let i = 1; i <= 5; i++) { // 5 tak print kiya hai taake console lamba na ho
    console.log("    " + num + " x " + i + " = " + (num * i));
  }
}

// Q4: Factorial using while loop
function lq4() {
  let n = 5;
  let fact = 1;
  let i = n;
  while (i >= 1) {
    fact *= i;
    i--;
  }
  console.log("Q4: Factorial of " + n + " = " + fact);
}

// Q5: Reverse counting 10 down to 1 using for loop
function lq5() {
  let result = "";
  for (let i = 10; i >= 1; i--) {
    result += i + " ";
  }
  console.log("Q5: " + result);
}

// Q6: Even numbers up to N using do-while loop
function lq6() {
  let n = 10;
  let i = 1;
  let result = "";
  do {
    if (i % 2 === 0) {
      result += i + " ";
    }
    i++;
  } while (i <= n);
  console.log("Q6: Even numbers up to " + n + ": " + result);
}

// Q7: Sum of digits using while loop
function lq7() {
  let num = 12345;
  let temp = num;
  let sum = 0;
  while (temp > 0) {
    sum += temp % 10;
    temp = Math.floor(temp / 10);
  }
  console.log("Q7: Sum of digits of " + num + " = " + sum);
}

// Q8: Fibonacci series (first 10 terms) using for loop
function lq8() {
  let a = 0;
  let b = 1;
  let result = "";
  for (let i = 0; i < 10; i++) {
    result += a + " ";
    let next = a + b;
    a = b;
    b = next;
  }
  console.log("Q8: Fibonacci Series (10 terms): " + result);
}

// Q9: Guessing game using do-while loop (Simulated)
function lq9() {
  let correctNumber = 7; // Target
  let guesses = [3, 5, 7]; // Demo guesses
  let index = 0;
  let userGuess;
  let attempts = 0;

  do {
    userGuess = guesses[index];
    attempts++;
    console.log("    Attempt " + attempts + ": Guessed " + userGuess);
    
    if (userGuess < correctNumber) {
      console.log("    Too low!");
    } else if (userGuess > correctNumber) {
      console.log("    Too high!");
    }
    index++;
  } while (userGuess !== correctNumber);
  
  console.log("Q9: Correct! You guessed the number in " + attempts + " attempts.");
}

// Q10: Prime number check using for loop
function lq10() {
  let n = 29;
  let isPrime = true;
  
  if (n <= 1) {
    isPrime = false;
  } else {
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        isPrime = false;
        break;
      }
    }
  }
  
  if (isPrime) {
    console.log("Q10: " + n + " is a Prime number");
  } else {
    console.log("Q10: " + n + " is NOT a Prime number");
  }
}

// --- Calling all functions ---
console.log("====================================");
console.log("          LOOPS RESULTS             ");
console.log("====================================");
lq1();
lq2();
lq3();
lq4();
lq5();
lq6();
lq7();
lq8();
lq9();
lq10();
