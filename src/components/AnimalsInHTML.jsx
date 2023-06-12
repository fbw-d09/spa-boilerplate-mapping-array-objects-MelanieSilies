import React from "react";

const AnimalsInHTML = () => {
  const animals = [
    { label: "Horse" },
    { label: "Turtle" },
    { label: "Elephant" },
    { label: "Monkey" },
  ];

  return (
    /**
     * changed the content of the map function
     **/
    animals.map((singleAnimal, i) => {
      return <li>hello</li>;
    })
  );
};

export default AnimalsInHTML;
