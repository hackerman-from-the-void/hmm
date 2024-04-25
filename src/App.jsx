import { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const address =
      "00110001 00110100 00110000 00100000 00111000 00110010 00100000 00110001 00110001 00110110 00100000 00110100";
    window.localStorage.setItem("interesting stuff", address);
  }, []);
  return (
    <>
      <div>Good to see you here!</div>
      <img src="question.png" class="hide"></img>
    </>
  );
}

export default App;
