import { createContext, useContext, useState } from "react";

import questions from "../data/data";
import { Question } from "../models/question";

interface ContextProps {
  questions: Question[];
  currentQuestion: number;
  isFirstQuestion: boolean;
  isLastQuestion: boolean;
  setCurrentQuestion: React.Dispatch<React.SetStateAction<number>>;
  back: () => void;
  next: () => void;
}

interface Props {
  children: React.ReactNode;
}

const QuizContext = createContext({} as ContextProps);

export const QuizContextProvider = ({ children }: Props) => {
  const [isCorrect, setIsCorrect] = useState<boolean>(false);
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);

  const back = () => {
    if (currentQuestion !== 0) {
      return setCurrentQuestion((prev) => prev - 1);
    }
    return;
  };

  const next = () => {
    setCurrentQuestion((prev) => {
      if (prev >= questions.length - 1) return prev;

      return prev + 1;
    });
  };

  const isFirstQuestion = currentQuestion === 0;
  const isLastQuestion = currentQuestion === questions.length - 1;

  return (
    <QuizContext.Provider
      value={{
        questions,
        currentQuestion,
        back,
        next,
        isFirstQuestion,
        isLastQuestion,
        setCurrentQuestion,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export const useQuizContext = () => {
  return useContext(QuizContext);
};
