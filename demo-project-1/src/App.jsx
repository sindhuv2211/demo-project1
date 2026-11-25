import { useState } from "react";

import "./App.css";
import Foods from "./food/foods.jsx";
import "./food/foods.css";

function App() {
  const [count, setCount] = useState(0);

  return <Foods />;
}

export default App;
