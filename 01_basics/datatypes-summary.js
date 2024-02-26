//datatpe is categorized on the basis of how data is kept in memory and can access from it
//primitive
 //7 types:string, number,boolean,BigInt,null, undefined, symbol


 //reference(non-primitive)

 //array,objects,functions

const heros =["isha","dasrath chand","dharma bhakta"];
let student={
    name:"ram",
    age:22,
}
const myFunction =function(){
   console.log("hello world");
}


//=============================================================
 //two types of memory: Stack(Primitive datatypes use stack),Heap(non-primitive datatypes use heap)
 //when you take any values in stack we get copy and any changes occur then the copied value is changed not original
 //when you take any values in heap we get reference,any change in the values changes in original
 
 let ishaMagar="juncover";
 let finalName=ishaMagar;
 finalName="radheradhe";
console.log(ishaMagar);
console.log(finalName);

let frn={
    name:"sanju",
    gmail:"sisi@gmail.com",
}

let frn2=frn
frn2.gmail="sanju@gmail.com";;
console.log(frn.gmail);
console.log(frn2.gmail);