import { createContext, useContext, useState } from "react";

import questions from "../data/data";
import { Question } from "../models/question";

interface ContextProps {
  questions: Question[];
  currentQuestion: Number;
}

interface Props {
  children: React.ReactNode;
}

const QuizContext = createContext({} as ContextProps);

export const QuizContextProvider = ({ children }: Props) => {
  const [isCorrect, setiIsCorrect] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const back = () => {
    if (currentQuestion !== 0) {
      return setCurrentQuestion((prev) => prev - 1);
    }
    return;
  };
  return (
    <QuizContext.Provider value={{ questions, currentQuestion }}>
      {children}
    </QuizContext.Provider>
  );
};

export const useQuizContext = () => {
  return useContext(QuizContext);
};
