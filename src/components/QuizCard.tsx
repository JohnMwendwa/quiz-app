import { useState, useEffect } from "react";

import { useQuizContext } from "../context/QuizContext";
import { Question } from "../models/question";

interface Answer {
  no: number;
  answer: number;
  isCorrect: boolean;
}

export default function QuizCard() {
  const {
    questions,
    currentQuestion,
    back,
    next,
    isFirstQuestion,
    isLastQuestion,
  } = useQuizContext();

  const [question, setQuestion] = useState<Question>();

  useEffect(() => {
    setQuestion(questions[currentQuestion]);
  }, [question, currentQuestion]);

  const handleSubmit = () => {
    if (!isLastQuestion) return next();

    alert("Submitted!");
  };

  return (
    <>
      <h1>Quiz Card</h1>

      <h3>{question?.question}</h3>

      {question?.answers.map((answer, idx) => {
        return (
          <div key={answer}>
            {idx + 1}. {answer}
          </div>
        );
      })}

      {!isFirstQuestion && <button onClick={back}>Back</button>}

      <button onClick={handleSubmit}>
        {isLastQuestion ? "Finish" : "Next"}
      </button>
    </>
  );
}
