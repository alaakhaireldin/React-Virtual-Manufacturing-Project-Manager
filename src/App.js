import "./App.css";
import React, { useState } from "react";
import Title from "./components/Title";
import Modal from "./components/Modal";
import ProjectList from "./components/ProjectList";
import NewProjectForm from "./components/NewProjectForm";

function App() {
  const [showProject, setShowProject] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [Projects, setProjects] = useState([
    { title: "First Project", id: 1 },
    { title: "Second Project", id: 2 },
    { title: "Third Project", id: 3 },
  ]);

  console.log(showModal);
  const handleClick = (id) => {
    setProjects((prevProjects) => {
      return prevProjects.filter((Project) => {
        return id !== Project.id;
      });
    });
    console.log(id);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const subtitle = "Some title in my website";
  return (
    <div className="App">
      <Title title="Alaa's" subtitle={subtitle} />

      {showProject && (
        <div>
          <button
            onClick={() => {
              setShowProject(false);
            }}
          >
            Hide List
          </button>
        </div>
      )}
      {!showProject && (
        <div>
          <button
            onClick={() => {
              setShowProject(true);
            }}
          >
            Show Project
          </button>
        </div>
      )}

      {showProject && (
        <ProjectList Projects={Projects} handleClick={handleClick} />
      )}
      {showModal && (
        <Modal handleClose={handleClose} isSalesModal={false}>
          <NewProjectForm></NewProjectForm>
        </Modal>
      )}
      <div>
        <button
          onClick={() => {
            setShowModal(true);
          }}
        >
          Add Project
        </button>
      </div>
    </div>
  );
}

export default App;
