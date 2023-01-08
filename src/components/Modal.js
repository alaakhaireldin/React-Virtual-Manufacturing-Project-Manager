import { createPortal } from "react-dom";
import "./modal.css";

export default function Modal({ children, handleClose }) {
  return createPortal(
    <div className="modal-backdrop">
      <div
        className="modal"
        style={{
          border: "4px solid",
          borderColor: "#ff4500",
          textAlign: "center",
        }}
      >
        {children}
        <br></br>
        <button onClick={handleClose}>close</button>
      </div>
    </div>,
    document.body
  );
}
