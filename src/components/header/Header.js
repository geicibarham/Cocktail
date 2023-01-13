import icon from "../../assets/images/cocktailicon.png";
const Header = () => {
  return (
    <header>
      <nav className="nav">
        <h1>
          All Cocktails
          <img className="nav-icon" tabIndex={"-1"} src={icon} alt="" />
        </h1>

        <a href="/">Look For a Drink</a>
        <a href="/">Look By Ingredient</a>
        <a href="/">See a Random drink</a>
      </nav>
    </header>
  );
};

export default Header;
