import { useState } from "react";
import FinalScore from "./FinalScore";

const questions = [
  {
    questionText: "1. What sound does a cat make?",
    answerOptions: [
      { answerText: "Bhau-Bhau", isCorrect: false },
      { answerText: "Meow-Meow", isCorrect: true },
      { answerText: "Oink-Oink", isCorrect: false },
    ],
  },
  {
    questionText: "2. What would you probably find in your fridge?",
    answerOptions: [
      { answerText: "Shoes", isCorrect: false },
      { answerText: "Ice Cream", isCorrect: true },
      { answerText: "Books", isCorrect: false },
    ],
  },
  {
    questionText: "3. Which planet is closest to the sun?",
    answerOptions: [
      { answerText: "Earth", isCorrect: false },
      { answerText: "Mars", isCorrect: false },
      { answerText: "Mercury", isCorrect: true },
    ],
  },
  {
    questionText: "4. How many colors are in a rainbow?",
    answerOptions: [
      { answerText: "5", isCorrect: false },
      { answerText: "7", isCorrect: true },
      { answerText: "9", isCorrect: false },
    ],
  },
];

export default function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerOption = (index, isCorrect) => {
    setAnswered(true);
    setSelectedAnswer(index);
    if (isCorrect) setScore(score + 1);
  };

  const NextQuestion = () => {
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setAnswered(false);
      setSelectedAnswer(null);
    } else {
      setShowScore(true);
    }
  };

  const PrevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setAnswered(false);
      setSelectedAnswer(null);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setAnswered(false);
    setSelectedAnswer(null);
    setShowScore(false);
  };

  return (
    <div
      className="h-screen w-full flex justify-center items-center p-4 "
      style={{
        background:
          "linear-gradient(107.96deg, #BECFEE 0%, #71C6E2 50%, #D9F4FA 75%, #BECFEE 100%)",
        backdropFilter: "blur(200px)",
      }}
    >
      <div
        className="absolute h-[715px] w-[min(1542px,82vw)] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-[42px] flex justify-center items-center"
        style={{
          background:
            "linear-gradient(107.96deg, #839ed1 0%, #6cafc7 50%, #84afb9 75%, #BECFEE 100%)",
          backdropFilter: "blur(200px)",
        }}
      >
        <div className="relative w-[90%] max-w-5xl bg-[#f5fcff] shadow-xl rounded-[32px] px-10 py-12 border border-white/40 backdrop-blur-md">
          {!showScore && (
            <>
              <div className="absolute bottom-4 left-4 flex flex-col items-center ">
                <div className="bg-white shadow-md rounded-xl px-3 py-1 text-sm font-semibold italic">
                  Best of Luck !
                </div>
                <img src="/gif.gif" className="w-20 opacity-95" />
              </div>

              {/* Title */}
              <h1
                className="
     bg-gradient-to-r from-[#15313d] to-[#3cabda] bg-clip-text 
     text-transparent font-['DM_Serif_Display'] italic 
     text-[70px] leading-[24px] tracking-[-4px] w-[919px] h-[129px] 
     mx-auto text-center flex items-center justify-center"
              >
                Test Your Knowledge
              </h1>

              <p className="text-center text-gray-600 mt-2">
                Answer all questions to see your results
              </p>

              {/* Progress Bar */}
              <div className="flex justify-center mt-6 gap-[2rem] mx-auto">
                {questions.map((_, i) => (
                  <div
                    key={i}
                    className={`h-[6px] rounded-full w-[9rem] transition-all ${
                      i <= currentQuestion ? "bg-[#1e3d4f]" : "bg-gray-300"
                    }`}
                  ></div>
                ))}
              </div>
            </>
          )}

          {/* Show Final Score */}
          {showScore ? (
            <FinalScore
              score={score}
              total={questions.length}
              restart={restartQuiz}
            />
          ) : (
            <div className="mt-10">
              {/* Question */}
              <div className="text-center text-xl font-semibold w-[677px] mx-auto text-[#1e3d4f] mb-6 bg-[#dff2ff] py-3 rounded-xl border border-[#b7e2ff]">
                {questions[currentQuestion].questionText}
              </div>

              {/* Answers */}
              {questions[currentQuestion].answerOptions.map(
                (option, index) => (
                  <button
                    key={index}
                    onClick={() =>
                      handleAnswerOption(index, option.isCorrect)
                    }
                    className={`block w-[677px] p-3 mb-3 rounded-xl border text-center text-lg transition-all mx-auto font-semibold bg-white
                 ${
                   answered
                     ? index === selectedAnswer
                       ? option.isCorrect
                         ? "bg-green-300 border-green-600 text-green-900"
                         : "bg-red-300 border-red-600 text-red-900"
                       : "bg-gray-200 border-gray-400 text-gray-500 cursor-not-allowed"
                     : "bg-[#cfe9ff] border-[#88c9ff] text-[#0d2a3f] hover:bg-[#b7ddff]"
                 }
              `}
                  >
                    {option.answerText}
                  </button>
                )
              )}

              {/* Navigation */}
              <div className="flex justify-end mt-6 gap-3">
                <button
                  onClick={PrevQuestion}
                  disabled={currentQuestion === 0}
                  className="p-2 px-4 bg-gradient-to-r from-[#C6E9F7] to-[#E5F8FF] rounded-lg shadow border hover:bg-gray-100 disabled:opacity-40"
                >
                  ←
                </button>

                <button
                  onClick={NextQuestion}
                  disabled={!answered}
                  className="p-2 px-4 bg-gradient-to-r from-[#C6E9F7] to-[#E5F8FF] rounded-lg shadow border hover:bg-gray-100 disabled:opacity-40"
                >
                  →
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
