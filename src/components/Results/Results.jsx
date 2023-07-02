import React, { useState, useEffect } from "react";
import "./Results.css";
import { Bar } from "../Bars/Bar";
import { CardDog } from "../CardsDog/CardDog";

export const Results = (props) => {
  const [porcentages, setPorcentages] = useState([20, 0, 0, 0, 0]);
  const { dogsInfo } = props;

  console.log(dogsInfo);

  useEffect(() => {
    let porcentages_aux = [];

    for (const key in dogsInfo.categories) {
      const porcentageCat = Math.floor((dogsInfo.categories[key] * 100) / 5);
      porcentages_aux.push(porcentageCat);
    }

    setPorcentages(porcentages_aux);

    window.scrollTo(0, 0);
  }, [dogsInfo]);

  const { mainDog, othersDogs } = dogsInfo;
  const baseURI = window.location.origin + window.location.pathname;

  return (
    <div className="container__perso result">
      <div className="result__grid">
        <div className="result_dog_presentation">
          <h1> Si fueras un perro, serias un: </h1>
          <div className="result__dogName">
            {" "}
            <p> {mainDog.name} </p>{" "}
          </div>
          <div className="result__image">
            <img src={`${baseURI}dogs/${mainDog.id}.jpg`} />
          </div>
        </div>

        <div className="bars">
          <Bar
            porcentage={porcentages[0]}
            leftWord="Flojo"
            rightWord="Energetico"
          />
          <Bar
            porcentage={porcentages[1]}
            leftWord="Introvertido"
            rightWord="Extrovertido"
          />
          <Bar
            porcentage={porcentages[2]}
            leftWord="Temparamental"
            rightWord="Pacifico"
          />
          <Bar
            porcentage={porcentages[3]}
            leftWord="Desobediente"
            rightWord="Dócil"
          />
          <Bar
            porcentage={porcentages[4]}
            leftWord="Grande"
            rightWord="Pequeño"
          />
        </div>
      </div>

      <p className="result__text"> {mainDog.description} </p>
      <h2 className="dogCard__title"> Tambien puedes ser un: </h2>
      <div className="dogs_cards">
        <CardDog dogInfo={othersDogs[0]} />
        <CardDog dogInfo={othersDogs[1]} />
        <CardDog dogInfo={othersDogs[2]} />
      </div>
    </div>
  );
};
