const numbers = [4, 6, 8, 36, 78];
for(let i = 0; i < numbers.length; i++){

}
// console.log(numbers);
// for of use on array or string not in object
// for in use on object


// for of loop

for (const num of numbers) {
    console.log(num);
}

const name = 'Ali Haitet Khan'
for (const nums of name) {
    console.log(nums);
}

const glass = {
    name: 'glass',
    color: 'golden',
    price: '1200',
    isClean: true
}

for (const key in glass) {
    const value = glass[key]
    console.log(key, value);
}