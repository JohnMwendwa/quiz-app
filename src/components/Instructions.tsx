import styled from "styled-components";

interface InstructionsProps {
  startSession: (value: boolean) => void;
}

const Container = styled.div`
  h1 {
    text-align: center;
    margin-bottom: 8px;
  }
  h3 {
    text-decoration: underline;
    margin-bottom: 5px;
  }
  li {
    margin-bottom: 5px;
    margin-left: 5px;
  }

  button {
    display: block;
    padding: 8px 15px;
    margin-left: auto;
    cursor: pointer;
    color: white;
    background-color: #00561b;
    border: inherit;
    border-radius: 3px;
  }
`;

export default function Instructions({ startSession }: InstructionsProps) {
  return (
    <Container>
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
      <button onClick={() => startSession(true)}>Start Quiz</button>
    </Container>
  );
}
