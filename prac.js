// let student = {
//     name:"Kritik",
//     age: 20,
//     cgpa: 8.5,
//     isPass: true,
// };

// for(let key in student){
//     console.log("key is: ",key ,"& value is:",student[key]);
// }

// let gameNum = 4;
// let guessNum = prompt("Guess the number");

// while(guessNum != gameNum){
//     guessNum = prompt("You entered the wrong number! Try Again");
// }

// console.log("Congrats you win!");

// let Fullname = prompt("Enter Your Full Name");
// let length = Fullname.length;
// let userName = `@${Fullname}${length}`;
// console.log(userName);

// let colors = ["red","yellow","blue","orange","pink","white"];

// colors.splice(0,2,"golden");

// console.log(colors);

// let company = ["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];

// company.shift();
// company.splice(1,1,"Ola");
// company.push("Amazon");

// console.log(company);

//Function to print sum of 2 numbers.

//function to return no of vowel from a string

// function vowel(str){
//     let sum = 0;
//     for(let i=0;i < str.length;i++){
//         if(str[i] == "a"|| str[i] == "e"|| str[i] == "i"||str[i] == "o"||str[i] == "u"){
//             sum++;
//         };
//     };
//     return sum;
// };

// let val = vowel("Hello");
// console.log(val);

// const vowel = (str) => {
//     let count = 0;
//     for(val of str){
//         if(val=="a"||val=="e"||val=="i"||val=="o"||val=="u"){
//             count++;
//         }
//     }
//     return count;
// }

// let vowels = vowel("Heelo");
// console.log(vowels);

// arr.map((val)=>{
//     console.log(val);
// });
   
//Arr.reduce Method

// let arr = [2,430,21,542,543,121];
// let output = arr.reduce((prev,curr)=>{
//     return prev>curr?prev:curr;
// });

// console.log(output);

// let marks = [90,95,99,89,85,60];
// let ninetyPlus = marks.filter((val)=>{
//     return val>90;
// })

// console.log(ninetyPlus);

/**  Code for Lecture5 Let's practice.

let n = prompt("Enter a numerical value");
let arr = [];

for(let i = 1;i<=n;i++){
    arr.push(i);  //can also use arr[i-1] = arr[i]; 
}

console.log(arr);

const sumArray = arr.reduce((prev,curr) => {
    return prev + curr;
});

console.log(sumArray);

const MulArray = arr.reduce((prev,curr) => {
    return prev * curr;
});

console.log(MulArray);

**/

// document.querySelector("#hello").append(" from Apna College students");

// let divs = document.querySelectorAll(".box");

// let idx = 0;

// for(div of divs){
//     div.innerText = `new unique value ${idx}`;
//     idx++; 
// }

// let btn = document.createElement("button");
// btn.innerText = "click me!";
// btn.style.backgroundColor = "red";
// btn.style.color = "white";

// let doc = document.querySelector("body");
// doc.prepend(btn);

// let para2 = document.querySelector("p");
// para2.classList.add("newClass");

// light and dark mode !important

// let btn = document.querySelector("button");
// let mode = "light";

// btn.addEventListener("click",() => {
//     if(mode === "light"){
//         mode = "dark";
//         document.querySelector("body").style.backgroundColor = "black";
//     }else{
//         mode = "light";
//         document.querySelector("body").style.backgroundColor = "white";
//     }
// });

//Toggle button improved

// let newBtn = document.querySelector(".toggle");
// let mode = "light";

// newBtn.addEventListener("click",()=>{
//     if(mode === "light"){
//         mode = "dark";
//         document.querySelector('body').classList.add("black");
//         document.querySelector('body').classList.remove("white");
//     }else{
//         mode = "light";
//         document.querySelector("body").classList.add("white");
//         document.querySelector("body").classList.remove("black");
//     }

//     console.log(mode);
// });

// removeChild

// let h4 = document.querySelector("h4");

// let par = document.querySelector(".parent");
// let throwAwayNode = par.removeChild(h4);

// console.log(throwAwayNode);

// Append Child
// let par = document.querySelector(".parent");
// let h4 = par.appendChild(document.createElement("h4"));
// h4.innerText = "Hi Guys!";

//Objects and Prototypes

// const Employee = {
//     taxTrack(){
//         console.log("Tax is 10%");
//     }
// }

// const karanArjun = {
//     salary:1000000,
// }

// karanArjun.__proto__=Employee;

/** Classes **/

// class car{
//     constructor(brand) {
//         console.log("Creating Object")
//         this.brand=brand;
//     }

//     start(){
//         console.log("start");
//     }
//     stop(){
//         console.log("stop");
//     }

//     setBrand(brand){
//         this.brand = brand; //this.brand = brand created by class and brand is the parameter passed in the function.
//     }
// }

// let lamborghini = new car("lamborghini");//Constructor will invoke
// let Audi = new car("Audi");//Constructor will invoke

/** Inheritance **/

// class Person {
//     constructor(){
//         this.species = "homosapiens";
//     }

//     eat(){
//         console.log("eat");
//     }
// }

// class Engineer extends Person{
//     constructor(branch){
//         super();  //It is must to invoke parent class constructor 
//         this.branch=branch;
//     }
//     work(){
//         console.log("work");
//     }
// }

// let karanObj = new Engineer("Computer Science");  //object

/* practice */

// let Data = "Secret Information";

// class User {
//     constructor(Name,email){
//         this.Name = Name;
//         this.email = email;
//     }

//     viewData(){
//         console.log(`Data is ${Data}`);
//     }
// }

// class Admin extends User{
//     constructor(Name,email){
//         super()
//         this.Name=Name;
//         this.email=email;
//     }
    
//     editData(){
//         Data = "Some new data";
//         console.log(`New Data is ${Data}`);
//     };
// };

// let KaranObj = new User("karan","Karan@gmail.com");
// let DeanObj = new Admin("Dean","Dean@gmail.com");

/* Set TimeOut */

// setTimeout(() => {
//     console.log("Hello World");
// },3000);

/*CallBacks*/

// function getData(dataId){
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             console.log("data",dataId)
//             resolve(200);
//         },2000);
//     })
// }

// getData(1,() => {
//     getData(2);
// })

/* Promises */

// let promise = new Promise((resolve,reject) => {
//     console.log("I am a promise");
//     resolve(123);                                //resolve and reject are both functions.     
// })

// function asyncFunc1(){
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             console.log("some data1");
//             resolve("Success");
//         },4000);
//     })
// }

// function asyncFunc2(){
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             console.log("some data2");
//             resolve("Success");
//         },4000);
//     })
// }

// console.log("Fetching Data1");
// let p1 = asyncFunc1();
// p1.then((res) => {
//     console.log(res);
//     console.log("Fetching Data2");
//     let p2 = asyncFunc2();
//     p2.then((res) => {
//         console.log(res);
//     });
// }).catch((err) => {
//     console.log(err);
// })

/* Async And Await */

// async function getAllData(){
//     await getData(1);
//     await getData(2);
//     await getData(3);
// } 

// getAllData();

/* API:Fetch() */

const URL = "https://cat-fact.herokuapp.com/facts";
let factPara = document.querySelector(".factPara");
let button = document.querySelector("#btn");

const getFacts = async() => {
    let response = await fetch(URL);
    console.log(response);
    let data = await response.json(); //JSON Format
    factPara.innerText = data[0].text;
};

button.addEventListener("click",getFacts);