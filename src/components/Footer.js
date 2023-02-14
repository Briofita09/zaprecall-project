import "../assets/css/style.css";

export default function Footer(props) {
  return (
    <div className="footer-concluidos">
      <p>
        {props.result}/{props.cards.length} concluidos
      </p>
    </div>
  );
}
