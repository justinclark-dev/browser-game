'use strict'


const buttons = document.querySelectorAll('.button')
const calculator = document.querySelector('#calculator');



const handleCalculation = (event) => {
}
/*----------------------------- Event Listeners -----------------------------*/
calculator.addEventListener('click', (event) => {

    if (event.target.classList.contains('number')) {
        handleNumbers(event)
    }



});


