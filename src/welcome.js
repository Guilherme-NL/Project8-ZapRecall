import zaprecallLogo from "./images/logo.png";

export default function WelcomeWindow({ setWindow }) {
  return (
    <div className="welcomeContainer">
      <div className="welcome">
        <img src={zaprecallLogo} alt="ZapRecallLogo" />
        <h1>ZapRecall</h1>
        <button onClick={() => setWindow("flashcards")}>Iniciar Recall!</button>
      </div>
    </div>
  );
}
