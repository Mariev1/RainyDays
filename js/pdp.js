
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

function validateForm() {
    console.log("validated?");
}

form.addEventListener("change", validateForm)










