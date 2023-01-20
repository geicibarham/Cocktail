import icon from "../../assets/images/cocktailicon.png";
import react,{useState} from 'react';
import DrawerNav from "./Drawer";
const Header = () => {

  return (
    <header>
      <nav className="nav">
        <h1>
          All Cocktails
          <img className="nav-icon" tabIndex={"-1"} src={icon} alt="" />
        </h1>

        <a className="link-navbar" href="/">Look For a Drink</a>
        <a className="link-navbar"href="/">Look By Ingredient</a>
        <a className="link-navbar" href="link-navbar">See a Random drink</a>


        <a 
        tabIndex={'-1'}
        id="menu" href="#" data-target="mobile-nav"
        className="sidenav-trigger hide-on-large-only"><DrawerNav /></a>
      
      </nav>
    </header>
  );
};

export default Header;
