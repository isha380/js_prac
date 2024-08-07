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
## Minimized solution
```javascript
const buttons= document.querySelectorAll('.button');
const body=document.querySelector("body");
buttons.forEach(function(buttonEsha){
  buttonEsha.addEventListener('click',(e)=>{
    body.style.backgroundColor=e.target.id;
  });
});

```

## Project2 -> BMI changer 
```javascript
const form = document.querySelector('form')
/* this usecase will give empty value as we trying to get the value before it has been submitted */
//  const height= parseInt(document.querySelector('#height').value);
//when form is submitted either it is submitted in post or get method and sends the values to the url or server which we need to stop 
form.addEventListener('submit',function(e){
  e.preventDefault();
  const height= parseInt(document.querySelector('#height').value);
  const weight=parseInt(document.querySelector('#weight').value);
  const results =document.querySelector('#results');

  if(height===''|| height<0 || isNaN(height)){
    results.innerHTML = `Please give a valid height ${height}`;
  }else if(weight===''|| weight<0 || isNaN(weight)){
    results.innerHTML = `Please give a valid weight ${weight}`;
  }else{
   const bmi= (weight/((height*height)/10000)).toFixed(2);
    //showing the result
  results.innerHTML=`<span>${bmi}</span>`;
  }
  
});

```
