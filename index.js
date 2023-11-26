function hasTargetSum(array, target) {
  for (let i=0; i < array.length; i++) {
    for (let j=i+1; j < array.length; j++) {
      if (array[i] + array[j] === target) {
        return true
      } 
    }
  }
  return false
}

hasTargetSum([3, 8, 12, 4, 11, 7], 10)

/* 
This is O(n2) runtime or quadratic time in Big O notation since it is taking n and comparing it against every other n element in the array
*/

/* 
Function hasTargetSum has two arguments (array of numbers & a target number)
If any 2 numbers in the array added together === target number, return true
If any 2 numbers in the array added together !== target number, return false

Iterate through array
Take first number in the array and add to each after it - if they === target, return true
Repeat with 2nd number, then 3rd, and so on (might be too redundant) - how do we simplify?

Use a for loop to iterate through the array
Needs to add every other number in the array - how do we get there?

*/

/*
Explain instructions
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([0, 1, 0, 4, 5], 0));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([-5, 10, 0, 4, 5], 5));
}

module.exports = hasTargetSum;
