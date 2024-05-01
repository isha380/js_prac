//singleton

const spotifyUser = new Object()
console.log(spotifyUser);
const User={}
console.log(User);

spotifyUser.id="324jdk";
spotifyUser.name="isha";
spotifyUser.isLoggedIn =false;

console.log(spotifyUser);

const regularuser={
    email:"isha@gmail.com",
    fullname:{
        userName:{
            firstName:"isha",
            lastName:"magar"
        }
    }

}

console.log(regularuser.fullname.userName);

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}

const obj3=Object.assign(obj1,obj2);
console.log(obj3);
const obj4=Object.assign({},obj1,obj2);
console.log(obj4);

//after spreading and combinig 

const obj5={...obj1,...obj2};
console.log(obj5);