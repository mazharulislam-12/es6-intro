const glass = {
    name: 'glass',
    color: 'golden',
    price: '1200',
    isClean: true
}
console.log(glass);

// keys ---all properties name
const keys = Object.keys(glass);
// [ 'name', 'color', 'price', 'isClean' ]
console.log(keys);


// values --- all properties values
const value = Object.values(glass);
// [ 'glass', 'golden', '1200', true ]
console.log(value);



// entries--- 
const entries = Object.entries(glass);
// array of array , two dimensional array
//    [
//     [ 'name', 'glass' ],
//     [ 'color', 'golden' ],
//     [ 'price', '1200' ],
//     [ 'isClean', true ]
//   ]
console.log(entries);


// object to data delete
delete glass.isClean;
console.log(glass);

// delete 2nd 
const {isClean, ...shortGlass} = glass;
console.log(shortGlass);


// freeze ----
Object.freeze(glass);
glass.source = 'Bangladesh';
console.log(glass);

