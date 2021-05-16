import React from "react";
import Links from "./Links";

function About(props) {
/*   if (props.bio.length > 1) {
    ShowBio = <p>{props.bio}</p>
  }
  else
  {
    ShowBio = null
  } */
  return (
    <div id="about">
      <h2>About Me</h2>
      {props.bio.length > 1 ? <p>{props.bio}</p> : null}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github={props.links.github} linkedin={props.links.linkedin} />
    </div>
  );
}

export default About;
