import icon from "../../assets/images/cocktailicon.png";
import DrawerNav from "./Drawer";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <nav className="nav">
        <h1>
          All Cocktails
          <img className="nav-icon" tabIndex={"-1"} src={icon} alt="" />
        </h1>

        <Link to="/">
          <a className="link-navbar" href="/">
            Look by Drink Name
          </a>
        </Link>

        <a className="link-navbar" href="/">
          Look By Ingredient
        </a>
        <Link to="/random-drink">
          <a className="link-navbar" href="link-navbar">
            See a Random drink
          </a>
        </Link>

        <a
          tabIndex={"-1"}
          id="menu"
          href="#"
          data-target="mobile-nav"
          className="sidenav-trigger hide-on-large-only"
        >
          <DrawerNav />
        </a>
      </nav>
    </header>
  );
};

export default Header;
