const Card = (props) => {
  console.log(props.data);
  return (
    <>
      {props.data.map((item) => (
        <div className="drink-card rounded-corners" key={item.idDrink}>
            <h2> {item.strDrink}</h2>
         
          <img 
          className="drink-image"
          width={'300px'}
          alt={item.strDrink} src={item.strDrinkThumb} />
          {/* <p>Instructions: {item.strInstructions}</p> */}
          
        </div>
      ))}
    </>
  );
};

export default Card;
