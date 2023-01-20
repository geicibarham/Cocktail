import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Card from "../drink-card/Card";
const Home = () => {
  const answer = useRef();

  const [data, SetData] = useState([]);
  const submit = (e) => {
    e.preventDefault();
    const drink = answer.current?.value;

    const options = {
      method: "GET",
      url: "https://the-cocktail-db.p.rapidapi.com/search.php",
      params: { s: `${drink}` },
      headers: {
        "X-RapidAPI-Key": "0d46da391dmsh6e8c331d6a67b77p12aba2jsnd9b8dd404f37",
        "X-RapidAPI-Host": "the-cocktail-db.p.rapidapi.com",
      },
    };


    if (drink) {
      axios
        .request(options)
        .then(function (response) {
          SetData(response.data.drinks);
        })
    
        .catch(function (error) {
          console.error(error);
        });
       
    }
  };
  return (
    <>
      <div className="home-outer">
        <form onSubmit={submit} className="drink-name-form rounded-corners">
          <label htmlFor="drink-name">Enter The Drink Name</label>
          <input ref={answer} type="text" id="drink-name" />
          <button className="roundedbtn">Search Drink</button>
        </form>
        <div className="drink-container">
          {data === null ? (
            <div className="drink-card-error rounded-corners">
              <p>No Drinks With this name!</p>
            </div>
          ) : (
            <Card data={data} />
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
