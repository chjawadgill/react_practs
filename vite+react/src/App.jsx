import { useState } from "react";

function App() {
  const [name, setName] = useState("");

  function handleChange(e) {
    setName(e.target.value);
  }

  return (
    <>
      <input onChange={handleChange} rrrr/>
      <p>{name}</p>
    </>
  );
}

export default App;