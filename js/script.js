
console.log("Hello");

const popPdp = document.querySelector(".popPdp");
const openPopPdp = document.querySelector(".add-basket-btn");
const closePopPdp = document.querySelector(".continueShoppingBtn");

openPopPdp.addEventListener("click", () => {
    popPdp.showModal();
})

closePopPdp.addEventListener("click", () => {
    popPdp.close();
})



const form = document.querySelector("#checkoutform");

const firstName = document.querySelector("#first-name");
const firstNameError = document.querySelector("#firstNameError");
const lastName = document.querySelector("#last-name");
const lastNameError = document.querySelector("#lastNameError");
const adress = document.querySelector("#adress");
const adressError = document.querySelector("#adressError");
const zip = document.querySelector("#zip");
const zipError = document.querySelector("#zipError");
const city = document.querySelector("#town-city");
const cityError = document.querySelector("#cityError");
const phone = document.querySelector("#phone");
const phoneError = document.querySelector("#phoneError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");

const cardName = document.querySelector("#cardName");
const cardNameError = document.querySelector("#cardNameError");



function validateForm(){

    if(checkLength(firstName.value, 0) === true) {
        firstNameError.style.display = "none";
    }
    else {
        firstNameError.style.display = "block";
    }
    
    if(checkLength(lastName.value, 1) === true) {
        lastNameError.style.display = "none";
    }
    else {
        lastNameError.style.display = "block";
    }

    if(checkLength(adress.value, 1) === true) {
        adressError.style.display = "none";
    }
    else {
        adressError.style.display = "block";
    }

    if(validateZip(zip.value) === true){
        zipError.style.display = "none";
    }
    else {
        zipError.style.display = "block";
    }

    if(checkLength(city.value, 1) === true) {
        cityError.style.display = "none";
    }
    else {
        cityError.style.display = "block";
    }

    if(validatePhone(phone.value) === true){
        phoneError.style.display = "none";
    }
    else {
        phoneError.style.display = "block";
    }
 

    if(validateEmail(email.value) === true){
        emailError.style.display = "none";
    }
    else {
        emailError.style.display = "block";
    }



    if(checkLength(cardName.value, 4) === true) {
        cardNameError.style.display = "none";
    }
    else {
        cardNameError.style.display = "block";
    }
 

}

form.addEventListener("change", validateForm);

function checkLength(value, len) {

    if(value.trim().length > len) {
        return true;
    }
    else {
        return false;
    }

}



function validatePhone(phone) {
    const regEx = /^\d{8}$/;
    const patternMatches = regEx.test(phone);
    return patternMatches;
}

function validateZip(zip) {
    const regEx = /^\d{4}$/;
    const patternMatches = regEx.test(zip);
    return patternMatches;
}

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const PatternMatches = regEx.test(email);
    return PatternMatches;
}

