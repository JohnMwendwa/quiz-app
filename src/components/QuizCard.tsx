import { useState } from "react";
import styled from "styled-components";

import { useQuizContext } from "../context/QuizContext";
import { Question } from "../models/question";

interface QuizCardProps {
  question?: Question;
  currentQuestion: number;
  updateAnswers: (currentQuestion: number, idx: number) => void;
  handleSubmit: () => void;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  position: relative;

  h1 {
    text-align: center;
    margin-bottom: 10px;
  }

  button {
    padding: 5px 20px;
    margin-top: 10px;
    cursor: pointer;
  }

  > button {
    background-color: black;
    color: white;
    border-radius: 3px;
  }
`;

export const Option = styled.div`
  border: 1px solid black;
  padding: 5px 10px;
  border-radius: 3px;
  margin-top: 10px;
  cursor: pointer;

  &.active {
    border: 2px solid green;
  }
`;

export const Counter = styled.div`
  position: absolute;
  top: -30px;
  right: -30px;
  background-color: black;
  color: white;
  border: 1px solid black;
  border-radius: 0 3px 0 20px;
  padding: 3px 15px;
  font-weight: 900;
`;

export default function QuizCard({
  question,
  currentQuestion,
  updateAnswers,
  handleSubmit,
}: QuizCardProps) {
  const { questions, isLastQuestion } = useQuizContext();
  const [selected, setSelected] = useState<number>(-1);

  const handleClick = (currentQuestion: number, idx: number) => {
    console.log("Clicked", idx);
    setSelected(idx);
    updateAnswers(currentQuestion, idx);
  };

  const handleNext = () => {
    setSelected(-1);
    handleSubmit();
  };
  return (
    <Container>
      <Counter>
        {currentQuestion + 1} / {questions.length}
      </Counter>

      <h1>Quiz Card</h1>

      <h2>{question?.question}</h2>

      <div>
        {question?.answers.map((answer, idx) => {
          return (
            <Option
              className={selected === idx ? "active" : ""}
              key={answer}
              onClick={() => handleClick(currentQuestion, idx)}
            >
              {idx + 1}. {answer}
            </Option>
          );
        })}
      </div>

      <button onClick={handleNext}>{isLastQuestion ? "Finish" : "Next"}</button>
    </Container>
  );
}
