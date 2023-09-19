// codice JavaScript della pagina

let countdownNumberEl = document.querySelector(".timer-text");
let countdown = 50;
let timerCountdown;

const timer = function () {
  countdown = 50;
  countdownNumberEl.textContent = countdown;
  timerCountdown = setInterval(function () {
    countdown = --countdown <= 0 ? 50 : countdown;

    countdownNumberEl.textContent = countdown;
  }, 1000);
};

const stopTimer = function () {
  clearInterval(timerCountdown);
  timerCountdown = null;
};

const questionsEasy = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: [
      "Central Process Unit",
      "Computer Personal Unit",
      "Central Processor Unit"
    ]
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"]
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The logo for Snapchat is a Bell.",
    correct_answer: "False",
    incorrect_answers: ["True"]
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question:
      "Pointers were not used in the original C programming language; they were added later on in C++.",
    correct_answer: "False",
    incorrect_answers: ["True"]
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"]
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In web design, what does CSS stand for?",
    correct_answer: "Cascading Style Sheet",
    incorrect_answers: [
      "Counter Strike: Source",
      "Corrective Style Sheet",
      "Computer Style Sheet"
    ]
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the code name for the mobile operating system Android 7.0?",
    correct_answer: "Nougat",
    incorrect_answers: ["Ice Cream Sandwich", "Jelly Bean", "Marshmallow"]
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what is the character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"]
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"]
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"]
  }
];

const questionsMedium = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question: "What does HTML stand for?",
    correct_answer: "Hyper Text Markup Language",
    incorrect_answers: [
      " High Technology Modern Language",
      "Hyperlink and Text Markup Language",
      "Hyper Transfer Markup Language"
    ]
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question:
      " Which CSS property is used to change the background color of an element?",
    correct_answer: "background-color",
    incorrect_answers: ["color", "text-color", "bgcolor"]
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "medium",
    question:
      " CSS is a programming language used for adding interactivity to web pages?",
    correct_answer: "False",
    incorrect_answers: ["True"]
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "medium",
    question: " In JavaScript, NULL is an object",
    correct_answer: "True",
    incorrect_answers: ["False"]
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which CSS pseudo-class is used to select an element when the mouse pointer is over it?",
    correct_answer: ":hover",
    incorrect_answers: [" :active", ":focus", ":select"]
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question: "In web design, what does CSS stand for?",
    correct_answer: "Cascading Style Sheet",
    incorrect_answers: [
      "Counter Strike: Source",
      "Corrective Style Sheet",
      "Computer Style Sheet"
    ]
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question: "What does DOM stand for in the context of JavaScript?",
    correct_answer: "Document Object Model",
    incorrect_answers: [
      "Data Object Model",
      "Display Object Model",
      "Document Oriented Model"
    ]
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question:
      "What is the purpose of the 'addEventListener' method in JavaScript?",
    correct_answer: "To add a new event handler to an element",
    incorrect_answers: [
      "To remove an event handler from an element",
      "To check if an event handler is active",
      "To change the style of an element"
    ]
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "medium",
    question:
      "Which CSS selector selects all <p> elements inside a <div> element with the class 'container'?",
    correct_answer: "div.container p",
    incorrect_answers: ["div p", ".container p", "div > p.container"]
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question:
      "JavaScript's Array object has a built-in method called map for transforming arrays without modifying the original array.",
    correct_answer: "True",
    incorrect_answers: ["False"]
  }
];

const questionsHard = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question:
      "The HTML5 specification introduced the <header> and <footer> elements to represent header and footer content in a document.",
    correct_answer: "True",
    incorrect_answers: ["False"]
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question:
      "What is the CSS property used to create a responsive layout that adapts to different screen sizes and orientations?",
    correct_answer: "flexbox",
    incorrect_answers: ["grid", "media-query", "box-sizing"]
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "medium",
    question:
      "Which of the following is NOT a valid way to define a function in JavaScript?",
    correct_answer: "() => { /* function body */ }",
    incorrect_answers: [
      "function myFunction() { /* function body */ }",
      "const myFunction = function() { /* function body */ }",
      "function = () => { /* function body */ }"
    ]
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "medium",
    question:
      "In JavaScript, the 'this' keyword inside an arrow function refers to the calling",
    correct_answer: "True",
    incorrect_answers: ["False"]
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question:
      "In HTML5, the <article> element is used to define a container for navigation links.",
    correct_answer: "True",
    incorrect_answers: ["False"]
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question: "Which of the following is not a valid JavaScript data type?",
    correct_answer: "Character",
    incorrect_answers: ["undefined", "null", "boolean"]
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question: "What is the result of 3 + '3' in JavaScript",
    correct_answer: "33",
    incorrect_answers: ["6", 9, 6]
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which ECMAScript version introduced the 'class' keyword in JavaScript for defining classes?",
    correct_answer: "ECMAScript 6 (ES2015)",
    incorrect_answers: [
      " ECMAScript 5",
      "ECMAScript 2016",
      "ECMAScript 7 (ES2016)"
    ]
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "medium",
    question: "What does the JavaScript bind() method do?",
    correct_answer:
      "Creates a new function that, when called, has its this value set to a specific value.",
    incorrect_answers: [
      " Binds a function to a DOM element.",
      " Changes the prototype of an object.",
      " Removes an event listener from an element."
    ]
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question: "Which of the following is not a loop in JavaScript?",
    correct_answer: " if loop",
    incorrect_answers: [" for loop", "while loop", "do...while loop"]
  }
];

let currentQuestion = 0;
let score = 0;

const pageNumber = document.querySelector(".page-number");
const questionContainer = document.querySelector(".question");
const answer = document.querySelectorAll("#buttons button");

const startQuiz = function () {
  currentQuestion = 0;
  displayQuestion();
};

const displayQuestion = function () {
  pageNumber.innerHTML = `QUESTION ${
    currentQuestion + 1
  }<span id="page-number-span"> / ${questionsEasy.length}</span>`;
  answer.forEach((element) => {
    element.style.display = "inline";
  });
  questionContainer.style.color = "white";
  questionContainer.style.fontSize = "40px";
  questionContainer.style.fontWeight = "300";
  const currentQue = questionsEasy[currentQuestion];
  questionContainer.innerHTML = currentQue.question;

  const allOptions = currentQue.incorrect_answers.slice(); // Cloniamo l'array delle risposte errate
  allOptions.push(currentQue.correct_answer); // Aggiungiamo la risposta corretta

  const shuffle = shuffleArray(allOptions); // Mischiamo le opzioni
  console.log(shuffle);

  for (let i = 0; i < answer.length; i++) {
    if (i >= allOptions.length) {
      answer[i].style.display = "none";
    }
    answer[i].textContent = shuffle[i];
    answer[i].addEventListener("click", answerClick);
  }
};

const answerClick = function (event) {
  const circle = document.querySelector("svg circle");
  const selectedAnswer = event.target.textContent;
  const correctAnswer = questionsEasy[currentQuestion].correct_answer;

  if (selectedAnswer === correctAnswer) {
    score += 1;
  }

  currentQuestion++;

  if (currentQuestion < questionsEasy.length) {
    displayQuestion();
    circle.classList.remove("animation");
    countdown = 50;
    countdownNumberEl.textContent = countdown;
    setTimeout(() => {
      circle.classList.add("animation");
    }, 10);
    stopTimer();
    console.log(timerCountdown);
    timer();
  } else {
    alert("Hai completato il quiz! Punteggio: " + score);
  }
};

const shuffleArray = function (array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // Scambia gli elementi casualmente
  }
  return array;
};
startQuiz();
timer();
