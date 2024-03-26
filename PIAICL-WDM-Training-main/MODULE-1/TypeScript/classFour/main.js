// let firstname="Syed"
// let lastname = "Hasni"
// if (firstname==="Syed" || lastname === "Naqvi"){
//     console.log("you are not selected")
// }
// else {
//     console.log("you are allowed")
// }
// function greet (){
//     console.log("hello Hasni")
// }
// function sum (){
//     console.log(2+2)
// }
// greet();
// sum();
// function greet (name:string){
//     console.log("Hellow",name)
// }
// greet("Syed")
// function sum (num1:number, num2:number){
//     console.log(num1+num2)
// }
// sum(5,4);
// function multiply (num1:number){
//     console.log(num1*2)
// }
// multiply(3)
// function sum (num1:number, num2:number){
//         return num1+num2
//     }
//     let ans = sum(5,4)
// function multiply (num2:number){
//     console.log(ans)
// }
// multiply(ans)
// let fruits:string[] =["Apple", "banana", "orange", "pineapple"]
// // console.log(fruits[1])
// fruits.push("mango")
// fruits.pop()
// console.log(fruits)
// let fruits:string[] =["Apple", "banana", "orange", "pineapple"]
// let myfirstpoped = fruits.pop()
// console.log(myfirstpoped)
// let myfirstpushed = fruits.push("mango", "halwa")
// console.log(myfirstpushed)
// Shift Methode
// let menu = ["kofta", "biryani", "halwa", "kheer"]
// // let a= menu.shift() // shift means remove first member of menu/array
// // let len = menu.unshift("mango")  // unshift means add an other item than show the whole lenth of the menu/array
// console.log(a)
// console.log(len)
// let fruits=["apple", "banana", "mango","orange", "pineapple"]
// let a = fruits.slice(2) //list start from their given digit where start from given number
// let b = fruits.slice(2,4) // when we slice middle of the items where this example answer is mango and orage where it means start from 2 but end with 3 not 4
// console.log(a)
// console.log(b)
//SPLICE
var fruits = ['apple', 'banana', 'mango', 'orange', 'pineapple'];
fruits.splice(2, 1, 'lemon');
console.log(fruits);
