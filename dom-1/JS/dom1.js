// bubbling vs capturing:--------


const parent = document.getElementById("parent")
const child = document.getElementById("child");

parent.addEventListener("click",function(){
    console.log('I am THE PARENT');
},true)
child.addEventListener("click",function(){


    console.log('I am THE CHILD');
});

//  textContent vs innerHtml:----------

const myDiv = document.getElementById("myDiv");
// console.log(myDiv);
myDiv.textContent = "<strong>Hello World</strong>"
myDiv.innerHTML = "<strong>Hello World</strong>"



// append children:--------


const mygroup = document.getElementById("mygroup");
// console.log(mygroup);


// create list li
function createListItem(text,color){
    var li = document.createElement("li");
    li.textContent = text;
    li.style.background = color
    return li;
}

// create appending functions

function appendChild(parent,children){
    children.forEach(child => {
        parent.appendChild(child)
    });
}

const items1 = [
    createListItem("pokemon-1","red"),
    createListItem("bear","green"),
    createListItem("ponyy","aqua"),
    createListItem("ares","grey"),
];

// appendChild(mygroup,items1)

items1.forEach(li => {
    mygroup.appendChild(li)
})

// document.title :-------

document.title = "Js-Dom";

document.title = "(2)" + document.title;



// -----insertAdjecntHTML :------

const para = document.getElementById('myPara');
const em = para.querySelector('em');

em.addEventListener('click',console.log);

para.insertAdjacentHTML('afterend','<strong>Conner</strong>');

// event remove
// para.innerHTML += '<strong>Conner</strong>';


// element.insertAdjacentElement:----
document.body.insertAdjacentHTML('afterbegin',"<nav id = 'nav1'>hello</nav>")
const nav1 = document.getElementById('nav1');



// console.log(document.body);
nav1.classList.add('nav12');

// console.log(nav1.classList);

// MDN QUEST:----------

const insert = document.querySelector('#insert');
// insert html
insert.addEventListener('click',() =>{
    const subject = document.querySelector('#subject');
    const positionSelect = document.querySelector('#position');
    subject.insertAdjacentHTML(
        positionSelect.value,
        '<strong>HELLO</strong>'
    )
})

// reset
const reset = document.querySelector('#reset');

reset.addEventListener('click',() =>{
    document.location.reload();
});


// insertAdjacentElement:------------

const area = document.getElementById('area');
const box = document.createElement('div');

box.id = "box";
box.innerHTML = '<h2>HELLO WORLD</h2>'

area.insertAdjacentElement('afterbegin',box);

// MDN QUEST:---------

const beforeBtn = document.querySelector('.before');
const afterBtn = document.querySelector('.after');
const resetBtn = document.querySelector('.reset');

const container = document.querySelector('section');

let activeElem;

resetBtn.addEventListener('click',() =>{
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }; 

    for(let i =0;i<=3;i++){
        let tempDiv = document.createElement('div');
        container.appendChild(tempDiv);
        setListener(tempDiv)
    }

});

beforeBtn.addEventListener('click',function(){
    let tempDiv = document.createElement('div');
    tempDiv.style.backgroundColor = randomColor();
    if(activeElem){
        activeElem.insertAdjacentElement('beforebegin',tempDiv);

    }
    setListener(tempDiv);
});

afterBtn.addEventListener('click',function(){
    let tempDiv = document.createElement('div');
    tempDiv.style.backgroundColor = randomColor();

    if(activeElem){
        activeElem.insertAdjacentElement('afterend',tempDiv);
    }
    setListener(tempDiv);
});

function setListener(elem){
    elem.addEventListener('click',function(){
        const allElems = document.querySelectorAll('section div');
        for(let i=0;i<allElems.length;i++){
            allElems[i].style.border = '3px solid black';

        }
        elem.style.border = '3px solid aqua'
        activeElem =elem
    })
}

function randomColor(){
    function color(){
        const result = Math.floor(Math.random() * 255);
        return result;
    }

    return `rgb(${color()},${color()},${color()})`;

}
// console.log(randomColor());
function init(){
    const initElems = document.querySelectorAll('section div');
    for(let i=0;i<initElems.length;i++){
        setListener(initElems[i]);
    }
}

init();


// insertAdjacentText :-----------

const myPara = document.getElementById('myPara1')
myPara.style.fontWeight = "bold";

myPara.insertAdjacentText('beforeend',' ==> procastinaation make unpleasurable feeling and thoughts');

// MDN QUEST:----------
const beforeBtn1 = document.querySelector('.before1');
const afterBtn1 = document.querySelector('.after1');
const resetBtn1 = document.querySelector('.reset1');

// para select
const para2 = document.querySelector('#para2');
let initContent = para2.textContent;

// input select and their value
var textInput = document.querySelector('input');

// btns
resetBtn1.addEventListener('click',function(){
    para2.textContent = initContent;
    textInput.value = ""
});


beforeBtn1.addEventListener('click',function(){
    para2.insertAdjacentText('afterbegin',textInput.value)
})

afterBtn1.addEventListener('click',function(){
    para2.insertAdjacentText('beforeend',textInput.value);
});
