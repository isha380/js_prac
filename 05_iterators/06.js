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
  // console.log(newNumber);

//---------------------------------------------------------------------
const books=[
  {title:'book 1',genre:'non-fiction',publish:1900,edition:2010},
  {title:'book 2',genre:'history',publish:1967,edition:2012},
  {title:'book 3',genre:'non-fiction',publish:1910,edition:2013},
  {title:'book 4',genre:'science',publish:2000,edition:2012},
  {title:'book 5',genre:'fiction',publish:1870,edition:2015},
  {title:'book 6',genre:'history',publish:2000,edition:2011},
  {title:'book 7',genre:'science',publish:2004,edition:2020}
];

// const userBooks= books.filter((B) =>B.publish === 2000);
// let userBooks= books.filter((B) =>B.title=== 'book 6');
// const userBooks= books.filter((B) =>B.genre ==='history');
userBooks= books.filter((B)=> {
  return B.publish>=2000 && B.genre==="history"
})
console.log(userBooks);
