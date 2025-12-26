/*function info(word) {
    console.log(word + "!");
}

function summa(a, b) {
    var res = a + b;
    info(res);
    console.log(res);
}


summa(5,7);*/


/*function summaa(arr) {
    var sum = 0;

    for(var i = 0; i < arr.length; i++) {
    sum += arr[i];

    return sum;
    console.log(sum);
    }
}

var array = [6, 8, 1]
var array2 = [635, 84, 15]
var array3 = [236, 83, 21]

var res = summaa(array2);
res *=2;
console.log("Result: " + res);
//summaa(array2);
//summaa(array3);*/


//ПЕРЕМЕННЫЕ локальные и глобальные
var num = 10;

function info() {
    var num = 20;
    console.log(num);
}

info()

    console.log(num);