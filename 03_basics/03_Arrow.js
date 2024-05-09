const user ={
    username:"isha",
    price:888,
    welcomeMessage: function(){
        console.log(`${this.username},hello world`);
        console.log(this);
    }
}
user.welcomeMessage();
user.username="sanju";
user.welcomeMessage();
console.log(this);

// browser ko bitra run garne engine ko dherai jaso,  the global object inside browser i.e window object that is mostly used

