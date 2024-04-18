//dates
// let todaydate =new Date();
// console.log(todaydate);
// console.log(todaydate.toDateString());
// console.log(todaydate.toLocaleString());
// console.log(todaydate.toISOString());
// console.log(todaydate.toJSON());
// console.log(typeof todaydate);

// let createMyDate=new Date("2080-12-29");
// console.log(createMyDate);
// console.log(createMyDate.toLocaleDateString);

let myCreateDate= new Date(2024,0,16);
console.log(myCreateDate.toLocaleDateString());
console.log(myCreateDate.toDateString());

let myCreateDate1= new Date(2024,0,16,6,55);
console.log(myCreateDate1.toLocaleString());

let datee= new Date("2024-4-16");
console.log(datee.toLocaleString());

let date2= new Date("01-14-2024");
console.log(date2.toLocaleString());

let myTimeStamp =Date.now(); //used to identify who replied fast in poll
console.log(myTimeStamp);
console.log(myCreateDate.getTime());// we can easily compare dates, converted into milli seconds
console.log(Date.now()/1000); //converting in seconds but problem arise as it gives in decimal
console.log(Math.floor(Date.now()/1000)); //solution of above problem

