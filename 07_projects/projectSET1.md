# solution code
## project1 ->color changer
```javascript
const buttons= document.querySelectorAll('.button');
const body= document.querySelector("body");
buttons.forEach(function(button){
  console.log(button);
  button.addEventListener('click',function(setoMUNXE){
    console.log(setoMUNXE);
    console.log(setoMUNXE.target);
    
    /* target is a property of an event object that helps us to know where the event is  comming from and for getting and setting the value of the element */

    if(setoMUNXE.target.id==='grey'){
      body.style.backgroundColor=setoMUNXE.target.id;
    }
    if(setoMUNXE.target.id==='white'){
      body.style.backgroundColor=setoMUNXE.target.id;
    }
    if(setoMUNXE.target.id==='yellow'){
      body.style.backgroundColor=setoMUNXE.target.id;
    }
    if(setoMUNXE.target.id==='blue'){
      body.style.backgroundColor=setoMUNXE.target.id;
    }
    if(setoMUNXE.target.id==='red'){
      body.style.backgroundColor=setoMUNXE.target.id;
    }
    if(setoMUNXE.target.id==='purple'){
      body.style.backgroundColor=setoMUNXE.target.id;
    }

  });
});
```