// variable types 
// let,const,var
// these are container(buney to store information->name,amount,age)
// var fathername = "jhon@gmail.com"
// const username="jhon"
// var password="password123"

// var gmail = "nimrah@gmail.com"
// var username="jhon"
// var password="password123"

// var gmail = "saba497@gmail.com"
// var username="saba"

// var password="password123"

// make variables for the the fields of intermediate exam form
// document.getElementById("username").style.color="red"
// document.getElementById("username").innerHTML=username

// diffrence between var let const 
// 1.const value can not be changed. var/let value can be changed
const username1="kulsoom"
username1="jhon"

//2.you can not redeclare const and let variable  var variable
var age=30

var age=40

//3.global scope and block scope
function change(){
    var username=prompt("enter your name")
    document.getElementById("username").innerHTML=username

}
