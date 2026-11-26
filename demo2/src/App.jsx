import { useState } from "react";

import "./App.css";
import Moviehero from "./moviehero/moviehero";
import "./moviehero/moviehero.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Moviehero />
    </div>
  );
}

export default App;
