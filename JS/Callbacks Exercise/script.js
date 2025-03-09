/* Task 1: Custom Array Filter */
function customFilter(arr, callback) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            result.push(arr[i]);
        }
    }
    return result;
}

/**
 * Callback function to check if a number is even
 * @param {Number} num - Number to be checked
 * @returns {Boolean} - True if the number is even, false otherwise
 */
function isEven(num) {
    return num % 2 === 0;
}

const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = customFilter(numbers, isEven);
console.log(evenNumbers);  

/* Task 2: Countdown Timer */

function countdown(start, callback) {
    const intervalId = setInterval(() => {
        if (start < 0) {
            clearInterval(intervalId);
        } else {
            callback(start);
            start--;
        }
    }, 1000);
}

/**
 * Callback function to display a number
 * @param {Number} num - Number to be displayed
 */
function displayNumber(num) {
    console.log(num);
}


countdown(5, displayNumber);  

/* Task 3: Simple Event Listener */
function createButton(buttonText, callback) {
    const button = document.createElement('button');
    button.innerText = buttonText;
    document.body.appendChild(button);
    button.addEventListener('click', callback);
}

/**
 * Callback function to handle button click event
 */
function buttonClicked() {
    console.log("Button Clicked!");
}


createButton("Click Me", buttonClicked);

/* Task 4: Task Runner */

function runTasks(tasks) {
    let index = 0;

    function nextTask() {
        if (index < tasks.length) {
            tasks[index]();
            index++;
            setTimeout(nextTask, 1000);
        }
    }

    nextTask();
}

/**
 * Example task functions
 */
function task1() {
    console.log("Task 1 completed");
}

function task2() {
    console.log("Task 2 completed");
}

function task3() {
    console.log("Task 3 completed");
}

// Example usage
runTasks([task1, task2, task3]);


