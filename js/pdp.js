
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














