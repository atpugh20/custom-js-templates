//================
// HTML VARIABLES
//================
window.contentVars = {
    // Location
    location: "Vancouver Convention Centre",
    city: "Vancouver",
    address: "1055 Canada Pl<br>Vancouver, BC V6C 0C3<br>Canada",

    // Rooms
    speaker_room: "TBD",
    booth_num: "TBD",

    // USCAP Info
    organization: "USCAP",
};

window.srcVars = {
    logo: "https://2027am.uscap.org/wp-content/uploads/2026/03/molecule_uscap_orange.png",
    main_banner: "https://2027am.uscap.org/wp-content/uploads/2026/04/AM2026-Logo-HORIZONTAL.png",
    stacked_banner: "https://2027am.uscap.org/wp-content/uploads/2026/04/AM2026-Logo-STACKED.png",
};

window.hrefVars = {
    location: "https://www.vancouverconventioncentre.com/",
    my_uscap: "https://my.uscap.org",
    registration: "https://uscap.org/2027am-registration",
};

//=======
// MAIN
//=======
document.addEventListener("DOMContentLoaded", () => {
    const contentElements = document.querySelectorAll("[data-content]");
    const srcElements = document.querySelectorAll("[data-src]");
    const hrefElements = document.querySelectorAll("[data-href]");

    // Content Templates
    for (let e of contentElements) {
        const key = e.dataset.content;

        if (window.contentVars[key]) {
            e.textContent = window.contentVars[key];
        }
    }

    // Image Source Templates
    for (let e of srcElements) {
        const key = e.dataset.src;

        if (window.srcVars[key]) {
            e.src = window.srcVars[key];
        }
    }

    // Website Link Templates
    for (let e of hrefElements) {
        const key = e.dataset.href;

        if (window.hrefVars[key]) {
            e.href = window.hrefVars[key];
        }
    }
});
