// for(let index=1;index<10;index++){
//     if(index==4){
//         console.log(`detected ${index}`);
//         break;
//     }
//     console.log(`the value is ${index}`);
// }

//control flow goes out a the end

for(let i=1;i<10;i++){
    if(i==4){
        console.log(`detected ${i}`);
        continue ; // for one time only it doesn't print or continue the further process
    }
    console.log(`the value is ${i}`); // the display of  value 4 is skipedfor one time as it meets the condition then further is printing is continued
}

// while loop

let myarray=['shiva','parbati','ganesh'];
let arr=0;
while(arr<myarray.length){
   console.log(`NAMES ARE ${myarray[arr]}`);
   arr++;
}

// do while

let score=1;
do{
    console.log(`the score is ${score}`)
    score++;
}while(score<6);

