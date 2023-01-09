import "./NewProjectForm.css";

export default function NewProjectForm() {
  return (
    <form className="new-project-form">
      <label>
        <span> Project Title: </span>
        <input type="text"></input>
      </label>
      <label>
        <span> Project Image: </span>
        <input type="img"></input>
      </label>
      <label>
        <span> Project Unit: </span>
        <input type="text"></input>
      </label>
      <label>
        <span> Project Data: </span>
        <input type="text"></input>
      </label>
      <button>Submit</button>
    </form>
  );
}
