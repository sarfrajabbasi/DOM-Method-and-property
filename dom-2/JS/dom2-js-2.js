// sort method:----

const arr = ["xz","sarfraj","asif","aman","junaid","katy","ola","peguin"];

const sorted = arr.sort();

console.log(sorted);

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

console.log(sortedAge);

// padStart and padEnd:-------

const str = "sarfraj";
 console.log(str.padStart(10,"5"));
 console.log(str.padEnd(10,"2"));
 const arr5 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
 arr5.forEach((n)=>{
    console.log(n.toString().padStart(2,"0"));
 });


//  Default-Parameter:---

function sat(a,b=10,c){
    console.log(a + b + c);
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
    console.log(newName);
    console.log("this current list is " + allNames);
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
    console.log(hex1,hex2);
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
 console.log(result2);


// string repeat method:---

let myStr = 'rocky';
let repeated = myStr.repeat(4);

console.log(repeated);

// == and === 

console.log("2"==2);
console.log("2"=== 2);
console.log(""== 0);


// remider operator(modulus);

const reminder = 21 % 7
console.log(reminder);

function getColor(name){
    const color = ["green","red","blue"];
    const index = name.length % color.length;
    return color[index]
}

console.log(getColor('sa'));

// The Arguments Object in Functions:--------


function sum(){
    let total = 0
    for(let i=0;i<arguments.length;i++){
        total += arguments[i]
    }

    console.log(total);
}

sum(1.56,89,56)
sum(10,10,10)


// How to Generate Random Number in JS:---

var randomN = parseInt(Math.random()*10) + 1;

console.log(randomN);


// Convert a UTF-16 Code Point into a String or optionally, a sequence of Strings.

function charCode(start,end){
    let a = "";

    for(let i=start;i<=end;i++){ 
        a += `
        ${String.fromCharCode(i)} => ${i}
        `
    }
    console.log(a);

}

charCode(65,90)

function myName(){
let myNameIs = String.fromCharCode(...arguments)
console.log(myNameIs);
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

console.log(finalResult);

// used this method insde application:--

function printName(options){
    const defaultt = {
        firstName:"conner",
        secondName:'kenway'

    }
    options = Object.assign(defaultt,options)
    console.log(`${options.firstName} ${options.secondName}`);
}
console.log(printName({
    firstName:'sarfraj',
    secondName:'abbasi'
}));

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
console.table(arr4);
console.table(obj4);

// Array map method:---------

const existingArray = ['docde',"dom",'js',"defined"];

const array3 = existingArray.map(function(e,index,array){
    console.log(index,array);
    return index + " how are you "+ e +" " + this.name 
},{
    name:"LOL"
})
console.log(array3);

// Array Flat() Method:-----------

const array1 = [1,2,3,4,[5,[2,3],[34,[45,[45,[5,4,[5,[5,6,[7]]]]]]]],[23,45]];

const numbersFlat = array1.flat(Infinity)
console.log(numbersFlat);

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

 console.log(result5);

//  constant variable:-------
var names2  = [ 1,2,3,4 ]
for(const name of names2){
    console.log(name);
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
console.log(elements);

// break out of nested loops:-label------

const width = 3
const height = 4
 outerLoop:
 for(let x =1;x<=width;x++){
    for(let y =1;y<=height;y++){
    if(x==2 && y ==2){
        break outerLoop;
    }
    console.log(`${x} ${y}`);
    }
 }

//  