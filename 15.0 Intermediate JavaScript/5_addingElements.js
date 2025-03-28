var output = [];
output.push(1);
output.push(2);
output.push(3);
// [1, 2, 3]
output.pop;
// [1, 2]
output.pop;
output.pop;

var count = 1;

function fizzBuzz() {
    if (count % 3 === 0 && count % 5 === 0) {
        output.push("FizzBuzz");
    }
    else if (count % 3 === 0) {
        output.push("Fizz");
    }
    else if (count % 5 === 0) {
        output.push("Buzz");
    }
    else {
        output.push(count);
    }

    count++;
    console.log(output);
}
