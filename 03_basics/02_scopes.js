if(true){
    let a=10;
    const b=20;
    var c=30;  //var or [ c= 30 ](even though it is declared in inner block but it still gets print if console is outside block without return which is a problem)
}
// console in browser(inspect)  and in code environment (if check through node example) then the global scope is different

//-------------------------------------------------------------------------------
let a=800;
if(true){
    let a=10;
    const b=20;
    console.log(a);
}
console.log(a);

//-------------------------------------------------------------------------------
function one(){
    const username="hi. iam function one this is the message from the parent function";
    function two(){
        const website="youtube";
        console.log(username);
    }
    two();
    //   console.log(website);
       
}
one();

if(true){
    const username="hitesh"
    if(username==="hitesh"){
        const  website=" youtube";
        console.log(`${username}`+ website)
    }
    // console.log(website); [practicing error]
}
// console.log(username); [practicing error]

//-------------------------------------------------------------------------------

console.log("the value is :"+ add1(5));      
function add1(num){
    return num+1;
}

// we have declare the function and hold the function in variable as well

// add2(6); [gives error due to above reason, can't access before the declaration]
const add2 = function(num){
//add2 is sometime called expression. it is kind of variable here

    return num+2;
}
console.log(add2(6));