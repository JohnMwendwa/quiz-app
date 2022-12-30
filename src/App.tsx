import { useState, useEffect } from "react";

import { useQuizContext } from "./context/QuizContext";
import { Question } from "./models/question";
import QuizCard from "./components/QuizCard";

interface Answer {
  no: number;
  answer: number;
  isCorrect: boolean;
}

function App() {
  const { questions, currentQuestion, isLastQuestion, next } = useQuizContext();
  const [UserAnswer, setUserAnswer] = useState<Answer[]>([]);
  const [question, setQuestion] = useState<Question>();
  const [isReview, setIsReview] = useState(false);
  const [isSession, setIsSession] = useState(false);

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

    alert("Submitted!");
  };

  return (
    <>
      <QuizCard
        question={question}
        currentQuestion={currentQuestion}
        updateAnswers={updateAnswers}
        handleSubmit={handleSubmit}
      />
    </>
  );
}

export default App;
