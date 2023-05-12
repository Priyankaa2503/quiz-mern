import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Game from "../components/Game";

function Quiz() {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showAnswers, setShowAnswers] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    loadQuestions();
  }, []);

  const loadQuestions = async () => {
    const { data } = await axios.get("/api/question");
    const shuffledQuestions = shuffleArray(data).slice(0, 5); // Shuffle the questions and select the first 5
    const formattedQuestions = shuffledQuestions.map((question) => ({
      ...question,
      answers: [question.correct_answer, ...question.incorrect_answers].sort(
        () => Math.random() - 0.5
      ),
    }));
    setQuestions(formattedQuestions);
  };

  const handleAnswer = (answer) => {
    if (!showAnswers) {
      if (answer === questions[currentIndex].correct_answer) {
        setScore(score + 1);
      }
    }
    setShowAnswers(true);
  };

  const handleNextQuestion = () => {
    setShowAnswers(false);
    setCurrentIndex(currentIndex + 1);
  };

  const handleReturnHome = () => {
    navigate("/"); // Replace "/" with the actual home page route
  };

  return questions.length > 0 ? (
    <div className="h-screen bg-[#313131] w-full flex justify-center items-center">
      {currentIndex >= questions.length ? (
        <div className="text-white text-center">
          <h1 className="text-3xl md:text-5xl font-bold">
            Game Ends! 🎊
            <br /> Your score is: {score}/5!
          </h1>
          <button
            className="mt-4 px-4 py-2 bg-[#734EDC] text-white font-bold rounded-lg"
            onClick={handleReturnHome}
          >
            Return to Home
          </button>
        </div>
      ) : (
        <Game
          data={questions[currentIndex]}
          showAnswers={showAnswers}
          handleNextQuestion={handleNextQuestion}
          handleAnswer={handleAnswer}
        />
      )}
    </div>
  ) : (
    <h2 className="text-2xl text-white font-bold">Loading...</h2>
  );
}

const shuffleArray = (array) => {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

export default Quiz;
