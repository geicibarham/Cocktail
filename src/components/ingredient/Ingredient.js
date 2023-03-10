import React, { useState } from "react";
import axios from "axios";
import Card from "../drink-card/Card";
const Ingredient = () => {
  const [data, setData] = useState([]);
  const [submitform, setSubmit] = useState(false);

  const submit = (e) => {
    e.preventDefault();

    const options = {
      method: "GET",
      url: "https://the-cocktail-db.p.rapidapi.com/random.php",
      headers: {
        "X-RapidAPI-Key": "0d46da391dmsh6e8c331d6a67b77p12aba2jsnd9b8dd404f37",
        "X-RapidAPI-Host": "the-cocktail-db.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setData(response.data.drinks);
      })
      .catch(function (error) {
        console.error(error);
      });
    setSubmit(true);
  };
  console.log(data);
  return (
    <div className="home-outer">
     
        <button onClick={submit} className="random-drink-btn">
          Generate Random Drink
        </button>
      

      {submitform && (
        <div className="drink-container-random">
          <div className="card-random">
            <Card data={data} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Ingredient;
