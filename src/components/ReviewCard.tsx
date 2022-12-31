import styled from "styled-components";

import { Question } from "../models/question";
import { Answer } from "../models/answer";
import { useQuizContext } from "../context/QuizContext";
import { Container, Option, Counter } from "./QuizCard";

interface ReviewCardProps {
  question?: Question;
  userAnswer: Answer[];
  handleFinishReview: () => void;
}

const Wrapper = styled(Option)`
  &.correct {
    border: none;
    outline: 2px solid green;
  }
`;

const Buttons = styled.div`
  button {
    margin-right: 10px;

    :last-child {
      background-color: black;
      color: white;
    }
  }
`;

export default function ReviewCard({
  question,
  handleFinishReview,
  userAnswer,
}: ReviewCardProps) {
  const { isLastQuestion, isFirstQuestion, back, questions, currentQuestion } =
    useQuizContext();

  return (
    <Container>
      <Counter>
        {currentQuestion + 1} / {questions.length}
      </Counter>

      <h1>Review Card</h1>

      <h3>{question?.question}</h3>

      <div>
        {question?.answers.map((answer, idx) => {
          return (
            <Wrapper
              key={answer}
              className={idx + 1 === question.correct ? "correct" : ""}
            >
              {idx + 1}. {answer}
            </Wrapper>
          );
        })}
      </div>

      <Buttons>
        {!isFirstQuestion && <button onClick={back}>Back</button>}

        <button onClick={handleFinishReview}>
          {isLastQuestion ? "Finish Review" : "Next"}
        </button>
      </Buttons>
    </Container>
  );
}
