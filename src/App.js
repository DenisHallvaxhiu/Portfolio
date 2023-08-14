import { useEffect, useState } from "react";
import "./App.css";
import WindowsScreen from "./views/WindowsScreen/WindowsScreen";
import PhoneScreen from "./views/PhoneScreen/PhoneScreen";

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth >= 600);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth >= 600);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return <>{windowWidth ? <WindowsScreen /> : <PhoneScreen></PhoneScreen>}</>;
}

export default App;
