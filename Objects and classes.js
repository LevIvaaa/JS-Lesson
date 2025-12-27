/*var date = new Date();

console.log(date.getFullYear());
console.log(date.getMonth() + 1);
console.log("Date: " + date.getDay() + " " + date.getMonth() + " " + date.getFullYear() + " " + "Time: " + date.getHours() + " " + date.getMinutes() + " " + date.getSeconds() + " " + date.getMilliseconds());

date.setHours(23);
date.setMinutes(23);
console.log("Time: " + date.getHours() + " " + date.getMinutes());

var arr = [31,2,43,4]

var stroka = arr.sort().join(", ");
console.log(stroka.split(", "));

console.log(arr.sort().join(", "));
//console.log(arr.join(', '));*/


class Person {
    constructor(name, age, happiness) {
        this.name = name;
        this.age = age;
        this.happiness = happiness;
    }

    info() {
        console.log("Human: " + this.name + ". Age: " + this.age);
    }
}

var alex = new Person('alex', 45 , true);
var bob = new Person('bob', 25 , false);

alex.info();
bob.info();
//console.log(alex.name);
//console.log(bob.name);