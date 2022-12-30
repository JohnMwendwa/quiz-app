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
    <>
      <h1>Your Score</h1>

      <div>{`${correctQuestions}/${questions.length}`}</div>
      <div>Score Review : {scoreReview}</div>
      <button onClick={handleReview}>Review</button>
      <button onClick={handleRestart}>Restart</button>
    </>
  );
}
