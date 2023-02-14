import { useState } from "react";
import "../assets/css/style.css";
import setaPlay from "../assets/img/seta_play.png";
import setaTurn from "../assets/img/seta_virar.png";
import zap from "../assets/img/icone_certo.png";
import almost from "../assets/img/icone_quase.png";
import error from "../assets/img/icone_erro.png";

export default function Button(props) {
  const [fliped, setFliped] = useState(0);
  const [clicked, setClicked] = useState(false);
  const [choice, setChoice] = useState(setaPlay);

  function setAnswer(answer) {
    setChoice(answer);
  }

  return (
    <div>
      {fliped === 0 && (
        <button className="container-botoes pergunta-fechada">
          {choice === setaPlay && <p>Pergunta {props.index + 1} </p>}
          {choice === zap && (
            <p style={{ color: "#2FBE34", textDecorationLine: "line-through" }}>
              Pergunta {props.index + 1}{" "}
            </p>
          )}
          {choice === almost && (
            <p style={{ color: "#FF922E", textDecorationLine: "line-through" }}>
              Pergunta {props.index + 1}{" "}
            </p>
          )}
          {choice === error && (
            <p style={{ color: "#FF3030", textDecorationLine: "line-through" }}>
              Pergunta {props.index + 1}{" "}
            </p>
          )}
          <img
            src={choice}
            alt="Seta Play"
            onClick={
              !clicked
                ? () => {
                    setFliped(1);
                    setClicked(true);
                  }
                : null
            }
          />
        </button>
      )}
      {fliped === 1 && (
        <button className="container-botoes pergunta-aberta">
          {props.question}
          <img
            src={setaTurn}
            onClick={() => {
              setFliped(2);
              props.setResult(props.result + 1);
            }}
            alt="Seta Virar"
          />
        </button>
      )}
      {fliped === 2 && (
        <div className="pergunta-aberta">
          <p>{props.answer}</p>
          <div
            className="container-botoes "
            style={{ display: "flex", flexDirection: "row", gap: 10 }}
          >
            <button
              onClick={() => {
                setFliped(0);
                setAnswer(error);
              }}
              style={{ backgroundColor: "#FF3030" }}
            >
              Não Lembrei
            </button>
            <button
              onClick={() => {
                setFliped(0);
                setAnswer(almost);
              }}
              style={{ backgroundColor: "#FF922E" }}
            >
              Quase esqueci
            </button>
            <button
              onClick={() => {
                setFliped(0);
                setAnswer(zap);
              }}
              style={{ backgroundColor: "#2FBE34" }}
            >
              Zap
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
