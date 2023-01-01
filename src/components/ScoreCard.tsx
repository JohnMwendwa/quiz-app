import styled from "styled-components";

import { useQuizContext } from "../context/QuizContext";
import { Answer } from "../models/answer";

interface ScoreCardProps {
  handleRestart: () => void;
  handleReview: () => void;
  answers: Answer[];
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 600px) {
    width: 400px;
  }
`;
const Score = styled.div`
  font-size: 1.5rem;
  padding: 5px 0;
`;
const ScoreReview = styled.div`
  span {
    font-weight: bold;
    font-size: 18px;
  }
`;
const Buttons = styled.div`
  margin-top: 30px;

  button {
    margin-right: 10px;
    margin-bottom: 5px;
    padding: 8px 10px;
    background-color: yellow;
    border: 1px solid black;
    border-radius: 3px;
    cursor: pointer;

    :last-child {
      background-color: #00561b;
      color: white;
    }
  }
`;

export default function ScoreCard({
  handleRestart,
  handleReview,
  answers,
}: ScoreCardProps) {
  const { questions } = useQuizContext();

  // count the number of correct answers a user has
  const correctQuestions: number = answers.reduce((current, answer) => {
    if (answer.isCorrect) {
      return current + 1;
    }
    return current;
  }, 0);

  let scoreReview: string;

  switch (correctQuestions) {
    case 0:
    case 1:
    case 2:
      scoreReview = "Poor 😭";
      break;
    case 3:
    case 4:
      scoreReview = "Average 🙂";
      break;
    case 5:
    case 6:
      scoreReview = "Good 😊";
      break;
    case 7:
      scoreReview = "Excellent 🤩";
      break;
    default:
      scoreReview = "Genius";
  }

  return (
    <Container>
      <h1>Your Score</h1>

      <Score>{`${correctQuestions}/${questions.length}`}</Score>

      <ScoreReview>
        <span>Score Review :</span> {scoreReview}
      </ScoreReview>

      <Buttons>
        <button onClick={handleReview}>Review Quiz</button>
        <button onClick={handleRestart}>Restart Quiz</button>
      </Buttons>
    </Container>
  );
}
