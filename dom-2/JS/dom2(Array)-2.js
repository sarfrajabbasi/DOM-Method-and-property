// Array-map method:----


function multipleTable(n){
    let numbers  = [1,2,3,4,5,6,7,8,9,10];
    let NumTableArr = numbers.map((num) => num*n);
    // console.log(NumTableArr)
}

// multipleTable(Number(prompt('enter')));

// Array.reduce():--
let num = [1,2,3,4,5];
let total =  num.reduce((acc,n)=> acc + n)
// console.log(total);

// Array.filter:--
let num1 = [1,2,3,4,5,6,7,8,9,10];
let evenNum = num1.filter(n => (n%2==0));

// console.log(evenNum);

// Map Object:--

let zoo = new Map();
zoo.set("zebra",4)
zoo.set("kuttey",2)
zoo.set("cat",0)
zoo.set("lion",1);
zoo.set("Monkey",1);
zoo.set("Gorilla",1);
let zebraCount = zoo.get("zebra");
for(let [key,value] of zoo){
    // console.log(key + " : "+ value);
}
// console.log(zoo);
// console.log(zebraCount);


// Enum-Types:--

const Direction = {
    UP:"UP",
    DOWN:"DOWN",
    LEFT:"LEFT",
    RIGHT:"RIGHT",
}

function sayDriection(direction){
    switch(direction){
        case Direction.UP:
            // console.log('We are going up!');
            break;
        case Direction.DOWN:
            // console.log('Heading all the awy down...');   
            break;
            
        case Direction.LEFT:
            // console.log('left  not right');   
            break ;
        case Direction.RIGHT:
            // console.log('to the right');   
            break;
    
    }
}

sayDriection(Direction.UP)
sayDriection(Direction.DOWN)
sayDriection(Direction.LEFT)
sayDriection(Direction.RIGHT)

// Object-Destructuring :---

const person = {
    name:"Sarfraj",
    age:25,
    gender :"Male"
};

let {name,age,gender ="Unknown"} =person;



function printDetails({name,age,gender}){
    // console.log(`Name is ${name} and they age are ${age} is  and  his Gender is ${gender}`);
}

printDetails(person);

// Array-Destructuring :---

let num2 = [1,2,3,4,5,6,7,8,9.10];

let [one,two,three,four,five,...rest] = num2;
// console.log(one,two,three,four,five,...rest);
function bottle(){
    return['bottle','water']
}
let [red,blue] = bottle();
// console.log(red,blue);

// Ternary-Operator:---

const grade = 60;
const result = (grade > 80)? 'Distinction':(grade > 50)? "Pass":"Fail";

// console.log(result);

// Deafult-values(Short-Circuit Evaluation):----

const result1 = 0 || 40;
function defaultValue(a){
    return a || null ;
}

// console.log(defaultValue(""));
// console.log(result1);


// Array.forEach:---

const numbers =["jerry","tom","kendy","dora "];
numbers.forEach(function(e,i){
    // console.log(e + " index is " + i);
});

// Array.include:----

const names = ["sarfraj","asif","tete","modi","karnataka"];

// console.log(names.includes('karnataka'));

// Template-Literals:---

const namme = "sarfraj";

// console.log(`My Name is ${namme}what up broo?arr you ok?
`);

// document.write(
//     `
//     <h1>Hello World</h1>
//     <p>lorem-20</p>
//     `
// )

// Array-Every method:----

const numbers1 =[200,101,450,789]

function isOver100(n){
    return n > 100;
}

// console.log(numbers1.every(isOver100))

// Array.some method:--

const numbers2 = [10,50,75,101];

function isBiggerThan100(n){
    return n >100;
}
// console.log(numbers2.some(isBiggerThan100));

// Array.find method:---

const people =[
    {
        name:'Sarfraj',
        occupation:'Software Developer'
    },
     {
        name:'kallu Dada',
        occupation:'chor'
    },
    
    {
        name:'Thor',
        occupation:'mistry'
    },
    {
        name:'captain africa',
        occupation:'chutiya banana'
    },
    {
        name:'Loki',
        occupation:'chutiya banana'
    },
    
]

function findOccupation(person){
    return person.occupation === "chutiya banana"
}


// console.log(people.reverse().find(findOccupation).name);


//  Array.findIndex method:---

function findOccupation1(person){
    return person.occupation ==="chor";
}

// console.log(people[people.findIndex(findOccupation1)]);


// set Object in Js:--
 const mySet = new Set();

//  add value

mySet.add(90);
mySet.add(34);
mySet.add(76);
mySet.add(29);
mySet.add({
    name:'Sarfraj',
    age:38
});

mySet.add('decode');
mySet.add(67.98);
// delete
mySet.delete(67.98)
// console.log(mySet);
// console.log(`How big is mySet? ${mySet.size}`);

// check for vlaue
// console.log(`Does the set contain the number 25 ? ${mySet.has(34)}`);

// loopthrough set:---

for(let item of mySet ){
    // console.log(item);
}

// Convert to array:--

const myArr = Array.from(mySet);

// console.log(Array.isArray(myArr));
// console.log(myArr);



// array.Shift method :---

const arr1 = [9,72,2,56,0] ;

const nine = arr1.shift();
// console.log(nine," from this :--",arr1);


// array.unshift method:---

const arr2 = [89,36,35,28];

// push in end
arr2.push(3);

// push in starting
// it return the length of the new array
const newLength = arr2.unshift(2323);

// console.log(arr2);
// console.log(newLength);



// Array.fill method:---

let myArr1 = ["dog","bite","nick","balls"];

// console.log(myArr1);
myArr1.fill('RIP');

myArr1 = myArr1.map(()=>{
   return{
    
        status:"RIP",
        condtion:"Dead"
   }
})

// console.log(myArr1);
// that becoz one object is createed and rest are just  refrences to that single object,use map method will give new fresh copy (not refrence) of the object;

myArr1[0].status="not RIP"

// Array.join()method:--

const names1 = ['dom','niks','sophie']

let strConversion = names1.join()//default value(,)

// console.log(strConversion);

// Spread-Syntax:---

const a1 = [10,50,45];

function sum(a,b,c){
    return a+b+c
}
// apply
const result3 = sum.apply(null,a1);
// spread
const result4 = sum(...a1);
// console.log(result3);

// creating new array
const a2 = [5,6,7,...a1,"sar"];
// console.log(a2);

// copy an array 
// no refernce
const a2Copy = [...a2];
a2Copy.push(4000)
// console.log(a2Copy);

// concatentae

let a4 = [24,56,4,33];
a4 = [...a4,...a2Copy]
// console.log(a4);


// object Copy

let dom = {red:'chilli',audio:"pandu"}
let dom2 = {...dom}
dom.red ="redChilli"
// console.log(dom);
// console.log(dom2);



// Bind method:----

let c1 = {
    x:5,
    y:10
}

let c2 = {
    x:45,
    y:30
}

function printCoordinates(str){
    console.log(this);
    console.log(this.x + ', ' + this.y);
    return str
}

let c1_func = printCoordinates.bind(c1,"done");
let c2_func = printCoordinates.bind(c2,"done");

console.log(c1_func());
console.log(c2_func());
