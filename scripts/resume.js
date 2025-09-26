const showMores = document.querySelectorAll(".section-overflow>div");

for (const showMoreElement of showMores.values()) {
    showMoreElement.addEventListener("click", () => {
        showMoreElement.parentElement.classList.remove("section-overflow");
        showMoreElement.parentElement.removeChild(showMoreElement);
    })
}

// "Show More" idea taken from sites that have those paywalls where the article
// fades away into a subscription banner. Funnily enough, many of these paywalls
// can be bypassed by simply removing the paywall banner and changing some CSS.
// Or even better, some load this banner via JavaScript, which means you can just
// press the "X" at the top of the browser at the right time to prevent the script
// from loading and you can read the article!
//
// Tangent aside, just mimicking the paywalls but with a friendly button that lets
// you view the rest of the content. Almost like an accordion. Or like <details>
// and <summary>. Wait...