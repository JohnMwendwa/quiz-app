interface InstructionsProps {
  startSession: (value: boolean) => void;
}

export default function Instructions({ startSession }: InstructionsProps) {
  return (
    <div>
      <h1>Instructions</h1>
      <button onClick={() => startSession(true)}>Start</button>
    </div>
  );
}
