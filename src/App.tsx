import { useState, useEffect } from "react";

import { useQuizContext } from "./context/QuizContext";
import { Question } from "./models/question";
import Instructions from "./components/Instructions";
import QuizCard from "./components/QuizCard";

interface Answer {
  no: number;
  answer: number;
  isCorrect: boolean;
}

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
  };

  return (
    <>
      {!isSession && <Instructions startSession={setIsSession} />}

      {isSession && (
        <QuizCard
          question={question}
          currentQuestion={currentQuestion}
          updateAnswers={updateAnswers}
          handleSubmit={handleSubmit}
        />
      )}
    </>
  );
}

export default App;
