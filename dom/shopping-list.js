var link = document.createElement('link');
link.rel = 'stylesheet';
link.type = 'text/css';
link.href = 'shopping-list.css';

document.getElementsByTagName('HEAD')[0].appendChild(link);

let myUL = document.getElementsByTagName("UL");
let myInput = document.getElementById("item");
let myButton = document.getElementsByTagName("Button");

myInput.focus();

myButton[0].addEventListener("click", buttonAdd);

function buttonAdd() {

    let inputVal = myInput.value;
    myInput.value = "";

    let newLI = document.createElement("li");
    let newSPAN = document.createElement("span");
    let newBUTTON = document.createElement("Button");

    newLI.append(newSPAN);
    newLI.append(newBUTTON);

    newSPAN.innerHTML = inputVal;
    newBUTTON.innerHTML = "Delete"

    myUL[0].append(newLI);

    newBUTTON.addEventListener("click", buttonDelete);

    myInput.focus();
}

function buttonDelete() {

    this.parentNode.remove();
    myInput.focus();
}