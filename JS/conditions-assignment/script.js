//Task 1: Grading System
// Create a variable named score and assign a value between 0 and 100
let score = 85;

let grade;
if (score >= 90 && score <= 100) {
    grade = 'A';
} else if (score >= 80 && score < 90) {
    grade = 'B';
} else if (score >= 70 && score < 80) {
    grade = 'C';
} else if (score >= 60 && score < 70) {
    grade = 'D';
} else {
    grade = 'F';
}

console.log(`Your grade is: ${grade}`);

//Task 2: Weather Advisor
// Create a variable named temperature and assign it a value
let temperature = 25;

if (temperature < 0) {
    console.log("It's freezing outside! Bundle up!");
} else if (temperature >= 0 && temperature <= 15) {
    console.log("It's cold outside. Wear a jacket.");
} else if (temperature >= 16 && temperature <= 30) {
    console.log("The weather is nice. Enjoy your day!");
} else {
    console.log("It's hot outside. Stay hydrated!");
}

//Task 3: Eligibility Checker
// Create a variable named age and assign it a value
let age = 16;

if (age < 13) {
    console.log("You are too young for this activity.");
} else if (age >= 13 && age <= 17) {
    console.log("You need parental permission.");
} else {
    console.log("You are eligible for this activity.");
}

//Task 4: Ticket Price Calculator
// Create variables named age and isMember
age = 30;
let isMember = true;

let ticketPrice;
if (age < 12) {
    ticketPrice = 'free';
} else if (age >= 12 && isMember) {
    ticketPrice = 10;
} else {
    ticketPrice = 15;
}

console.log(`The ticket price is: $${ticketPrice}`);

//Task 5: Challenge Task (Optional): Leap Year Checker

function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return true;
    } else {
        return false;
    }
}

console.log(isLeapYear(2020)); 
console.log(isLeapYear(2021)); 
console.log(isLeapYear(1900)); 
console.log(isLeapYear(2000)); 
