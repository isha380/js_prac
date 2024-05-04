 const course={
    name:"bhagavad gita",
    price:888,
    courseInstructor:"isha"
 }
//  console.log(course.courseInstructor);

// ************************ object destructuring ********************************
// const {writing the attributes : name_toPut} = source_name_to_extract_from
const {courseInstructor: manual} = course;
 console.log(manual);


//  ********** api's in json format ************
//  {
//     "name":"isha",
//     "coursename":"jay nepal",
//     "price":"free"
//  }

//************** api's in array format***************

// [
//     {},
//     {},
//     {}
// ]