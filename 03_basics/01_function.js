// function callMyName(){
//     console.log("isha");
//     console.log("sanju");
//     console.log("ashmita");
//     console.log("sebika");

// }

//   callMyName    [this is considered refrence]
//  callMyName()   [this is considered function]

// callMyName();

// ******** function output has to be returned to the function to print***************
// function addTwoNmbers(number1,number2){
//     console.log(number1+number2);
// }
// addTwoNmbers();

//-------------------------------------------------------------------------------------------------------------------- //
function addTwoNmbers(number1,number2){
    console.log(number1+number2);
}
const result=addTwoNmbers(1,2);
console.log("result:",result);

// ^^ here comes the value of result as undefined because the console is just printing and nothing is returned from the function

//-------------------------------------------------------------------------------------------------------------------- //
function add2Numbers(number1,number2){
    let output=number1+number2;
    return output;
    console.log("gwache vai");
    // rule: by default function doesn't perform any task after [return]
}
const output= add2Numbers(1,2); // the output used inside the function and outside it, is different
console.log("result:",output);

// direct return the operation 
function addNumbers(number1,number2){
    return number1+number2;
}
const display= addNumbers(8,8);
console.log("result:",display);

//-------------------------------------------------------------------------------------------------------------------- //
function loginUserMessage(userName ){
    // ! is a not symbol (converts true into false and vice-versa)
    // "" i.e empty string is considered false value

    // if(!undefined){
    //     console.log("please enter a message");
    //     return ;
    // }
    // return `${userName} just logged in`;

    //below example and above give the same answer as the !(not) gives the opposite value

    if(userName===undefined){
        console.log("please enter a message");
        return ;
    }
    return `${userName} just logged in`;
}
   

console.log(loginUserMessage()); //output comes undefined not null
// console.log(loginUserMessage(" ishaa"));

//-------------------------------------------------------------------------------------------------------------------- //
function loginUserMsg(userName ="unknown user"){
// for default value direct giving  [= "name" ] in parameters following the condition if the console is empty
    return `${userName} just logged in`;

}
console.log(loginUserMsg()); 

//------------------------------------------------------------------------------
function one(){
    console.log("isha party");
}
one();