import "./Button.css";

function Button({ textButton, onClick }) {
  return (
    <button className="main-button" onClick={onClick}>
      {textButton}
    </button>
  );
}

export default Button;
