interface ScoreCardProps {
  handleRestart: () => void;
  handleReview: () => void;
}

export default function ScoreCard({
  handleRestart,
  handleReview,
}: ScoreCardProps) {
  return (
    <>
      <h1>Your Score</h1>
      <button onClick={handleReview}>Review</button>
      <button onClick={handleRestart}>Restart</button>
    </>
  );
}
