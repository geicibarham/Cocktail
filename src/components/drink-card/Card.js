import react, { useState } from "react";
import drink from "../../assets/images/drink2.png";
const Card = (props) => {
  const [showModal, setShow] = useState(false);
  const [individual, setIndividual] = useState([]);

  const show = (index) => {
    setShow(true);
    console.log(props.data[index].strDrink);
    const result = props.data.filter(
      (dr) => dr.strDrink === props.data[index].strDrink
    );
    setIndividual(result);
  };

  return (
    <>
      {!showModal
        ? props.data.map((item, index) => (
            <div className="drink-card rounded-corners" key={item.idDrink}>
              <h2> {item.strDrink}</h2>

              <img
                className="drink-image"
                width={"300px"}
                alt={item.strDrink}
                src={item.strDrinkThumb}
              />
              <button
              className="roundedbtn recipe-btn"
                onClick={() => {
                  show(index);
                }}
              >
                See Recipe
              </button>
            </div>
          ))
        : individual.map((dr) => (
            <div className="rounded-corners indivivual-drink">
              <h2>{dr.strDrink}</h2>
              <div className="alcoholic-container">
                <h3>{dr.strAlcoholic}</h3>
                <img
                  className="drink-image"
                  width={"30px"}
                  alt={dr.strDrink}
                  src={`${dr.strAlcoholic === "Alcoholic" ? drink : ""}`}
                />
              </div>
              <button
                className="back-btn"
                onClick={() => {
                  setShow(false);
                }}
              >
                Go Back
              </button>
              <img
                className="drink-image"
                width={"250px"}
                alt={dr.strDrink}
                src={dr.strDrinkThumb}
              />
              <strong>ingredients</strong>

              {dr.strIngredient1 !== null && <p>⚪{dr.strIngredient1}</p>}

              {dr.strIngredient2 !== null && <p>⚪{dr.strIngredient2}</p>}

              {dr.strIngredient3 !== null && <p>⚪{dr.strIngredient3}</p>}

              {dr.strIngredient4 !== null && <p>⚪{dr.strIngredient4}</p>}

              {dr.strIngredient5 !== null && <p>⚪{dr.strIngredient5}</p>}
              {dr.strIngredient6 !== null && <p>⚪{dr.strIngredient6}</p>}

              {dr.strIngredient7 !== null && <p>⚪{dr.strIngredient7}</p>}

              {dr.strIngredient8 !== null && <p>⚪{dr.strIngredient8}</p>}

              {dr.strIngredient9 !== null && <p>⚪{dr.strIngredient9}</p>}

              <strong>Instructions</strong>
              <p>{dr.strInstructions}</p>
            </div>
          ))}
    </>
  );
};

export default Card;
