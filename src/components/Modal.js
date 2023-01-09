import { createPortal } from "react-dom";
import "./modal.css";

export default function Modal({ children, isSalesModal }) {
  return createPortal(
    <div className="modal-backdrop">
      <div
        className="modal"
        style={{
          border: "4px solid",
          borderColor: isSalesModal ? "#ff4500" : "#555",
          textAlign: "center",
        }}
      >
        {children}
        <br></br>
      </div>
    </div>,
    document.body
  );
}
