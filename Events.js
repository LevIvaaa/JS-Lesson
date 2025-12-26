var counter = 0;

function onClickButton(element) {
    counter++;
    //alert("You press on me");
    element.innerHTML = "You press on me " + counter;
    //element.style.background = "red";
    //element.style.color = "blue";

    element.style.cssText = "border-radius: 5px; border: 0; font-size: 20px"
    console.log(element.onclick)
    //console.log(counter);
    //console.log("You press on me")
}

function onInput(el) {
    if(el.value == "Hello")
        alert("And you");
    console.log(el.value);
}