//=======
// MAIN
//=======
document.addEventListener("DOMContentLoaded", () => {
    const contentElements = document.querySelectorAll("[data-content]");
    const srcElements = document.querySelectorAll("[data-src]");
    const hrefElements = document.querySelectorAll("[data-href]");

    // Replace the innerHTML of every element with "data-content" attribute
    if (window.contentVars) {
        for (let e of contentElements) {
            const key = e.dataset.content;

            if (window.contentVars[key]) {
                e.innerHTML = window.contentVars[key];
            } else {
                console.log(`${key} not found in window.contentVars.`);
            }
        }
    } else {
        console.log("window.contentVars array not found.");
    }

    // Replace the src of every element with a "data-src" attribute
    if (window.srcVars) {
        for (let e of srcElements) {
            const key = e.dataset.src;

            if (window.srcVars[key]) {
                e.src = window.srcVars[key];
            } else {
                console.log(`${key} not found in window.srcVars.`);
            }
        }
    } else {
        console.log("window.srcVars array not found.");
    }

    // Replace the navigation link of every element with a "data-href" attribute
    if (window.hrefVars) {
        for (let e of hrefElements) {
            const key = e.dataset.href;

            if (window.hrefVars[key]) {
                e.href = window.hrefVars[key];
                e.target = "_blank";
            } else {
                console.log(`${key} not found in window.hrefVars.`);
            }
        }
    } else {
        console.log("window.hrefVars array not found.");
    }
});
