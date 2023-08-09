import React, { useEffect, useState } from "react";
import "./ProjectsModal.css";
import { motion, AnimatePresence } from "framer-motion";
import { PacmanLoader } from "react-spinners";

export default function ProjectsModal({ open, close }) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (open) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    }
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
          transition={{ ease: "easeOut", duration: 0.2 }}
          className="modal"
        >
          <button onClick={close} type="button" className="btn-close">
            <span className="icon-cross"></span>
            <span className="visually-hidden">X</span>
          </button>
          <div className="modal-div">
            {loading ? (
              <PacmanLoader size={40} color="#36d7b7" />
            ) : (
              <div className="test"></div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
