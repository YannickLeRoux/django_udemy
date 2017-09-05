var fname = prompt("What is your First Name? ");
var lname = prompt("What is your Last Name? ");
var age = prompt("How old are you? ");
var height = prompt("What is your height? ");
var pet = prompt("What is your Pet Name? ");

if (fname[0]==lname[0] && age>20 && age<30 && height>169 && pet.slice(-1)=="y"){
 console.log("This is the secret message!!!");
} 
