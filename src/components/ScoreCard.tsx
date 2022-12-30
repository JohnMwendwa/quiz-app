import { useQuizContext } from "../context/QuizContext";
import { Answer } from "../models/answer";

interface ScoreCardProps {
  handleRestart: () => void;
  handleReview: () => void;
  answers: Answer[];
}

export default function ScoreCard({
  handleRestart,
  handleReview,
  answers,
}: ScoreCardProps) {
  const { questions } = useQuizContext();

  // count the number of correct answers a user has
  const correctQuestions = answers.reduce((current, answer) => {
    if (answer.isCorrect) {
      return current + 1;
    }
    return current;
  }, 0);

  return (
    <>
      <h1>Your Score</h1>

      <div>{`${correctQuestions}/${questions.length}`}</div>

      <button onClick={handleReview}>Review</button>
      <button onClick={handleRestart}>Restart</button>
    </>
  );
}
