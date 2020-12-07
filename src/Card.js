import React, { useState } from "react";
import people from "./data";

export const Card = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };
  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };
  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };
  const randomPerson = () => {
    let rng = Math.floor(Math.random() * people.length);
    if (rng === index) {
      rng = index + 1;
    }
    setIndex(checkNumber(rng));
  };
  return (
    <section className="Card">
      <div className="img-container">
        <img src={image} alt="" />
        <div className="quote">
          <i className="fas fa-quote-right"></i>
        </div>
        <div class="circle"></div>
      </div>
      <p className="name">{name}</p>
      <p className="position">{job}</p>
      <p className="text">{text}</p>
      <div className="button-container">
        <div>
          <i onClick={prevPerson} className="fas fa-chevron-left"></i>

          <i onClick={nextPerson} className="fas fa-chevron-right"></i>
        </div>
        <button onClick={randomPerson}>Random Person</button>
      </div>
    </section>
  );
};
