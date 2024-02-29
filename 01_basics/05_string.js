const name="ishamagar";
const age=20;
console.log(name + " " +age); //outdated way to write
console.log(`hello my name is ${name}. I am ${age} `);
const schoolName= new String('hbo ');
console.log(schoolName.length);
console.log(schoolName.toUpperCase());
console.log(schoolName.charAt(4));
console.log(schoolName.indexOf('b'));
 
const newName= name.substring(0,2);
console.log(newName);

const one="   radhekrishna    ";
console.log(one);
console.log(one.trim());

const practice="hari-hair-bol";
console.log(practice);
console.log(practice.replace("hair","HARI"));

console.log(practice.includes("bol"));
console.log(practice.includes("mahadev"));

console.log(practice.split("i",2));
console.log(practice.split("i",3));