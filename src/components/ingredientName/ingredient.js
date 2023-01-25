import React, { useState, useRef } from "react";
import axios from "axios";
const Ingredientname = () => {
  const [data, setData] = useState([]);
  const [submitform, setSubmit] = useState(false);
  const answer = useRef();
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
      <form
        onSubmit={submit}
        className="drink-name-form rounded-corners"
      ></form>
    </div>
  );
};

export default Ingredientname;
