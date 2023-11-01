// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Prompt: Create a function that takes in a number (greater than 2) and returns an array containing the Fibonacci sequence. The length of the array is determined by the argument of the function.

// a) Create a test with expect statements for each of the variables provided.

const fibonacciLength1 = 6
// Expected output: [1, 1, 2, 3, 5, 8]

const fibonacciLength2 = 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

describe("fibonacciNums" , () => {
  it("Takes in a number (greater than 2) and returns an array containing the Fibonacci sequence. The length of the array is determined by the argument of the function." , () => {
    expect(fibonacciNums(fibonacciLength1)).toEqual([1, 1, 2, 3, 5, 8])
    // expect(fibonacciNums(fibonacciLength2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
  })
})

// b) Create the function that makes the test pass.

const currentArray = [1,1]
let start = 0
const fibonacciNums = (number) => {
    for (let i = 1; i < number - 1; i++) {
      let total = currentArray[start] + currentArray[i]
      currentArray.push(total)
      start ++
    }
    return currentArray
}
// console.log(fibonacciNums(fibonacciLength1))
// console.log(fibonacciNums(fibonacciLength2))

// Pseudo code:
// Input: A number greater than 2
// Output: An array of numbers in the Fibonacci sequence, the number of elements corresponding to the input number
// Create an array with two elements of the number 1
// Set a variable equal to 0
// Create a function where the parameter is set for a number to be passed through
// Within the function, create a for loop that starts at index 1 and iterates the number entered minus 1
// Set a variable that equals the array element at index of start variable added to the array element with index at current value of i
// Use push method to add the combined number into the array
// Add 1 to start value

// --------------------2) For the following prompt, use ChatGPT or an equivalent AI tool to help you solve the problem. The prompt will require the use of a JavaScript method called Object.values()
// Prompt: Create a function that takes in an object and returns an array of the object's values sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.

const studyMinutesWeek1 = {
  sunday: 90,
  monday: 30,
  tuesday: 20,
  wednesday: 15,
  thursday: 30,
  friday: 15,
  saturday: 60
}
// Expected output: [15, 15, 20, 30, 30, 60, 90]

const studyMinutesWeek2 = {
  sunday: 100,
  monday: 10,
  tuesday: 45,
  wednesday: 60,
  thursday: 20,
  friday: 15,
  saturday: 65
}
// Expected output: [10, 15, 20, 45, 60, 65, 100]

describe("ascendOrder" , () => {
  it("Takes in an object and returns an array of the object's values sorted from least to greatest." , () => {
    expect(ascendOrder(studyMinutesWeek1)).toEqual([15, 15, 20, 30, 30, 60, 90])
    expect(ascendOrder(studyMinutesWeek2)).toEqual([10, 15, 20, 45, 60, 65, 100])
  })
})

// b) Create the function that makes the test pass.

const ascendOrder = (object) => {
  return Object.values(object).sort((a,b) => a - b)
}
// console.log(ascendOrder(studyMinutesWeek1))
// console.log(ascendOrder(studyMinutesWeek2))

// Pseudo code:
// Input: An object where the values are numbers
// Output: An array with the number values arranged from least to greatest
// Create a function that has an object for the parameter
// Use Object.values() method to take in an object and return an array with its values
// Add .sort() method to arrange values from least to greatest