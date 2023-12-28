import React from "react";
import module from "./SuperHeroesOutput.module.css";
const SuperHeroesOutput = ({ hero }) => {
  return (
    <div className={module.heroesContainer}>
      <h2>{hero.id}</h2>
      <p>Name: {hero.localized_name}</p>
      <p>Attribute {hero.primary_attr}</p>
      <p>Roles : </p>
      {hero?.roles.map((el, index) => (
        <ul key={index}>
          <li>{el}</li>
        </ul>
      ))}
    </div>
  );
};

export default SuperHeroesOutput;
