var number = 9;
var isHasHouse = true;

if(number == 5 /*||*/ && !isHasHouse /*== true*/) {
    console.log("Ok");
} else if(number < 10)
    console.log("ok!");
/*} else {
    console.log("Else");
}*/


var stroka = "word1";

switch(stroka) {
    case"4": console.log("Переменная со значением 4");
    break;
    case"word": console.log("Переменная со значением word");
    break;
    default:
        console.log("Default");
}