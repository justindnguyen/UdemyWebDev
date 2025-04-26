var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.

function double(x) {
    return x * 2;
}

var newNumbers = numbers.map(double);
console.log(newNumbers); // [6, 112, 4, 96, 10]

var newNumbers2 = numbers.map( x => x * 2);
console.log(newNumbers2); // [6, 112, 4, 96, 10]

// var newNumbers2 = [];

// numbers.forEach(function double2(x) {
//     newNumbers.push(x * 2); 
// });
// console.log(newNumbers2); // [6, 112, 4, 96, 10]

//Filter - Create a new array by keeping the items that return true.

const newNumbers3 = numbers.filter(function (num) {
    return num > 10;
});
console.log(newNumbers3); // [56, 48]

//Reduce - Accumulate a value by doing something to each item in an array.

// var newNumber4 = numbers.reduce(function (accumulator, currentValue) {
//     return accumulator + currentValue;
// });
// console.log(newNumber4); // 114

var newNumber4 = numbers.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(newNumber4); // 114

//Find - find the first item that matches from an array.

const newNumber5 = numbers.find(function (num) {
    return num > 10;
});
console.log(newNumber5); // 56

//FindIndex - find the index of the first item that matches.

const newNumber6 = numbers.findIndex(function (num) {
    return num > 10;
});
console.log(newNumber6); // 1

const newNumber7 = numbers.map((num) => {
    return num * 2;
});

console.log(newNumber7); // [6, 112, 4, 96, 10]