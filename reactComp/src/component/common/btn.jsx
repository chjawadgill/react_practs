export default function Btn(props) {
  return (
    <button
      style={{
        backgroundColor: props.colore,
        color: "white",
        padding: "10px 20px",
        margin: "10px 0",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
      }}>
      {props.value}
    </button>
  );
}
