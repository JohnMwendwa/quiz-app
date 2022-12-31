interface InstructionsProps {
  startSession: (value: boolean) => void;
}

export default function Instructions({ startSession }: InstructionsProps) {
  return (
    <div>
      <h1>Instructions</h1>
      <h3>
        Before you begin this quiz, read the following instructions carefully :
      </h3>
      <ol>
        <li>
          Once you start the quiz, please do not refresh your browser or your
          progress wil be lost.
        </li>
        <li>
          After selecting your answer and you click next, you cannot go back to
          the previous question.
        </li>
        <li>
          If you fail to select an answer and you click next, your answer will
          automatically be saved as incorrect.
        </li>
        <li>At the end of the quiz, you will be shown your final score.</li>
        <li>
          After you finish the quiz, there is an option to review your answers
          or retake the quiz again.
        </li>
      </ol>
      <button onClick={() => startSession(true)}>Start</button>
    </div>
  );
}
