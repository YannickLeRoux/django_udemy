// PART 4 ARRAY EXERCISE
// This is  a .js file with commented hints, its optional to use this.

// Create Empty Student Roster Array
// This has been done for you!
var roster = []

// Create the functions for the tasks

// ADD A NEW STUDENT

// Create a function called addNew that takes in a name
// and uses .push to add a new student to the array
function addNew(item){
	// var newName = prompt ("What name would you liek to add? ");
    roster.push(item);
}

// REMOVE STUDENT

// Create a function called remove that takes in a name
// Finds its index location, then removes that name from the roster

// HINT: http://stackoverflow.com/questions/5767325/how-to-remove-a-particular-element-from-an-array-in-javascript
//
function remove(){
	var item = prompt ("What item do you whant to remove? ");
	var pos = roster.indexOf(item);
	if (pos > -1){
	   roster.splice(pos, 1);
	}
}

// DISPLAY ROSTER

// Create a function called display that prints out the orster to the console.
function display(){
   console.log("the roster is " + roster.toString() );
}
// Start by asking if they want to use the web app
alert('Do you want to use this app? y/n?  ')
// Now create a while loop that keeps asking for an actkion (add,remove, display or quit)
// Use if and else if statements to execute the correct function for each command.
var userInput = ""
while (userInput !== "quit"){
   userInput = prompt('Do you want to add, remove, display or quit ?')
   if (userInput === "display"){
   display();
} else if (userInput === "add"){
   var item = prompt ("What item do you want to add? ");
   addNew(item);
} else if (userInput === "remove"){
   remove();	 
} else{
alert("Not recognized");
}
}
