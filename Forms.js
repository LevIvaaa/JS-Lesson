/*var text = document.getElementById('text');
text.title = "New text";
console.log(text.title);

text.style.color = "red";
text.style.backgroundColor = "blue";

text.innerHTML = "New<br>string"

//document.getElementById('text').style.color = "white";

//var spans = document.getElementsByTagName('span');

var spans = document.getElementsByClassName('simple');

for(var i = 0; i < spans.length; i++) {
    console.log(spans[i].innerHTML);
}*/

document.getElementById('main-form').addEventListener("submit", checkForm);

function checkForm(event) {
    event.preventDefault();
    var el = document.getElementById('main-form');

    //var name = document.getElementById('name').value;
    var name = el.name.value;
    var pass = el.pass.value;
    var repass = el.repass.value;
    var state = el.state.value;

    //console.log(name + " - " + pass + " - " + repass + " - " + state);

    var fail = "";

    if(name == "" || pass == "" || state == "")
        fail = "Fill the box";
    else if(name.length <= 1 || name.length > 50)
        fail = "Write the correct name";
    else if(/\d/.test(name))
        fail = "its not a word";
    else if(pass != repass)
        fail = "Passwords not match";
    else if(pass.split("&").length > 1)
        fail = "Not correct password";

    if(fail != "") {
        document.getElementById('error').innerHTML = fail
    } else {
        alert("All data correct")
        window.location = 'https://github.com/LevIvaaa/JS-Lesson';
    }
}