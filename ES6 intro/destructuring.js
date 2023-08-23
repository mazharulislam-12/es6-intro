const actor = {
    name: 'Bijoy',
    age: 48,
    phone: 965741230,
    money: 1200000
}

const name = actor.name;
const age = actor.age;
const phone = actor.phone;
const money = actor.money;

console.log(name);
console.log(money);

console.log(actor);
console.log(actor.name);
console.log(actor.age);
console.log(actor.phone);
console.log(actor.money);


const person = {
    firstName: 'jon',
    lastName: 'doe',
    age: 30,
};
const {firstName, lastName, age} = person;
console.log(firstName);
console.log(lastName);
console.log(age);

// array destructuring-
const numbers = [45, 69];
const [first, second];
const [X, y] = [12, 96];


//----advance
function doubleThem(a, b){
    return [a*2, b*2];
}
const [firsts , seconds] = doubleThem(6, 9);
console.log(firsts, seconds);








