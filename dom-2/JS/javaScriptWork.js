// How to Create Singleton Classes in JavaScript - Design Patterns :---------

class Settings{
    constructor(){
        // if instance already created and all the code in the class already run then,so we are simply return this instance for created for the constructor.
        // on first time it will be false of undeifned,null etc,but second time after the code run then it will be true.and retrun Settings.insatance.
        if(Settings.instance instanceof Settings){
            return Settings.instance;
        }
        this.SettingsObject = {
            'background':'#000fff',
             'version': parseInt(Math.random()*4000),
        };

        Object.freeze(this.SettingsObject);

        // for freez settings class,so people can't modify instance we create.(adding and changing)
        Object.freeze(this);
        // this app lying to settings class not the instance that just you create.this is the key that our singleton work
        Settings.instance = this;


    }

    get(key){
        return this.SettingsObject[key]
    }
}

// How to protect JavaScript Objects with Object.seal():-----

function objSeal(){
    // use the strict mode so  anyone can't modify the property
    "use strict";
     
    const o ={
        name:'Sarfraj',
        age:45,
    
    };
    
    Object.seal(o);
    o.name = "abbasi"
    
    //add
    o.occupation =  "New Developer"
    
    console.log(Object.isSealed(o));
    //  remove
    delete o.name
    
    console.log(o);
}

// objSeal();


// Create Arrays From Objects With Array.from():----


function arrFrom(){
function dummy(){

const arr = Array.from(arguments);
console.log(arr);

}

dummy(1,2,"sarfraj", {name:'rollroyan'})

// nodeList:--

const elements = document.querySelectorAll('*');
console.log(elements);
const elArr  = Array.from(elements);
console.log(elArr);

// strings and map:----

const name = 'sarfrajAbbasi';
const strArr = Array.from(name,char => char.toUpperCase());

console.log(strArr);

// sets:---

const mySet = new Set();

mySet.add({name:'sarfraj'})

// make shallow copy
const setArr = Array.from(mySet);
setArr[0].name = "biyanka"

for(const value of mySet.values()){
    console.log(value);
}

}

// arrFrom()






