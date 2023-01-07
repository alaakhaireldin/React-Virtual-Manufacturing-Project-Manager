import React from "react";

const Title = (props) => {
  return (
    <>
      <h1 className="title">{props.title}</h1>
      <br></br>
      <h2 className="subtitle">{props.subtitle}</h2>
      <br></br>
    </>
  );
};

export default Title;
