import React from "react";

const AnimalsInHTML = () => {
  const animals = [
    { id:1, label: "Horse" },
    { id:2, label: "Turtle" },
    { id:3, label: "Elephant" },
    { id:4, label: "Monkey" },
  ];

  return (
    
    animals.map((singleAnimal) => {
      return <li className="animal" key={singleAnimal.id}>{singleAnimal.label}</li>
    })
  );
};

export default AnimalsInHTML;
