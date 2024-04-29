//singleton
//when constructore is made for eg: Object.create

//object literals
const mysymb= Symbol("key1");
const developer={
    name:"isha",
    "full name": "isha sithung magar",
    [mysymb] :"1_key",
    age:88,
    location:"bhaktapur",
    email:"isha@gmail.com",
    isLoggedIn:false,

}
// console.log(developer["email"]);
// console.log(developer[mysymb]);
// console.log(developer.location);
//note: access the value usually by using dot(.) and use the square bracket [] where we can't use dot

// developer.email ="isha23@gmail.com";
// Object.freeze(developer);

// developer.email="hitesh@gmail.com";
// console.log(developer);

//we can treat the function as a variable in javascript 
 
developer.greetings = function (){
    console.log("hello user. keep working hard!!");
}
console.log(developer.greetings());

developer.greetings2 = function (){
    console.log(`hello user, ${this.name} ${this.location}`);
}
console.log(developer.greetings2());