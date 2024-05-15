 (function practice(){
    console.log(`this is a named IIFE`);
 }) ();  //inorder to stop/end the context we end to add semi colon ---> ;


// simple iife example
 ( (name) =>{
    console.log(`this is simple iife example ${name}`);
 } ) ('isha')