import React from "react";
import "./card.css";
import Link from "next/link";
function Card(props) {
  console.log(props);
  return (
    <div className="container-card">
      <div className="heading-card">
        <h4>{props.role}</h4>
        <span>@{props.company}</span>
      </div>
      <div className="description-card">
        <p>{props.desc}</p>
      </div>
      <Link href={props.link} className="ibtn">
        Apply now
      </Link>
    </div>
  );
}

export default Card;
