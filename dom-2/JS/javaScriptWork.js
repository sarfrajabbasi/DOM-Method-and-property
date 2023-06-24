// How to Create Singleton Classes in JavaScript - Design Patterns :---------

class Settings {
  constructor() {
    // if instance already created and all the code in the class already run then,so we are simply return this instance for created for the constructor.
    // on first time it will be false of undeifned,null etc,but second time after the code run then it will be true.and retrun Settings.insatance.
    if (Settings.instance instanceof Settings) {
      return Settings.instance;
    }
    this.SettingsObject = {
      background: "#000fff",
      version: parseInt(Math.random() * 4000),
    };

    Object.freeze(this.SettingsObject);

    // for freez settings class,so people can't modify instance we create.(adding and changing)
    Object.freeze(this);
    // this app lying to settings class not the instance that just you create.this is the key that our singleton work
    Settings.instance = this;
  }

  get(key) {
    return this.SettingsObject[key];
  }
}

// How to protect JavaScript Objects with Object.seal():-----

function objSeal() {
  // use the strict mode so  anyone can't modify the property
  "use strict";

  const o = {
    name: "Sarfraj",
    age: 45,
  };

  Object.seal(o);
  o.name = "abbasi";

  //add
  o.occupation = "New Developer";

  console.log(Object.isSealed(o));
  //  remove
  delete o.name;

  console.log(o);
}

// objSeal();

// Create Arrays From Objects With Array.from():----

function arrFrom() {
  function dummy() {
    const arr = Array.from(arguments);
    console.log(arr);
  }

  dummy(1, 2, "sarfraj", { name: "rollroyan" });

  // nodeList:--

  const elements = document.querySelectorAll("*");
  console.log(elements);
  const elArr = Array.from(elements);
  console.log(elArr);

  // strings and map:----

  const name = "sarfrajAbbasi";
  const strArr = Array.from(name, (char) => char.toUpperCase());

  console.log(strArr);

  // sets:---

  const mySet = new Set();

  mySet.add({ name: "sarfraj" });

  // make shallow copy
  const setArr = Array.from(mySet);
  setArr[0].name = "biyanka";

  for (const value of mySet.values()) {
    console.log(value);
  }
}

// arrFrom()

// data.json,people.json

// Async Functions & Await:--------

function asyncAwait() {
  // normal way
  async function getData(name) {
    const res = await fetch(`../other/${name}.json`);
    const data = await response.json();

    // return fetch(`../other/${name}.json`).then(res =>{
    //     // throw new Error('something bad happened!')
    //     // return res.json()

    // });
    return data;
  }
  Promise.all([
    getData("data"),
    getData("people"),
    getData("user"),
    getData("obj"),
  ]).then((res) => {
    console.log(res);
  });
  // async
  async function getAllData() {
    try {
      const data = await getData("data");
      const people = await getData("people");
      const user = await getData("user");
      const obj = await getData("obj");
      console.log(data, people, user, obj);
    } catch (err) {
      console.log(err);
      console.log("Handled!");
    }
  }
  getAllData();
  // getAllData().catch(err =>{
  //     console.log(err);
  // })
}
// asyncAwait()

// Nullish Coalescing Operator(??):-----
function nullishCoalescing() {
  function getUserDefinedSettings() {
    return {
      diffculty: "easy",
      // startingCash:undefined
      // startingCash:null
    };
  }

  const cash = getUserDefinedSettings().startingCash ?? 500;
  const cash1 =
    getUserDefinedSettings().startingCash === undefined
      ? 500
      : getUserDefinedSettings().startingCash;

  console.log(cash);
  console.log(cash1);
}
// nullishCoalescing();

function ObjectSpread() {
  const user = {
    name: "sarfraj",
    age: 23,
  };

  const copied = { ...user, age: 60, occupation: "web developer" };
  const copied2 = Object.assign({}, copied, {
    name: "chota chetan",

    age: 6,
    occupation: "Don",
  });
  const { name, ...other } = copied2;
  console.log(name);
  console.log(other);
  console.log(copied);
  console.log(copied2);
}
// ObjectSpread()

// Looping Over Objects:---

function loopObj() {
  const user = {
    name: "sarfraj",
    age: 32,
    occupation: "web Developer",
  };
  const obj = {
    keys1: Object.keys(user),
    value1: Object.values(user),
    entries1: Object.entries(user),
  };

  console.log(Object.keys(user));
  console.log(Object.values(user));
  console.log(Object.entries(user));
  function loopIt(obj) {
    for (let thing of obj) {
      console.log(thing);
    }
  }
  loopIt(obj.keys1);
  loopIt(obj.value1);
  loopIt(obj.entries1);
}

//   loopObj()

// copyWithin:-----------

function copyWithin1() {
  const myArr = ["q", "w", "e", "r", "t", "y"];

  const returnedArray = myArr.copyWithin(0, 3, -1);

  console.log(myArr);
  console.log(myArr === returnedArray);
}

//   copyWithin1()

//  Merage Arrays in JS:---(concat,spread)

function merageArr() {
  const nums = ["fish", "gelly", "mermaid", "batak"];
  const pets = ["horse", "billy", "kuta", "ghoda"];
  const merged = nums.concat(pets, ["html", "js", "css"]);
  const merged2 = [...pets, ["html", "js", "css"], ...nums];
  console.log(merged);
  console.log(merged2);
}

// merageArr()

// what is this in JS:---

function thisJS() {
  const myTitle = document.querySelector("#title");
  function dc() {
    console.log(this);
  }

  console.log(dc);

  myTitle.addEventListener(
    "click",
    dc.bind({
      name: "sarfraj",
      age: 50,
    })
  );

  myTitle.addEventListener("click", () => {
    console.log(this);
  });
}

// thisJS()

// Optional Chanining  Operator:---

function optionalChainingOperator() {
  const person = {
    name: "sarfraj",
    age: 28,
    vehicale: {
      year: 2012,
      warranty: {
        expiryDate: 2020,
      },
      drive() {
        return "I am driving!";
      },
    },
  };

  // const vehicalYear = person.vehicale ?person.vehicale.year :undefined;
  const vehicalYear = person.vehicale?.year;
  const vehicale = person.vehicale.year ?? 1970;
  const warrantyExpiryDate = person.vehicale?.expiryDate;
  console.log(person.vehicale?.drive?.());
  console.log(warrantyExpiryDate);

  console.log(vehicalYear);
}

// optionalChainingOperator()

// top 5 js console features:---

let clickCount = 0;
function consoleFeature() {
  // console.group
  console.log("I am a boring console message");
  console.group("I am a boring console message");
  console.log("How's it going, mate");
  console.log("Yeah mate, not too bad.");
  console.log("Just getting a few things for the weekend mate.");
  console.groupEnd();
  console.log("back to normal");

  // live expression
  document.getElementById("myBtn1").onclick = () => {
    clickCount++;
  };

  // time you code
  console.time("addHeadings");
  for (let i = 0; i < 1000; i++) {
    document.body.insertAdjacentHTML(
      "beforeend",
      `<h5> Heading #${i + 1}</h5>`
    );
  }
  console.timeEnd("addHeadings");

  console.log("I am %cgular and i am bold", "color:blue; font-weight:bold");
  console.log(
    "%cs",
    "color:blue; font-weight:bold",
    "I am gular and i am bold"
  );

  // Assertions:----

  console.assert(true === true);
  console.assert(true === false, "Booleean fail");
}
// consoleFeature();

// how to implement a Queue in jS:------

function implementQueue() {
  class Queue {
    constructor() {
      this.items = [];
    }
    enqueue(item) {
      this.items.push(item);
    }
    dequeue() {
      return this.items.shift();
    }
    peek() {
      return this.items[0];
    }
    getsize() {
      return this.items.length;
    }
    isEmpty() {
      return this.getsize() === 0;
    }
  }

  const cars = new Queue();

  cars.enqueue("limo");
  cars.enqueue("maruti");
  cars.enqueue("fezzer");
  console.log(cars);
  console.log(cars.dequeue());
  console.log(cars.peek());
}

//  implementQueue()

// How to  implement a stack in js:-----

function implementStack() {
  class Stack {
    constructor() {
      this.items = [];
    }
    push(item) {
      this.items.push(item);
    }
    pop() {
      return this.items.pop();
    }
    peek() {
      if (this.items.length == 0) {
        return null;
      }
      return this.items[this.items.length - 1];
    }
    getSize() {
      return this.items.length;
    }
    isEmpty() {
      return this.getSize() === 0;
    }
  }

  const users = new Stack();
  users.push("Sarfraj");
  users.push("Soniya");
  users.push("Anamika");
  users.push("Anjali");

  console.log(users);
  console.log(users.pop());
  console.log(users.pop());
  console.log(users.getSize());
  console.log(users.peek());
  console.log(users.isEmpty());
}

// implementStack();

function arrayFunc() {
  // every

  const grades = [81, 82, 97, 89, 80];
  const isHighPeroformingClass = grades.every((garde) => {
    return garde >= 80;
  });

  console.log(isHighPeroformingClass);

  // find
  const people = [
    { name: "dog", job: "Software Engineer" },
    { name: "lucy", job: "Pastry Chef" },
    { name: "Bob", job: "Civil Engineer" },
    { name: "Maria", job: "Pastry Chef" },
  ];

  const result = people.find((person) => {
    return person.job === "pastry Chef";
  });

  // some:-----------

  const containsHighPerformer = grades.some((grade) => grade >= 80);

  console.log(containsHighPerformer);

  // Array.from:---------

  const para = document.querySelectorAll("li");
  // (if non array like object have index and length than it can canvert into array)
  console.log(para);
  const arr = Array.from(para);
  const strArr = Array.from("sarfraj");
  console.log(arr);
  console.log(strArr);

  // includes:--------
  const sigmaPeople = ["sarf", "gachite", "Mr Boombastic", "lord"];

  console.log(sigmaPeople.includes("gachite", 0));
}

// arrayFunc()

// top 5 js string method:---------

function js5StringMethod() {
  const myStr = "Hey guys how's it going?";

  // startsWith /endsWith:----
  console.log(myStr.startsWith("Hey", 4));
  console.log(myStr.endsWith("going?"));

  // padStart/padEnd:----

  const orderCode = "23A";
  console.log(orderCode.padStart(6, "0"));
  console.log(orderCode.padEnd(6, "0"));

  // includes:----
  const car = "2021,Hodi civil war";
  console.log(car.includes("20", 12));

  // search:----
  const gameControl = "PS5 Dualsense Controller";
  console.log(gameControl.search("PS5 "));
  console.log(gameControl.search(/\d/));
  console.log(gameControl.search("Sar"));

  // repeat:--------

  const myName = "sarfraj";

  console.log(myName.repeat(5));
}

// js5StringMethod()

// 3 ways copy object in js:---

function objCopy() {
  const user = {
    username: "sarfraj",
    age: 28,
    active: true,
    friends: ["Matt", "Ange", "johnny"],
  };

  // const copiedUser = {...user};
  // const copiedUser = Object.assign({},user);
  const copiedUser = JSON.parse(JSON.stringify(user));

  console.log(copiedUser);
  console.log(copiedUser.friends === user.friends);
  console.log(copiedUser === user);
}
// objCopy();

// Map, Filter & Reduce EXPLAINED in JavaScript:---

function arrayMethods() {
  const people = [
    {
      name: "sarfraj",
      age: 28,
      occupation: "developer",
    },
    {
      name: "tony",
      age: 25,
      occupation: "engineer",
    },
    {
      name: "luka",
      age: 34,
      occupation: "doctor",
    },
    {
      name: "pintu supari ",
      age: 76,
      occupation: "killer",
    },
  ];

  // map:-
  const names = people.map((person) => {
    return person.name;
  });
  console.log(names);

  // filter
  const overThrities = people
    .filter((person) => {
      return person.age >= 35;
    })
    .map((person) => {
      return person;
    });
  console.log(overThrities);

  // reduce

  const totalAge = people.reduce((total, person) => {
    return total + person.age;
  }, 0);
  console.log(totalAge);
}

// arrayMethods()

// Did You Know This JavaScript Trick:----

function jsTrick() {
  // logical assignment

  let a = 0;

  a &&= 20;
  console.log(a);
  a ||= 20;
  console.log(a);

  a ??= 20;
  console.log(a);
}

// jsTrick();

// One of the most Important parts of js:----

function truthyFalsy() {
  const fasly = [0, -0, false, "", null, undefined, NaN, 0n, document.all];
  const name = false[4] || "unknown";
}

//  truthyFalsy();

// // One of the most POWERFUL features of JavaScript:----

function replaceMethod() {
  const a = "3 is before 4 and 8 is afetr 6 but beforcle 9";
  const noMoreEvens = a.replace(/\d/g, (num) => {
    // /radix  10
    num = parseInt(num, 10);

    return num % 2 == 0 ? "@" : num;
  });
  console.log(noMoreEvens);
}
// replaceMethod()

// array reduce explained with examples:--

function arrereduce() {
  const numbers = [3, 6, 7, 4, 2];
  const people = [
    {
      name: "sarfraj abbasi",
      age: 23,
    },
    {
      name: "conner kent",
      age: 13,
    },
    {
      name: "cantt double",
      age: 43,
    },
    {
      name: "kolabhi lambda",
      age: 25,
    },
    {
      name: "kaalu mirchi",
      age: 65,
    },
  ];

  // reduce:--
  const sum = numbers.reduce((p, c) => {
    return p + c;
  }, 0);

  const oldestAge = people.reduce((p, c) => {
    return c.age > p ? c.age : p;
  }, 0);

  const output = people.reduce((p, c, i, a) => {
    const split1 = c.name.split(" ");

    let part = `${split1[0][0].toUpperCase()}${split1[1][0].toUpperCase()}`;

    if (i === a.length - 1) {
      part += ".";
    } else {
      part += ", ";
    }
    return p + part;
  }, "");

  // console.log(sum);
  // console.log(oldestAge);
  console.log(output);
}

// arrereduce()

// Can You Create SUPER ARRAYS in JavaScript?:-------

function superArray() {
  class SuperArray extends Array {
    last() {
      return this.slice(-1)[0];
    }

    first() {
      return this[0];
    }

    insert(index, ...value) {
      return this.splice(index, 0, ...value);
    }
    withOutDuplicate() {
      return SuperArray.from(new Set(this));
    }
    clear() {
      while (this.length > 0) {
        this.pop();
      }
    }
  }

  const people = new SuperArray("henry", "Bianca", "Rose", "Johnny", "Rondy");

  // people.clear()
  people.insert(3, "elise", "olfa", "asdasd");
  console.log(people.last());
  console.log(people.withOutDuplicate());
}
// superArray()

// There Are 6 Ways To Improve This JavaScript Code:------

function ImproveJsCode() {
  const users = [
    {
      name: "S.A",
      occupation: "Web Developer",
    },
    {
      name: "brandi",
      occupation: "@#$%star",
    },
    {
      name: "antique",
      occupation: "museaum watchMen",
    },
    {
      name: "louna lee",
      occupation: "tik toker",
    },
  ];

  const profileTitles = users.map(({ name, occupation }) => {
    return `${name} is a ${occupation}.`;
  });

  // for(const {name,occupation} of users ){
  //     profileTitles.push(`${name} is a ${occupation}.`)
  //    }

  console.log(profileTitles);
}

// ImproveJsCode()

// Another 5 Must Know JavaScript Array Methods:---

function anotherArrMethods() {
  const carManufactures = [
    {
      name: "Ford",
      country: "United States",
    },

    {
      name: "Audi",
      country: "Germany",
    },

    {
      name: "Honda",
      country: "Japan",
    },
    {
      name: "Toyota",
      country: "Japan",
    },
  ];
  const employees = [
    {
      name: "goldii",
      salary: "$200",
    },
    {
      name: "Jade",
      salary: "$2,340",
    },
    {
      name: "chain",
      salary: "$20,000",
    },
    {
      name: "chintu-Coder",
      salary: "$10,000",
    },
  ];

  const scoreHistory = [23, 45, 3, 2, 667, 8];

  const names = ["dom", "Jessica", "Henry", "Isabel"];

  const podium = ["kukukan", "johny", "Henry", "ondiynm"];

  // findIndex
  const i = carManufactures.findIndex((manufacuer) => {
    return manufacuer.country === "Japan";
  });

  // unshift
  function addScore(score) {
    const updatedScoreCount = scoreHistory.unshift(score);
    return updatedScoreCount;
  }

  // map:---

  const summaries = employees.map(({ name, salary }) => {
    return `${name} is earning ${salary} each year.`;
  });

  // entries:-----

  for (const [i, name] of names.entries()) {
    console.log(`${name} is at index ${i}!`);
  }

  // Slice:---

  const runnerUps = podium.slice(1);
  console.log(runnerUps[0] === podium[1]);

  addScore(321);
  console.log(scoreHistory);
  console.log(carManufactures[i]);
  console.log(summaries);
  console.log(runnerUps);
}

// anotherArrMethods()

// / The  best way to add properties to an Objects in js:------

function addProperties() {
  const game = {
    status: "In Progress",
    scoreHistory: [4, 1, 8, 2],
  };

  Object.defineProperty(game, "maxPlayers", {
    value: 2,
    // can't override the this property
    writable: false,
  });
  // get:----
  Object.defineProperty(game, "highScore", {
    get() {
      return Math.max(...this.scoreHistory);
      //  return this.scoreHistory.reduce((p,c)=>{return (c > p)? c:p})
    },
  });

  // set:----
  Object.defineProperty(game, "completed", {
    set(v) {
      if (v && this.status === "Completed") {
        throw new Error("Game is already Completed! ");
      }
      if (v) {
        this.status = "Completed";
      }
    },
  });
  game.completed = true;
  game.maxPlayers = 5;

  console.log(game.maxPlayers);
  console.log(game.highScore);
}

//   addProperties();

// Common Js mistake and how to avoid Them:---

function jsMistake() {
  // Incorrect Dom Access:---(defer)
  const title = document.getElementById("title");

  // let for Arrays and Objects:--
  const numbers = [3, 7, 8, 2];

  numbers.push(55);
  console.log(numbers);

  // Bad Obejct/Array References:---
  const a = {
    name: "sa",
    age: 34,
    occupation: "Software Developer",
  };
  // const b = a;

  const b = Object.assign({}, a);
  b.name = "sarfrajAbbasi";

  console.log(a);
  console.log(b);

  // Unnecessary Else's:----

  function isGreaterThan5(n) {
    // if(n > 5){
    //    return true;
    // }
    // return false

    return n > 5 ? true : false;
  }
  // console.log(isGreaterThan5());

  // Bad Comparisons With(=== vs ==):-----

  const playerCount = document.getElementById("player");

  playerCount.addEventListener("change", () => {
    if (playerCount.value === "4") {
      alert("This is Correct");
    }
  });
}
// jsMistake();

// The best way to deep copy Objects or Arrays in js-StructuredClone():-----

function cloneObjOrArr() {
  // deep clone
  const person = {
    name: "sarfraj",
    hobbies: ["web development", "gardening", "read books"],
    cars: {
      sevss: ["122", "122", "122", "122", "122"],
    },
  };

  const personCloned = structuredClone(person);
  person.hobbies.push("talking late");
  console.log(personCloned);
  console.log(personCloned.name === person.name);
  console.log(personCloned.hobbies === person.hobbies);
}
// cloneObjOrArr()

//   5 Real Life Examples of Array Reduce in JavaScript:---

function reduceExample() {
  // Find the sum of all nums in an arr.
  const nums = [6, 8, 7, 3, 5];

  const result = nums.reduce((prev, curr) => {
    return prev + curr;
  }, 0);

  // find the sum of all materials to build a house

  const materials = [
    {
      name: "Brick",
      cost: 28000,
    },

    {
      name: "Plaster",
      cost: 75000,
    },

    {
      name: "wood",
      cost: 56000,
    },

    {
      name: "cement",
      cost: 23000,
    },
  ];

  const result2 = materials.reduce((p, c) => {
    return p + c.cost;
  }, 0);

  // Convert a  two-dimensional array of key-value pairs into an object (some libraries)
  const keyValuePairs = [
    ["username", "sarfraj"],
    ["memberSince", "2020-04-06"],
    ["age", 35],
  ];

  const result3 = keyValuePairs.reduce((prev, keyValPairs) => {
    const key = keyValPairs[0];
    const value = keyValPairs[1];
    prev[key] = value;
    return prev;
  }, {});

  // Find the max or min salary of a list of people objects:----

  const people = [
    {
      name: "sarfraj",
      occupation: "Software Developer",
      salary: 90000,
    },
    {
      name: "babu",
      occupation: "shabzi wala",
      salary: 15000,
    },
    {
      name: "allu",
      occupation: "gym-trainer",
      salary: 9000,
    },
    {
      name: "balu",
      occupation: "titii",
      salary: 90,
    },
  ];
  const result4 = people.reduce((prev, person) => {
    if (person.salary > prev) {
      return person.salary;
    }
    return prev;
  }, 0);

  // count occurence of each string in an array
  const colors = ["green", "black", "red", "blue", "red", "pink"];

  const result5 = colors.reduce((prev, color) => {
    prev[color] = (prev[color] || 0) + 1;
    return prev;
  }, {});

  console.log(result);
  console.log(result2);
  console.log(result3);
  console.log(result4);
  console.log(result5);
}

// reduceExample()

// 3+ Ways to Write Clean Code in JavaScript:----

function cleanCode() {
  function getThemeColors() {
    const currentHour = new Date().getHours();

    if (currentHour > 20 && currentHour < 7) {
      return {
        textColor: "#ffffff",
        backgroundColor: "#222222",
      };
    }

    return {
      textColor: "#ffffff",
      backgroundColor: "#222222",
    };
  }
  // find factor 12
  const number = [4, 5, 9, 2, 7, 11];

  for (const n of number) {
    if (12 % n !== 0) {
      continue;
    }
    console.log(`${n} is a factor of 12!`);
  }

  // Using array.map():---

  const names = ["ds", "peter", "alesiha", "sam"];

  function capitalize(name) {
    return name[0].toUpperCase() + name.slice(1);
  }
  const capitalized = names.map(capitalize);

  console.log(getThemeColors());
  console.log(capitalized);
}

// cleanCode()

// 7 PowerFul jS Methods You Need To Know:---

function sevenPowerfulJsMethods() {
  // whether or not a name exists that contains the letter "H";

  const names = ["Dom", "Amy", "Geoff", "Chirs", "Maria"];
  const containsLetterH = names.some((name) => {
    // check one letter at time
    return name.includes("h");
  });

  console.log(containsLetterH);

  // find the items with class and id
  const items = document.querySelectorAll(".dummy li");

  items.forEach((el) => {
    const result = el.matches(".li2#l2");
    console.log(result);
  });

  // find all people that are earning over $80k

  const people = [
    { name: "Sarfraj", salary: 80000 },
    { name: "Maria", salary: 90000 },
    { name: "Jhonny", salary: 120000 },
    { name: "Juli", salary: 1100000 },
  ];

  const highIncome = people.filter((person) => {
    return person.salary >= 80000;
  });

  console.log(highIncome);

  const createFruits = document.createElement("ul");

  createFruits.classList.add("fruits");
  //create and add text to li
  const liText = ["apple", "banana", "strowberry", "pineapple"];
  liText.forEach((li) => {
    const createLi = document.createElement("li");
    createLi.textContent = li;

    createFruits.appendChild(createLi);
  });

  // Append to body
  document.body.appendChild(createFruits);

  // Make a clone,then deep clone of "".fruits;

  const fruits = document.querySelector(".fruits");

  const fruitsCopy = fruits.cloneNode(true);

  document.body.appendChild(fruitsCopy);

  // create a new array with the numbers but doubled:--

  const numbers = [4, 9, 10, 22];
  const numberDoubled = numbers.map((n) => {
    return n * 2;
  });
  console.log(numberDoubled);

  // add both tomtato and apricot to '.fruits'

  const tomtao =document.createElement('li');
  const apricot =document.createElement('li');

  tomtao.textContent = "Tomato";
  apricot.textContent = "Apricot";
  // append
  fruits.append(tomtao,apricot)

  // grab and remove the first element from this arraygit

  const numbers2 = [4,8,12,20,24];

  const four = numbers2.shift();

  console.log(four);
  console.log(numbers2);


}

// sevenPowerfulJsMethods();



