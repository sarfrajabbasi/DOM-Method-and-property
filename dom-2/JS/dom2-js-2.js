// sort method:----

const arr = ["xz","sarfraj","asif","aman","junaid","katy","ola","peguin"];

const sorted = arr.sort();

// console.log(sorted);

const people1 = [
    {
        name:"htumr",
        age:55
    },
    {
        name:"katy",
        age:23
    },
    {
        name:"lukariyo",
        age:45
    },
    {
        name:"lavnia",
        age:18
    },
    {
        name:"tristina",
        age:27
    },
];

const sortedAge = people1.sort((a,b)=>{
    return  b.age - a.age
})

// console.log(sortedAge);

// padStart and padEnd:-------

const str = "sarfraj";
//  console.log(str.padStart(10,"5"));
//  console.log(str.padEnd(10,"2"));
 const arr5 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
 arr5.forEach((n)=>{
    // console.log(n.toString().padStart(2,"0"));
 });


//  Default-Parameter:---

function sat(a,b=10,c){
    // console.log(a + b + c);
}

sat(1,undefined,10);


// what are callback Functions:----

const NameList = {
    names:[],
    onNewName:null,

    init:function(newNameCallBack){
        this.onNewName = newNameCallBack;
    },
    addName:function(name){
        this.names.push(name);
        this.onNewName(name,this.names);
    },

}

NameList.init(function(newName,allNames){
    // console.log(newName);
    // console.log("this current list is " + allNames);
})
NameList.addName("sarfraj")
NameList.addName("asif")
NameList.addName("sufiyan")
// call back:-----
const myarr2 =[1,2,3,4,5,6,7,8,9,0,"a","b","c","d","f"] 

let deg;
 
const myBtn = document.getElementById('myBtn');

myBtn.addEventListener('click',function(){
    let hex1 = "#";
let hex2 = "#";
    for(let i=0;i<6;i++){
        hex1+=myarr2[parseInt(Math.random()*myarr2.length)]
        hex2+=myarr2[parseInt(Math.random()*myarr2.length)]
     }
    deg = parseInt(Math.random()*180);
    document.body.style.backgroundImage = `linear-gradient(${deg}deg,${hex1},${hex2})`
    // console.log(hex1,hex2);
})

// The call method:----

function printName(first,last){
    console.log(`${first} ${last}`);
    console.log(this);
}

printName.call(
    {
        model:"samsung G",
        color:'black'
    },
    "Jhon",
    "Weak"
)
// Apply Method:----
 function sum(){
    let sum = 0
    console.log(arguments)
    for(let i=0;i<arguments.length;i++){
        sum +=arguments[i]
    }
    return sum
 }

 const result2 = sum.apply(null,[5,20,67,8,9,34,67,8,9])
//  console.log(result2);


// string repeat method:---

let myStr = 'rocky';
let repeated = myStr.repeat(4);

// console.log(repeated);

// == and === 

// console.log("2"==2);
// console.log("2"=== 2);
// console.log(""== 0);


// remider operator(modulus);

const reminder = 21 % 7
// console.log(reminder);

function getColor(name){
    const color = ["green","red","blue"];
    const index = name.length % color.length;
    return color[index]
}

// console.log(getColor('sa'));

// The Arguments Object in Functions:--------


function sum(){
    let total = 0
    for(let i=0;i<arguments.length;i++){
        total += arguments[i]
    }

    // console.log(total);
}

sum(1.56,89,56)
sum(10,10,10)


// How to Generate Random Number in JS:---

var randomN = parseInt(Math.random()*10) + 1;

// console.log(randomN);


// Convert a UTF-16 Code Point into a String or optionally, a sequence of Strings.

function charCode(start,end){
    let a = "";

    for(let i=start;i<=end;i++){ 
        a += `
        ${String.fromCharCode(i)} => ${i}
        `
    }
    // console.log(a);

}

charCode(65,90)

function myName(){
let myNameIs = String.fromCharCode(...arguments)
// console.log(myNameIs);
}

myName(83,65,82,70,82,65,74);

// Object.assign():------

const obj1 ={
    name:"sarfraj",
    class :12,
    asset:'collage degree'
}
const obj2 ={
    name:"sarfraj",
    class :'none',
    asset:'collage degree',
    details :{
        bike:'Dream-yuga',
        GF:'none',
        friend:'asif',
        money:'600'
    },
}
const finalResult = Object.assign(obj1,obj2,{class:10})

const copy = Object.assign({},finalResult);

// console.log(finalResult);

// used this method insde application:--

function printName(options){
    const defaultt = {
        firstName:"conner",
        secondName:'kenway'

    }
    options = Object.assign(defaultt,options)
    // console.log(`${options.firstName} ${options.secondName}`);
}
// console.log(printName({
//     firstName:'sarfraj',
//     secondName:'abbasi'
// }));

// Debug your JS code visually with console.table:-----

const arr4 = ["sarf","pokemon","neon","luka","koila"];
const obj4 = {
    name:'kallu',
    father:'madrasi bahllu',
    age:120,
    occupation:"murder",
    contact:{
        sniper:'meethi churi',
        weaponSupplier:'007Nepali',
    }

}
// console.table(arr4);
// console.table(obj4);

// Array map method:---------

const existingArray = ['docde',"dom",'js',"defined"];

const array3 = existingArray.map(function(e,index,array){
    // console.log(index,array);
    return index + " how are you "+ e +" " + this.name 
},{
    name:"LOL"
})
// console.log(array3);

// Array Flat() Method:-----------

const array1 = [1,2,3,4,[5,[2,3],[34,[45,[45,[5,4,[5,[5,6,[7]]]]]]]],[23,45]];

const numbersFlat = array1.flat(Infinity)
// console.log(numbersFlat);

// Array flatMap() methods:---

const pair = [
    [1,5],
    [6,8],
    [11,9],
]

 const result5 = pair.flatMap((pair)=>{
    return [
        pair[0] + pair[1]
    ];
 });

//  console.log(result5);

//  constant variable:-------
var names2  = [ 1,2,3,4 ]
for(const name of names2){
    // console.log(name);
}



// Code-Block:-------
const elements = [];

{
    const ele = document.createElement('div');

    ele.id = "id";
    ele.className = 'class';
    elements.push(ele);

}

{
    const ele = document.createElement('div');

    ele.id = "id1";
    ele.className = 'class1';
    elements.push(ele);
    
}
// console.log(elements);

// break out of nested loops:-label------

const width = 3
const height = 4
 outerLoop:
 for(let x =1;x<=width;x++){
    for(let y =1;y<=height;y++){
    if(x==2 && y ==2){
        break outerLoop;
    }
    // console.log(`${x} ${y}`);
    }
 }

// ES6 Rest parameter:----

// destrcutruing with rest
function add(...[a,b,c]){
    // let total = 0;

    // for(let n of nums){
    //     total += n
    // }
    // return total

    // console.log(a);
    // console.log(b);
    // console.log(c);
}

// console.log(add(4,60,80));

// js Modules with Import/Export syntax:-----

// use import keyword and curly braces inside specify the functions name form that location that you take that functions

// import{double as utilsDouble,name} from '../JS//utiltiy/utility.js';
// import * as Utils from '../JS//utiltiy/utility.js';

// import {default as bottle} from '../JS//utiltiy/utility.js';
// import bottle from '../JS//utiltiy/utility.js';
// import {water} from '../JS//utiltiy/utility.js'


// console.log(Utils.double(10))
// console.log(Utils.name);
// bottle()
// water()


// arrow functions:----

const arrowFunc = (a,b)=>{
    // console.log(10);
    // console.log(a+b);
}
arrowFunc(10,19);
const arrowBtn = document.getElementById('arrowBtn');

// arrowBtn.addEventListener('click',()=>{
//     // console.log(this);
// })

let a = "no man no"
const obj01 = {
    pen:function(){
        // console.log(...arguments);
        // console.log("saino-softek");
    },
    // use rest perameter
    pencil:(...arg)=>{
        // console.log(arg);
        // console.log(this);
        // console.log(a);
    }
}

obj01.pen([0,23,"dard"]);
obj01.pencil([1,2,3,,4,4]);



// RegularExpresssions:------

let regx = /\w{3}/;

// console.log(regx.exec('hi dom')[0]);
// console.log(regx.test('hi dom'));
// console.log("hi dom".search(regx));

/*
Possible matches:--
  -- hello,Dom. You have 5 tasks remining.
  -- Greetings ,Jhonny. You have 1 task remaining
*/
// w--> char 
// d --> digit
// \ period to match
// ? mean char.or token before it's optional

// let regx2 = /^(\w+), (\w+)\. You have (\d+) tasks? remaining\.$/
let regx2 = /(\w+), (\w+)\. You have (\d+) tasks? remaining\./

// console.log(regx2.test('hello, Dom. You have 5 tasks remaining.'));
// console.log(regx2.test('Greetings, Jhonny. You have 1 task remaining.'));
// 
// console.log(regx2.exec('hello, Dom. You have 5 tasks remaining.'));
// console.log(regx2.exec('microhone Greetings, Jhonny. You have 1 task remaining.'));
// 
// console.log('Greetings, Jhonny. You have 1 task remaining.'.match(regx2));


// valueOf method:---

const strPrim = 'conner';
const strObj = new String(strPrim);
const strobjPrim = strObj.valueOf();

console.log(strPrim);
console.log(strObj);
console.log(strobjPrim);

class Product{
    constructor(name,cost){
        this.name = name;
    this.cost = cost
    }

    // valueOf(){
    //     return this.cost
    // }

}

const p1 = new Product('samsung Galaxy S8',850)
const p2 = new Product('Google Pixel 3 XL',790)
// console.log(p1.valueOf());
// console.log(p2.valueOf());

// js call value of method itself
const total = p1 + p2
// console.log(total);


// typeof Operator:----

function whoAreYou(){

    let declared;

console.log(typeof 'sarfraj');
console.log(typeof 13);
console.log(typeof {name:"sar",ol:'ul'});
console.log(typeof [1,2,3,4]);
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof function(){});
console.log(typeof declared);
console.log(typeof howsItGoingGuys);

// also use for libray file that has been loaded or not.
// example :-- <script src="http:// momentjs.com/downloads/moment.min.js"></script>
if(typeof moment === "undefined"){
    console.log('Moment .js not found');
}

// let,const

console.log(typeof dcode2);
let dcode;
const dcode5=0;


}
// whoAreYou();

// How To Use Iterators in JavaScript - Iterate Over Arrays and Collections or data structure:------

function iterattors(){

    // itertable
const numbersArr = [43,23,45,6,7,8];
const numbersiterator = numbersArr[Symbol.iterator]();
 for(let i=0;i<=numbersArr.length;i++){
    console.log(numbersiterator.next());
 }

// for of loop request the iterator form this numArray,it's make it iterable(if privides the iterator then it is iteratble)
 for(let num of numbersArr){
    console.log(num);
 }



}

// iterattors()

// create own iterator:---

function squared(max){

    return{
        [Symbol.iterator](){
            let n = 0;
    return{
        next(){

            n++;

            if(n <=max){
                return{
                    value:n*n,
                    done:false
                }
            }

            return {
                value:undefined,
                done:true
            }

        }
    }
        }
    }
    
}


// const squaredItrator = squared();

// for(let i =0;i<=5;i++){
//     console.log(squaredItrator.next());
// }

for(const n of squared(10)){
    // console.log(n);
}

// array destructuring
const [aa,b,c,d,e] = squared(10);
//  console.log(aa,b,c,d,e);

function arrayIterator(){

}

class NumberList{
    constructor(){
        this.numbers = [1,2,3,4,5];

    }

    [Symbol.iterator](){
        const numbers = this.numbers;
        let currentIndex = -1;

        return {
            next(){
                return {
                value:numbers[++currentIndex],
                done:currentIndex>=numbers.length
                }
                
            }
        }
    }
}

const numListIterator = new NumberList()
const itertaNum   = numListIterator[Symbol.iterator]()
// for(let i=0;i<=numListIterator.numbers.length;i++){
//     console.log(itertaNum.next());
// }

// for(const num of numListIterator){
//     console.log(num);
// }




// Global (/g) Regular Expression :-----------

function regExp(){

    /* (/g)--> let you perofrm multiple mathces on a string,

    --> regEx.exec()

    --> String.matchAll()
    */let result
    const testStr = "Hi. I have 5 cats and I have 2 dogs.";

    const re = /I have (\d+) (\w+)/g;
 ;
 console.log('Initial last index: ' + re.lastIndex);
 while((result = re.exec(testStr) )!== null){
        console.log(result);
        console.log('Last Index: ' + re.lastIndex);

    }

    const matches = testStr.matchAll(re);
    const [firstmatch,secondmatch] = matches;

    console.log(firstmatch);

    console.log(secondmatch);

    for(const match of matches){
        // console.log(match);
    }

}

// regExp()


// How to use Generator Functions in JavaScript:---

function generators(a,b,c){
    function* generatorExample(){
        yield a;
        yield b;
        yield c;
        return 'Hello'
    }

    var generatorFunc = generatorExample();

for(let val of generatorFunc){
    console.log(val);
}

}

// generators(1,2,3)

// Example 1:---
function* createSquareNumGen(max){
    let n=0;
    while(n <max){
        n++;
        yield n*n;
    }
  }


const squareNum = createSquareNumGen(10);
for(let a of squareNum){
    // console.log(a);
};


// Example 2:---unique name but not same name

function* createUniqueName(array){
    const available = array;

    while(available.length !==0){

        const randomIndex = parseInt(Math.random()*available.length);

        const value1 = available[randomIndex];
        
        // remove the used value form the list of available values
        available.splice(randomIndex,1);
        
        yield value1
    }
}
const names = ["sarfraj","shelly","timit","asda","ajgfd"];
const uniqueName = createUniqueName(names)

for(const name of uniqueName){
    // console.log(name);
};


// Using Object.entries():------


function ObjEntries(){
    const person = {
        first:"Sarfraj",
        last:"Abbasi",
        age:23,
        occupation:"Developer",
    }
    const entries1 = Object.entries(person)
    for(let [key,value] of entries1){
        // console.log(`key => ${key} | value => ${value}`);
    }
    
    // it can take key and value pair
    
    const params = new URLSearchParams(entries1);
    
    console.log(params.toString());
}
// ObjEntries()

// toString() method:-------

function toStringWork(){
    // change tamplate
    console.log(Object.prototype.toString.call([]));


    // convert array:---
    const MyArray = [2,3,4,5,6];

    console.log(MyArray.toString());
    console.log("myArray: " + MyArray );

    // use this for URLserachParams:-----

    const params = new URLSearchParams([["name","sarfraj"],["age",46]]);

    // return query string encoded:-----
    console.log('my Serach params : ' + params);

    class Reactangle{
        constructor(width,height,unit){
            this.width = width;
            this.height = height;
            this.unit = unit;
        }

        toString(){
            return `Rectangle:(${this.width}x${this.height}${this.unit})`;

        }

    }

    class ColorRectangle extends Reactangle{
        constructor(width,height,unit,color){
            super(width,height,unit);
            this.color  = color
        }
        toString(){
            return `${super.toString()} [${this.color}]`
        }

    }

    const myRect = new Reactangle(5,8,'cm');
    const myColorRect = new ColorRectangle(15,79,"cmm","Red");
    console.log('my rectangle : ' +  myRect);
    console.log('my rectangle : ' +  myColorRect);
    // forced to bind
    console.log('my rectangle : ' +  Reactangle.prototype.toString.call(myColorRect));

}

// toStringWork();



// Convert JavaScript Maps to Objects - Object.fromEntries():----------


function convertIterableIntoObj(){
    const myMap = new Map();
    const myArr = [
        ["search","fattyCat"],
        ["page","403"],
        ["flower","rose"],
    ]
    myMap.set('name','sarfraj'); 
    myMap.set('age',23); 
    console.log(myMap);
    // convert into an object(take iteratable)
    const myObj = Object.fromEntries(myMap);
    const myObj2 = Object.fromEntries(myArr);
    console.log(myObj);
    console.log(myObj2);


}

// convertIterableIntoObj()
