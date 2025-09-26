const showMores = document.querySelectorAll(".section-overflow>div");

for (const showMoreElement of showMores.values()) {
    showMoreElement.addEventListener("click", () => {
        showMoreElement.parentElement.classList.remove("section-overflow");
        showMoreElement.parentElement.removeChild(showMoreElement);
    })
}