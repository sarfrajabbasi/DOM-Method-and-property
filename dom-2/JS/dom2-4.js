// Enable hidden nav bar 

function navBar(){
    const nav =document.querySelector('.nav');

    let lastScrollY =  window.scrollY;

    window.addEventListener('scroll',()=>{
        if(lastScrollY < window.scrollY){

            nav.classList.add('nav--hidden');


        }else{
            nav.classList.remove('nav--hidden');

        }
         
        lastScrollY = window.scrollY
    })
}

// navBar()


// What's the Difference Between the Input and Change Event in JavaScript?

function inputEvent(){

    const inputEvent = document.getElementById('inputEvent');

    // inputEvent.addEventListener('input',(e)=>{
    //     console.log('INP UT');
    // }); 
    inputEvent.addEventListener('change',(e)=>{
        console.log('change');
    });
}
// inputEvent()



//  Add KEYBOARD SHORTCUTS to Your Website with JavaScript:-----

function keyBoardShort(){
    document.addEventListener('keydown',e=>{
        // prevent the deafult behavior
        e.preventDefault();

        if(e.key.toLocaleLowerCase() === "u" && e.ctrlKey){
            alert('Hey boss good morning!')
        }
    })
}

// keyBoardShort()

// Two-Way Data Binding with JavaScript (NO FRAMEWORKS!):--

function dataBinding(){
    const formObject ={};
    const nameInp = document.getElementById('inputEvent');

    Object.defineProperty(formObject,  "name",{
      
        get(){
                // return Math.random();
                return nameInp.value
            },
            set(newValue){
                nameInp.value = newValue 
            }
    })
    console.log(formObject.name);
};
  
// dataBinding();


// Extending Built-In Data Types with JavaScript:--------

 function extendBuiltInDataTypes(){
     class ObservableArray extends Array{
        constructor(onpush,...elements){
            super(...elements);
            this.onpush = onpush;

            this.onpush?.(this);
        }
         
        push(...elements){
            super.push(...elements); 
            // the item gonna push on this 
            this.onpush?.(this)

        }

     }

     const onPush = array =>{
        const myList = document.getElementById('myList');
        myList.innerHTML = "";

        for(const name  of array){
            myList.insertAdjacentHTML('beforeend',`<li>${name}</li>`)
        }
     }
     const obervableArr = new ObservableArray(onPush ,"lords","greek","gold","goli","tapu");

     console.log(obervableArr);
 }

//  extendBuiltInDataTypes();


// How to Easily Call APIs With Fetch and Async/Await in JavaScript:--

async function getUserCountry(){
    const username = document.getElementById('usernameGet').value;
     
    if(!username){
        alert('Please enter a username.')
        return;
    }

    const endPoint = new URL(`http://localhost:3000/users/${username}/country`);
    endPoint.searchParams.set('token',"YOUR_TOKEN_HERE");
    console.log(endPoint.toString());

    const response = await fetch(endPoint,{
       headers:{
        "Authorization":"YOUR_TOKEN_HERE",
       }
    });

    if(response.status === 404){
        alert('Username not found.');
        return;
    }
    console.log(response);

    const data = await response.json();

    alert(data)
}

// The Best Way to Create HTML Elements with JavaScript:--

function createHtmlEl(){
  function elemet(html){
    const template = document.createElement("template");

    template.innerHTML = html.trim();
    return template.content.firstElementChild; 
  }
  const myElement = elemet(`
  <ul>
  <li>hello</li>
  <li>how</li>
  <li>are</li>
  <li>you</li>
  <li>!</li>
  </ul>
  `)

  document.body.appendChild(myElement)

}

// createHtmlEl()



// defer attribute:----



