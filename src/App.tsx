import { useState, useEffect } from "react";

import { useQuizContext } from "./context/QuizContext";
import { Question } from "./models/question";
import { Answer } from "./models/answer";
import Instructions from "./components/Instructions";
import QuizCard from "./components/QuizCard";
import ReviewCard from "./components/ReviewCard";
import ScoreCard from "./components/ScoreCard";

function App() {
  const {
    questions,
    currentQuestion,
    isLastQuestion,
    next,
    setCurrentQuestion,
  } = useQuizContext();

  // Track and save user answers
  const [userAnswer, setUserAnswer] = useState<Answer[]>([]);
  // Keep track of current question
  const [question, setQuestion] = useState<Question>();
  // Check if a user wants to review questions
  const [isReview, setIsReview] = useState(false);
  // Track when a user begins answering questions
  const [isSession, setIsSession] = useState(false);
  // show Final score
  const [showScore, setShowScore] = useState<boolean>(false);

  useEffect(() => {
    setQuestion(questions[currentQuestion]);
  }, [question, currentQuestion]);

  const updateAnswers = (no: number, answer: number) => {
    const idx = userAnswer?.findIndex((answer) => answer.no === no);

    const answerObj: Answer = {
      no,
      answer,
      isCorrect: answer + 1 === question?.correct,
    };

    // only update user asnswers if it's a new one
    if (idx === -1) {
      return setUserAnswer((prev) => [...prev, answerObj]);
    }

    // update an existing answer
    setUserAnswer((prev) =>
      prev?.map((obj) => {
        if (obj.no === no) {
          return answerObj;
        }
        return obj;
      })
    );
  };

  const handleSubmit = () => {
    if (!isLastQuestion) return next();
    setIsSession(false);
    setCurrentQuestion(0);
    alert("Submitted!");
    setShowScore(true);
  };

  const handleFinishReview = () => {
    if (!isLastQuestion) return next();
    setCurrentQuestion(0);
    setUserAnswer([]);
    setIsReview(false);
  };

  const handleRestart = () => {
    setShowScore(false);
    setCurrentQuestion(0);
  };
  const handleReview = () => {
    setShowScore(false);
    setIsReview(true);
  };

  return (
    <>
      {!isSession && !showScore && !isReview && (
        <Instructions startSession={setIsSession} />
      )}

      {isSession && (
        <QuizCard
          question={question}
          currentQuestion={currentQuestion}
          updateAnswers={updateAnswers}
          handleSubmit={handleSubmit}
        />
      )}

      {isReview && (
        <ReviewCard
          question={question}
          userAnswer={userAnswer}
          handleFinishReview={handleFinishReview}
        />
      )}

      {showScore && (
        <ScoreCard
          handleRestart={handleRestart}
          handleReview={handleReview}
          answers={userAnswer}
        />
      )}
    </>
  );
}

export default App;
