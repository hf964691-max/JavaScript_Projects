const containerEl = document.querySelector(".container");

const careers = ["Youtuber", "Web Developer", "Freelancer", "Instructor", "Teacher"];

let careerIndex = 0;

let characterindex = 0;

updateText();

function updateText() {
    characterindex++;
    containerEl.innerHTML = `
<h1>I am ${careers[careerIndex].slice(0, 1) === "I" ? "an" : "a"} ${careers[careerIndex].slice(0, characterindex)}</h1>
`;

    if (characterindex === careers[careerIndex].length) {
        careerIndex++;
        characterindex = 0;
    }
    if (careerIndex === careers.length) {
        careerIndex = 0;
    }
    setTimeout(updateText, 300);
}
