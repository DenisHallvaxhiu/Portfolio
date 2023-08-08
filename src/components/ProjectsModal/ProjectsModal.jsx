import React from "react";
import "./ProjectsModal.css";

export default function ProjectsModal({ open,close }) {
  if (!open) return null;
  
  return (
    <div className="test" onClick={close}>
      <div>test</div>
    </div>
  );
}
