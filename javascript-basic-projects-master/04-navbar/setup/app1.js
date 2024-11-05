// const setElements = () => {
//     const navToggle = document.querySelector(".nav-toggle");
//     const links = document.querySelector(".links");

//     navToggle.addEventListener("click", () => {
//         links.classList.toggle("show");
//     });
// };

// window.onload = () => {
//     setElements();
// };

const setElements = () => {
    const navToggle = document.querySelector(".nav-toggle");
    const links = document.querySelector(".links");

    navToggle.addEventListener("click", () => {
        if (links.style.opacity === "0" || links.style.opacity === "") {
            links.style.opacity = "1";
            links.style.visibility = "visible";
        } else {
            links.style.opacity = "0";
            links.style.visibility = "hidden";
        }
    });
};

window.onload = () => {
    setElements();
};
