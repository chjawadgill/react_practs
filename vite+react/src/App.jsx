import { useState } from "react";

function App() {
  const [name, setName] = useState(" Hello ");

  // function handleChange(e) {
  //   setName(e.target.value);
  // }

  return (
    <>
     <input value={name} onChange={(e) => setName(e.target.value)} />
      <p>{name}</p>
    </>
  );
}



export default App;
