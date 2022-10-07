console.log("hello");

const form = document.querySelector("#checkoutform");

const cardName = document.querySelector("#cardName");
const cardNameError = document.querySelector("#cardNameError");
const cardNumber = document.querySelector("#cardNumber");
const cardNumberError = document.querySelector("#cardNumberError");
const cvc = document.querySelector("#cvc");
const cvcError = document.querySelector("#cvcError");


function validateForm() {
    
    if (checkLength(cardName.value, 4) === true) {
        cardNameError.style.display = "none";
    } else {
        cardNameError.style.display = "block";
    }

    if (validateCardNumber(cardNumber.value) === true) {
        cardNumberError.style.display = "none";
    } else {
        cardNumberError.style.display = "block";
    }

    if (validateCvc(cvc.value) === true) {
        cvcError.style.display = "none";
    } else {
        cvcError.style.display = "block";
    }
}

form.addEventListener("change", validateForm);

function checkLength(value, len) {
    if (value.trim().length > len) {
        return true;
    } else {
        return false;
    }
}


function validateCardNumber(cardNumber) {
    const regEx = /^\d{16}$/;
    const patternMatches = regEx.test(cardNumber);
    return patternMatches;
}

function validateCvc(cvc) {
    const regEx = /^\d{3}$/;
    const patternMatches = regEx.test(cvc);
    return patternMatches;
}