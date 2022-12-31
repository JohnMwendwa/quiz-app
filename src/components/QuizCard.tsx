import styled from "styled-components";

import { useQuizContext } from "../context/QuizContext";
import { Question } from "../models/question";

interface QuizCardProps {
  question?: Question;
  currentQuestion: number;
  updateAnswers: (currentQuestion: number, idx: number) => void;
  handleSubmit: () => void;
}

const Container = styled.div`
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
`;

const Option = styled.div`
  border: 1px solid black;
  padding: 5px 10px;
  border-radius: 3px;
  margin-top: 10px;
  cursor: pointer;
`;

const Counter = styled.div`
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
              key={answer}
              onClick={() => updateAnswers(currentQuestion, idx)}
            >
              {idx + 1}. {answer}
            </Option>
          );
        })}
      </div>

      <button onClick={handleSubmit}>
        {isLastQuestion ? "Finish" : "Next"}
      </button>
    </Container>
  );
}
