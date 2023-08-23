// var : no reason to use var
// let : allow it to reassign
// const : do not allow it to reassign

const money = 25;
const rich = money + 25;
console.log(rich);

 let sum = 0;
for(let i = 0; i <= 10; i++){
    const num = i;
    sum = sum + num;
}
console.log(sum);


const numbers = [25, 95, 45, 96,78];
numbers[1] = [5]
console.log(numbers);
