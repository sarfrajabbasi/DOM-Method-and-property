
class HistoryObs {
    constructor(){
        this.colorHistory =[];
    }

    update(model){
        this.colorHistory.unshift(model.color.toUpperCase());
        let msg = 'the most recent 5 color is ';
        for(let i=0;i<5;i++){
            if(this.colorHistory[i]){

                msg+= this.colorHistory[i] +' '
            }
        }
        // console.log('%c%s',`background:${this.colorHistory[1]};font-size:15px;padding:10px;font-weight:bold`,msg);
    }
}