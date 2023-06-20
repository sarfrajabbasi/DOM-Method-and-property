// How to use URL Objects (URL Interface) :----------
function urlInter() {
  const myUrl = new URL("https://www.youtube.com/");
  const myUrl2 = new URL(window.location.href);
  const myUrl3 = new URL("../CSS/style4.css");

  myUrl.hostname = "www.google.com";

  myUrl.searchParams.set("name", "sarfraj abbasi");
  myUrl.searchParams.set("age", 45);

  // url2
  myUrl2.searchParams.set("name", "dogimon");

  // url3
  myUrl3.searchParams.set("nam", "lord");
  myUrl3.searchParams.set("age", 72);
  // logs
  console.log(myUrl);
  console.log(myUrl2);
  console.log(myUrl3);
  console.log(myUrl2.searchParams.get("name"));

  // fetchs:-----

  fetch(myUrl3)
    .then((response) => {
      return response.text();
    })
    .then((text) => console.log(text))
    .catch((err) => console.error(err));

  // convert into href link
  console.log(myUrl.toString());
  console.log(myUrl2.toString());
  console.log(myUrl3.toString());
}

//Return urlObject

// urlInter();

function childNodesProperty() {
  const myDiv = document.querySelector("#mydiv");
  const myDivChildNodes = myDiv.childNodes;

  console.log(myDivChildNodes);

  // modern browser
  for (const node of myDivChildNodes) {
    console.log(node);
  }
  for (let i = 0; i < myDivChildNodes.length; i++) {
    console.log(myDivChildNodes[i]);
  }
}
// childNodesProperty()

// How to Handle Errors - Basics of Error Handling in JavaScript:------

function errHandleBasic() {
  function changeColorBgColor(element, color) {
    element.style.backgroundColor = color;
  }

  const myBox = document.getElementById("myBox");
  try {
    const val = prompt("color kyu change kiya mera haramii 🥺");
    changeColorBgColor(myBox, "red");

    myBox.textContent = val;
  } catch (e) {
    // e have information about error
    alert("something went wrong,sorry about that ");
    console.dir(e);
  } finally {
    // console.log('chala ja ');
  }
}
// errHandleBasic()

// How to use JSDoc :-----------

function jsDoc() {
  /**
   * This function will accept details about a person
   * and create an  object for then.
   *
   * @param {string} name The person's full name
   * @param {number} age  The person's age
   * @param {Boolean} isDeveloper  Whether or not the person is a developer
   * @returns {Obejct} -- The Person Obejct
   */

  function createPerson(name, age, isDeveloper) {
    return {
      name: name,
      age: age,
      isDeveloper: isDeveloper,
    };
  }
  createPerson();

  class Person {
    /**
     * Crate a Person
     *
     * @param {string} name The person's full name
     * @param {number} age  The person's age
     * @param {Boolean} isDeveloper  Whether or not the person is a developer
     * @returns {Obejct} -- The Person Obejct
     */

    constructor(name, age, isDeveloper) {
      this.name = name;
      this.age = age;
      this.isDeveloper = isDeveloper;
    }
  }
  /**
   * Outputs details about a person
   * @param {Person} person
   */

  function printDetails(person) {
    console.log(
      `${person.name} is ${person.age} years old and is ${
        person.isDeveloper ? "" : "Not"
      } a developer.`
    );
  }

  /**
   * Gives you numbers
   *
   * @returns {number[]}
   */
  function getNumbers() {
    return [10, 20, 40, 50];
  }

  const numbers = getNumbers();

  for (const n of numbers) {
    console.log(n);
  }
}

// How to Show Desktop Notifications - JavaScript Notification API :------

function notification() {
  // deafult,granted,denied(3 possible value);

  console.log(Notification.permission);

  if (Notification.permission === "granted") {
    showNewNotification();
  } else if (Notification.permission !== "denied") {
    Notification.requestPermission().then((permission) => {
      if (permission === "granted") {
        showNewNotification();
      }
    });
  }

  function showNewNotification() {
    const notification = new Notification("message from BrotherHood", {
      body: "hey mate, how are ya? You want to catch up soon?",
      // add icons to massage
      icon: "../assets/favicon.ico",
    });
    // notfication on click
    notification.onclick = (e) => {
      window.location.href = "https://google.com";
    };
  }
}
// notification()

// How to enter Full-Screen Mode with JavaScript - Fullscreen API

function getFullScreenElement() {
  return (
    document.fullscreenElement ||
    document.webkitFullscreenElement ||
    document.mozFullscreenElement ||
    document.msFullscreenElement
  );
}

function fullScreenApi() {
  function toggleFullscreen() {
    // if exist then out
    if (getFullScreenElement()) {
      // call this for out
      document.exitFullscreen();
    } else {
      document
        .querySelector("#myBox")
        .requestFullscreen()
        .then(() => {
          console.log("yes woking");
        })
        .catch(console.log);
    }
  }
  // it covert the document into full screen,and it return promises
  document.addEventListener("dblclick", function () {
    toggleFullscreen();
  });
  // make element in the full screen mode

  // add event fullscreenchange:--- fire off when get a change in the full-screen state.

  document.addEventListener("fullscreenchange", () => {
    console.log("full-screen changed ");
  });
}

// fullScreenApi()

// How to use Proxy Object:---

function proxyObject() {
  const gameSettings = {};

  const gameSettingsProxy = new Proxy(gameSettings, {
    get: (o, property) => {
      // console.log(o);
      // console.log(property);
      // return "gameset";
      // if the property exist then show the property otherwise default property.

      return property in o ? o[property] : "sarfraj";
    },
    set: (o, property, value) => {
      if (
        property === "difficulty" &&
        !["easy", "medium", "hard"].includes(value.toLowerCase())
      ) {
        throw new Error("difficulty is invalid ");
      }
    },

    has: (o, property) => {
      if (property === "difficulty") {
        return false;
      }
      return property in o;
    },
  });

  gameSettingsProxy.difficulty = "easy";

  console.log("difficulty" in gameSettingsProxy);

  console.log(gameSettingsProxy.difficulty);
}

// proxyObject();

// Detect OS dark or light mode with css and JS:--------

function detectOSDarkorLightMode() {
  console.log(window.matchMedia("prefers-color-scheme : dark").matches);
}

// detectOSDarkorLightMode()

// Detecting Screen Size and OS Dark Mode with matchMedia():-------

function matchMedia1() {
  // const matchResult = window.matchMedia('max-width:767px');
  const matchResult = window.matchMedia("prefers-color-scheme:dark");

  // console.log(matchResult);

  function isSmallScreen() {
    //  return matchResult('max-width:767px').matches
    console.log(matchResult.matches);
  }

  isSmallScreen();
}
// matchMedia1();

// Page Visibility API in JS:--------

function visibility() {
  document.addEventListener("visibilitychange", function () {
    document.title = document.visibilityState;
    console.log(document.visibilityState);
    const h1 = document.createElement("h1");
    h1.textContent = document.visibilityState;
    h1.style.color = "red";
    // document.body.appendChild(h1);
    console.log(document.hidden);
  });
}

visibility();

function toggleAttri() {
  const myInput = document.getElementById("myTextInput");
  myInput.toggleAttribute("disabled", 2 > 1);
}

// Detect DOM Changes with The Intersection Observer API:----

//  #boxInterObs .containerIterSect
function interSectionObserver() {
  const box = document.getElementById("boxInterObs");
  const container = document.querySelector(".containerIterSect");

  const callbackFunction = function (entries) {
    console.log(entries[0]);
    // if(entries[0].isIntersecting){
    //   console.log(entries[0].intersectionRatio);
    // }
  };

  const observer = new IntersectionObserver(callbackFunction, {
    // threshold:[0.2,0.5,0.8],
    // root:container,
    threshold: 0.2,
    rootMargin: "15px",
  });

  observer.observe(box);
  // observer.unobserve(box)
  observer.disconnect(box);
}

interSectionObserver();

function perpendDing() {
  /**
   *
   * @param {string} el Element that need to create
   * @param {string} text Text that insert on the element
   * @param {string} bg The background of the created element
   * @param {string} color Text color of the created element
   * @param {string} border Border of the created element
   * @param {string} borderRadius Border radius of the created element
   * @returns {HTMLElement} return the created element
   */

  function createEl(
    el,
    text = "no text",
    bg = "black",
    color = "white",
    border = "2px solid red",
    borderRadius = "2px"
  ) {
    const element = document.createElement(el);

    element.textContent = text;
    element.style.background = bg;
    element.style.color = color;
    element.style.border = border;
    element.style.borderRadius = borderRadius;

    return element;
  }

  const container = document.getElementById("conatiner01");

  const em = createEl("em");
  const strong = createEl("strong", "helloWorld");
  const span = createEl(
    "span",
    "oh oh oh isque tera tadpaye",
    "red",
    "white",
    "2px solid black",
    "10px"
  );

  /**
   *
   * @param {element} parent The element we target for prepending
   * @param {element} child The element that is insert into the target element
   */
  function prePending(parent, ...child) {
    parent.prepend(...child);
  }
  prePending(container, em, span, strong, "phone");
}
// perpendDing()

// isEqualNode() method:-----

function isEqualNode() {
  const div1 = document.querySelectorAll(".test")[0];
  const div2 = document.querySelectorAll(".test")[1];
  console.log(div1.childNodes, div2.childNodes);
  const isEqual = div1.isEqualNode(div2);
  console.log(isEqual);
}
// isEqualNode()

// Dynamic Imports:------
function dynamicImp() {
  // export default function multiply(number,multiplier){
  //   return number * multiplier;
  // }
}

dynamicImp();

// window.scrollTo():---------

function windowScrollTo() {
  window.scrollTo({
    top: 200,
    left: 500,
    behavior: "smooth",
  });
}

windowScrollTo();

// elementFromPoint:----

function elementFromPointA() {
  let pos1;

  document.addEventListener("mousemove", ({ pageX, pageY }) => {
    pos1 = document.elementsFromPoint(pageX, pageY);
    pos1 = document.elementFromPoint(pageX, pageY);
  });
}

// elementFromPointA();

// rewriting JS form 8y Ago.
/**
 *
 * @param {number} chatRoomID Indetifies a chat room on the server-side
 * @returns {Promise<string>}
 */

function fetchMessages(chatRoomID) {
  return fetch(
    `php/fetch_message.php?chatRoomID=${encodeURIComponent(chatRoomID)}`
  ).then((res) => {
    return res.text();
  });
}

// fetchMessages(15).then(html =>{
//   document.querySelector('message_Container').innerHTML = html })

// Using the setSelectionRange() Method:------

function setSelectRange() {
  const input = document.querySelector("#renameFile");
  input.addEventListener("focus", function () {
    this.setSelectionRange(0, this.value.lastIndexOf("."));
  });
}

// setSelectRange()

// Using the String.replace() Method:--------

function Strreplace() {
  const myStr = "Hey, I'm 23 and she's 32";
  // console.log(myStr.replace(/(\d+)([^\d]+)(\d+)/g,"$3$2$1 $$"));
  console.log(
    myStr.replace(/(\d+)([^\d]+)(\d+)/g, function (match, g1, g2, g3) {
      console.log(arguments);
      // return "sarfraj"
      return parseInt(g1) + parseInt(g3);
    })
  );
}

// Strreplace()

// How to use the Drag and Drop API :----------

function dragAndDropApi() {
  const draggableElement = document.querySelector("#myDraggableElement");

  // when draggable element is dropped onto drop zone
  draggableElement.addEventListener("dragstart", function (e) {
    console.log(e);

    e.dataTransfer.setData("text/plain", draggableElement.id);

    for (const dropZone of document.querySelectorAll(".drop-zone")) {
      // when draggable element is dropped onto drop zone
      dropZone.addEventListener("dragover", (e) => {
        e.preventDefault();

        dropZone.classList.add("drop-zone--over");
      });

      // when draggable element is dropped onto drop zone
      dropZone.addEventListener("dragleave", function (e) {
        dropZone.classList.remove("drop-zone--over");
      });

      // when draggable element is dropped onto drop zone
      dropZone.addEventListener("drop", (e) => {
        e.preventDefault();

        const droppedElementId = e.dataTransfer.getData("text/plain");

        document.getElementById("myFileInput").files = e.dataTransfer.files;

        console.log(droppedElementId);

        const droppedElement = document.getElementById(droppedElementId);

        dropZone.appendChild(droppedElement);

        dropZone.classList.remove("drop-zone--over");
      });
    }
  });
}

// dragAndDropApi()

// History API:------

function historyApi() {
  console.log(history.length);
  history.back(1);
  history.forward(1);
  history.go(-2);
  // history.pushState(null,null,"about");
  // history.replaceState(15,null,"settings");
  // history.pushState(40,null,"about");
  function loadAbout() {
    const h1 = document.createElement("h1");
    h1.textContent = "I am the about contents";
    document.body.append(h1);
    window.addEventListener("popstate", (e) => {
      console.log(e);
    });
  }
  loadAbout();
}

// historyApi()

function asyncAwait() {
  async function loadUsers() {
    // const response = await fetch('../other/user.json');

    // const user = await response.json();

    // return user
    return (await fetch("../other/user.json")).json();
  }

  document.addEventListener("DOMContentLoaded", async function () {
    let user = [];

    try {
      user = await loadUsers();
    } catch (e) {
      console.log("Error!");
      console.log(e);
    }
    console.log(user);
  });
}

//  asyncAwait();

function pasteFilesFormClipboard() {
  window.addEventListener("paste", (e) => {
    if (e.clipboardData.files) {
      const inputFiles = document.querySelector("#myFile");
      inputFiles.files = e.clipboardData.files;
      if (e.clipboardData.files[0].type.startsWith("image/")) {
        setPrivewImage(e.clipboardData.files[0]);
      }
    }
  });

  function setPrivewImage(file) {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);

    fileReader.onload = () => {
      document.querySelector("#ImagePreview").src = fileReader.result;
    };
  }
}

// pasteFilesFormClipboard();

function Events() {
  // console.log(this);

  function handleBox() {
    console.log(this);
    // alert('you click on the box')
  }
  // handleBox()

  const boxEvent = document.querySelector("#boxEvent");

  boxEvent.addEventListener("click", function (e) {
    // handleBox()
    // console.log(e);
    console.log(this);
  });
  boxEvent.addEventListener("mouseover", (e) => {
    // handleBox()
    // console.log(e);
    console.log(this);
  });
}

// Events()

function focusAndBlur() {
  const nameInp = document.getElementById("nameInput");
  nameInp.addEventListener("focus", (e) => {
    alert("this element has focus ");
  });
}
// focusAndBlur()

// Build a User Avatar Image generator :-----

function avataImgGene() {
  function generateAvatar(
    text,
    forgroundColor = "white",
    backgroundColor = "black"
  ) {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    canvas.style.marginTop = "50px";
    canvas.width = 200;
    canvas.height = 200;

    // Draw background
    context.fillStyle = backgroundColor;
    context.fillRect(0, 0, canvas.width, canvas.height);

    // Draw text

    context.font = "bold 30px Assistent";
    context.fillStyle = forgroundColor;
    context.textAlign = "center";
    context.textBaseline = "middle";

    context.fillText(text, canvas.width / 2, canvas.height / 2);

    return canvas.toDataURL("image/png");
  }

  document.getElementById("avatar").src = generateAvatar(
    "Sarfraj Abbasi",
    "white",
    "#001578"
  );
}

// avataImgGene()

// Displaying Dates in JS:---------

function displayingDates() {
  /**
   *
   * @param {Date} dateObj
   * @returns
   */
  function forMateDate(dateObj) {
    const parts = {
      date: dateObj.getDate(),
      month: dateObj.getMonth() + 1,
      year: dateObj.getFullYear(),
      hour: dateObj.getHours() %12 || 12,
      minute:dateObj.getMinutes().toString().padStart(2,"0"),
      AmOrPm: dateObj.getHours() < 12? "AM":"PM"
    };
    console.log(parts);

    return `${parts.date}/${parts.month}/${parts.year} ${parts.hour}:${parts.minute} ${parts.AmOrPm}`;
  }
  const myDate = new Date();
  // const myDate = new Date("2023-06-17 2:04");
  const myDateFormatted = forMateDate(myDate);
  console.log(myDateFormatted);
}

// displayingDates();


// How to detect Click and Hold Events:---

function detectClickAndHold(){
  class ClickAndHold{
    /**
     * 
     * @param {EventTarget} target The HTML element to apply the event to 
     * @param {Function} callback The function to run once the target is clicked and hold
     */
    constructor(target,callback){
      this.target = target;
      this.callback = callback;
      this.isheld = false;
      this.activeHoldTimeoutId = null;
      ["mousedown","touchStart"].forEach(type =>{
        this.target.addEventListener(type,this._onHoldStart.bind(this))
      })
      
      ["mouseup","touchend","mouseleave","mouseout","touchcancel"].forEach(type =>{
        this.target.addEventListener(type,this._onHoldEnd.bind(this))
      })


    }
    _onHoldStart(){
      this.isheld = true
      this.activeHoldTimeoutId = setTimeout(()=>{
        if(this.isheld){
          this.callback();
        }
      },1000)
    }
    _onHoldEnd(){
      this.isheld = true;
      clearTimeout(this.activeHoldTimeoutId)
    }
    /**
     * 
     * @param {EventTarget} target  The HTML element to apply the event to
     * @param {Function} callback The function to run once the target is clicked and held
     */
    static apply(target,callback){
      new ClickAndHold(target,callback)
    }
  }

  const myButton = document.getElementById('mybtn1');
  ClickAndHold.apply(myButton,()=>{
    alert('click and hold')
  })
}
// detectClickAndHold()



// How to Use JSON:------

function UseJson(){
const car ={

  make:'Honda',
  model:'Civic',

}
const car2 = ["Honda","Madza","Ford"];

  const meJson = {
    name:"sarfraj",
    age:35,
    graduated:true,
    favoriteColors:[
      "blue",
      "Green"
    ],
  }
  // stringify
const jsonString = JSON.stringify(meJson)
const carJson = JSON.stringify(car)

// Parse
const me = JSON.parse(jsonString);
const carobj = JSON.parse(carJson);

console.log(me);
console.log(carobj);

};

// UseJson();

// Using the Geolocation API:-----------

function geolocation(){

  const successCallback = (position) =>{

    console.log(position);

  };
  
  const errorCallback = (error) =>{

    console.log(error);
    
  };

const watchId = navigator.geolocation.watchPosition(successCallback,errorCallback);

navigator.geolocation.getCurrentPosition(successCallback,errorCallback,{
  enableHighAccuracy:true,
  timeout:5000,

});
// navigator.geolocation.clearWatch(watchId);

};

// geolocation();


// fetch API in JS for AJAX Developers:----

function fetchApiAjax(){

 function xhrthing(){
  const xhr = new XMLHttpRequest();

  if(xhr.readyState === 4 && xhr.status === 20){
    const user = JSON.parse(xhr.responseText);
    xhr.open('GET','../other/user.json',true);
    xhr.send();
    console.log(user);
  }
 }
//  xhrthing()

 function fetchApi(){

  fetch('../other/user.json').then(response =>{

    return response.json().then(user =>{
      console.log(user);
      return user;
    }).catch(e =>{
      console.log(e);
    });
  })
 }

//  fetchApi()

async function fetchAwait(){
  // wait
const res = await fetch('../other/user.json')
const user  = await res.json();

console.log(user);

 }

 fetchAwait()

}
// fetchApiAjax()


// How to Send GraphQL Requests with Fetch API:----

function showGraphQLData(){
  const query  =`
  query($nameStartWith:String){
    user(nameStartWith:$namestarts){
      id,
      firstName,
      lastName,
      city,

    }
  }`;

  fetch('http://localhost:4000/graphql',{
    method:"POST",
    headers:{
      "Content-Type":"application/json",
      "Accept":"application/json",
    },
    body:JSON.stringify({
      query,
      variables:{
        nameStartsWith:"s"
      }
    
  })}).then(res =>{
    return res.json();
  }).then(data =>{
    console.log(data);
  }).catch(e =>{
    console.log(e);
  })
}



// what does e mean in js:----

function eventJS(){
  const myBtn =document.getElementById('myBtn1')
  myBtn.addEventListener('click',function(e){
    const ctrlKeys = e.ctrlKey ? "CTRL key was pressed while clicking.":"CTRl key not press";
    console.log(ctrlKeys);
  })
}
// eventJS()

