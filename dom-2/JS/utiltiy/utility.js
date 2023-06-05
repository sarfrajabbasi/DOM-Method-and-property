export default function sayName(){
    console.log('Uncle: Say my name');
    console.log('Baby : ma tele maaph ka nokhal nahi huu');
}

function double(n){
    return n*2;

   }

 const name = "sarfraj";
 export {name,double}

// making this water an export of this utils.js  and the water is coming form the helper.js
 export {water} from '../utiltiy/helper.js'