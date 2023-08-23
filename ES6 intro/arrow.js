function declaration
function add(a, b) {
    const result = a + b;
    return result;
}
const sum = add(2, 8);
console.log(sum);


function add(a, b) {
    return a + b;
}
/ const sum = add(2, 8);
console.log(sum);



function expression
const add2 = function (a, b) {
    return a + b;
}
const sum = add2(2, 8);
console.log(sum);


// arrow function
const add3 = (a, b) => a + b;
const sum = add3(5, 10);
console.log(sum);


const add4 = (x, y) => x + y;
const sums = add4(10, 20);
console.log(sums);

const add5 = (num1, num2, num3, num4) => num1 + num2 + num3 + num4;
const sumOf = add5(2,3,4,5);
console.log(sumOf);

const multiply = (num1, num2) => num1 * num2;
const multi = multiply(3, 12);
console.log(multi);

