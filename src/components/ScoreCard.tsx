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
  return (
    <>
      <h1>Your Score</h1>
      <button onClick={handleReview}>Review</button>
      <button onClick={handleRestart}>Restart</button>
    </>
  );
}
