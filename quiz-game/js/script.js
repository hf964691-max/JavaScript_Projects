// Step 1: Define Quiz Data

const quizData = [
    {
        question:
            "Which CSS property is used to change the background color of an element?",
        options: ["color", "background-color", "canvas-color", "bgcolor"],
        correct: 1,
    },
    {
        question: "What does the 'DOM' stand for in JavaScript?",
        options: [
            "Document Object Model",
            "Data Object Management",
            "Digital Orientation Method",
            "Desktop Operating Module",
        ],
        correct: 0,
    },
    {
        question: "Which HTML tag is used to define an internal style sheet?",
        options: ["<script>", "<css>", "<style>", "<link>"],
        correct: 2,
    },
    {
        question:
            "In JavaScript, which keyword is used to declare a variable that cannot be reassigned?",
        options: ["var", "let", "static", "const"],
        correct: 3,
    },
    {
        question:
            "Which HTTP method is typically used to request data from a server without modifying it?",
        options: ["POST", "GET", "PUT", "DELETE"],
        correct: 1,
    },
];

// Step 2: JavaScript Initialization

const quiz = document.querySelector("#quiz")
const answerElm = document.querySelectorAll(".answer");
const [questionElm, option_1, option_2, option_3, option_4] =
    document.querySelectorAll(
        "#question, .option_1, .option_2, .option_3, .option_4",
    );
const submitBtn = document.getElementById('submit')

let currentQuiz = 0;
let score = 0;

// Step 3: Load Quiz Function

const loadQuiz = () => {
    const { question, options } = quizData[currentQuiz];
    console.log(options)
    questionElm.innerText = `${currentQuiz + 1} : ${question}`
    options.forEach((curOption, index) => {
        return (window[`option_${index + 1}`].innerText = curOption)
    })

}

loadQuiz();

// Step 4: Get Selected Answer Function on Button click

const getSelectedOption = () => {
    // let ans_index;
    // answerElm.forEach((curOption, index) => {
    //     if (curOption.checked) {
    //         ans_index = index
    //     }
    // })
    // return ans_index
    let answerElement = Array.from(answerElm)
    return answerElement.findIndex((curElem) => curElem.checked)
}

const deselectedAnswer = () => {
    answerElm.forEach((curElem) => curElem.checked = false)
}

submitBtn.addEventListener('click', (e) => {
    e.preventDefault()
    const selectedOptionIndex = getSelectedOption()
    console.log(selectedOptionIndex)

    if (selectedOptionIndex === quizData[currentQuiz].correct) {
        score++;
    }

    currentQuiz++;

    if (currentQuiz < quizData.length) {
        deselectedAnswer()
        loadQuiz();
    } else {
        quiz.innerHTML = `
    <div class="result">
        <h2>🏆 Your Score: ${score}/${quizData.length} Correct Answers</h2>
        <p>Congratulations on completing the quiz! 🎉</p>
        <button class="reload-button" onclick="location.reload()">Play Again 🔄</button>
    </div>
`;
    }

})

