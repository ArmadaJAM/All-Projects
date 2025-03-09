// Create a variable number and assign it a value between 1 and 10
let number = 5;

for (let i = 1; i <= 10; i++) {
    console.log(`${number} x ${i} = ${number * i}`);
}

// Create a variable n and assign it a value greater than 0
let n = 5;

let sum = 0;
for (let i = 1; i <= n; i++) {
    sum += i;
}

console.log(`The sum of the first ${n} numbers is: ${sum}`);

// Create an array of integers with at least 5 elements
let array = [2, 4, 6, 8, 10];

for (let i = 0; i < array.length; i++) {
    console.log(`Array Element: ${array[i]}`);
}

// Use nested for loops to print the pattern of stars
let rows = 5;
for (let i = 1; i <= rows; i++) {
    let stars = '';
    for (let j = 1; j <= i; j++) {
        stars += '*';
    }
    console.log(stars);
}

// Create an array of integers with at least 5 elements
let reverseArray = [1, 3, 5, 7, 9];

for (let i = reverseArray.length - 1; i >= 0; i--) {
    console.log(`Reversed Element: ${reverseArray[i]}`);
}
