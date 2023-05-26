
const number = document.getElementById("number");
const btn = document.getElementById("btn");

number.addEventListener("numberChanged", function (e) {
  number.textContent = e.detail.number;
  number.style.backgroundImage = `linear-gradient(45deg,${e.detail.textColor1},${e.detail.textColor2})`;
});

function numberChange(n, c1, c2) {
  const event = new CustomEvent("numberChanged", {
    detail: {
      number: n,
      textColor1: c1,
      textColor2: c2,
    },
  });
  // add the event to element
  number.dispatchEvent(event);
}

btn.addEventListener("click", function () {
  let color = [1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "f"];
  let hex1 = "#";
  let hex2 = "#";
  let num = parseInt(Math.random() * 100);

  for (let i = 0; i < 6; i++) {
    hex1 += color[parseInt(Math.random() * color.length)];
    hex2 += color[parseInt(Math.random() * color.length)];
  }

  numberChange(num, hex1, hex2);
});

// Get Mouse Position in Js (x and y):----

window.addEventListener("mousemove", function (e) {
  this.document.getElementById("x-value").textContent = e.x;
  this.document.getElementById("y-value").textContent = e.y;
});

// How to style Console-Output:--------

// console.log( "%cYou And I",`color:red;font-weight:bold;font-size:30px;`);

// console.time method:---

const start = new Date();
// alert(`How's it going?`)

const end = new Date();

// console.log(end - start);

// use console

// console.time("saarfraj");
// alert('Hello')
let total = 0;
for (n = 1; n < 1000; n++) {
  total += n;
}
// console.timeEnd("saarfraj");

// onhashchange event:--

const hasUpdate = document.getElementById("hasUpdate");

window.addEventListener("hashchange", function () {
  hasUpdate.textContent = window.location.hash.substring(1);
  console.log("Hey, hash been chnaged!");
});

// XML HTTP Request in jS:------

// XMl(Object):--

const xhr = new XMLHttpRequest();

// on state changes 0-4 and status = 200
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    if (xhr.status === 200) {
      const txt = document.getElementById("txt");
      txt.textContent = xhr.responseText;
      txt.style.color = "red";
    }
  }
  if (xhr.status === 404) {
    console.error("not Found 404");
  }
};

// make request:--

xhr.open("GET", "../dom.txt", true);

// xhr.send();

// form-Data Object:---

// make formData object:---

const data = new FormData();

data.append("name", "sarfraj");
data.append("age", 24);
data.append("Gender", "male");
data.append("location", "Jodhpur");

const xhr2 = new XMLHttpRequest();

xhr2.open("POST", "../form.php", true);

xhr2.send(data);

//  Node.InsertBefore(node(new),node):---

const myList1 = document.getElementById("myList");
const galaxy = document.getElementById("galaxy");
const redMi = document.createElement("li");
redMi.textContent = "redMi";

myList1.insertBefore(redMi, galaxy);

function addtoListAdcently(parent, newChild, parentchildIndex) {
  const child = parent.children[parentchildIndex];
  parent.insertBefore(newChild, child);
}

addtoListAdcently(myList1, redMi, 4);

// node.clone():--

function copyNode(parent, childIndex) {
  const listChild = parent.children;
  const item = listChild[childIndex];
  const copyItem = item.cloneNode(true); //deepcopy;

  myList1.appendChild(copyItem);
}

copyNode(myList1, 1);

// node.nextElementSibling:----

const item = document.querySelector("#myList > li:first-of-type");
const appleItem = item.nextElementSibling;
appleItem.style.height = item.clientHeight + 20 + "px";
// console.log(appleItem);

// getBoundingClientRect()-->return object that have detail:----

const box = document.getElementById("box");
box.style.width = "100px";
box.style.height = "100px";
box.style.background = "red";
box.style.border = "6px solid black";
// console.log(box.getBoundingClientRect());

// local Storage:----

const inpKey = document.getElementById("inpKey");
const inpValue = document.getElementById("inpValue");
const btnInsert = document.getElementById("btnInsert");
const isOutput = document.getElementById("isOutput");
const clearBtn = document.getElementById("btnClear");

// event for storage:---

btnInsert.onclick = function () {
  const key = inpKey.value;
  const value = inpValue.value;
  if (key && value) {
    localStorage.setItem(key, value);
    location.reload();
  }

  // looping localStrorage
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    isOutput.innerHTML += `${key} => ${value} <br/>`;
  }
};

clearBtn.onclick = function () {
  localStorage.clear();
  isOutput.innerHTML = "";
};

// storing Obejct with local Storage in JS:---

let myObj = {
  name: "Sarfraj Abbasi",
  age: 34,
  gender: "Male",
};

let myObj_Serialized = JSON.stringify(myObj);

// console.log(myObj_Serialized);

localStorage.setItem("myObj", myObj_Serialized);
// console.log(localStorage);

let myObj_deserialized = JSON.parse(localStorage.getItem("myObj"));
// console.log(myObj_deserialized);

// Copying text to Clipboad in Html && JS:--

const inputText = document.getElementById("textCopy");
const btn1 = document.getElementById("btn1");
// console.log(inputText);

btn1.onclick = function () {
  // Step 1 : select text

  inputText.select();

  // setp 2 : copy text

  document.execCommand("copy");
};

// OuterHtml property:----
const outer = document.getElementById("outer");

outer.outerHTML = `<div> yeahhh Done</div>`;

// Online && Offline Event in JS:---

const ooUpdate = document.getElementById("ooUpdate");

// check network:----

if (navigator.onLine) {
ooUpdate.textContent = "Yes We are Onlin :) "
ooUpdate.style.color = "green"
}

window.addEventListener('online',function(){
    ooUpdate.textContent = "Yes We are Online :)"
    ooUpdate.style.color = "green"

})

window.addEventListener('offline',function(){
    ooUpdate.textContent = "we are Offline :("
    ooUpdate.style.color = "red"

})

// sending POST data with AJAX in JS :---
// console.log(document.getElementById('serverResponse'));
const xhr3 = new XMLHttpRequest();

xhr3.onload =  function(){
    const serveResponse = document.getElementById('serverResponse');
    serveResponse.innerHTML = this.responseText
}

xhr3.open('POST','../sar.php');
xhr3.setRequestHeader('content-type','application/x-www-form-urlencoded');
xhr3.send('name=sarfraj&message=how are you my dear friend');

// create your own progress bar in HTML,CSS and JS :-

class ProgressBar{
  constructor(element,initalvalue = 0){
    this.elemValue = element.querySelector('#progress-bar-value');
    this.elemFill = element.querySelector('#progress-bar-fill');
    // console.log(this.elemValue); 
    // console.log(this.elemFill); 
    this.setValue(initalvalue)
  }

 setValue(newValue){
  if(newValue >100){
newValue = 100
  }
  if(newValue <0){
    newValue =0;
  }
  this.value = newValue;
  this.udpate();
 }
 udpate(){
  const percentage = this.value +"%" 
  this.elemFill.style.width = percentage;
  this.elemValue.textContent = percentage
 }
}
const btn4 = document.getElementById('btn4');
const btn5 = document.getElementById('btn5');


const pb1 = new ProgressBar(document.getElementById('progress-bar'));
let numPercent = 0
btn4.addEventListener('click',function(){
  let color = [1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "f"];
  let hex1 = "#";
  let hex2 = "#";
  let deg = parseInt(Math.random() * 180);

  for (let i = 0; i < 6; i++) {
    hex1 += color[parseInt(Math.random() * color.length)];
    hex2 += color[parseInt(Math.random() * color.length)];
  }
  numPercent +=10
  numPercent = numPercent>100?numPercent=100:numPercent
  console.log(numPercent);
pb1.setValue(numPercent)
pb1.elemFill.style.backgroundImage = `linear-gradient(${deg}deg,${hex1},${hex2})`
})

btn5.addEventListener('click',function(){
  let color = [1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "f"];
  let hex1 = "#";
  let hex2 = "#";
  let deg = parseInt(Math.random() * 180);

  for (let i = 0; i < 6; i++) {
    hex1 += color[parseInt(Math.random() * color.length)];
    hex2 += color[parseInt(Math.random() * color.length)];
  }
  numPercent -=10
numPercent = numPercent<0?numPercent=0:numPercent
console.log(numPercent);
pb1.setValue(numPercent)
pb1.elemFill.style.backgroundImage = `linear-gradient(${deg}deg,${hex1},${hex2})`
})

// PreventDefault:-----

const ytLink = document.getElementById('ytlink');
const cb = document.getElementById('cb')
ytLink.addEventListener('click',function(e){

  ytLink.textContent = "YOUTUBE"
  if(!cb.checked){

    ytLink.textContent += "🚫"
    e.preventDefault();
    
  }else{
    ytLink.textContent +="✅"
    
  }
})

// Using the 'onblur' event in js:----

const myInp = document.getElementById('myInp');

 myInp.addEventListener('blur',(e)=>{
  const val = e.target.value;
  if(val.match(/sarfraj/ig)){
    alert('you cannot allow sarfraj')
  }
 })

//  load JSON dynamically using AJAX:---

const xhr5 = new XMLHttpRequest();

xhr5.onload = function(){
  xhr.status =200
  if(xhr.status ===200){
    console.log(this.responseText);
  }
}

xhr5.open('GET',"../obj.json",true);

xhr5.send()


// Delaying your JS code with the setTimeout():----

const btnShowMsg = document.getElementById('show-message') 
const btnDontShowMsg = document.getElementById('cancel-msg') 

let messageTimeOut = null;
btnShowMsg.addEventListener('click',function(){
  messageTimeOut =  setTimeout(function(){
    alert('How "s going men ? ')
  },1000)
})
btnDontShowMsg.addEventListener('click',function(){
  console.log(messageTimeOut);
  clearTimeout(messageTimeOut)//1 is id that represetning the setTimeout
})

// Using the SetIntervel():------

 const timerText = document.getElementById('timer-text');
 const btnStart = document.getElementById('btn-start');
 let intervalTime;
 let val =0
 let hex1 = "#"
 let hex2 = "#"
 let color = [1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "f"];
 let deg =
btnStart.addEventListener('click',function(){
 intervalTime = setInterval(function(){

  hex1 += color[parseInt(Math.random() * color.length)];
  hex2 += color[parseInt(Math.random() * color.length)];
  
  val++
  console.log(val);
  if(val === 6){
    deg = parseInt(Math.random()*180)
    console.log(`${deg} deg ,color1: ${hex1},color2: ${hex2},color3: ${hex1}`);
    document.body.style.backgroundImage = `linear-gradient(${deg}deg,${hex1},${hex2},${hex1})`

    val =0;
    hex1 = "#"
    hex2 = "#"
  }
 
 },1000)
});

const stopTimer = document.getElementById('stopTimer');
stopTimer.addEventListener('click',function(){

  clearInterval(intervalTime)
  // console.log(intervalTime);
})


