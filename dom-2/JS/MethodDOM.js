
const number = document.getElementById('number');
const btn = document.getElementById('btn')

number.addEventListener('numberChanged',function(e){
    number.textContent = e.detail.number;
    number.style.backgroundImage =`linear-gradient(45deg,${e.detail.textColor1},${e.detail.textColor2})`;
})

function numberChange(n,c1,c2){
    
    const event = new CustomEvent('numberChanged',{
        detail:{
            number:n,
            textColor1:c1,
            textColor2:c2
        }
    })
    // add the event to element
    number.dispatchEvent(event)
}

btn.addEventListener('click',function(){
    let color = [1,2,3,4,5,6,7,8,9,"a","b","c","d","f"];
    let hex1 = "#";
    let hex2 = "#";
    let num = parseInt(Math.random()*100)
   
    for(let i=0;i<6;i++){
        hex1+= color[parseInt(Math.random()*color.length)];
        hex2+= color[parseInt(Math.random()*color.length)];
     
        
    }
   
    numberChange(num,hex1,hex2)
})
 


// Get Mouse Position in Js (x and y):----

window.addEventListener('mousemove',function(e){

    this.document.getElementById('x-value').textContent = e.x;
    this.document.getElementById('y-value').textContent = e.y;
})

// How to style Console-Output:--------

console.log("%cYou And I",`
color:red;
font-weight:bold;
font-size:30px;
`);

// console.time method:---

const start = new Date();
// alert(`How's it going?`)

const end = new Date();

console.log(end-start);

// use console

console.time('saarfraj');
// alert('Hello')
let  total = 0;
for(n=1;n<1000;n++){
    total  +=n
}
console.timeEnd('saarfraj');


// onhashchange event:--

const hasUpdate = document.getElementById('hasUpdate');

window.addEventListener('hashchange',function(){
    hasUpdate.textContent = window.location.hash.substring(1);
    console.log('Hey, hash been chnaged!');
})

// XML HTTP Request in jS:------

// XMl(Object):--

const xhr = new XMLHttpRequest();

// on state changes 0-4 and status = 200
xhr.onreadystatechange = function (){
    if(xhr.readyState === 4){
        if(xhr.status === 200){

            const txt = document.getElementById('txt')
            txt.textContent = xhr.responseText
            txt.style.color = "red"
        }
    }
     if(xhr.status === 404){
        console.error('not Found 404');
    }
}

// make request:--

xhr.open('GET','../dom.txt',true);

// xhr.send();


// form-Data Object:---

// make formData object:---

const data = new FormData();

data.append("name","sarfraj");
data.append("age",24);
data.append("Gender",'male');
data.append("location",'Jodhpur');

 const xhr2 =  new XMLHttpRequest();

 xhr2.open('POST',"../form.php",true);

 xhr2.send(data);


//  Node.InsertBefore(node(new),node):---

const myList1 = document.getElementById('myList');
const galaxy = document.getElementById('galaxy');
const redMi = document.createElement('li');
redMi.textContent = "redMi"

myList1.insertBefore(redMi,galaxy)

function addtoListAdcently(parent,newChild,parentchildIndex){
    const child = parent.children[parentchildIndex]
    parent.insertBefore(newChild,child)
}

addtoListAdcently(myList1,redMi,4);


// node.clone():--

function copyNode(parent,childIndex){

    const listChild = parent.children;
    const item = listChild[childIndex];
    const copyItem = item.cloneNode(true);//deepcopy;
    
    myList1.appendChild(copyItem);
}

copyNode(myList1,1);


// node.nextElementSibling:----

const item = document.querySelector('#myList > li:first-of-type');
const appleItem = item.nextElementSibling;
appleItem.style.height = item.clientHeight + 20 + "px"
console.log(appleItem);


// getBoundingClientRect()-->return object that have detail:----

const box = document.getElementById('box');
box.style.width = "100px"
box.style.height = "100px"
box.style.background = "red";
box.style.border="6px solid black" 
console.log(box.getBoundingClientRect())


// local Storage:----

const inpKey = document.getElementById('inpKey');
const inpValue = document.getElementById('inpValue');
const btnInsert = document.getElementById('btnInsert');
const isOutput = document.getElementById('isOutput');
const clearBtn = document.getElementById('btnClear');

// event for storage:---

btnInsert.onclick = function(){
    const key= inpKey.value;
    const value  = inpValue.value;
    if(key && value){
        localStorage.setItem(key,value)
        location.reload()
    }
  

    // looping localStrorage
    for(let i=0;i<localStorage.length;i++){
        const key = localStorage.key(i);
        const value = localStorage.getItem(key)
        isOutput.innerHTML += `${key} => ${value} <br/>`
    }
}

clearBtn.onclick =function(){
    localStorage.clear()
    isOutput.innerHTML = ""
}


// storing Obejct with local Storage in JS:---

let myObj = {
    name:"Sarfraj Abbasi",
    age: 34,
    gender:"Male"
}

let myObj_Serialized = JSON.stringify(myObj);

console.log(myObj_Serialized);

localStorage.setItem("myObj",myObj_Serialized);
console.log(localStorage);

let myObj_deserialized = JSON.parse(localStorage.getItem("myObj"));
console.log(myObj_deserialized);

// Copying text to Clipboad in Html && JS:--

const inputText = document.getElementById("textCopy");
const btn1 = document.getElementById('btn1');
console.log(inputText);

btn1.onclick = function(){

    // Step 1 : select text

inputText.select()

    // setp 2 : copy text

    document.execCommand('copy')
}

// OuterHtml property:----
const outer = document.getElementById('outer');

outer.outerHTML = `<div> yeahhh Done</div>`


// Online && Offline Event in JS:---

