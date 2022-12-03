import React, { useState } from "react";
import "./App.css";

function App() {
  // Properties
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const questions = [
    {
      text: "HTML este acronim pentru",
      options: [
        { id: 0, text: "Home Tool Markup Language", isCorrect: false },
        { id: 1, text: "Hyper Text Markup Language", isCorrect: true },
        {
          id: 2,
          text: "Hyperlinks and Text Markup Language",
          isCorrect: false,
        },
        { id: 3, text: "Hyper Text Made Language", isCorrect: false },
      ],
    },
    {
      text: "Cine face standerdele Web?",
      options: [
        { id: 0, text: "Consorțiul World Wide Web", isCorrect: true },
        { id: 1, text: "Google", isCorrect: false },
        { id: 2, text: "Mozilla", isCorrect: false },
        { id: 3, text: " Microsoft", isCorrect: false },
      ],
    },
    {
      text: "Alege elementul HTML corect pentru cel mai mare titlu (heading):",
      options: [
        { id: 0, text: " <h1>", isCorrect: true },
        { id: 1, text: "<head>", isCorrect: false },
        { id: 2, text: " <heading>", isCorrect: false },
        { id: 3, text: "<h6>", isCorrect: false },
      ],
    },
    {
      text: "Care este elementul HTML corect pentru a trece pe rândul următor?",
      options: [
        { id: 0, text: "<lb>", isCorrect: false },
        { id: 1, text: "<br>", isCorrect: true },
        { id: 2, text: " <break>", isCorrect: false },
        { id: 3, text: " <brk>", isCorrect: false },
      ],
    },
    {
      text: "Alege elementul HTML corect pentru a defini un text accentuat:",
      options: [
        { id: 0, text: " <italic>", isCorrect: false },
        { id: 1, text: " <i>", isCorrect: false },
        { id: 2, text: "<em>", isCorrect: true },
        { id: 3, text: " <br>", isCorrect: false },
      ],
    },

    {
      text: "Care dintre următoarele sunt toate elemente <table>?",
      options: [
        { id: 0, text: "<thead><body><tr>", isCorrect: false },
        { id: 1, text: "<table><tr><td>", isCorrect: true },
        { id: 2, text: "<table><head><tfoot>", isCorrect: false },
        { id: 3, text: "<table><tr><tt>", isCorrect: false },
      ],
    },
    {
      text: "Cum poți crea o listă numerotată?",
      options: [
        { id: 0, text: "<ul>", isCorrect: false },
        { id: 1, text: "<ol>", isCorrect: true },
        { id: 2, text: "<list>", isCorrect: false },
        { id: 3, text: " <dl>", isCorrect: false },
      ],
    },
    {
      text: "Care atribut HTML specifică textul alternativ pentru o imagine, dacă imaginea nu poate fi afișată?",
      options: [
        { id: 0, text: "title", isCorrect: false },
        { id: 1, text: "longdesc", isCorrect: false },
        { id: 2, text: "src", isCorrect: false },
        { id: 3, text: "alt", isCorrect: true },
      ],
    },
    {
      text: "Cum poți crea o listă cu buline?",
      options: [
        { id: 0, text: "<ul>", isCorrect: true },
        { id: 1, text: "<list>", isCorrect: false },
        { id: 2, text: "<dl>", isCorrect: false },
        { id: 3, text: "<ol>", isCorrect: false },
      ],
    },
    {
      text: "Comentariile HTML încep cu:",
      options: [
        { id: 0, text: "-->", isCorrect: false },
        { id: 1, text: " <!-- ", isCorrect: true },
        { id: 2, text: "/*", isCorrect: false },
        { id: 3, text: "**", isCorrect: false },
      ],
    },
  ];

  // Helper Functions

  /* A possible answer was clicked */
  const optionClicked = (isCorrect) => {
    // Increment the score
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  /* Resets the game back to default */
  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
  };

  return (
    <div className="App">
      {/* 1. Header  */}
      <h1>HTML Quiz</h1>

      {/* 2. Current Score  */}
      <h2>Scor: {score}</h2>

      {/* 3. Show results or show the question game  */}
      {showResults ? (
        /* 4. Final Results */
        <div className="final-results">
          <h1>Rezultat final</h1>
          <h2>
            {score} out of {questions.length} correct - (
            {(score / questions.length) * 100}%)
          </h2>
          <button onClick={() => restartGame()}>Restart joc</button>
        </div>
      ) : (
        /* 5. Question Card  */
        <div className="question-card">
          {/* Current Question  */}
          <h2>
            Intrebarea: {currentQuestion + 1} din {questions.length}
          </h2>
          <h3 className="question-text">{questions[currentQuestion].text}</h3>

          {/* List of possible answers  */}
          <ul>
            {questions[currentQuestion].options.map((option) => {
              return (
                <li
                  key={option.id}
                  onClick={() => optionClicked(option.isCorrect)}
                >
                  {option.text}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
