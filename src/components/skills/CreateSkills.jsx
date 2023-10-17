import React from "react";


function Skills(props){

    return(
            <div 
            className="skills-icon">
                <img src={props.icon} alt={props.alt} width="62"/>
                <p className="skill-name">{props.name}</p>
            </div>
    );
}

export default Skills;