// const item=[1,2,3];
// const  mytotal= item.reduce(function (acc,currval){
//     console.log(`accumulator:${acc} & currentValue:${currval}`);
//     return acc + currval
// },0)

// console.log(`the value is ${mytotal}`);

const marks=[2,3,4]
const mytotal= marks.reduce((acc,currval) => acc +currval,0);
console.log(`the value is ${mytotal}`);

const shoppingCart=[
    {
        itemName:"js course",
        price:3000
    },
    {
        itemName:"data science course",
        price:13000
    },
    {
        itemName:"react course",
        price:2000
    },
    {
        itemName:"python course",
        price:2999
    },
]

const total= shoppingCart.reduce((acc,item)=> acc+ item.price,0)
console.log(`the total price is ${total}`);