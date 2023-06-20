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

//   loopObj()


// copyWithin:-----------

  function copyWithin1(){
    const myArr =["q","w","e","r","t","y"];

   const returnedArray= myArr.copyWithin(0,3,-1);

    console.log(myArr);
    console.log(myArr === returnedArray);
  }

//   copyWithin1()
  

//  Merage Arrays in JS:---(concat,spread)

function merageArr(){
    const nums = ["fish","gelly","mermaid","batak"];
const pets = ["horse","billy","kuta","ghoda"];
const merged = nums.concat(pets,["html","js","css"]);
const merged2 = [...pets,["html","js","css"],...nums];
console.log(merged);
console.log(merged2);
}

// merageArr()

// what is this in JS:---


function thisJS(){
    const myTitle  =document.querySelector('#title');
    function dc(){
        console.log(this);
    }

    console.log(dc);

    myTitle.addEventListener('click',dc.bind({
        name:'sarfraj',
        age:50,
    }));

    myTitle.addEventListener('click',()=>{
        console.log(this);
    })
}
 
// thisJS()


// Optional Chanining  Operator:---

function optionalChainingOperator(){
    const person = {
        name:'sarfraj',
        age:28,
        vehicale:{
            year:2012,
            warranty:{
                expiryDate:2020,
            },
            drive(){
                return 'I am driving!'
            }
        }

    }

    // const vehicalYear = person.vehicale ?person.vehicale.year :undefined;
    const vehicalYear = person.vehicale?.year;
    const vehicale = person.vehicale.year ?? 1970;
    const warrantyExpiryDate = person.vehicale?.expiryDate;
    console.log(person.vehicale?.drive?.());
    console.log(warrantyExpiryDate);

    console.log(vehicalYear);
}

// optionalChainingOperator()



// top 5 js console features:---

let clickCount = 0;
function consoleFeature(){
    // console.group
    console.log('I am a boring console message');
    console.group('I am a boring console message');
    console.log("How's it going, mate");
    console.log("Yeah mate, not too bad.");
    console.log("Just getting a few things for the weekend mate.");
    console.groupEnd();
    console.log('back to normal');

    // live expression
    document.getElementById('myBtn1').onclick = ()=>{
        clickCount++
    }

    // time you code
    console.time("addHeadings");
    for(let i=0;i< 1000;i++){
        document.body.insertAdjacentHTML('beforeend',`<h5> Heading #${i+1}</h5>`)
    }
    console.timeEnd('addHeadings')

    console.log('I am %cgular and i am bold',"color:blue; font-weight:bold");
    console.log("%cs","color:blue; font-weight:bold",'I am gular and i am bold');

    // Assertions:----

    console.assert(true === true);
    console.assert(true === false,"Booleean fail");
}
// consoleFeature();


// how to implement a Queue in jS:------

 function implementQueue(){
    class Queue{
        constructor(){
            this.items= [];

        }
        enqueue(item){
            this.items.push(item);
        }
        dequeue(){
            return this.items.shift()
        }
        peek(){

            return this.items[0];

        }
        getsize(){
            return this.items.length;
        }
        isEmpty(){
            return this.getsize() === 0;

        }
    }  

    const cars = new Queue();

    cars.enqueue("limo")
    cars.enqueue("maruti")
    cars.enqueue("fezzer")
    console.log(cars);
    console.log(cars.dequeue());
    console.log(cars.peek());
 }

//  implementQueue()


// How to  implement a stack in js:-----

function implementStack(){
    class Stack{
        constructor(){
            this.items = [];

        }
        push(item){
            this.items.push(item);
        }
        pop(){
            return this.items.pop();
        }
        peek(){
            if(this.items.length == 0){
                return null
            }
            return this.items[this.items.length-1];
        }
        getSize(){
            return this.items.length
        }
        isEmpty(){
            return this.getSize() === 0;

        }


    }

    const users = new Stack();
    users.push('Sarfraj');
    users.push('Soniya');
    users.push('Anamika');
    users.push('Anjali');

    console.log(users);
    console.log(users.pop());
    console.log(users.pop());
    console.log(users.getSize());
    console.log(users.peek());
    console.log(users.isEmpty());
}

// implementStack();


function arrayFunc(){

    // every
    
const grades = [81,82,97,89,80];
const isHighPeroformingClass = grades.every(garde =>{
    return garde >= 80
})

console.log(isHighPeroformingClass);

// find
 const people = [
    {name:"dog",job:"Software Engineer"},
    {name:"lucy",job:"Pastry Chef"},
    {name:"Bob",job:"Civil Engineer"},
    {name:"Maria",job:"Pastry Chef"},
 ];

 const result = people.find((person)=>{
    return person.job ==="pastry Chef"
 })

    // some:-----------

    const containsHighPerformer = grades.some(grade => grade >= 80);

    console.log(containsHighPerformer);

    // Array.from:---------

    const para = document.querySelectorAll("li");
    // (if non array like object have index and length than it can canvert into array)
    console.log(para);
    const arr = Array.from(para);
    const strArr = Array.from("sarfraj");
    console.log(arr);
    console.log(strArr);


    // includes:--------
    const sigmaPeople = ["sarf","gachite","Mr Boombastic","lord"];

    console.log(sigmaPeople.includes('gachite',0));


}

// arrayFunc()

// top 5 js string method:---------

function js5StringMethod(){
const myStr = "Hey guys how's it going?";

// startsWith /endsWith:----
console.log(myStr.startsWith('Hey',4));
console.log(myStr.endsWith('going?'));

// padStart/padEnd:----

const orderCode = "23A";
console.log(orderCode.padStart(6,"0"));
console.log(orderCode.padEnd(6,"0"));

// includes:----
const car = "2021,Hodi civil war";
console.log(car.includes("20",12));

// search:----
const gameControl = 'PS5 Dualsense Controller';
console.log(gameControl.search('PS5 '));
console.log(gameControl.search(/\d/));
console.log(gameControl.search("Sar"));

// repeat:--------

const myName = "sarfraj";

console.log(myName.repeat(5));

}

// js5StringMethod()  


// 3 ways copy object in js:---

function objCopy(){
    const user ={
        username:'sarfraj',
        age:28,
        active:true,
        friends:["Matt","Ange","johnny"],
    };

    // const copiedUser = {...user};
    // const copiedUser = Object.assign({},user);
    const copiedUser = JSON.parse(JSON.stringify(user));

    console.log(copiedUser);
    console.log(copiedUser.friends === user.friends);
    console.log(copiedUser === user);

}
// objCopy();

// Map, Filter & Reduce EXPLAINED in JavaScript:---

function arrayMethods(){
    const people = [
        {
            name:'sarfraj',
            age:28,
            occupation:'developer',
        },{
            name:'tony',
            age:25,
            occupation:'engineer',
        },{
            name:'luka',
            age:34,
            occupation:'doctor',
        },{
            name:'pintu supari ',
            age:76,
            occupation:'killer',
        },
    ];

    // map:-
    const names = people.map(person =>{
        return person.name;
    })
    console.log(names)

    // filter
    const overThrities = people.filter(person =>{
        return person.age >=35
    }).map(person =>{
        return person
    })
    console.log(overThrities);

    // reduce

    const totalAge  = people.reduce((total,person)=>{
        return total + person.age
    },0);
    console.log(totalAge);
}

// arrayMethods()

// Did You Know This JavaScript Trick:----

function jsTrick(){
// logical assignment

let a = 0

a &&=20
console.log(a);
a ||=20
console.log(a);

a??=20;
console.log(a);
}

// jsTrick();


// 

