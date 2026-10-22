// Q1: Check whether a number is positive, negative, or zero

let number = -5;

if (number > 0) {
    console.log("Positive number");
} else if (number < 0) {
    console.log("Negative number");
} else {
    console.log("Zero");
}



// Q2: Check whether a number is even or odd

let number = 7;

if (number % 2 === 0) {
    console.log("Even number");
} else {
    console.log("Odd number");
}



// Q3: Find the larger of two numbers

let a = 25;
let b = 40;

if (a > b) {
    console.log(a + " is larger");
} else if (b > a) {
    console.log(b + " is larger");
} else {
    console.log("Both numbers are equal");
}



// Q4: Assign a grade based on percentage

let percentage = 85;

if (percentage < 0 || percentage > 100) {
    console.log("Invalid percentage");
} else if (percentage >= 90) {
    console.log("Grade A");
} else if (percentage >= 80) {
    console.log("Grade B");
} else if (percentage >= 70) {
    console.log("Grade C");
} else if (percentage >= 60) {
    console.log("Grade D");
} else {
    console.log("Grade F");
}



// Q5: Check whether a year is a leap year

let year = 2024;

if (year % 400 === 0) {
    console.log("Leap year");
} else if (year % 100 === 0) {
    console.log("Not a leap year");
} else if (year % 4 === 0) {
    console.log("Leap year");
} else {
    console.log("Not a leap year");
}



// Q6: Print the day name using switch-case

let day = 3;

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day number");
}



// Q7: Create a simple calculator using switch-case

let num1 = 20;
let num2 = 5;
let operator = "*";

switch (operator) {
    case "+":
        console.log(num1 + num2);
        break;
    case "-":
        console.log(num1 - num2);
        break;
    case "*":
        console.log(num1 * num2);
        break;
    case "/":
        if (num2 === 0) {
            console.log("Cannot divide by zero");
        } else {
            console.log(num1 / num2);
        }
        break;
    default:
        console.log("Invalid operator");
}



// Q8: Check whether a character is a vowel or consonant

let character = "e".toLowerCase();

switch (character) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
        console.log("Vowel");
        break;
    default:
        if (character.length !== 1 || !/[a-z]/.test(character)) {
            console.log("Enter a single English letter");
        } else {
            console.log("Consonant");
        }
}



// Q9: Display instructions based on traffic light color

let color = "Red".toLowerCase();

switch (color) {
    case "red":
        console.log("Stop");
        break;
    case "yellow":
        console.log("Wait");
        break;
    case "green":
        console.log("Go");
        break;
    default:
        console.log("Invalid traffic light color");
}



// Q10: Create a menu-driven program using switch-case

let balance = 1000;
let choice = 2;
let amount = 300;

switch (choice) {
    case 1:
        console.log("Current balance: " + balance);
        break;

    case 2:
        if (amount > 0) {
            balance += amount;
            console.log("Deposit successful");
            console.log("New balance: " + balance);
        } else {
            console.log("Invalid deposit amount");
        }
        break;

    case 3:
        if (amount <= 0) {
            console.log("Invalid withdrawal amount");
        } else if (amount <= balance) {
            balance -= amount;
            console.log("Withdrawal successful");
            console.log("New balance: " + balance);
        } else {
            console.log("Insufficient balance");
        }
        break;

    case 4:
        console.log("Exiting program");
        break;

    default:
        console.log("Invalid menu choice");
}