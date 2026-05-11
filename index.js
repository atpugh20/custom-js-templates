//=======
// MAIN
//=======
document.addEventListener("DOMContentLoaded", () => {
    const contentElements = document.querySelectorAll("[data-content]");
    const srcElements = document.querySelectorAll("[data-src]");
    const hrefElements = document.querySelectorAll("[data-href]");

    // Content Templates
    if (window.contentVars) {
        for (let e of contentElements) {
            const key = e.dataset.content;

            if (window.contentVars[key]) {
                e.innerHTML = window.contentVars[key];
            }
        }
    } else {
        console.log("window.contentVars array not found.");
    }

    // Image Source Templates
    if (window.srcVars) {
        for (let e of srcElements) {
            const key = e.dataset.src;

            if (window.srcVars[key]) {
                e.src = window.srcVars[key];
            }
        }
    } else {
        console.log("window.srcVars array not found.");
    }

    // Website Link Templates
    if (window.hrefVars) {
        for (let e of hrefElements) {
            const key = e.dataset.href;

            if (window.hrefVars[key]) {
                e.href = window.hrefVars[key];
                e.target = "_blank";
            }
        }
    } else {
        console.log("window.hrefVars array not found.");
    }
});
