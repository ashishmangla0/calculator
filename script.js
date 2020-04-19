const calcButtons = document.querySelector('.calc_buttons');
const calcScreen = document.querySelector(".calc_screen");
const calcNumbers = document.querySelector('.calc_numbers');

let runningTotal = 0;
let buffer = "0";
let previousOperator;


function buttonClick(value) {
    console.log(value);
    if(isNaN(value)){
        console.log(`this is not a number ${value}`)
    }
    else{
        handleNumbers(value)
        console.log(`this is number ${value}`)
    }

    calcScreen.innerText = buffer

};
function handleNumbers(value){
if(buffer === '0'){
    buffer = value;
}
else{
    buffer += value;
    if (buffer.length>8){
        buffer = "not allowd"
    }
}
}
function addNumbers() {
    for (let i = 0; i <= 9; i++) {
        let buttonValue = document.createElement('button');
        buttonValue.classList.add('calc_number',`calc_number-${i}`)
        buttonValue.innerText = i;
        calcNumbers.appendChild(buttonValue);
    }
    //documet.querySelector('.calc_numbers');
}
function init() {
    addNumbers()
    calcButtons.addEventListener('click', function (e) {
        buttonClick(e.target.innerText)
    })
}
init()