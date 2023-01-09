import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import "./NewProjectForm.css";

export default function NewProjectForm({ addProject }) {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [data, setData] = useState("");
  const [unit, setUnit] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const project = {
      title: title,
      image: image,
      id: uuidv4(),
    };
    addProject(project);
    resetForm();
  };

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
    <form className="new-project-form" onSubmit={handleSubmit}>
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
      <button>Submit</button>
    </form>
  );
}
