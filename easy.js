/* =========================
   EASY QUIZ QUESTIONS
========================= */
const questions = [
  {
    question: "What is the largest coral reef system in the Philippines?",
    choices: [
      "Tubbataha Reefs",
      "Great Barrier Reef",
      "Apo Reef",
      "Coral Triangle"
    ],
    answer: 0
  },
  {
    question: "Which animal is known as the largest fish in the world?",
    choices: [
      "Great White Shark",
      "Whale Shark",
      "Manta Ray",
      "Blue Marlin"
    ],
    answer: 1
  },
  {
    question: "Which marine animal is famous for living in sea anemones?",
    choices: [
      "Clownfish",
      "Sea Turtle",
      "Octopus",
      "Starfish"
    ],
    answer: 0
  },
  {
    question: "Which ecosystem helps protect coastlines from strong waves?",
    choices: [
      "Coral Reefs",
      "Deep Sea",
      "Open Ocean",
      "Arctic Ice"
    ],
    answer: 0
  },
  {
    question: "What do green sea turtles mainly eat?",
    choices: [
      "Seagrass",
      "Fish",
      "Coral",
      "Plankton"
    ],
    answer: 0
  }
];

/* =========================
   VARIABLES
========================= */
let currentQuestion = 0;
let score = 0;

/* =========================
   DOM ELEMENTS
========================= */
const questionText = document.getElementById("questionText");
const choiceButtons = document.querySelectorAll(".choice");
const scoreText = document.getElementById("score");
const questionNumber = document.getElementById("qNumber");
const progressBar = document.getElementById("progress");

const endScreen = document.getElementById("endScreen");
const finalScore = document.getElementById("finalScore");
const choicesContainer = document.getElementById("choices");

/* =========================
   LOAD QUESTION
========================= */
function loadQuestion() {
  const current = questions[currentQuestion];

  questionText.textContent = current.question;
  questionNumber.textContent = currentQuestion + 1;

  choiceButtons.forEach((btn, index) => {
    btn.textContent = current.choices[index];
    btn.className = "choice";
  });

  const progressPercent =
    ((currentQuestion + 1) / questions.length) * 100;
  progressBar.style.width = progressPercent + "%";
}

/* =========================
   ANSWER HANDLING
========================= */
choiceButtons.forEach(button => {
  button.addEventListener("click", () => {
    const selected = Number(button.dataset.index);
    const correct = questions[currentQuestion].answer;

    if (selected === correct) {
      button.classList.add("correct");
      score++;
      scoreText.textContent = score;
    } else {
      button.classList.add("wrong");
      choiceButtons[correct].classList.add("correct");
    }

    setTimeout(() => {
      currentQuestion++;

      if (currentQuestion < questions.length) {
        loadQuestion();
      } else {
        endQuiz();
      }
    }, 800);
  });
});

/* =========================
   END QUIZ
========================= */
function endQuiz() {
  questionText.style.display = "none";
  choicesContainer.style.display = "none";

  finalScore.textContent = score;
  endScreen.style.display = "block";
}

/* =========================
   START QUIZ
========================= */
loadQuestion();