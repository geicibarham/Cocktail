import  { useState } from "react";
import drink from "../../assets/images/drink2.png";
import milkshake from "../../assets/images/milkshake.png";
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
                  src={`${dr.strAlcoholic === "Alcoholic" ? drink : milkshake}`}
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
              <strong>Ingredients</strong>
              <ul>

              {dr.strIngredient1 !== null && <li>{dr.strIngredient1}</li>}

              {dr.strIngredient2 !== null && <li>{dr.strIngredient2}</li>}

              {dr.strIngredient3 !== null && <li>{dr.strIngredient3}</li>}

              {dr.strIngredient4 !== null && <li>{dr.strIngredient4}</li>}

              {dr.strIngredient5 !== null && <li>{dr.strIngredient5}</li>}
              {dr.strIngredient6 !== null && <li>{dr.strIngredient6}</li>}

              {dr.strIngredient7 !== null && <li>{dr.strIngredient7}</li>}

              {dr.strIngredient8 !== null && <li>{dr.strIngredient8}</li>}

              {dr.strIngredient9 !== null && <li>{dr.strIngredient9}</li>}
              </ul>
              {"\n"}
              <strong>Instructions</strong>
              <p>{dr.strInstructions}</p>
            </div>
          ))}
    </>
  );
};

export default Card;
