/*alert("Погода");

var data = confirm("Good?");
if(data) {
    alert("Good");
console.log(data);
}*/

//var data = prompt("Your age?");
//console.log(data)

//var var1 = null;

var person = null;
if (confirm("Your right?")) {
    person = prompt("Your name");
    alert("Hello, " + person);
    console.log(person);
} else {
    alert("No? Realy?");
}