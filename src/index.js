import ReactDom from "react-dom";
import React from "react";

import WelcomeWindow from "./welcome";
import FlashcardsWindow from "./flashcards";

export default function App() {
  const [window, setWindow] = React.useState("welcome");

  return (
    <>
      {window === "welcome" ? (
        <WelcomeWindow setWindow={setWindow} />
      ) : (
        <FlashcardsWindow />
      )}
    </>
  );
}

ReactDom.render(<App />, document.querySelector(".root"));
