// const coding= ["js","rb","py","java","cpp"]

//  const values= coding.forEach( (item) =>{
//    console.log(item );
//    return item;
//   })
 
//   console.log(values);

  //for each doesnt return any value

  //------------------------------------------------------------

//   const myNums=[1,2,3,4,5,6,7,8,9,10]
//filter returns the value
//  const newNums= myNums.filter( (number) =>number>4)
//   console.log(newNums)

  const Num=[10,20,30,40,50]

//   const myNumber= Num.filter((n) => {
//    return n>20
//   })
//   console.log(myNumber);


  //-----------------------------------------
  const Num2=[10,20,30,40,50]
  const newNumber =[]

 Num2.forEach((value)=>{
    if (value >30) {
        newNumber.push(value)
    }
  })
  console.log(newNumber);