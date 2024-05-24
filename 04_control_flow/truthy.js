const userEmail="isha@";
// by default  it is assumed the variable contains true 
if(userEmail){
    console.log("welcome");
}else{
    console.log("don't have user name");
}
//------------------------------------------------------------
const userName="";
// assumed empty as false
if(userName){
    console.log("hello");
}else{
    console.log("don't have user name");
}

const user=[];
if(user){
    console.log("there is a user");
} 
else{
    console.log("no user");
}

//falsy values
// false,0,-0, BigInt 0n, "",null,undefined,NaN,

// truthy values
// "0",'false'," ",[],{}, function(){}

if(user.length===0){
    console.log("array is empty");
}

const emptyObj={}
if (Object.keys(emptyObj).length===0){
    console.log("object is empty");
}

//nullish coalescing operator(??):null undefined

let val1;
val1=5 ?? 10
val2 =null ?? 10
val3 = undefined ?? 80
val4= null ??40 ?? 50 // such condition is not usally applied. 
//if variable is null the first value is assigned.

console.log(val1);
console.log(val2);
console.log(val3);
console.log(val4);

//------------------------------------------------------------------
//terniary operator

// condition ? true:false
