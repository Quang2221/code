// var person = prompt("Please enter your name");

// if (person != null) {}
//   document.getElementById("demo").innerHTML =
//   "Hello " + person + "! How are you today?";

var a = parseInt("10") + "<br>";
var b = parseInt("10.00") + "<br>";
var c = parseInt("10.33") + "<br>";
var d = parseInt("34 45 66") + "<br>";
var e = parseInt(" 60 ") + "<br>";
var f = parseInt("40 years") + "<br>";
var g = parseInt("He was 40") + "<br>";

var h = parseInt("10", 10)+ "<br>";
var i = parseInt("010")+ "<br>";
var j = parseInt("10", 8)+ "<br>";
var k = parseInt("0x10")+ "<br>";
var l = parseInt("10", 16)+ "<br>";

var n = a + b + c + d + e + f + g + "<br>" + h + i + j + k +l;


// let celcius = prompt ("enter celcius degree")
// let kelvin = Number(celcius) + 273.15
// console.log(kelvin)

// let yob = Number(prompt("enter your Year of birth"))
// let age = 2021 - yob
// if (age < 18) {
//   console.log (`your age is ${age}, you are teen`)
// } else {
//   console.log (`your age is ${age}, you are adult`)
// }

// let number = Number (prompt("enter a number"))
// if (number % 2 === 0) {
//   console.log("even")
// } else {
//   console.log ("odd")
// } 

// let a = Number (prompt("enter a"))
// let b =  Number (prompt("enter b"))
// let c =  Number (prompt("enter c"))

// let x = (c - b) / a
// console.log(`x = ${x}`)


// let yob = Number(prompt("enter your Year of birth"))
// let age = 2021 - yob
// if (age < 5) {
//   console.log (`your age is ${age}, you are baby`)
// } else { 
//   if (age < 18 ) {
//   console.log (`your age is ${age}, you are teen`)
// } else { 
//   if (age < 60) {
//   console.log (`your age is ${age}, you are adult`)
// } else { 
//   if (age > 60) {
//     console.log (`your age is ${age}, you are Old`)
//  }

if (age < 5) {
  console.log(`baby`)
}
  else if (age < 18) {
    console.log (`teen`)
  } else if (age < 60) {
    console.log(`adult`)
  } else {
    console.log (`old`)
  }