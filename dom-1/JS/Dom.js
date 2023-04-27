class Progress{
    constructor(element,initialValue=0){
        this.valueElem = element.querySelector(".progress-bar-value");

        this.fillElem = element.querySelector(".progress-bar-fill")
         this.setValue(initialValue)
        console.log(this.valueElem);
        console.log(this.fillElem);
    }

    setValue(newValue){
        if(newValue <0){
            newValue = 0
        }
        if(newValue >100){
            newValue = 100
        }

        this.value = newValue;
        this.update();
    }


    update(){
        let percentage = this.value + "%";
        this.fillElem.style.width = percentage;
        this.valueElem.textContent = percentage;
        const bar = document.querySelector(".progress-bar-fill")
        setInterval(function(){
            var r = Math.floor(Math.random()*100);
            var g = Math.floor(Math.random()*255);
            var b = Math.floor(Math.random()*255);
            bar.style.backgroundColor = `rgb(${r},${g},${b})`
            // bar.style.width = `${r+1}%`
            // bar.style.height = `${r+1}%`
        },1000)

    }
}

const pb1 = new Progress(document.querySelector(".progress-bar"),10)

const btn1 = document.getElementById("btn-i")
const btn2 = document.getElementById("btn-d");
console.log(btn1);
console.log(btn2);

var num = 0;
btn1.addEventListener("click",function(){
    pb1.setValue(num+=5)
})
btn2.addEventListener("click",function(){
    pb1.setValue(num-=5)
})