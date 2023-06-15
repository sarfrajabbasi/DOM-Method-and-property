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

// data.json,people.json

// Async Functions & Await:--------

function asyncAwait(){
    // normal way
    async function getData(name){
        const res = await fetch(`../other/${name}.json`);
        const data = await response.json();

        // return fetch(`../other/${name}.json`).then(res =>{
        //     // throw new Error('something bad happened!')
        //     // return res.json()

           
        // });
        return data

    }   
    Promise.all([getData('data'),getData('people'),getData('user'),getData('obj')]).then(res =>{
        console.log(res);
    })
    // async 
    async function getAllData(){
        try{
            const data = await getData('data')
            const people =  await getData('people');
            const user  = await getData('user')
            const  obj = await getData('obj')
            console.log(data,people,user,obj);
        }catch(err){
            console.log(err);
            console.log('Handled!');
        }
        
    }
    getAllData()
    // getAllData().catch(err =>{
    //     console.log(err);
    // })
}
// asyncAwait()


// Nullish Coalescing Operator(??):-----
function nullishCoalescing(){
    function getUserDefinedSettings(){
        return {
            diffculty:'easy',
            // startingCash:undefined
            // startingCash:null
        };
    }
    
    const cash  = getUserDefinedSettings().startingCash ?? 500;
    const cash1  = getUserDefinedSettings().startingCash ===undefined  ? 500 :getUserDefinedSettings().startingCash;
    
    console.log(cash);
    console.log(cash1);
    
}
// nullishCoalescing();

 
function ObjectSpread(){
    const user = {
        name:'sarfraj',
        age:23,
    }

    const copied = {...user,age:60,occupation:'web developer'}
    const copied2 = Object.assign({},copied,{
        name:"chota chetan",

        age:6,
        occupation:'Don'
    })
    const {name,...other} = copied2;
    console.log(name);
    console.log(other);
    console.log(copied);
    console.log(copied2);
}
// ObjectSpread()

// Looping Over Objects:---

function loopObj(){
    const user ={
      name:'sarfraj',
      age:32,
      occupation:'web Developer'
    };
    const obj = {
        
        keys1:   Object.keys(user),
        value1:  Object.values(user),
        entries1: Object.entries(user),
    }
  
    console.log(Object.keys(user));
    console.log(Object.values(user));
    console.log(Object.entries(user));
    function loopIt(obj){
        for(let thing of obj){
            console.log(thing);
        }
    }
    loopIt(obj.keys1)
    loopIt(obj.value1)
    loopIt(obj.entries1)
  }

  loopObj()