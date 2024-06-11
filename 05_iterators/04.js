const myObject={
    js:'javascript',
    cpp:'c++',
    rb:"ruby",
    swift:"swift by apple"
}
for (const key in myObject ) {
    console.log(key);
}
 for (const key in myObject) {
    console.log(`${key} is shortform of ${myObject[key]}`);
 }

 //can we use forin in array as well?
 const programming= ["js","rb","py","java","cpp"]

 //Arrays key starts from 0 by default but the object can have random number
 for (const key in programming) {
   console.log(programming[key])
 }