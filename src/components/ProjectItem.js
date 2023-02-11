import React from "react";

function ProjectItem({ name, about, technologies }) {

  const techList = technologies.map( function(tech){
    console.log("this ");
    return(
      <span key={tech.id}>{tech}</span>
    )
  })

  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {techList}
      </div>
    </div>
  );
}

export default ProjectItem;