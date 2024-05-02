//singleton

const spotifyUser = new Object()
// console.log(spotifyUser);
const User={}
// console.log(User);

spotifyUser.id="324jdk";
spotifyUser.name="isha";
spotifyUser.isLoggedIn =false;

// console.log(spotifyUser);

const regularuser={
    email:"isha@gmail.com",
    fullname:{
        userName:{
            firstName:"isha",
            lastName:"magar"
        }
    }

}

// console.log(regularuser.fullname.userName);

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}

const obj3=Object.assign(obj1,obj2);
// console.log(obj3);
const obj4=Object.assign({},obj1,obj2);
// console.log(obj4);

//after spreading and combinig 

const obj5={...obj1,...obj2};
// console.log(obj5);

const users =[
    {
        id:8,
        name:"isha"
    },
    {
        id:9,
        name:"isha"
    },
    {
        id:10,
        name:"isha"
    }
]
users[1].name;
console.log(spotifyUser);
console.log(Object.keys(spotifyUser));
console.log(Object.values(spotifyUser));
console.log(Object.entries(spotifyUser));
//entries ma key value lai array ma rakheko hunx

console.log(spotifyUser.hasOwnProperty('name'));
console.log(spotifyUser.hasOwnProperty('isLogged'));


const course ={
    
        courseName:string;
        price: string ;
        courdeInstruction:string;
  
}