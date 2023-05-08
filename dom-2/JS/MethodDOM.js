
const number = document.getElementById('number');
const btn = document.getElementById('btn')

number.addEventListener('numberChanged',function(e){
    number.textContent = e.detail.number;
    number.style.color = e.detail.textColor;
})

function numberChange(n,c){
    
    const event = new CustomEvent('numberChanged',{
        detail:{
            number:n,
            textColor:c
        }
    })
    // add the event to element
    number.dispatchEvent(event)
}

btn.addEventListener('click',function(){
    let color = [1,2,3,4,5,6,7,8,9,"a","b","c","d","f"];
    let hex = "#";
    let num = parseInt(Math.random()*100)
   
    for(let i=0;i<6;i++){
        hex+= color[parseInt(Math.random()*color.length)];
     
        
    }
   
    numberChange(num,hex)
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
alert(`How's it going?`)

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

// Learn XML HTTP Request in jS:------


