import { useState } from "react";
import "./assets/css/style.css";
import logo from "./assets/img/logo.png";
import questions from "./cards";
import Button from "./components/Button";
import Footer from "./components/Footer";

function App() {
  const [cards] = useState(questions);
  const [result, setResult] = useState(0);
  return (
    <div className="screen-container">
      <div className="logo-container">
        <img src={logo} alt="Zap" />
        <h1>ZapRecall</h1>
      </div>
      {cards.map((card, index) => {
        return (
          <>
            <Button
              key={index}
              question={card.question}
              answer={card.answer}
              index={index}
              setResult={setResult}
              result={result}
            />
          </>
        );
      })}
      <Footer result={result} cards={cards} />
    </div>
  );
}

export default App;
