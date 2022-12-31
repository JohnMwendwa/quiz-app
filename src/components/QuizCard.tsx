import { useQuizContext } from "../context/QuizContext";
import { Question } from "../models/question";

interface QuizCardProps {
  question?: Question;
  currentQuestion: number;
  updateAnswers: (currentQuestion: number, idx: number) => void;
  handleSubmit: () => void;
}

export default function QuizCard({
  question,
  currentQuestion,
  updateAnswers,
  handleSubmit,
}: QuizCardProps) {
  const { isLastQuestion } = useQuizContext();

  return (
    <>
      <h1>Quiz Card</h1>

      <h3>{question?.question}</h3>

      {question?.answers.map((answer, idx) => {
        return (
          <div key={answer} onClick={() => updateAnswers(currentQuestion, idx)}>
            {idx + 1}. {answer}
          </div>
        );
      })}

      <button onClick={handleSubmit}>
        {isLastQuestion ? "Finish" : "Next"}
      </button>
    </>
  );
}
