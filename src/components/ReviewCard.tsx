import { Question } from "../models/question";
import { Answer } from "../models/answer";
import { useQuizContext } from "../context/QuizContext";

interface ReviewCardProps {
  question: Question;
  userAnswer: Answer[];
  handleFinishReview: () => void;
}

export default function ReviewCard({
  question,
  handleFinishReview,
  userAnswer,
}: ReviewCardProps) {
  const { isLastQuestion, isFirstQuestion, back } = useQuizContext();
  return (
    <>
      <h1>Quiz Card</h1>

      <h3>{question?.question}</h3>

      {question?.answers.map((answer, idx) => {
        return (
          <div key={answer}>
            {idx + 1}. {answer}
          </div>
        );
      })}

      {!isFirstQuestion && <button onClick={back}>Back</button>}

      <button onClick={handleFinishReview}>
        {isLastQuestion ? "Finish Review" : "Next"}
      </button>
    </>
  );
}
