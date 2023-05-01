// Protoype:---
 
let f =140;

Number.prototype.toCelcius = function(){
    return (this-32)*5/9;
}

console.log(f.toCelcius())
 

// file upload button:---

// target:----

const realFileBtn = document.getElementById('real-file');

const customBtn = document.getElementById('custom-btn');
const customText = document.getElementById('custom-text');

// add event on customFIleBtn
   
customBtn.addEventListener('click',function(){

    // virtually click

    
    realFileBtn.click();
    function hex() { 
        var hex1 = "#";
         var hex2 = "#";
         var hex3 = "#"
         const arr = [1,2,3,4,5,6,7,8,9,0,"a","b","c","d","e","f"];
         for(let i=0;i<6;i++){
             hex1 += arr[Math.floor(Math.random()*arr.length)]
             hex2 += arr[Math.floor(Math.random()*arr.length)]
             hex3 += arr[Math.floor(Math.random()*arr.length)]
         }
         function hexChild(){
             console.log(`${hex1},${hex2},${hex3}`);
             return`${hex1},${hex2},${hex3}`
         }
         return hexChild
     }
         setInterval(function(){
            var hexx = hex()
             document.body.style.backgroundImage = `linear-gradient(${parseInt(Math.random()*180)}deg,${hexx()})`;
 
         },1000)
    
   
})


// set file name to customtext

realFileBtn.addEventListener('click',function(){

  if(realFileBtn.value){ 
    const file = realFileBtn.value.split('\\');
    // console.log(file);
    customText.textContent = file[file.length-1]
}else{
    customText.innerHTML = "No file Choosen ,Yet"
}
    
})



