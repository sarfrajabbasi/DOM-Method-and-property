class ConsoleObs{
    constructor(){

    }
    update(model){
        console.log("%c%s",`background:${model.color};padding:10px;font-size:15px;font-weight:bold;`,`This is  Number ${model.number} and the hex-Color is ${model.color.toUpperCase()}`);
    }
}