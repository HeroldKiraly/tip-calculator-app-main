let billTotal = document.getElementById('bill');    
let customTip = document.getElementById('tip-custom');
let numPeople = document.getElementById('people');

let tipPerPerson = document.getElementById('tip-per-person');
let tipTotal = document.getElementById('total-per-person');

let tipButtons = document.querySelectorAll('.tip-button');
let tipPercent = 0;

tipButtons.forEach(button => {
    button.addEventListener('click', function () {
        tipPercent = this.dataset.value;
        console.log(tipPercent);
        tipButtons.forEach(tipbutton => tipbutton.classList.remove('selected-button'));
        customTip.value = '';
        this.classList.add('selected-button');
        calculator();
    });
});

function customTipInput() {
    tipButtons.forEach(tipbutton => tipbutton.classList.remove('selected-button'));
    tipPercent = customTip.value;
    calculator();
}

function calculator() {
    bill = billTotal.value;
    tip = tipPercent;
    people = numPeople.value;

    if (bill == 0) {
        document.getElementById('bill-error').classList.remove('hidden');
        document.getElementById('bill').classList.add('error-input');
        return;
    } else {
        document.getElementById('bill-error').classList.add('hidden');
        document.getElementById('bill').classList.remove('error-input');
    }

    if (people == 0) {
        document.getElementById('people-error').classList.remove('hidden');
        document.getElementById('people').classList.add('error-input');
        return;
    } else {
        document.getElementById('people-error').classList.add('hidden');
        document.getElementById('people').classList.remove('error-input');
    }
    
    if (bill > 0 && people > 0) {
        let totaltip = (bill * (tipPercent / 100)) / people;
        let total = (bill / people) + totaltip;

        tipPerPerson.innerHTML = rounder(totaltip);
        tipTotal.innerHTML = rounder(total);
    } else {
        return;
    }
}

function reset() {
    tipButtons.forEach(tipbutton => tipbutton.classList.remove('selected-button'));
    tipPerPerson.innerHTML = rounder(0);
    tipTotal.innerHTML = rounder(0);
    billTotal.value = '';
    customTip.value = '';
    numPeople.value = '';

}

// Helper function
function rounder(num) {
    return (Math.round(num * 100) / 100).toFixed(2);
}