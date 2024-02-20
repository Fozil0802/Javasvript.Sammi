// // alert("Hello Fozil")

// // "use strict"

// // number = 11;
// // console.log(number);

// let number = 5.6; // data type number

// // console.log(-8/0); // infinity
// // console.log(fozil*8); //NaN

// //string

// const clientName = "Fozil";
// const clientNamebb = `Fozil`;

// // boolean

// const ismarried = false;
//  const isCriccleEarth = true;

//  // null

// //  console.log(clientAge);

//  //undefined
//  let und;
//  console.log(und);

//  //Object
//  const thief = {
//     //key: value
//     name:Fozil,
//     age: 28,
//     isLong: false
//  }

//  console.log(thief.key);

//  //array

//  const color = ["red", "black", "green", 11, [], {}]

//  console.log(color[1]);

//  number

let num = 5.6; //data type => number

console.log(8 / 0); //=> infinity
console.log(-8 / 0); // => -infinity
console.log(0 / -8); // 0
console.log("fozil" * 5); // => NAN

//string

const name1 = "fozil 1995";
const name2 = "fozil 1995";
const name3 = `fozil 1995`;

// Boolean

const isMarried = false;

//true => 1, ha
//false => 0, yuq

// Null

// console.log(yuq uzgaruvchini chaqirish);

// // Undefined

// let benom;

// console.log(benom);

// //object

// const thief = {
//  //key = value
//   name: "fozil",
//   age: 28,
//   islong: false,
// };
// console.log(thief);
// console.log(thief["age"]);

// //Array

// const colors = [
//   // 0        1      2   3  4
//     "red", "black", 95, [], {}
// ]
// console.log(colors[0]);

// lesson-5

// alert("hello")
// const place = confirm("how are you?")
// console.log(place);

// const currentplace = prompt("where are you?","korea")
// console.log(currentplace); typeof => string

// const age = +prompt("how old are you?", "28")
// console.log(age + 1);

// const fovouritecolor = [];
// fovouritecolor[0] = prompt("what's your favourite color #1", "")
// fovouritecolor[1] = prompt("what's your favourite color #2", "")
// fovouritecolor[2] = prompt("what's your favourite color #3", "")
// console.log(typeof fovouritecolor); object

// lesson-6

// const channel = prompt("what's your favourite git hup")
// console.log(`https://github.com ${channel}`);

// const user = "fozil";

// const job = "JavaScript developer";

// console.log(`user name is ${user}, he is ${job}`);

//  prompt,alert => bular console.logda ishlamaydi faqat browserda ishleydi

// lesson-7

console.log("fozil" + "khudoyberdiev");
// fozilkhudoyberdiev

console.log(95 + "khudoyberdiev");
// 95khudoyberdiev

console.log("khudoyberdiev" + 95);
// khudoyberdiev95

console.log(95 + +"khudoyberdiev");
// NaN

// incr, decr

let incr = 11;
let decr = 11;

incr++;
decr--;

console.log(incr++);
12;
console.log(decr--);
10;

console.log(incr++);
13;
console.log(decr--);
9;

console.log(incr);
14;
console.log(decr);
8;

console.log(11 % 2);
1;

console.log(5 * 5 == "25");
true;

console.log(5 * 5 === "25");
false;

// && va  hammasi true bo'lsa ishlaidi
// || yoki bittasi true bo'lsa ishleydi
//  ! teskarisiga o'giradi masalan !true = false

//  javasicriptda ham mathda birinchi *,/ bajariladi kiyen +,-

// lesson9

// const numberofseries = prompt("nechta serial ko'rdiz", "");
// const seriesDB = {
//   count: numberofseries,
//   series: {},
//   actors: {},
//   genres: [],
//   privets: false,
// };

// for (let i = 0; i < 2; i++) {
//   const a = prompt("oxirgi kp'rgan serialingiz?"),
//     b = prompt("nechi baxo berasiz?");

//     if(a != null && b != null && a != "" && b != ""){
//         seriesDB.series[a] = b;
//         console.log("done");
//     } else {
//         console.log("error");
//         i--;
//     }

// }

// if(seriesDB.count < 5){
//     console.log("kam serial ko'ripsiz");
// } else if(seriesDB.count >= 5 && seriesDB.count <10){
//     console.log("siz klassik tomoshabin ekansiz");
// }else if(seriesDB.count >=10){
//     console.log("siz juda ko'p serial ko'rarkansiz");
// }else{
//     console.log('error');
// }

// console.log(seriesDB);

// funksiya
console.log("fozil");
function sayHelloWorld() {
  console.log("hello fozil");
}
sayHelloWorld();

function sum(a, b) {
  console.log(a * b);
}
sum(5, 6);
let name = "fozil";
function Myname(name, surname) {
  let age = 28;
  console.log(`my name is ${name} ${surname}`);
  console.log(age);
  console.log(name);
}
Myname("Fozil", "Khudoyberdiev");
// console.log(age);
console.log(name);

function hello(a, b) {
  sun = 15;
  sun = 20;
  console.log(sum);
}
let sun = 25;
hello();
console.log(sun);

function calc(a, b) {
  return a + b;
}
console.log(calc(2, 3));

console.log(a);
var a = 2;

// function declalation
// Script kodimizni ishlashni boshlashdan oldin yaratilgan bo'ladi, va biz uni funcsiyadan oldin chaqirishimiz mumkin

// function name(){

// }

// function expression
// qachonki kodimiz ushbu funksiya yetib kelganda yaratiladi, faqat funcsiyadan keyin chaqiriladi.

//  const fod = function() {

//  }

// arrow function
// O'zini shaxsiy content this mavjud emass ()=>
// let calc = (a,b)=>{
//     return
// }

// const calc = (a,b) => a= + b;

//lesson-14

const user = "Fozil";
console.log(user.length);

const arr = [1, 2, 3, 4];
console.log(arr.length);
console.log(user[1]);
console.log(user[1], "o");
console.log(user);

console.log(user.toUpperCase());

const upperCaseUser = user.toUpperCase();
console.log(upperCaseUser);

console.log(user.toLowerCase());

const greeting = "Hello  world";
console.log(greeting.indexOf("w"));
console.log(greeting.slice(4));
console.log(greeting.slice(-6, 1));
console.log(greeting.substring(5, 10)); // slecedan farqi - qiymat qabul qilmaydi
console.log(greeting.substr(5, 5));

//number

const num2 = 8.8;

console.log(Math.round(num2));

const boderWidth = "13.8px"
console.log(parseInt(boderWidth));
console.log(parseFloat(boderWidth));