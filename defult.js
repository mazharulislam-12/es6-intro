// default --> if value is not provide, take this as a default
function add(num1 = 0, num2 = 0) {
    const result = num1 + num2;
    console.log(num1, num2, result);
    return result
}
// const sum = (add(3, 5));
// const sum = (add());
const sum = (add(5 ));

// string
function fullName(first = '', last = '') {
    const full = first + ' ' + last;
    return full
}
const fullNames = 'Babul'
console.log(fullNames);

// array
function friends(name = []) {

}

// object
function person(human = {}) {
    
}

function ads(num1, num2) {
    let results = 0;
    results = num1 + num2;
    console.log(results);
}
ads(203, 89)