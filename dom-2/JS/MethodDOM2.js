// Loading data info into HTML Tables using AJAX:---

const rankingBody = document.querySelector('#ranking > tbody');

function loadingRanking(){
const request = new XMLHttpRequest();

request.onload = function(){
    try{
        const json = JSON.parse(request.responseText);
        populateRanking(json)
    }catch(e){
        // console.warn('%c%s','font-size :15px;font-weight:bold','Could not load ranking!');
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
// console.log(`value of name : ${myName}`);

// set
const setMyVal = usp.set('name',"conner");
const setMyVal1 = usp.set('Github',"sarfrajabbasi");

// toString
// console.log("%c%s","font-size:13px;font-weight:bold",usp.toString());

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
    num2=0
    clearInterval(id)
}
        return hexColor

}
const id = setInterval(function(){
    abc()
},1000)

btnGo.addEventListener('click',()=>{  
    box1.style.width = '60%'
    box1.style.height ='80px'
    box1.style.borderTopRightRadius =`${10*5}px`
    box1.style.backgroundColor = abc()
    console.log(num2);
    
    // element add 
    const box1Div = document.createElement('div');
    
    box1Div.style.borderTopRightRadius =`${10*5}px`
    box1Div.style.width = "40px";
    box1Div.style.height = "40px";
    box1Div.style.border = "5px";
    box1Div.style.position = "relative";
    box1Div.style.left = "80%";
    box1Div.style.top = "1%";


    
    box1Div.style.backgroundColor = abc()
    while(box1.firstChild){
        box1.removeChild(box1.firstChild)
    }
    box1.appendChild(box1Div)
    
})
box1.addEventListener('transitionend',()=>{
  

    box1.style.width ='100px'
    box1.style.height ='100px'
    box1.style.borderTopRightRadius =`${20}px`
    

})

// Load-Event:------

const myImg1 =document.getElementById('myImg')
const myImg2 =document.getElementById('myImg1')

// window.addEventListener('load',()=>{
//     alert('image loaded')
// })

myImg1.addEventListener('load',()=>{
    // alert('mountain loaded')
})
myImg2.addEventListener('load',()=>{
    // alert('resturant loaded')
})

// unLoad event:---------

const btnRChild = document.getElementById('btnRChild');

btnRChild.addEventListener('click',()=>{
    const iframChild = document.getElementById('iframeC');
    iframChild.src = "";
})


// DOMContentLoad event:-----

function dom(){
    const myTitle = document.getElementById('myTitle');
    // console.log(myTitle);
}
if(document.readyState === "loading"){

    document.addEventListener('DOMContentLoaded',dom)
}else{
    dom()
}

// DomParser:--

const parser = new DOMParser();
const parserDocument = parser.parseFromString(`
<html>
<head>
<title>New Document</title>
</head>
<body>
<h1 id ="pageTitle">Sarfraj</h1>
<p>
Heyyy How it's Going? My name is sarfraj!
</p>
</body>
</html>

`,"text/html")//return html or xml or SVG/pass second argument mime type
const pageT = parserDocument.getElementById('pageTitle');
pageT.textContent = "NO more time waste"
// console.log(pageT);
// console.dir(parserDocument)

// document.body = parserDocument.body;
const textContent2 = parserDocument.body.textContent 
// console.log(textContent2);


// XMLSerializer:----(node and html into valid XML String)
const myList2 = document.getElementById('myList2');

const xmlSerializer = new XMLSerializer();
const xmlString = xmlSerializer.serializeToString(myList2);
// console.log(xmlString);


// onFocus event:--

const message = document.getElementById('message');
const myInput = document.getElementById('myInput');

// console.log(myInput);

myInput.addEventListener('focus',function(){
    message.textContent = myInput.value;
});

// Stopping Propagation with Event.stopPropagation() method :-------------


const box5 = document.getElementById('Box5');
const mybt = document.getElementById('myBt');;

box5.addEventListener('click',function(){
    box5.style.backgroundColor = 'black';
    box5.style.borderRadius = '70px';
    box5.style.hover = '70px';
})
mybt.addEventListener('click',function(e){
    e.stopPropagation()
   console.log('button press');
})

// Create your own Promises in JS:----

// Three Examples:---

// 1. divide numbers:--

function divide(a,b){
    return new Promise((resolve,reject)=>{
        if(b ===0){
            reject(new Error("you can't divide the number with 0"));
            return
        }
        resolve(a/b)
    })
}
divide(10,0).then(function(result){
    // console.log(result);
}).catch((err)=>{
    // console.log('some error with division');
    // console.log(err);
})



// 2. wrap setTimeOut function inside promise:---

function wait(ms){
    return new Promise((res,rej)=>{
        if(ms <=0){
            rej(new Error("can't wait for 1 sec the ms value is less then or equal then 0"))
        }
        setTimeout(function(){
            res()
        },ms)
    })
}
wait(0).then(function(){
    console.log('Succesfull wait for 1 second!');
}).catch(function(err){
    // console.error(`There was an Error: ${err.message}`)
})


// 3. Connecting to a MYSQL dataBase using promise :---

// const mySql = require('mysql');

function connectToDataBase(config){
    return new Promise(function(res,rej){
        const connection = mySql.createConnection(config)

        connection.connect(function(err){
            if(err){
                rej(err);
                return
            }

            res(connection)
        })
    })
}

// connectToDataBase({
//     host:"localhost",
//     user:"root",
//     password:"",
//     database:"chatroom",
// }).then(function(conn){
//     console.log('Connection successfull!');
//     conn.end()
// }).catch(function(err){
//     console.log('There was an error connectiong to the database!');
//     console.error(err.message)
// })


// Sending JSON with AJAX/HttpRequest:----

// input Object
const toSend = {
    name:"Domenic",
    age:35,
    occupation:'Web-Developer',

}

// convert to JSON string

const jsonString = JSON.stringify(toSend);
// console.log('%c%s','color:green;font-weight:bold;font-size:14px',jsonString);

// post this JSON in php& and requestHeader is JSon

const xhr6 = new XMLHttpRequest();

xhr6.open('POST','../other/receive.php');
xhr6.setRequestHeader('Content-Type','application/json');

xhr6.send(jsonString);


// Fetch API Basic Usage-Get text:---

function loading(link){
    fetch(link).then((resposne)=>{
        // console.log(resposne);
        return resposne.text()
    }).then(function(text){
        // console.log(text);
    }).catch(function(err){
        console.log(err);
    })
}

loading('../other/dom.txt')


// Render HTML Dynamically Using AJAX:---


const xhr7 = new XMLHttpRequest();

const container = document.getElementById('container');

xhr7.onload = function(){
    if(this.status === 200){
        // console.log(this.responseText);
        container.innerHTML = this.responseText
    }else{
        console.log('cannot recieve 200 Ok response');
    }
}

xhr7.open('GET','../Html/fruits.html');
xhr7.send()

// Get Json with the fetch API:---

fetch('../other/people.json').then(function(response){
    return response.text()
}).then(function(data){
    // console.log(data);
}).catch(function(err){
    console.error('Somthing went wrong with retrieving the people');
    console.error(err);
});

// Sending JSON data with the fatch API:----

// make json data:----

const person={
    name:"sarfraj",
    age:43,
    occupation:"Web-Developer"
}

// fetch:---
fetch('../other/receive.php',{
    method:'post',
    body:JSON.stringify(person),
    headers:{
        'Content-type':'application/json'
    }
}).then(function(response){
    return response.text();
}).then(function(data){
    // console.log(data);
}).catch(function(err){
    console.error("can't fetch data");
    console.error(err);
})



// Sending Form Data(post) with the fetch API in JS:------


const myform = document.getElementById('myForm2');

myform.addEventListener('submit',function(e){
    // preevent browser refersh
    e.preventDefault();

    // make form data
    const formData =  new FormData(this);

    // urlString
    const serachPrams = new URLSearchParams()

    for(const pair of formData){
        serachPrams.append(pair[0],pair[1]);
    }

    fetch('../other/login1.php',{
        method:'post',
        body:serachPrams,
    }).then(function(response){
        return response.text()
    }).then(function(data){
        console.log(data);
    }).catch(function(err){
        console.error("can't fetch data");
    })
})

// Real-time Data Updates with Fetch API:---

function startUpdate(){
    const textViewCount = document.getElementById('viewCount');

// short polling effect using setinertvel

setInterval(function(){
    fetch('../other/viewCount.php').then(function(response){
        return response.text()
    }).then(function(data){
        textViewCount.textContent = data.viewCount
        console.log(data.viewCount);
    }).catch(function(err){
        console.error(err);
    })
},2000)

}

// startUpdate()



// Detecting CAPs Lock on Html forms:----

const inp_password =document.getElementById('my_password');

const capsLockWarn = document.getElementById('caps-lock-warn');
inp_password.addEventListener('keyup',function(e){
    e.preventDefault()
    const isCapsLock  = e.getModifierState('CapsLock');

    capsLockWarn.style.display = isCapsLock ? 'block':'none';
})

// Creating Custom Errors in JavaScript:-----

const person2 = {
    name:'sarfraj',
    // age:Number(prompt('enter your age')),
    age:21,
};

function drinkingAlcohol(p){
 const requried_age = 21
    if(p.age < requried_age){
        throw new Error('Person 🤓 is under the age of 21 no alcohol{Apne Pita Shiri Ko Bheje Apke Bas ka Nahi  Ha }')
    }
    console.log(`${p.name} is Drinking!`);
}

try{

    drinkingAlcohol(person2)
}catch(e){
    console.log('something went wrong')
    console.error(e);
}


// Make your table rows Clickable(with link):---

const btn05 = document.getElementById('btn05')

// Event Delegation:------


const tbody =document.querySelector('#tbody');
tbody.addEventListener('click',function(e){
     const target = e.target;
     const tr = target.parentElement;

     if(tr.matches('tr[data-href]')){
        window.location.href = tr.dataset.href
     }
})


btn05.addEventListener('click',
function addNewTr(){
    const newTr = {
       name:document.getElementById('name1'),
       age:document.getElementById('age1'),
       occupation:document.getElementById('occup1'),
       dataLink:document.getElementById('dataLink1'),
    }
    
    const tbody =document.querySelector('#tbody');
    tbody.insertAdjacentHTML('beforeend',`<tr data-href=${newTr.dataLink.value}>
    <td>${newTr.name.value}</td>
    <td>${newTr.age.value}</td>
    <td>${newTr.occupation.value}</td>
    </tr> `)

    // remove:---

    newTr.name.value = ""
    newTr.age.value = ""
    newTr.occupation.value = ""
    newTr.dataLink.value = ""

    
    
})


// Accessing an iFrame document(contentWindow):-----

const iFrame  =document.getElementById('iframe1');
console.log(iFrame);

function changeStuff(){

    // contentWindow:--
    const iFrameWindow = iFrame.contentWindow;
    // contentDocument:---(direct )
    const iFrameDcoument = iFrame.contentDocument;

    const iFrameHeading = iFrameDcoument.querySelector('h1')
    iFrameHeading.style.textShadow = '2px 2px lightBlue'
    iFrameDcoument.body.style.background = 'pink'

}

// Vibrate Mobile devices with Js:---

function Vibrate(ms){
    navigator.vibrate(ms)
}

function vibratePattern(){
    navigator.vibrate(navigator.vibrate([125,75,125,275,200,275,125,75,125,275,200,600,200,600]))
}


