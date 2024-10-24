let count = 0;
const value = document.getElementById("value");

const updateColor = (value, count) => {
    if (count > 0) {
        value.style.color = "green";
    } else if (count < 0) {
        value.style.color = "red";
    } else {
        value.style.color = "#222";
    }
};

const updateValue = (value, count) => {
    value.textContent = count;
    updateColor(value, count);
};

const handleButtonClick = action => {
    if (action === "decrease") {
        count--;
    } else if (action === "increase") {
        count++;
    } else if (action === "reset") {
        count = 0;
    }
    updateValue(value, count);
};

const setClickEvent = () => {
    document.querySelector(".decrease").addEventListener("click", () => handleButtonClick("decrease"));
    document.querySelector(".increase").addEventListener("click", () => handleButtonClick("increase"));
    document.querySelector(".reset").addEventListener("click", () => handleButtonClick("reset"));
};

window.onload = setClickEvent();
