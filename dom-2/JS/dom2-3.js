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
      if(property === "difficulty" && !["easy","medium","hard"].includes(value.toLowerCase())){
        throw new Error('difficulty is invalid ');
      }
    },

    has:(o,property)=>{
      if(property === "difficulty"){
        return false
      }
      return property in o
    }
  });

  gameSettingsProxy.difficulty = "easy";

console.log("difficulty" in gameSettingsProxy);


  console.log(gameSettingsProxy.difficulty);
}

// proxyObject();


// Detect OS dark or light mode with css and JS:--------


function detectOSDarkorLightMode(){
 console.log( window.matchMedia('prefers-color-scheme : dark').matches);
}

// detectOSDarkorLightMode()



// Detecting Screen Size and OS Dark Mode with matchMedia():-------

function matchMedia1(){
  // const matchResult = window.matchMedia('max-width:767px');
  const matchResult = window.matchMedia('prefers-color-scheme:dark')

  // console.log(matchResult);

  function isSmallScreen(){
  //  return matchResult('max-width:767px').matches
   console.log( matchResult.matches);
  }

  isSmallScreen()

}
// matchMedia1();

// Page Visibility API in JS:--------

function visibility(){
  document.addEventListener('visibilitychange',function(){
    document.title = document.visibilityState;
    console.log(document.visibilityState);
    const h1 = document.createElement('h1');
    h1.textContent = document.visibilityState;
    h1.style.color = "red"
    // document.body.appendChild(h1);
    console.log(document.hidden);
  
  });

}

visibility()

function toggleAttri(){
   const myInput = document.getElementById('myTextInput');
   myInput.toggleAttribute('disabled',2 > 1)
  

}

// Detect DOM Changes with The Intersection Observer API:----


//  boxInterObs
function interSectionObserver(){
  
  const box = document.getElementById('boxInterObs');
  const callbackFunction = function(entries){
    
    console.log(entries[0]);

  }
  const observer = new IntersectionObserver(callbackFunction,{
    threshold:0.4
  })
  observer.observe(box)
} 

