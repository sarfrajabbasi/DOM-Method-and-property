// Creating an AJAX File Upload Progress Bar in JavaScript :-----

const uploadForm = document.getElementById('uploadForm');
const inpFile = document.getElementById('inpFile');
const ProgressBarFill = document.querySelector('#progressBar > .progress-bar-fill');
const ProgressBarText = ProgressBarFill.querySelector('.progress-bar-text');

uploadForm.addEventListener('submit',uploadFile)

function uploadFile(e){
    e.preventDefault();

    const xhr = new XMLHttpRequest();

    xhr.open('POST','upload.php');

    // ye main ha
    xhr.upload.addEventListener('progress',e =>{

        const percent = e.lengthComputable ?(e.loaded/e.total)*100 :0;

        ProgressBarFill.style.width = percent.toFixed(2) + "%"
        ProgressBarText.textContent  = percent.toFixed(2) + "%"
    })
    xhr.setRequestHeader('Content-Type','Multipart/form-data');

    xhr.send(new FormData(uploadForm))
}


// Upload Files with Fetch:--------

const myForm =  document.getElementById('myForm5')

const inpFile1 = document.getElementById('inFile1')

myForm.addEventListener('submit',function(e){

    e.preventDefault();
    const endPoint = 'upload.php'
    const formData = new FormData()
    formData.append('inpFile',inpFile1.files[0]);

fetch(endPoint,{
    method:"post",
    body:formData,

}).catch(console.error)
})

// Upload multiple files with Fetch API:----

const inpFile2 = document.getElementById('inpFile2') ;
const btnUpload = document.getElementById('uploadBtn') ;

btnUpload.addEventListener('click',function(){

const formData2 = new FormData();

for(const file of inpFile2.files){
    formData2.append('files[]',file)
}

fetch('./Html/upload.php',{
    method:'post',
    body:formData2,

}).catch(console.error)

})

// Upload multiple files with AJAX:----


 const inpFile3 = document.getElementById('inpFile3')
 const btnUpload2 = document.getElementById('btnUpload2')


//  event:---

btnUpload2.addEventListener('click',function(){

    const xhr = new XMLHttpRequest();
    const formData3 = new FormData();

    for(const file of inpFile3.files){
        formData3.append('files[]',file)
    }

    xhr.open('POST','upload.php');
    xhr.send(formData3)

})


// Using the File API on Upload Forms:---

const inpFile4 = document.getElementById('inpFile4')

inpFile4.addEventListener('change',function(){

    for(const file of inpFile4.files){
        if(file.size > 300000){
            alert(`${file.name} is too big! Max is 300kb`)
            return
        }
        // console.log(file.name);
    }

})



// Wrap AJAX in a Promise:------

function promiseAjax(url,parseJson){
    return new Promise(function(resolve,reject){
        const xhr = new XMLHttpRequest();
        xhr.onload = function(){
            
                resolve(this)
        }
        xhr.onerror = function(){
            reject(new Error('Network error'))
        }
        xhr.open('get',url);
        xhr.send()
    })
}

promiseAjax('../other/people.json').then(function(xhr){
    if(xhr.status !==200){
    //    console.error('404 Error'); 
    }
    // console.log(xhr.responseText); 

    // console.log(xhr);
}).catch(function(err){
    // console.error(err);
})


// Getting CSS Styles with JavaScript - getComputedStyle() function:-------

const para = document.getElementById('csText');
const box = document.getElementById('box')

const csBox = window.getComputedStyle(box);
const csPara = window.getComputedStyle(para);
const csBoxAfter = window.getComputedStyle(box,'::after');
// console.log(csBoxAfter.backgroundColor);
para.textContent =  `

My parent computed width is ${csBox.width},
and backgrund is ${csBox.backgroundColor}

and my computed font-size is ${csPara.fontSize} and my CS color is ${csPara.color}

`

// Dynamically Change Your Favicon With JavaScript :---------

const favIcon = document.querySelector("link[rel='shortcut icon']");

function toRed(){
    favIcon.setAttribute("href",'../assets/favicon2.ico')
}

function toGreen(){
    favIcon.setAttribute("href",'../assets/favicon.ico')
}

// Detect when a CSS animation has finished in JS (animationend event):----

const boxAnimate = document.getElementById('boxAnimate');

boxAnimate.addEventListener('animationend',function(){
    // console.log('box  has move  all the way!');
})


// Chaining Fetch Requests in JavaScript - Promise Chain Example:----

// single fetch request
fetch('../other/config.json').then(response =>{
    return response.json();
}).then(data=>{
    // console.log(data);

}).catch(err =>{
    // console.log(err);
});
 
// chaining fetch requests:---

fetch('../other/config.json').then(response =>{
    return response.json();
}).then(data=>{
    return fetch('../other/themes/' + data.theme + '.css')


}).then(response =>{
    return response.text();
}).then(cssContent =>{
    // console.log(cssContent);
}).catch(err =>{
    // console.log(err);
});
 
// make it bit more modular ,more seprate and easier to work with and maintain.

function getConfig(){
    return new Promise((resolve,reject)=>{
        fetch('../other/config.json').then(response =>{
            return response.json();
        }).then(data =>{
            resolve(data)
        }).catch(err =>{

            reject(err)
        })
    })
};

function getTheme(themeName){
    return new Promise((resolve,reject)=>{
        fetch('../other/themes/' + themeName + '.css').then(response =>{
            return response.text();
        }).then(cssContent =>{
            resolve(cssContent)
        }).catch(err =>{
            reject(err)
        })
    })
}

getConfig().then(data =>{
    return getTheme(data.theme)
}).then(cssContent =>{
    // console.log('Theme Loaded!');
    // console.log(cssContent);
}).catch(err =>{
    // console.error(err);
});


// toJSON() method:-------

const person2 = {
    name:"jhon",
    age:23,
    // with the help of toJSON  you able to change what the obj. here produces for this json stringfiy,actually you are define the toJSON method on the actual object,it return a new value from  this function and that value is strfingy instead of all stringfy object.JSON.stringify look for toJson method if it exist then it's going to use that instead of default values
// it check toJSON exist of not
    toJSON(){
        return `This is ${this.name} and they are ${this.age} years old!`
    }
}

const dataObj = {
    data:person2,
}

// return json string
// console.log(JSON.stringify(dataObj));

// Also work on classes:---

class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }


    toJSON(){
        return `This is ${this.name} and they are ${this.age} years old!`
    }

}

const dataObj2 = {
    data:new Person('sarfraj',45),
}

// return json string
// console.log(JSON.stringify(dataObj2));


// Use the toJSON on htmlElement:---

const h2 = document.querySelector('h2');

HTMLElement.prototype.toJSON = function(){
    console.log('using "outerHtml" property and add new method which is "toJson() "');
    return this.outerHTML.toLocaleLowerCase()
}

const dataObj3 = {
    data:h2,
}

// not working with htmlElements
// console.log(JSON.stringify(dataObj3));


// Base64 Encoding in JavaScript:----

// Orignal
const str = 'sarfraj';

// convert to base64(btoa it's functions that convert the string into base64)
const base64 = btoa(str)

// decode it to it's original form (atob this functions decode the base64)
const decodeBase64 = atob(base64);

// logs:---
// console.log('%c%s','color:red',`Original string :-- ${str}`);
// console.log('%c%s','color:blue',`base64 Encoding :-- ${base64}`);
// console.log('%c%s','color:green',`decoding base64 :-- ${decodeBase64}`);
 
// Use the base64:-----(upload canvas image)


// /access element:---

const btnUpload01 = document.getElementById('btnUpload01');

const myCanvas = document.getElementById('myCanvas');

// other way you can draw on the actual canvas
const ctx = myCanvas.getContext('2d')

ctx.filStyle = '#cccc';
// reactangle
ctx.rect(0,0,myCanvas.width,myCanvas.width)

ctx.fill();

ctx.fillStyle = 'red'
ctx.font = '35px serif'

ctx.fillText('sarfraj abbasi',30,60)

btnUpload01.addEventListener('click',uploadCanvasImage)

function uploadCanvasImage(){
    // base64 representaion of canvas(string)
    const base64 = myCanvas.toDataURL().split(',')[1];
    // console.log(base64);

    const body = {
        'generated_at':new Date().toISOString(),
        "png":base64,
    };

    fetch('../other/upload1',{
        method:'post',
        body : JSON.stringify(body),
        headers:{
            'Content-type':'application/json'
        }

    });

};



// Send Data Between tabs and windows-Broadcast channel API in JS:----

// --> Allows communication b/w browser contexts of the same origin (tabs,windows,iframes)
// ---> Origin: scheme(protocal),host and part

const bc = new BroadcastChannel('sarfraj');

// Handle incoming Messages:------
bc.addEventListener('message',(e)=>{
    // console.log(e.data);
    
})

// Send Messages:-----

// bc.postMessage("how it's going!")
// bc.postMessage([12,3,445,6,])
// bc.postMessage({name:"hulu",age:90-Infinity})
// bc.postMessage(new Blob(['sample Text']))


// Promise.all()----

const fetchUsers = fetch('../other/user.json')
const fetchColor = fetch('../other/color.json')

// it retrun array of promise
Promise.all([fetchUsers,fetchColor]).then(values =>{
    Promise.all(values.map(r => r.json())).then(([user,color]) =>{
// console.log(user,color);
    }).catch(e =>{
        // console.log('caught!')
        // console.error(e)
    })
});


// Previewing Image before file upload On website:----

const inpFile01 = document.getElementById('inpFile01');
const previewContainer = document.getElementById('imagePreview');

const PreviewImage = previewContainer.querySelector('.image-preview__image');

const PreviewDefaultText = previewContainer.querySelector('.image-preview__default-text')


inpFile01.addEventListener('change',function(){
    const file = this.files[0];
    if(file){
        const reader = new FileReader();
        PreviewDefaultText.style.display = "none"
        PreviewImage.style.display = "block";

        reader.addEventListener('load',function(){
            // this.result is file reader property
            console.log(this);
            PreviewImage.setAttribute('src',this.result);
        })
        // read as data url
        reader.readAsDataURL(file)
    }else{
        PreviewDefaultText.style.display = null
        PreviewImage.style.display = null
   
    }
})



// session Storage:---

// syntax:-- sessionStorage(   )

function sessionStore(obj){  
    // setItem:
    sessionStorage.setItem('work','Coding');
    
    sessionStorage.setItem('avatar',JSON.stringify(obj));

    // reassign item value
    sessionStorage.setItem('work',"Developer");

    

    // loop:--
    for(let i=0;i<sessionStorage.length;i++){
        const key  = sessionStorage.key(i);
        console.log(`${key} => ${sessionStorage.getItem(key)}`);
    }
    
    // log:----
    console.log(JSON.parse(sessionStorage.getItem('avatar')));
    console.log(sessionStorage.getItem('work'))

    // remove item :---
    sessionStorage.removeItem('avatar');

    // clear all item:---
    sessionStorage.clear();
}
 
// sessionStore({
//     avatar :"jhon f cannedy",
//     work :"USA-president",
//     goodThing:"dead",
// });


// Date Object:------

function dateValue(){
    let d;

// 1).
// currrent date object
d= new Date();
console.log(d.toString());

// it create new date instance to repesent the point in time.

// 2).date time number in ms

d= new Date(1164411006456);
console.log(d.toString());


// 3).date time string passs
// UTC and GMTd
d= new Date("2023-08-02T11:30:00+10:00");
console.log(d.toString());



// 4).passing individual parts
// year-month-day-hour-minutes-seconds-ms
//gonna take first value of each part(start value of each part);

d= new Date(2024,7,2,11,30,27,0);
// d= new Date(2024,7);
console.log(d.getFullYear());
console.log(d.getMonth());
console.log(d.getDay());
console.log(d.getHours());
console.log(d.getMinutes());
console.log(d.getSeconds());
console.log(d.getMilliseconds());
console.log(d.getUTCHours());

d.setMinutes(10);
d.setDate(9);
console.log(d.toLocaleString('eu-AU',{
    timeZone:'America/Los_Angeles'
}));
console.log(d.toLocaleString('en-US'));

// json strinfy

console.log(JSON.stringify({
    myDate:d
}));

}

// dateValue()

// MutationObserver :-----------

function mutationObserver(){
    
    const myList = document.querySelector(".summary");

    /*
    (mutation observer work three main steps)
    
    1. Making  a new MutationObserver Object
    2. Tell it what to observe
    3. what to do with the observerd changes/mutations.
    */
//    1.
    const observer = new MutationObserver(function(mutations1){
        console.log(mutations1);
        mutations1.forEach(record =>{
            if(record.type === "attributes"){
                // give us id
                const changeAttributeName =record.attributeName;

                const newValue =  record.target.getAttribute(changeAttributeName);

                console.log(`attribute chnaged New value for ${changeAttributeName} : ${newValue}`)

            }
        })
    });
//    2.
    observer.observe(myList,{
        attributes:true,
        attributeFilter:['class'],
        attributeOldValue:true

    });
    setTimeout(()=>{
        myList.setAttribute('id', "someRandomId") 
        myList.setAttribute('class', "another-Class") 
    })
};

// oneeeeeeeee
function mutationObserver1(){
    
    const myList = document.querySelector(".summary");

    /*
    (mutation observer work three main steps)
    
    1. Making  a new MutationObserver Object
    2. Tell it what to observe
    3. what to do with the observerd changes/mutations.
    */
//    1.
    const observer = new MutationObserver(
        
        function(mutations1){
        mutations1.forEach(record =>{
            console.log(record);

            if(record.addedNodes.length > 0){
                console.log(`Number of nodes added : ${record.addedNodes.length}`);
            }
            
            if(record.removedNodes.length > 0){
                console.log(`Number of nodes removed : ${record.removedNodes.length}`);
            }
          })
         }
    
    );
//    2.
    observer.observe(myList,{
        childList:true,

    });
    setTimeout(()=>{
     myList.removeChild(myList.firstElementChild);
     const newLi = document.createElement('li');
     newLi.textContent = "Hello hola balauu";
     myList.appendChild(newLi);
    },1000);

};

// Twoooooooo
function mutationObserver2(){
    
    const myList = document.querySelector(".summary");

    /*
    (mutation observer work three main steps)
    
    1. Making  a new MutationObserver Object
    2. Tell it what to observe
    3. what to do with the observerd changes/mutations.
    */
//    1.
    const observer = new MutationObserver(
        
        function(mutations1){
        mutations1.forEach(record =>{
            console.log(record);

            if(record.addedNodes.length === 1 && record.addedNodes[0].nodeType === Node.TEXT_NODE && record.removedNodes.length === 1 && record.removedNodes[0].nodeType === Node.TEXT_NODE){
                console.log(`Text changed form ${record.removedNodes[0].nodeValue} to ${record.addedNodes[0].nodeValue }`);
            }
          })
         }
    
    );
//    2.
    observer.observe(myList.firstElementChild,{
        childList:true,

    });
    setTimeout(()=>{
    myList.firstElementChild.textContent = "something else";
    myList.firstElementChild.innerHTML = " and  something else";
    })
     // it don't work coz it have two node
    // myList.firstElementChild.innerHTML = " <br>and  something else";
    // },1000);

};


// Threeeeeeeee
function mutationObserver3(){
    
    const myList = document.querySelector(".summary");

    /*
    (mutation observer work three main steps)
    
    1. Making  a new MutationObserver Object
    2. Tell it what to observe
    3. what to do with the observerd changes/mutations.
    */
//    1.
    const observer = new MutationObserver(
        
        function(mutations1){
        mutations1.forEach(record =>{
            console.log(record);

            console.log(`text has changed! New value : ${record.target.nodeValue}. Old value:${record.oldValue} `);
          })
         }
    
    );
//    2.
    observer.observe(myList.firstElementChild.firstChild,{
        characterData:true,
        characterDataOldValue:true,

    });

    // time
    setTimeout(()=>{
        myList.firstElementChild.firstChild.nodeValue = "how's it going?"
    });

}


// fourrrrrrrrrrr(subtree)
function mutationObserver4(){
    
    const myList = document.querySelector(".summary");

    /*
    (mutation observer work three main steps)
    
    1. Making  a new MutationObserver Object
    2. Tell it what to observe
    3. what to do with the observerd changes/mutations.
    */
//    1.
    const observer = new MutationObserver(
        
        function(mutations1){
        mutations1.forEach(record =>{
            console.log(record);   
            
            
          })
         }
    
    );
//    2.
    observer.observe(myList,{
     subtree:true,
     attributes:true
    });
// stop observer:---
// observer.disconnect();
    // time
    setTimeout(()=>{
        myList.setAttribute('id','someRandomId');
        myList.firstElementChild.setAttribute('id','anotherId');
    });

}
// mutationObserver()
// mutationObserver1()
// mutationObserver2()
// mutationObserver3()
// mutationObserver4()



