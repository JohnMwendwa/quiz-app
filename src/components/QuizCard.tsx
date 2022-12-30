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
  const [UserAnswer, setUserAnswer] = useState<Answer[]>([]);

  useEffect(() => {
    setQuestion(questions[currentQuestion]);
  }, [question, currentQuestion]);

  const updateAnswers = (no: number, answer: number) => {
    const idx = UserAnswer?.findIndex((answer) => answer.no === no);

    const answerObj: Answer = {
      no,
      answer,
      isCorrect: answer + 1 === question?.correct,
    };

    if (idx === -1) {
      return setUserAnswer((prev) => [...prev, answerObj]);
    }

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

    alert("Submitted!");
  };

  return (
    <>
      <h1>Quiz Card</h1>

      <h3>{question?.question}</h3>

      {question?.answers.map((answer, idx) => {
        return (
          <div key={answer} onClick={() => updateAnswers(currentQuestion, idx)}>
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
