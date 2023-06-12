import React from "react";

const AnimalsInHTML = () => {
  const animals = [
    { label: "Horse" },
    { label: "Turtle" },
    { label: "Elephant" },
    { label: "Monkey" },
  ];

  return (
    
    animals.map((singleAnimal, i) => {
      return <li className="animal" key={i}>{singleAnimal.label}</li>
    })
  );
};

export default AnimalsInHTML;
