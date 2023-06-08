// How to use URL Objects (URL Interface) :----------
function urlInter(){
const myUrl = new URL('https://www.youtube.com/');
const myUrl2 = new URL(window.location.href);
const myUrl3 = new URL('http://youtube.local/assets/dcode.css');


myUrl.hostname ="www.google.com";

myUrl.searchParams.set("name","sarfraj abbasi");
myUrl.searchParams.set("age",45);

// url2
myUrl2.searchParams.set('name',"dogimon")

// url3
myUrl3.searchParams.set('nam',"lord");
myUrl3.searchParams.set('age',72);
// logs
console.log(myUrl);
console.log(myUrl2);
console.log(myUrl3);
console.log(myUrl2.searchParams.get('name'));

// fetchs:-----

fetch(myUrl3).then(response =>{
    return response.text()
}).then((text)=> console.log(text)).catch(err=>console.error(err))

// convert into href link
console.log(myUrl.toString());
console.log(myUrl2.toString());
console.log(myUrl3.toString());

}

//Return urlObject

// urlInter();


function childNodesProperty(){
    const myDiv = document.querySelector('#mydiv');
    const myDivChildNodes = myDiv.childNodes;

    console.log(myDivChildNodes);

    // modern browser
    for(const node of myDivChildNodes){
          console.log(node); 
    }
    for(let i=0;i< myDivChildNodes.length;i++){
          console.log(myDivChildNodes[i]); 
    }
}
// childNodesProperty()



// How to Handle Errors - Basics of Error Handling in JavaScript:------

function errHandleBasic(){

    function changeColorBgColor(element,color){
        element.style.backgroundColor = color
    }

    const myBox = document.getElementById('myBox')
     try{
         const val =  prompt("color kyu change kiya mera haramii 🥺");
         changeColorBgColor(myBox,"red");

         myBox.textContent = val
     }catch(e){
        // e have information about error
        alert('something went wrong,sorry about that ')
        console.dir(e);
     }finally{
        console.log('chala ja ');
     }



}
// errHandleBasic()


// How to use JSDoc :-----------


