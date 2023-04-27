// DOM:---------

// Document.createElement():-------

var newEl = document.createElement("input");

document.body.appendChild(newEl)


// Document.setAttribute():---------

var myInput = document.getElementById("myinput");

myInput.setAttribute("value","javaScript");

console.log(myInput);

const myElement = document.createElement("div");
myElement.setAttribute('class',"sarfraj");
document.body.appendChild(myElement);


// textContent:----

var h2 = document.createElement("h2");
h2.setAttribute("id","title")
document.body.appendChild(h2);
h2.textContent = "sarfraj abbasi";
// alert(h2.textContent)
h2.innerHTML = "<em>sarfraj abbasi<em>"


// AppendChild():------

var myList = document.getElementById("myList")

var items = ["1234","sar","fly","board"];

// new list item
 for(let item of items){

let newListItem = document.createElement("li");
newListItem.textContent = item;
myList.appendChild(newListItem);

 } 

// fragment:-----

const docFrag = document.createDocumentFragment();

let item1 = document.createElement("li")
let item2 = document.createElement("li")

item1.textContent = "hello"
item2.textContent = "world";

// append to frgment

docFrag.appendChild(item1);
docFrag.appendChild(item2);

console.log(docFrag);
myList.appendChild(docFrag)


// class list

const myPara = document.getElementById("myPara");
myPara.classList.add("bold","redBg","text","bigFont");
myPara.classList.remove("bold","bigFont");
myPara.classList.replace("redBg","bigFont");
myPara.classList.toggle("redBg")//add
myPara.classList.toggle("redBg")//remove
console.log(myPara.classList.contains("Bold"));
console.log(myPara.classList);

// DataSet Property:----

const mydiv = document.getElementById("myDiv")

mydiv.dataset.code = "Python";
mydiv.dataset.name = "ajgar";
mydiv.removeAttribute("data-name")
console.log(mydiv.dataset);


// Node.insertBefore:----

const item = document.getElementById("item");
console.log(item);
const myList1 = document.getElementById("myList1");
const orangeItem = document.createElement("li");
orangeItem.textContent = "black"
orangeItem.classList.add("orange")

// myList1.insertBefore(orangeItem,item);

function addToBeginning(parent,toInsert){
    const firstChild = parent.firstChild;
    parent.insertBefore(toInsert,firstChild)
}

addToBeginning(myList1,orangeItem);


// Node.cloneNode():------------

const listChildren = myList.children
 const bananaItem = listChildren[1];
 const copyBanana = bananaItem.cloneNode(true);
 myList.appendChild(copyBanana);


//Node.nextElementSibling property:---

const myGroup = document.getElementById("mygroup");

const appleItem = document.querySelector("#mygroup > li:first-of-type")

const bananItem = appleItem.nextElementSibling;
console.log(appleItem);
console.log(bananItem);

const nav = document.querySelector("nav");

const belowNav = nav.nextElementSibling;
belowNav.style.marginTop  = nav.clientHeight + "px" ;
console.log(belowNav);

// getBoundingClient method:---
const box = document.querySelector("div.box");
const rect = box.getBoundingClientRect()
console.log(rect);

// window.addEventListener("scroll",function(){
//     if(box.getBoundingClientRect().top >= window.innerHeight){
//         box.style.background = "green"
//     }else if(box.getBoundingClientRect().top <= 413){
//         box.style.background = "red"

//     }
//     console.log(box.getBoundingClientRect().top);
// })


// elementouterHtml :--------

const h2a = document.querySelector("#title")
console.log(h2a.outerHTML);
h2a.outerHTML = "<div class = 'world'>sarfraj abbasi</div>"
const world = document.querySelector(".world");
setInterval(function(){
    
    const r = Math.random()*255
    const g = Math.random()*255
    const b = Math.random()*255
    world.style.background = `rgb(${r},${g},${b})`
    // console.log(r,g,b);
},1000)


// querySelector:--------

const pageTitle = document.querySelector("h2");
const container1 = document.querySelector(".container1")
console.log(container1.querySelector(".box1"));

// querySelectorAll:--------

const boxA = document.querySelectorAll(".boxA");

boxA.forEach((e)=>{
    setInterval(function(){
        
        e.textContent=`lorem${Math.floor(Math.random()*100)}` + "HelloWOlrd"
        const r = Math.random()*255
        const g = Math.random()*255
        const b = Math.random()*255
        e.style.background = `rgb(${r},${g},${b})`
        e.style.height = "30px"
        // console.log(r,g,b);
    },1000)
})
console.log(boxA[1]);