// Loading data info into HTML Tables using AJAX:---

const rankingBody = document.querySelector('#ranking > tbody');

function loadingRanking(){
const request = new XMLHttpRequest();

request.onload = function(){
    try{
        const json = JSON.parse(request.responseText);
        populateRanking(json)
    }catch(e){
        console.warn('%c%s','font-size :15px;font-weight:bold','Could not load ranking!');
    }
};

request.open('GET','../other/data.json');
request.send();
}

function populateRanking(json){
    while(rankingBody.firstChild){
        rankingBody.removeChild(rankingBody.firstChild)
    }

    json.forEach((row)=>{
        const tr = document.createElement('tr')
        row.forEach((cell)=>{
            const td = document.createElement('td');
            td.textContent =  cell;
            tr.appendChild(td);

        })
        rankingBody.appendChild(tr)
    })
}
document.addEventListener('DOMContentLoaded',function(){
    loadingRanking()
})
// Creating a Characters Remaining Counter(for text Areas):---


const textArea = document.getElementById('myTextArea');
const textAreaRemaining = document.getElementById('mytextArea-remaining');

const MAX_CHAR = 250;

    textArea.addEventListener('input',()=>{
       let remaining = MAX_CHAR - textArea.value.length;
       remaining = remaining <0 ?0:remaining
       color = remaining < MAX_CHAR * 0.1 ? "red":null;

       textAreaRemaining.style.color = color
       textAreaRemaining.textContent = `${remaining} char Remaining`
       
    })


// Creatng AJAX submiting form using js:---


const form = {
    username:document.getElementById('username'),
    password:document.getElementById('password'),
    login:document.getElementById('btn-login'),
    message:document.getElementById('form-message'),
}


form.login.addEventListener('click',()=>{

    const request =new XMLHttpRequest();

    request.onload = ()=>{
        let responsObj
        try{
            responsObj = JSON.parse(request.responseText);
            // loginAllow(reqData);
        }catch(e){
            console.error('Could not parse JSON');
        }

        if(responsObj){
            handleResponse(responsObj);
        }
    }
    const formData = `username=${form.username.value}&password=${form.password.value}`

    request.open('post','../JS/other/form.php',true);

    request.setRequestHeader('Content-Type','application/x-www-form-urlencoded');

    request.send(formData)
})

function handleResponse(responsObj){
    if(responsObj.ok){
        location.href = '../Html/javaScript.html'
    }else{
        while(form.message.firstChild){
            form.message.removeChild(form.message.firstChild);
        }

        responsObj.message.forEach(message =>{
            const li = document.createElement('li');
            li.textContent = message;
            form.message.appendChild(li)
        })
        form.message.style.display = "block"
    }
}



// Write your own simple AJAX GET Function in JS:-----------

function httpGet(method,url,callback){
    const request = new XMLHttpRequest();
    request.open(method,url,true);

    request.onload = ()=>{
        callback(request);
        
    }
    request.send()
 }

 httpGet('get','../other/dom.txt',function(req){
    if(req.status ===200){
        // console.log(req.responseText);
    }
 })

// The Submit event on forms in js:-----

 const myForm1 = document.getElementById('myForm1');

 myForm1.addEventListener('submit',(e)=>{
     
    e.preventDefault();

    const request = new XMLHttpRequest();
    request.open('post','../other/login1.php',true);

    request.onload= ()=>{
        console.log(request.responseText);
    }

    request.send(new FormData(myForm1));
 })

//  URLSearchParams in JS:-----

// const queryStr = 'name=sarfraj&age=23&occupation=software+developer}';

const usp = new URLSearchParams({
    name:'sarfraj',
    age:45,
    occupation:'software developer',
    Yahoo:"sarfrajabbasi"
});


// get
const myName = usp.get('name');
console.log(`value of name : ${myName}`);

// set
const setMyVal = usp.set('name',"conner");
const setMyVal1 = usp.set('Github',"sarfrajabbasi");

// toString
console.log("%c%s","font-size:13px;font-weight:bold",usp.toString());

// Using the fetch APi with URLSearchParams in JS:-------

const params = new URLSearchParams({
    query:'dinner',
    language:'en'
});

const url = `../other/search.php?${params.toString()}`;

fetch(url).then((res)=>res.text()).then(console.log)
fetch('../other/search.php',{
    method:'post',
    body:params
}).then((res)=>res.text()).then(console.log)

// transitioned event in js:----

const box1 = document.getElementById('box1')
const btnGo = document.getElementById('btnGo');

let hexColor; 
let num2 = 0
function abc(){
    num2++
hexColor = "#"+ parseInt(Math.random()*16777215).toString(16);
if(num2 > 10){
    clearInterval(id)
}
        return hexColor

}
const id = setInterval(function(){
    abc()
},1000)

btnGo.addEventListener('click',()=>{  
    box1.style.width = '100%'
    box1.style.height ='80px'
    box1.style.borderRadius =`${num2*5}px`
    box1.style.backgroundColor = hexColor
    
})
box1.addEventListener('transitionend',()=>{
    box1.style.width ='100px'
    box1.style.height ='100px'
    box1.style.borderRadius ='0px'
    

})

// Load-Event:------

const myImg1 =document.getElementById('myImg')
const myImg2 =document.getElementById('myImg1')

// window.addEventListener('load',()=>{
//     alert('image loaded')
// })

myImg1.addEventListener('load',()=>{
    alert('mountain loaded')
})
myImg2.addEventListener('load',()=>{
    alert('resturant loaded')
})

