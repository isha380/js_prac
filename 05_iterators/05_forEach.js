const programming= ["js","rb","py","java","cpp"]

// programming.forEach(function (value){
//     console.log(value)
// })

//arrow function

// programming.forEach( (a) => {
//       console.log(a)
// })

// function display(item){
//     console.log(item)
// }
// programming.forEach(display)

// programming.forEach((item,index, arr)=>{
//     console.log(item,index, arr)
// })


//---------------------------------------------
const myCoding =[
    {
        languageName:"javascript",
        languageFileName:"js"
    },
    {
        languageName:"java",
        languageFileName:"java"
    },
    {
        languageName:"python",
        languageFileName:"python"
    }
]

// myCoding.forEach((item)=>{
//     console.log(item);
// })

myCoding.forEach((item)=>{
    console.log(item.languageName);
})
