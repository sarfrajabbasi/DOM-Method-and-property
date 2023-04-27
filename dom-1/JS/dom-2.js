// Matches():------------

const word = document.getElementById('word');


const result = word.matches('#word');
const result2 = word.matches('p > strong');


// console.log(result)
// console.log(result2)

// MDN QUEST:------

const birds = document.querySelectorAll('li')
var hex1 = "#";
var hex2 = "#";
var hex3 = "#"
const arr = [1,2,3,4,5,6,7,8,9,0,"a","b","c","d","e","f"];
for(let i=0;i<6;i++){
    hex1 += arr[Math.floor(Math.random()*arr.length)]
    hex2 += arr[Math.floor(Math.random()*arr.length)]
    hex3 += arr[Math.floor(Math.random()*arr.length)]
}

for(const bird of birds){
    if(bird.matches('.endangered')){
        console.log("%c%s", "color:Red; background:black;font-size:15px;border-radius:17px;text-align:center",`The ${bird.textContent} is endangered!`);
    }else{
        console.log('%c%s',`color:black;background-image:linear-gradient(-45deg,${hex1},${hex2},${hex3});border-radius:20px;text-align:center;font-weight:bold;font-size:15px`,`beautiful birds collections`);
    }

}

// what is Event Delegation?:----------
const myList = document.getElementById('myList');

myList.addEventListener('click',function(e){
    let hexB = "#";
    let hex2B = "#";
    const target = e.target;
    target.style.borderRadius = "10px"
    const arr = [1,2,3,4,5,6,7,8,9,0,"a","b","c","d","e","f"]
    
    for(let i=0;i<6;i++){
        hexB+= arr[Math.floor(Math.random()*arr.length)];
        hex2B+= arr[Math.floor(Math.random()*arr.length)];

    } 
    myList.style.backgroundImage = `linear-gradient(${Math.floor(Math.random()*180)}deg,${hex1},${hex2},${hex3})`
    myList.style.borderRadius = "24px"

    if(target.matches('li')){
        target.style.background ="red"
        

    }
});
// replaceChild method:------

const myList2  =  document.getElementById('myList2');
const cssListItem = myList2.children[2];
// create a new Element/Node
const newListItem = document.createElement('li');
newListItem.textContent="Dusri-Biwi(second-Nikkha)";

myList2.replaceChild(newListItem,cssListItem);

// MDN-Quest:---
const myDiv1 = document.getElementById('my1');
myDiv1.style.backgroundImage = `linear-gradient(45deg,${hex1},${hex2})`
myDiv1.style.width = "300px"
myDiv1.style.height = "100px"
myDiv1.style.textAlign = "center"
myDiv1.style.fontSize = "25px"
myDiv1.style.fontWeight = "bold";
myDiv1.style.borderRadius = "30px"
const sp1 = document.createElement('span');
sp1.id = "newSpan"
sp1.textContent = "new replacement span element";

const sp2 = document.getElementById('childSpan');
const parentDiv = sp2.parentNode;

parentDiv.replaceChild(sp1,sp2)


// append method():-----

// target
const myDiv2 = document.getElementById('myDiv2');
// console.log(myDiv2);
// create

const strong = document.createElement('strong');
const em1 = document.createElement('em');
const textNode = document.createTextNode('simple text');

// add text
em1.textContent = "emphasizes"
strong.textContent = "strong";

// append

  myDiv2.append(strong,em,textNode,"hellow there ")
  myDiv2.style.backgroundImage = `linear-gradient(${Math.floor(Math.random()*180)}deg, #836105, #5cc2fb, #0eb565)`
 
// MDN Quest:--

// Append element
let div = document.createElement('div');
let p = document.createElement('p');

div.append(p);

// console.log(div.childNodes);///[<p>]

// append text

let div1 = document.createElement('div');
div.append('some text')

// console.log(div.textContent);

// Appending an element and text

let div3 = document.createElement('div');
let p1 = document.createElement('p');

div.append('Some text',p1);

// console.log(div.childNodes);

// replaceWith():----------

const ptag =  document.querySelector('#example p');
const newInput = document.createElement('input');

newInput.value = "I'am new node"
const btn2 = document.createElement('button');
btn2.textContent = "Delete Me";

ptag.replaceWith(newInput,btn2,'i AM text ');
const strong2 = document.createElement('strong');
strong2.textContent = "i Am strong"
ptag.childNodes[0].replaceWith(strong2)



// MDN QUEST:--------

const div2 = document.createElement('div')
div2.textContent = "Holla";
const p2 =  document.createElement('p')
p2.textContent = "snapdragon2";
div.appendChild(p2)
const span = document.createElement('span');
span.textContent = "hello"
p2.replaceWith(span);

// console.log(div2.outerHTML);

// isEqualNode():---------

const div4 = document.querySelectorAll('.test');

const isEqual = div4[0].isEqualNode(div4[1]);
// console.log(isEqual);


// MDN QUEST

let output = document.getElementById('output');

let divList = document.getElementsByClassName('hsr');
// console.log(divList);


output.innerHTML += `div 0 equals div 0 : ${divList[0].isEqualNode(divList[0])}<br>` 
output.innerHTML += `div 0 equals div 1 : ${divList[0].isEqualNode(divList[1])}<br>` 
output.innerHTML += `div 0 equals div 2 : ${divList[0].isEqualNode(divList[2])}<br>` 


// elementFormPoint() and elementsFormPoint() method:---------

let pos;

document.addEventListener('mousemove',function({pageX,pageY}){
    pos = `(${pageX},${pageY})`
});

function changeColor(newColor){
    elem = document.elementFromPoint(92,1972)
    console.log(elem);
    elem.style.color = newColor;
}

// selecting element:----

const head = document.getElementById('myH');

console.log(head);

const css = document.querySelector('#myH')
console.log(css);

const cssAll = document.querySelectorAll('.list-item');

console.log(cssAll);

const class1 = document.getElementsByClassName('list-item')
console.log(class1);

const tagName = document.getElementsByTagName('li');
console.log(tagName);



 