
// keyboard:---
const keyboard = {
    
  // different elements track list
  elements: {
    main: null,
    keyContainer: null,
    keys:[],
  },

// Eventhandlers:it's way that other code is interact and use code

eventHandlers:{
    oninput:null,
    onclose:null,
},

properties:{
    value:'',
    capsLock:false,
},
// it's gonna run when page load's up ,and initialize the keyboard,make all the element.

init(){

    // create main/keyContainer
    this.elements.main = document.createElement('div');
    this.elements.keyContainer = document.createElement('div');
    // set class both
    this.elements.main.classList.add('keyboard','keyboard--hidden')
    this.elements.keyContainer.classList.add('keyboard_keys');

    
    // appending process
    this.elements.keyContainer.appendChild(this._createKeys());
    this.elements.main.appendChild(this.elements.keyContainer);
    document.body.appendChild(this.elements.main);

  // key array
   this.elements.keys = this.elements.keyContainer.querySelectorAll('.keyboard_key');

   // automatically use keyboard for elements with .use-keyboard-input class
   document.querySelectorAll('.use-keyboard-input').forEach(element =>{
    element.addEventListener('focus',()=>{
        this.open(element.value,function(currentVal){
            element.value = currentVal
        })
    })
    
   })

},

// it create all the key elements
_createKeys(){
    const frgament  =document.createDocumentFragment();
    
    const keyLayOut = [
        "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "backspace",
        "q", "w", "e", "r", "t", "y", "u", "i", "o", "p",
        "caps", "a", "s", "d", "f", "g", "h", "j", "k", "l", "enter",
        "done", "z", "x", "c", "v", "b", "n", "m", ",", ".", "?",
        "space"
    ];

    // looping though this layout

    keyLayOut.forEach(key=>{
        const keyElement = document.createElement('button');

        // add line break to last columns
        const addLineBreak = ["backspace","p","enter",'?'].includes(key);

        // set attribut
        keyElement.setAttribute('type',"button");
        keyElement.classList.add('keyboard_key');
    
        
        // Need to do different thing based on current key 
         switch(key){
            case "backspace":
                keyElement.classList.add('keyboard_key--wide');
                keyElement.innerHTML =createHtmlIcon('backspace');

                // tigger event

                keyElement.addEventListener('click',()=>{
                    this.properties.value = this.properties.value.substring(0,this.properties.value.length-1);
                    this._triggerEvent('oninput');

                })

                break;
                
                case "caps":
                keyElement.classList.add('keyboard_key--wide','keyboard_key--activatable');
                keyElement.innerHTML =createHtmlIcon('keyboard_capslock');

                // tigger event

                keyElement.addEventListener('click',()=>{
                    // true means force it to be active
                    this._toggleCapsLock()
                    keyElement.classList.toggle('keyboard_key--active',this.properties.capsLock);


                    
                })
                break;
                
                case "enter":
                keyElement.classList.add('keyboard_key--wide');
                keyElement.innerHTML =createHtmlIcon('keyboard_return');

                // tigger event

                keyElement.addEventListener('click',()=>{
                    this.properties.value +='\n' 
                    this._triggerEvent('oninput');
                    
                })

                break;
                
                case "space":
                keyElement.classList.add('keyboard_key--extra-wide');
                keyElement.innerHTML =createHtmlIcon('space_bar');

                // tigger event

                keyElement.addEventListener('click',()=>{
                    this.properties.value +=' ' 
                    this._triggerEvent('oninput');
                    
                })

                break;
                 case "done":
                keyElement.classList.add('keyboard_key--wide','keyboard_key--dark');
                keyElement.innerHTML =createHtmlIcon('check_circle');

                // tigger event

                keyElement.addEventListener('click',()=>{
                    this.close();
                    this._triggerEvent('onclose');
                    
                })

                break;

                 default :
                
                 keyElement.textContent = key.toLowerCase(); 

                // tigger event

                keyElement.addEventListener('click',()=>{
                    this.properties.value  += this.properties.capsLock ? key.toUpperCase():key.toLowerCase();
                    this._triggerEvent('oninput');
                    
                })

                break;

         }
         frgament.appendChild(keyElement)

         if(addLineBreak){
            frgament.appendChild(document.createElement('br'));

         }
       
    })
    
    function createHtmlIcon(icon_name){
        return `<i class="material-icons">${icon_name}</i>`
    }

    return frgament

},

// it gonna trigger oninput/close functons
_triggerEvent(handleName){
    
    if(typeof this.eventHandlers[handleName] == "function"){
        this.eventHandlers[handleName](this.properties.value);
    }

},

// toggling the caps lock
 _toggleCapsLock(){
     this.properties.capsLock = !this.properties.capsLock;

     for(let key of this.elements.keys){
        if(key.childElementCount === 0){
            key.textContent = this.properties.capsLock? key.textContent.toUpperCase():key.textContent.toLowerCase()
        }
     }

},
// open the keyboard
 open(initialValue,onInput,onClose){
    // if provide then use  it otherwise
    this.properties.value = initialValue ||"";
    this.eventHandlers.oninput = onInput
    this.eventHandlers.onclose = onClose
    this.elements.main.classList.remove('keyboard--hidden')

 },
// close the keyboard
 close(){
    this.properties.value = "";
    this.eventHandlers.oninput = this.eventHandlers.oninput
    this.eventHandlers.onclose =   this.eventHandlers.onclose
    this.elements.main.classList.add('keyboard--hidden')
 }
 
};


window.addEventListener('DOMContentLoaded',function(){
    keyboard.init()    
})