// Creating an AJAX File Upload Progress Bar in JavaScript :-----

const uploadForm = document.getElementById('uploadForm');
const inpFile = document.getElementById('inpFile');
const ProgressBarFill = document.querySelector('#progressBar > .progress-bar-fill');
const ProgressBarText = ProgressBarFill.querySelector('#progressBar > progress-bar-text');

uploadForm.addEventListener('submit',uploadFile)

function uploadFile(e){
    e.preventDefault();

    const xhr = new XMLHttpRequest();

    xhr.open('POST','upload.php');
    xhr.upload.addEventListener('progress',e =>{
        console.log(e);
    })
    xhr.setRequestHeader('Content-Type','Multipart/form-data');

    xhr.send(new FormData(uploadForm))
}



