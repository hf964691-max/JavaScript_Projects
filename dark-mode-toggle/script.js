const inputEl = document.querySelector(".input");

const bodeEl = document.querySelector("body");

inputEl.checked = JSON.parse(localStorage.getItem("mode"));

updateBody();

function updateBody() {
    if (inputEl.checked) {
        bodeEl.style.background = "black";
    } else {
        bodeEl.style.background = "white";
    }
}

inputEl.addEventListener("input", () => {
    updateBody();
    updateLocalStorage();
})

function updateLocalStorage() {
    localStorage.setItem("mode", 
    JSON.stringify(inputEl.checked))
}