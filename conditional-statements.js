// ============================================
// CONDITIONAL STATEMENTS - 10 Solutions
// ============================================

// Q1: Check if a number is positive, negative, or zero
function q1() {
  let num = -5;
  if (num > 0) {
    console.log("Q1: " + num + " is Positive");
  } else if (num < 0) {
    console.log("Q1: " + num + " is Negative");
  } else {
    console.log("Q1: " + num + " is Zero");
  }
}

// Q2: Even or odd check
function q2() {
  let num = 7;
  if (num % 2 === 0) {
    console.log("Q2: " + num + " is Even");
  } else {
    console.log("Q2: " + num + " is Odd");
  }
}

// Q3: Largest of two numbers
function q3() {
  let a = 15;
  let b = 25;
  if (a > b) {
    console.log("Q3: Larger is " + a);
  } else if (b > a) {
    console.log("Q3: Larger is " + b);
  } else {
    console.log("Q3: Both are equal");
  }
}

// Q4: Grade evaluation using if-else-if
function q4() {
  let percentage = 82;
  if (percentage >= 90) {
    console.log("Q4: Percentage " + percentage + "% -> Grade A");
  } else if (percentage >= 80) {
    console.log("Q4: Percentage " + percentage + "% -> Grade B");
  } else if (percentage >= 70) {
    console.log("Q4: Percentage " + percentage + "% -> Grade C");
  } else if (percentage >= 60) {
    console.log("Q4: Percentage " + percentage + "% -> Grade D");
  } else {
    console.log("Q4: Percentage " + percentage + "% -> Grade F");
  }
}

// Q5: Leap year check
function q5() {
  let year = 2024;
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log("Q5: " + year + " is a Leap Year");
  } else {
    console.log("Q5: " + year + " is NOT a Leap Year");
  }
}

// Q6: Day of week using switch-case
function q6() {
  let dayNum = 3;
  switch (dayNum) {
    case 1: console.log("Q6: Monday"); break;
    case 2: console.log("Q6: Tuesday"); break;
    case 3: console.log("Q6: Wednesday"); break;
    case 4: console.log("Q6: Thursday"); break;
    case 5: console.log("Q6: Friday"); break;
    case 6: console.log("Q6: Saturday"); break;
    case 7: console.log("Q6: Sunday"); break;
    default: console.log("Q6: Invalid day");
  }
}

// Q7: Simple calculator using switch-case
function q7() {
  let a = 10;
  let b = 5;
  let operator = '+';
  
  switch (operator) {
    case '+': console.log("Q7: " + a + " + " + b + " = " + (a + b)); break;
    case '-': console.log("Q7: " + a + " - " + b + " = " + (a - b)); break;
    case '*': console.log("Q7: " + a + " * " + b + " = " + (a * b)); break;
    case '/': console.log("Q7: " + a + " / " + b + " = " + (a / b)); break;
    default: console.log("Q7: Invalid operator");
  }
}

// Q8: Vowel or consonant using switch-case
function q8() {
  let char = 'e';
  let lowerChar = char.toLowerCase();
  
  switch (lowerChar) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
      console.log("Q8: '" + char + "' is a Vowel");
      break;
    default:
      console.log("Q8: '" + char + "' is a Consonant");
  }
}

// Q9: Traffic light system using switch-case
function q9() {
  let color = "green";
  
  switch (color) {
    case "red": console.log("Q9: STOP"); break;
    case "yellow": console.log("Q9: WAIT"); break;
    case "green": console.log("Q9: GO"); break;
    default: console.log("Q9: Invalid color");
  }
}

// Q10: Menu-driven program using switch-case
function q10() {
  let choice = 2; // 1=Balance, 2=Deposit, 3=Withdraw, 4=Exit
  let amount = 500;
  let balance = 1000;
  
  switch (choice) {
    case 1:
      console.log("Q10: Check Balance -> $" + balance);
      break;
    case 2:
      balance = balance + amount;
      console.log("Q10: Deposit $" + amount + " -> New Balance: $" + balance);
      break;
    case 3:
      if (amount <= balance) {
        balance = balance - amount;
        console.log("Q10: Withdraw $" + amount + " -> New Balance: $" + balance);
      } else {
        console.log("Q10: Insufficient funds");
      }
      break;
    case 4:
      console.log("Q10: Exit");
      break;
    default:
      console.log("Q10: Invalid choice");
  }
}

// --- Calling all functions ---
console.log("====================================");
console.log("   CONDITIONAL STATEMENTS RESULTS   ");
console.log("====================================");
q1();
q2();
q3();
q4();
q5();
q6();
q7();
q8();
q9();
q10();
