// Task 1: Inventory Tracker
let inventory = ["apple", "banana", "cherry", "date", "elderberry"];
let inventoryCount = [10, 15, 5, 20, 7];

// Loop through the inventory array and log the count for each item
for (let i = 0; i < inventory.length; i++) {
    console.log(`${inventory[i]}: ${inventoryCount[i]}`);
}

// Task 2: Alphabetical Sorting
let words = ["zebra", "apple", "mango", "cherry", "banana"];

// Sort the words array alphabetically using a nested loop
for (let i = 0; i < words.length; i++) {
    for (let j = i + 1; j < words.length; j++) {
        if (words[i] > words[j]) {
            let temp = words[i];
            words[i] = words[j];
            words[j] = temp;
        }
    }
}

console.log(words); // Output: ["apple", "banana", "cherry", "mango", "zebra"]

// Task 3: Unique Array Builder
let uniqueNumbers = [];

// Generate an array of unique random numbers
while (uniqueNumbers.length < 10) {
    let randomNumber = Math.floor(Math.random() * 20) + 1;

    // Check if the randomNumber already exists in the array
    let exists = false;
    for (let i = 0; i < uniqueNumbers.length; i++) {
        if (uniqueNumbers[i] === randomNumber) {
            exists = true;
            break;
        }
    }

    // If it doesn't exist, add it to the array
    if (!exists) {
        uniqueNumbers.push(randomNumber);
    }
}

console.log(uniqueNumbers); // Output: An array of 10 unique random numbers between 1 and 20

// Task 4: Triangle Checker
let sideA = 7;
let sideB = 10;
let sideC = 5;

// Check if the sides form a valid triangle
if (sideA + sideB > sideC && sideB + sideC > sideA && sideA + sideC > sideB) {
    console.log(`The sides ${sideA}, ${sideB}, and ${sideC} form a valid triangle.`);
} else {
    console.log(`The sides ${sideA}, ${sideB}, and ${sideC} do not form a valid triangle.`);
}
