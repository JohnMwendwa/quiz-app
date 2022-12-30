import { createContext, useContext } from "react";

import questions from "../data/data";
import { Question } from "../models/question";

interface ContextProps {
  questions: Question[];
}

interface Props {
  children: React.ReactNode;
}

const QuizContext = createContext({} as ContextProps);

export const QuizContextProvider = ({ children }: Props) => {
  return (
    <QuizContext.Provider value={{ questions }}>
      {children}
    </QuizContext.Provider>
  );
};

export const useQuizContext = () => {
  return useContext(QuizContext);
};
