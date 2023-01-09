import "./App.css";
import React, { useState } from "react";
import Title from "./components/Title";
import Modal from "./components/Modal";
import ProjectList from "./components/ProjectList";
import NewProjectForm from "./components/NewProjectForm";

function App() {
  const [showProject, setShowProject] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [Projects, setProjects] = useState([]);

  const addProject = (project) => {
    setProjects((previousProjects) => {
      return [...previousProjects, project];
    });
    setShowModal(false);
  };

  const handleClick = (id) => {
    setProjects((prevProjects) => {
      return prevProjects.filter((project) => {
        return id !== project.id;
      });
    });
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
        <Modal isSalesModal={false}>
          <NewProjectForm addProject={addProject} />
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
