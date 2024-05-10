const user ={
    username:"isha",
    price:888,
    welcomeMessage: function(){
        // console.log(`${this.username},hello world`);
        // console.log(this);
    }
}
user.welcomeMessage();
user.username="sanju";
user.welcomeMessage();
// console.log(this);

// browser ko bitra run garne engine ko dherai jaso,  the global object inside browser i.e window object that is mostly used

// -----------------------------------------------------------------------------------------------------------------------------
 const momo= function(){
    let username= "paneer momo";
    console.log(this.username);
 }
 console.log(this.username);

 // -----------------------------------------------------------------------------------------------------------------------------

function disco(){
    console.log(this);
}
disco();

// -----------------------------------------------------------------------------------------------------------------------------
const momo2 =() =>{
    let username= "paneer momo";
    console.log(this);
}
momo2();

// -----------------------------------------------------------------------------------------------------------------------------
// explicit return
const add=(num1,num2) =>{
    return num1+num2;
}
console.log(add(4,4));

// -----------------------------------------------------------------------------------------------------------------------------
//implicit return
const add1=(num1,num2) =>(num1+num2)
console.log(add(4,6));

// -----------------------------------------------------------------------------------------------------------------------------
// object return
const object=() =>({username:"isha sithung"})
console.log(object());