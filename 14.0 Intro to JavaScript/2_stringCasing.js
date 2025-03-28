//1 Create a var that stores the name that user enters via prompt.
var fname = prompt("Enter your name:");

//2 Capitalize the first letter of their name.

//a Isolate the first char.
var firstChar = fname.slice(0, 1);

//b Turn the first char to upper case.
var upperCaseFirstChar = firstChar.toUpperCase();

//3 Isolate the rest of the name.
var restOfName = fname.slice(1, fname.length);

//4 Change rest of name to lower case.
var restOfName = restOfName.toLowerCase();

//4 Concactenate the first char with the rest of the char.
var capitalizedName = upperCaseFirstChar + restOfName;

//5 We use the capitalized version of their name to greet them using an alert.
alert("Hello, " + capitalizedName);