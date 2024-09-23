const rulesContainer = document.querySelector(".rules-container");
const rulesConCloseButton = document.getElementById("close-icon");
const rulesButton = document.getElementById("rules-button");

rulesButton.addEventListener("click",  () => {
    rulesContainer.classList.remove("hide")
})

rulesConCloseButton.addEventListener("click",  () => {
    rulesContainer.classList.add("hide")
})
