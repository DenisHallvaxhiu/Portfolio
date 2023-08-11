import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import "./App.css";
import Background from "./assets/Blue Ribbon Window 11.jpg";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";

function App() {
  const [startMenu, setStartMenu] = useState(true);
  const [startMenuExpanded,setStartMenuExpanded] = useState(false)
  let startMenuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (startMenuRef.current) {
        if (!startMenuRef.current.contains(e.target)) {
          setStartMenu(false);
        }
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []); // Empty dependency array to ensure the effect runs only once

  return (
    <div className="app">
      <div>
        <img src={Background} alt="Background" />
        <Main close={() => console.log("first")} />
        <Footer
          open={() => {
            setStartMenu(!startMenu);
          }}
        />
        {startMenu && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="startMenu-container"
          >
            <div style={{height: startMenuExpanded ? '600px' : '200px'}} ref={startMenuRef} className="startMenu">
              <div className="upper"></div>
              <div className="lower" onClick={()=>setStartMenuExpanded(!startMenuExpanded)}></div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default App;
