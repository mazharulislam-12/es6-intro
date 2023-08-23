const difference = (x, y) => x - y;
const multiply = (first, second, third) => first * second * third;


// single parameter or one parameter ----------
const getAge = (person) => person.age;
const student = {name: 'anamta', age: 20};
const age = getAge(student);
console.log(age);

const getThird = numbers => numbers[2];
const third = getThird([25, 87, 96, 36]);
console.log(third);

const double = num => num * 2;
const dobl = double(5);
console.log(dobl);

// no parameter------
const getPI = () => Math.PI;
console.log(getPI());


// large arrow function--- if you want to get anything return form this function . then you have to use return keyword
const doMath = (x, y, z) => {
    const sum = x + y + z;
    const multi = x * y * z;
    const result = sum + multi;
    return result;
}












