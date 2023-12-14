const questions = [
    {
        questions: "Which country has the highest population density?",
        answers: [
            { text: "China", correct: false },
            { text: "Bangladesh", correct: true },
            { text: "India", correct: false },
            { text: "Japan", correct: false },


        ]
    },
    {
        questions: "What is the chemical symbol for water?",
        answers: [
            { text: "H₂O ", correct: true },
            { text: "NaCl", correct: false },
            { text: "CO₂", correct: false },
            { text: "NH₃", correct: false },


        ]
    },
    {
        questions: "Who painted the Mona Lisa?",
        answers: [
            { text: "Michelangelo", correct: false },
            { text: "Raphael", correct: false },
            { text: " Leonardo da Vinci", correct: true },
            { text: "Donatello", correct: false },


        ]
    },
    {
        questions: "What is the capital of Australia?",
        answers: [
            { text: "Sydney", correct: false },
            { text: "Melbourne", correct: false },
            { text: "Canberra", correct: true },
            { text: "Adelaide", correct: false },


        ]
    },
    {
        questions: "What year did the first iPhone release?",
        answers: [
            { text: "2004", correct: false },
            { text: "2007", correct: true },
            { text: "2010", correct: false },
            { text: "2013", correct: false },


        ]
    },
    {
        questions: "What is the closest star to Earth besides the Sun?",
        answers: [
            { text: "Proxima Centauri", correct: true },
            { text: "Sirius", correct: false },
            { text: "Alpha Centauri A", correct: false },
            { text: "Polaris", correct: false },


        ]
    },
    {
        questions: "On which continent is the Amazon rainforest located?",
        answers: [
            { text: "Africa", correct: false },
            { text: "Asia", correct: false },
            { text: "South America", correct: true },
            { text: "North America", correct: false },


        ]
    },
    {
        questions: "What is the chemical element with the atomic number 19?",
        answers: [
            { text: "Gold", correct: false },
            { text: "Potassium", correct: true },
            { text: "Silver", correct: false },
            { text: "Copper", correct: false },


        ]
    },
    {
        questions: "What is the tallest mountain in the world?",
        answers: [
            { text: "K2", correct: false },
            { text: "Mount Everest", correct: true },
            { text: "Kangchenjunga", correct: false },
            { text: "Mount McKinley", correct: false },


        ]
    },
    {
        questions: "How many bones are in the human adult body?",
        answers: [
            { text: "309", correct: false },
            { text: "205", correct: false },
            { text: "400", correct: false },
            { text: "206", correct: true },


        ]
    },
    {
        questions: " What is the chemical formula for table salt?",
        answers: [
            { text: "NaCl", correct: true },
            { text: "KCl", correct: false },
            { text: "CaCO₃", correct: false },
            { text: "H₂SO₄", correct: false },


        ]
    },
    {
        questions: " Who wrote the novel 'Pride and Prejudice'?",
        answers: [
            { text: " Mary Shelley", correct: false },
            { text: "Charlotte Brontë", correct: false },
            { text: "George Eliot", correct: false },
            { text: "Jane Austen", correct: true },


        ]
    },
    {
        questions: "What is the currency of Canada?",
        answers: [
            { text: " US Dollar", correct: false },
            { text: "Euro", correct: false },
            { text: " Canadian Dollar", correct: true },
            { text: " Mexican Peso", correct: false },


        ]
    },
    {
        questions: "What is the scientific name for the common housefly?",
        answers: [
            { text: "Apis mellifera", correct: false },
            { text: "Drosophila melanogaster", correct: true },
            { text: "Musca domestica", correct: false },
            { text: " Anopheles gambiae", correct: false },


        ]
    },
    {
        questions: "What is the largest planet in our solar system?",
        answers: [
            { text: "Earth", correct: false },
            { text: "Jupiter", correct: true },
            { text: "Saturn", correct: false },
            { text: "Neptune", correct: false },


        ]
    },
    {
        questions: " What is the capital of France?",
        answers: [
            { text: "London", correct: false },
            { text: "Berlin", correct: false },
            { text: "Paris", correct: true },
            { text: "Madrid", correct: false },


        ]
    },
    {
        questions: "What is the largest continent on Earth?",
        answers: [
            { text: "Africa", correct: true },
            { text: "Asia", correct: false },
            { text: "South America", correct: false },
            { text: "North America", correct: false },


        ]
    },
    {
        questions: "What is the chemical element with the symbol Au?",
        answers: [
            { text: "Silver", correct: false },
            { text: "Copper", correct: false },
            { text: "Gold", correct: true },
            { text: "Lead", correct: false },


        ]
    },
    {
        questions: "What is the name of the largest desert on Earth?",
        answers: [
            { text: "Atacama", correct: false },
            { text: "Arabian", correct: false },
            { text: "Gobi", correct: false },
            { text: "Sahara", correct: true },


        ]
    },
    {
        questions: "Which Mughal Emperor is considered the most successful and influential in shaping Pakistan's cultural and political identity?",

        answers: [
            { text: "Babur", correct: false },
            { text: "Akbar the Great", correct: false },
            { text: "Jahangir", correct: false },
            { text: "Aurangzeb", correct: true },


        ]
    },
]

const questionelement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextbutton = document.getElementById("next-btn");

let currentQuestionindex = 0;
let score = 0;

function startquiz() {
    currentQuestionindex = 0;
    score = 0;
    nextbutton.innerHTML = "NEXT";
    showQuestions();
}

function showQuestions() {
    resetState();
    let currentQuestions = questions[currentQuestionindex]
    let questionNo = currentQuestionindex + 1;
    questionelement.innerHTML = questionNo + ". " + currentQuestions.questions;

    currentQuestions.answers.forEach(answers => {
        const button = document.createElement("button");
        button.innerHTML = answers.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answers.correct) {
            button.dataset.correct = answers.correct;
        }
        button.addEventListener("click", selectedanswer);

    });
}
function resetState() {
    nextbutton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectedanswer(e) {
    const selectedbtn = e.target;
    const isCorrect = selectedbtn.dataset.correct === "true";
    if (isCorrect) {
        selectedbtn.classList.add("Correct");
        score++;
    } else {
        selectedbtn.classList.add("Incorrect");

    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("Correct");
        }
        button.disabled = true;
    })
    nextbutton.style.display = "block";
}
function showScore() {
    resetState();
    questionelement.innerHTML = `You Scored ${score} out of ${20}!`;
    nextbutton.innerHTML = "Play Again";
    nextbutton.style.display = "Block";
}
function handleNextButton() {
    currentQuestionindex++;
    if (currentQuestionindex < questions.length) {
        showQuestions();
    } else {
        showScore();
    }

}
nextbutton.addEventListener("click", () => {
    if (currentQuestionindex < questions.length) {
        handleNextButton();
    } else {
        startquiz();
    }
})
startquiz();
