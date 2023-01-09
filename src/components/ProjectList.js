import styles from "./ProjectList.module.css";

export default function ProjectList({ Projects, handleClick }) {
  return (
    <div>
      {Projects.map((Project, index) => (
        <div className={styles.card} key={Project.id}>
          <h2>
            {index} - {Project.title}
          </h2>
          <button onClick={() => handleClick(Project.id)}>Delete Project</button>
        </div>
      ))}
    </div>
  );
}
