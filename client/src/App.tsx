import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Navbar } from "./components/Navbar/Navbar.tsx";
import { MapComponent } from "./components/Map/Map.tsx";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <MapComponent/>
    </>
  );
}

export default App;
