import { useState } from "react";
import "./NewProjectForm.css";

export default function NewProjectForm() {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [data, setData] = useState("");
  const [unit, setUnit] = useState("");

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  return (
    <form className="new-project-form">
      <label>
        <span> Project Title: </span>
        <input
          type="text"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        ></input>
      </label>
      <label>
        <span> Project Image: </span>
        <input
          type="file"
          onChange={(e) => {
            setImage(e.target.value);
          }}
        ></input>
      </label>
      <label>
        <span> Project Unit: </span>
        <input
          type="text"
          onChange={(e) => {
            setUnit(e.target.value);
          }}
        ></input>
      </label>
      <label>
        <span> Project Data: </span>
        <input
          type="text"
          onChange={(e) => {
            setData(e.target.value);
          }}
        ></input>
      </label>
      <p>
        title - {title}, Image - {image}
      </p>
      <button>Submit</button>
    </form>
  );
}
