import { useState } from "react";
import "./NewProjectForm.css";

export default function NewProjectForm() {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [data, setData] = useState("");
  const [unit, setUnit] = useState("");

  const resetForm = () => {
    setTitle("");
    setImage("");
    setData("");
    setUnit("");
  };

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  return (
    <form className="new-project-form">
      <label>
        <span> Project Title: </span>
        <input
          type="text"
          required
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          value={title}
        ></input>
      </label>
      <label>
        <span> Project Image: </span>
        <input
          type="file"
          accept=".jpg, .jpeg, .png"
          required
          onChange={(e) => {
            setImage(e.target.value);
          }}
          value={image}
        ></input>
      </label>
      <label>
        <span> Project Unit: </span>
        <input
          type="number"
          pattern="[0-9]*"
          required
          onChange={(e) => {
            setUnit(e.target.value);
          }}
          value={unit}
        ></input>
      </label>
      <label>
        <span> Project Data: </span>
        <input
          type="file"
          accept=".csv, .txt"
          required
          onChange={(e) => {
            setData(e.target.value);
          }}
          value={data}
        ></input>
      </label>
      <p>
        title - {title}, Image - {image}
      </p>
      <button>Submit</button>
      <p onClick={resetForm}>Reset Form</p>
    </form>
  );
}
