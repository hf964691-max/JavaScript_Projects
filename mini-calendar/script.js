const monthNameEl = document.querySelector(".month-name");
const dayNameEl = document.querySelector(".day-name");
const dayNumberEl = document.querySelector(".day-number");
const yearEl = document.querySelector(".year");

const date = new Date();

monthNameEl.textContent = date.toLocaleDateString("en", {
    month: "long",
});

dayNameEl.textContent = date.toLocaleDateString("en", {
    weekday: "long",
});

dayNumberEl.textContent = date.getDate();
yearEl.textContent = date.getFullYear();
