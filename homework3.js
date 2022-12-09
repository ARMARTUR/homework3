// 1.   Given an array of numbers which is almost sorted in ascending order.  Find the index where sorting order is violated.


let arr = [-9, -4, -4, 3, 12, 4, 5];

function filtredArr(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[i + 1]) {
            console.log(arr.indexOf(arr[i]))
        }
    }
};
filtredArr(arr);




//   Given an array consisting from the arrays of numbers (like a two-dimensional array). Find sum of each row and print them as an array


let arr = [[8, 35, 2], [8], [5, 6, -5, -6], [1, 3, -9, 0, -1]]

function arrVauluesSum(arr) {

    let resultArr = []
    for (let i = 0; i < arr.length; i++) {

        let nestedArrLength = arr[i].length

        let sum = 0
        for (let m = 0; m < nestedArrLength; m++) {
            sum += arr[i][m]

        }


        resultArr.push(sum)
    }
    return resultArr
}
console.log(arrVauluesSum(arr));

// [12, 1, 13, 15]




// 3 Given an array of integers. Write a function that return new array from first array, where removed even numbers, and odd numbers was multiplied with new array length




// [15, -9, 21]
let arr = [5, 4, 78, 0, -3, 7];
function isEven(arr) {
    let returnedArr = []
    let secondArr = []
    for (let i = 0; i < arr.length; i++) {

        if (arr[i] % 2 !== 0) {
            secondArr.push(arr[i])

        }
    }
    for (let a = 0; a < returnedArr.length; a++) {

        thirdArr.push(secondArr[a] * secondArr.length)
    }
    return returnedArr
}
console.log(isEven(arr));


// Given three numbers a, b (a ≤ b) and step. Create an array of evenly spaced elements starting from a to b spaced by step.


let arr = [10, 100, 20];
function solve(arr) {
    let returnedArr = []
    returnedArr[0] = arr[0]
    console.log(arr[1])
    for (let i = 0; i < Infinity; i++) {

        if (returnedArr[returnedArr.length - 1] <= arr[1]) {
            returnedArr.push(returnedArr[i] + arr[arr.length - 1])
        } else {
            returnedArr.pop()
            break;
        }
    }
    return returnedArr
}

console.log(solve(arr));
