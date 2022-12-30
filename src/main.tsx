import React from "react";
import ReactDOM from "react-dom/client";

import { QuizContextProvider } from "./context/QuizContext";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QuizContextProvider>
      <App />
    </QuizContextProvider>
  </React.StrictMode>
);
