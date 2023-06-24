// Enable hidden nav bar

function navBar() {
  const nav = document.querySelector(".nav");

  let lastScrollY = window.scrollY;

  window.addEventListener("scroll", () => {
    if (lastScrollY < window.scrollY) {
      nav.classList.add("nav--hidden");
    } else {
      nav.classList.remove("nav--hidden");
    }

    lastScrollY = window.scrollY;
  });
}

// navBar()

// What's the Difference Between the Input and Change Event in JavaScript?

function inputEvent() {
  const inputEvent = document.getElementById("inputEvent");

  // inputEvent.addEventListener('input',(e)=>{
  //     console.log('INP UT');
  // });
  inputEvent.addEventListener("change", (e) => {
    console.log("change");
  });
}
// inputEvent()

//  Add KEYBOARD SHORTCUTS to Your Website with JavaScript:-----

function keyBoardShort() {
  document.addEventListener("keydown", (e) => {
    // prevent the deafult behavior
    e.preventDefault();

    if (e.key.toLocaleLowerCase() === "u" && e.ctrlKey) {
      alert("Hey boss good morning!");
    }
  });
}

// keyBoardShort()

// Two-Way Data Binding with JavaScript (NO FRAMEWORKS!):--

function dataBinding() {
  const formObject = {};
  const nameInp = document.getElementById("inputEvent");

  Object.defineProperty(formObject, "name", {
    get() {
      // return Math.random();
      return nameInp.value;
    },
    set(newValue) {
      nameInp.value = newValue;
    },
  });
  console.log(formObject.name);
}

// dataBinding();

// Extending Built-In Data Types with JavaScript:--------

function extendBuiltInDataTypes() {
  class ObservableArray extends Array {
    constructor(onpush, ...elements) {
      super(...elements);
      this.onpush = onpush;

      this.onpush?.(this);
    }

    push(...elements) {
      super.push(...elements);
      // the item gonna push on this
      this.onpush?.(this);
    }
  }

  const onPush = (array) => {
    const myList = document.getElementById("myList");
    myList.innerHTML = "";

    for (const name of array) {
      myList.insertAdjacentHTML("beforeend", `<li>${name}</li>`);
    }
  };
  const obervableArr = new ObservableArray(
    onPush,
    "lords",
    "greek",
    "gold",
    "goli",
    "tapu"
  );

  console.log(obervableArr);
}

//  extendBuiltInDataTypes();

// How to Easily Call APIs With Fetch and Async/Await in JavaScript:--

async function getUserCountry() {
  const username = document.getElementById("usernameGet").value;

  if (!username) {
    alert("Please enter a username.");
    return;
  }

  const endPoint = new URL(`http://localhost:3000/users/${username}/country`);
  endPoint.searchParams.set("token", "YOUR_TOKEN_HERE");
  console.log(endPoint.toString());

  const response = await fetch(endPoint, {
    headers: {
      Authorization: "YOUR_TOKEN_HERE",
    },
  });

  if (response.status === 404) {
    alert("Username not found.");
    return;
  }
  console.log(response);

  const data = await response.json();

  alert(data);
}

// The Best Way to Create HTML Elements with JavaScript:--

function createHtmlEl() {
  function elemet(html) {
    const template = document.createElement("template");

    template.innerHTML = html.trim();
    return template.content.firstElementChild;
  }
  const myElement = elemet(`
  <ul>
  <li>hello</li>
  <li>how</li>
  <li>are</li>
  <li>you</li>
  <li>!</li>
  </ul>
  `);

  document.body.appendChild(myElement);
}

// createHtmlEl()

// The best way to enable css animations with js:---

function enableCssAnime() {
  const square = document.querySelector(".square");

  const circle = document.querySelector(".circle");

  const btnHideSquare = document.querySelector(".btn-hide-square");

  const btnPulseCircle = document.querySelector(".btn-pulse-circle");

  btnHideSquare.addEventListener("click", function () {
    square.classList.toggle("hidden");
  });

  btnPulseCircle.addEventListener("click", function () {
    circle.classList.toggle("pulse");
  });
}

// enableCssAnime()

// How to Draw Text on HTML5 Canvas Using JavaScript:--------

/**
 *
 * @type HTMLCanvasElement
 */
function drawText() {
  const canvas1 = document.getElementById("canvas1");
  const ctx = canvas1.getContext("2d");

  // Simple form of text rendering

  ctx.fillStyle = "#009578";
  ctx.font = "bold 24px sans-serif";
  ctx.fillText("Hello,sarfraj", 100, 150);

  // stoke text (outline)
  ctx.strokeStyle = "red";
  ctx.font = "bold 24px sans-serif";
  ctx.strokeText("Hello,sarfraj", 100, 150);

  // Drawing text in the center of the canvas:-
  ctx.fillStyle = "blue";
  ctx.font = "bold 34px sans-serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("Hello,sarfraj", canvas1.width / 2, canvas1.height / 2);
}

// drawText()

// The BEST JavaScript DOM Manipulation Methods?:--

function domManipulationMethods() {
  // after

  const fruits = document.getElementById("fruits");

  const banana = document.getElementById("banana");

  function createLi(text) {
    const li = document.createElement("li");
    li.textContent = text;
    return li;
  }
  const liList = [createLi("grapes"), createLi("bun")];

  //childs:--------------
  // after
  banana.after(...liList, "heloword");
  //  before:---
  banana.before(...liList, "heloword");

  // replaceWith
  banana.replaceWith(...liList);

  //parent:--------------
  // append
  banana.append(...liList, "heloword");

  // prepend
  banana.prepend(...liList, "heloword");
}

// domManipulationMethods()

// how to convert Images Into base 64 data URL's with js:----

function imageBase64() {
  const fileInp = document.getElementById("inpFiles");

  fileInp.addEventListener("change", (e) => {
    const file = fileInp.files[0];

    const reader = new FileReader();

    reader.addEventListener("load", () => {
      console.log(reader.result);
    });

    reader.readAsDataURL(file);
  });
}
// imageBase64()



// Detect landScape or Portrait mode with Js:---

function JSlandScapeOrPortrait(){

    // const portrait = window.matchMedia("(orientation: portrait)").matches;
    const portrait = window.matchMedia("(orientation: portrait)").addEventListener('change',e =>{
        const portrait = e.matches;
        if(portrait){
            alert('you are in portrait')
        }else{
            alert('you are in landScape')
        }
    });

    console.log(portrait);
}

// JSlandScapeOrPortrait()


// How to Detect User Input with JavaScript:-----

function detectUserInput(){
  const inputField = document.getElementById('inputField');

  // onInput:---
  inputField.addEventListener('input',function(){
  //  console.log(inputField.value);
  });

  // onChange:---
  inputField.addEventListener('change',function(){
    // console.log(inputField.value);
  });

  // onkeyDown:---
   inputField.addEventListener('keydown',function(e){
    // console.log(inputField.value = e.key);
   })


   // onkeyUp:---
   inputField.addEventListener('keyup',function(e){
    console.log(inputField.value = e.key);
   })


}

// detectUserInput()


// The Easiest Way to Export to CSV File in JavaScript:---

function exportCsv(){

  const data = [
    {
      id:"aa104",
      username:"cp39",
      age:21
    },
    {
      id:"af145",
      username:"snake23",
      age:34
    },
    {
      id:"ed1s4",
      username:"smp34",
      age:54
    },
    {
      id:"ya1i4",
      username:"lord234",
      age:31
    },
  ]

  // const csvData = json2csv.parser(data,{
  //   headers:false,

  // });

  const btnDownloadCsv = document.getElementById('btnDownloadCsv');

  btnDownloadCsv.addEventListener('click',function(){
    downloadCsv('dcode-test.csv',json2csv.parser(data))
  })
  function downloadCsv(){
    const element = document.createElement('a');

    element.setAttribute('href',`data:text/csv;charset=utf-8,${csvData}`);
    element.setAttribute('download',filename);
    element.style.display = "none";
    document.body.appendChild(element);
    element.click()
  }

  console.log(csvData);

}

// exportCsv()


// Easily Add a Download Button to your WebSites-HTML,CSS & JS:-----

function downloadBtn(){
// myImage,button2

const downloadLinks = document.querySelectorAll('[data-download');

downloadLinks.forEach(button =>{
  const id = button.dataset.download;
  const image= document.getElementById(id);
  const a = document.createElement('a');
  a.href = image.src;
  a.download = "";
  a.style.display = "none";

  button.addEventListener('click',()=>{
    document.body.appendChild(a);
    a.click();
    document.body.remoteChild(a);

  })
})

}

// downloadBtn();


// The Easiest way to parse XML with JS:---

function parseXMlWithJS() {

const xmlString = `
<tutorials>
<tutorial>
<id>b59Agn4rtu0c</id>
<title>hello i am Chinese Murggi Kutta Chor</title>
</tutorial>
<tutorial>
<id>45hgdF48Sjadc</id>
<title>african don't like american but american like african it that true</title>
</tutorial>
</tutorials>`

fetch('tutorila.html').then(res=>{
  return res.text()
}).then(xmlString =>{
const xmlDocument = new DOMParser().parseFromString(xmlString,"text/xml");

const tutorials = xmlDocument.querySelectorAll('tutorial');

for(const tut of tutorials){
  console.log(tut.firstElementChild)
}

});

}

// parseXMlWithJS()


// 