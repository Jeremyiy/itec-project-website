/* =========================
   QUESTION BANKS
========================= */

/* EASY QUESTIONS */
const easyQuestions = [
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
    question: "Which marine animal lives in sea anemones?",
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
      "Open Ocean",
      "Deep Sea",
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

/* MEDIUM QUESTIONS */
const mediumQuestions = [
  {
    question: "Which ecosystem serves as a nursery for many marine species?",
    choices: [
      "Mangroves",
      "Open Ocean",
      "Deep Sea",
      "Ice Caps"
    ],
    answer: 0
  },
  {
    question: "Why are coral reefs important to marine ecosystems?",
    choices: [
      "They provide habitat and shelter",
      "They raise ocean temperature",
      "They reduce oxygen levels",
      "They block sunlight"
    ],
    answer: 0
  },
  {
    question: "Which human activity causes the most damage to coral reefs?",
    choices: [
      "Overfishing",
      "Rainfall",
      "Natural tides",
      "Ocean currents"
    ],
    answer: 0
  },
  {
    question: "What is the main role of seagrass beds?",
    choices: [
      "Stabilizing sediments and feeding marine life",
      "Blocking coral growth",
      "Polluting coastal waters",
      "Increasing wave force"
    ],
    answer: 0
  },
  {
    question: "Which conservation method best protects marine life?",
    choices: [
      "Marine protected areas",
      "Dynamite fishing",
      "Plastic dumping",
      "Coral mining"
    ],
    answer: 0
  }
];

/* HARD QUESTIONS */
const hardQuestions = [
  {
    question: "What is the scientific name of the green sea turtle?",
    choices: [
      "Chelonia mydas",
      "Eretmochelys imbricata",
      "Dermochelys coriacea",
      "Caretta caretta"
    ],
    answer: 0
  },
  {
    question: "Which zone of the ocean receives little to no sunlight?",
    choices: [
      "Aphotic zone",
      "Euphotic zone",
      "Intertidal zone",
      "Neritic zone"
    ],
    answer: 0
  },
  {
    question: "What gas is primarily absorbed by phytoplankton during photosynthesis?",
    choices: [
      "Carbon dioxide",
      "Oxygen",
      "Nitrogen",
      "Hydrogen"
    ],
    answer: 0
  },
  {
    question: "Which marine organism forms the base of most ocean food webs?",
    choices: [
      "Phytoplankton",
      "Zooplankton",
      "Small fish",
      "Coral polyps"
    ],
    answer: 0
  },
  {
    question: "What deep‑sea feature is formed by tectonic plate movement?",
    choices: [
      "Mid‑ocean ridge",
      "Coral reef",
      "Lagoon",
      "Seagrass meadow"
    ],
    answer: 0
  }
];

/* =========================
   SELECT DIFFICULTY
========================= */

const difficulty = document.body.dataset.difficulty;
let questions;

if (difficulty === "medium") {
  questions = mediumQuestions;
} else if (difficulty === "hard") {
  questions = hardQuestions;
} else {
  // default to easy
  questions = easyQuestions;
}

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
   HANDLE ANSWERS
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
