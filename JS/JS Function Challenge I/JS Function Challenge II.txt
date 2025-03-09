/* Task 1 */
function generatePattern() {  
    let result = "";  
    for (let i = 1; i <= 3; i++) {  
      for (let j = 1; j <= i; j++) {  
        result += j + " ";  
      }  
      result += "\n";  
    }  
    return result;  
  }  
  
  console.log(generatePattern());
  /* Output - 
1 
1 2 
1 2 3 
 */
  /*Answer -  
1 
1 2 
1 2 3  */

  /* Task 2 */
  function swapFirstLast(arr) {  
    let first = arr.shift();  
    let last = arr.pop();  
    arr.unshift(last);  
    arr.push(first);  
    return arr;  
  }  
  
  let numbers = [10, 20, 30, 40];  
  console.log(swapFirstLast(numbers));  
  console.log(numbers);  
  /* Output - 
[40, 20, 30, 10]
[40, 20, 30, 10]
 */
  /* Answer - 
[40, 20, 30, 10]
[40, 20, 30, 10]
 */


  /* Task 3 */
  function filterPassingGrades(grades) {  
    let passing = [];  
    for (let grade of grades) {  
      if (grade >= 70) {  
        passing.push(grade);  
      } else {  
        passing.unshift(grade);  
      }  
    }  
    return passing;  
  }  
  
  let scores = [85, 45, 90, 60];  
  console.log(filterPassingGrades(scores));  
  /* Output - 
  [60, 45, 85, 90]
 */
  /* Answer -  
 [60, 45, 85, 90]
*/

  /* Task 4 */

  function updateStatus(tasks) {  
    for (let task of tasks) {  
      task.completed = !task.completed;  
    }  
    return tasks;  
  }  
  
  let taskList = [  
    { id: 1, completed: false },  
    { id: 2, completed: true }  
  ];  
  
  console.log(updateStatus(taskList));  
  console.log(taskList);  
  /* Output - 
[ { id: 1, completed: true }, { id: 2, completed: false } ]
[ { id: 1, completed: true }, { id: 2, completed: false } ]
  */
  /* Answer -
[ { id: 1, completed: true }, { id: 2, completed: false } ]
[ { id: 1, completed: true }, { id: 2, completed: false } ]
*/

  /* Task 5 */

  function findValue(arr, target) {  
    for (let i = 0; i < arr.length; i++) {  
      if (arr[i] === target) {  
        return `Found at index ${i}`;  
      }  
    }  
    return "Not found";  
  }  
  
  let data = [5, 12, 8, 130, 44];  
  console.log(findValue(data, 12));  
  console.log(findValue(data, 100));  
  /* Output - Found at index 1
Not found
 */
  /* Answer - 
  If the value is found, it returns a string indicating the index at which the value is found. If the value is not found, it returns "Not found".

  [Found at index 1
Not found
 */