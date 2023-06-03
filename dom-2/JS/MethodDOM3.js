// Creating an AJAX File Upload Progress Bar in JavaScript :-----

const uploadForm = document.getElementById('uploadForm');
const inpFile = document.getElementById('inpFile');
const ProgressBarFill = document.querySelector('#progressBar > .progress-bar-fill');
const ProgressBarText = ProgressBarFill.querySelector('.progress-bar-text');clear

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
        console.log(file.name);
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
       console.error('404 Error'); 
    }
    console.log(xhr.responseText); 

    console.log(xhr);
}).catch(function(err){
    console.error(err);
})


// Getting CSS Styles with JavaScript - getComputedStyle() function:-------

const para = document.getElementById('csText');
const box = document.getElementById('box')

const csBox = window.getComputedStyle(box);
const csPara = window.getComputedStyle(para);
const csBoxAfter = window.getComputedStyle(box,'::after');
console.log(csBoxAfter.backgroundColor);
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
    console.log('box  has move  all the way!');
})


// Chaining Fetch Requests in JavaScript - Promise Chain Example:----

