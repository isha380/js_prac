//for of

// ["","",""] array of string

//[{},{},{}] array of object

const number =[10,20,30,40];
for (const score of number) {
    console.log(score);
}

const greeting="good morning";

for (const greet of greeting) {
    console.log(`greetings char is ${greet}`);
}

// Maps it is object itself

const map = new Map();
map.set('sun',"sunday")
map.set('mon',"monday")
map.set('tue',"tuesday")
map.set('wed',"wednesday")
console.log(map);
// for(const key of map){
// console.log(key);
// }

// for(const [key,value] of map) {
//     console.log(key, ":--->",value);
// }

//not iterable
 
const myObject={
    'game1':'cfc' ,
    'game2':'fire'
}

for (const [key,value] of myObject) {
    console.log(key, ":--->",value);
}