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


