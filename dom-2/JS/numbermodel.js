 class NumberModel{
    constructor(){
        this.number =0;
        this.color = '';
        this.observers = []
    }

    addObserver(o){
        this.observers.push(o)
    }
    increment(){
        this.number++;
        let hex1 = "#";
        const arr = [1,2,3,4,5,6,7,8,9,"a","b","c","d","f"]
        for(let i=1;i<=6;i++){
            hex1+= arr[parseInt(Math.random()*arr.length)];
        }
        this.color = hex1
        // it notify  the observers
        this.notifyObserver();
    }
    notifyObserver(){
        for(let o of this.observers){
            // this == numberModel
            o.update(this)
        }
    }
 }