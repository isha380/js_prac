const number=[10,20,30,40,50];
// const newNum = number.map((element) =>  element+1)

const newNum= number
              .map((item) => item*10)
              .map((item) => item+2)
              .filter((item => item>=20))
console.log(newNum);