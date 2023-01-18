import icon from "../../assets/images/cocktailicon.png";
import react,{useState} from 'react';

const Header = () => {

 let [style,setStyle] = useState('')

  function myFunction() {

    if (style === "flex") {
      setStyle('none')
    } else {
      setStyle('flex')
    }
  }
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

       
          {/* <a href="#home" className="active">
            Logo
          </a> */}

          <div
          style={{display:style}}
           id="myLinks">
            <a href="#news">News</a>
            <a href="#contact">Contact</a>
            <a href="#about">About</a>
          </div>

          <a href='#' className="icon" onClick={myFunction}>
            <i className="fa fa-bars"></i>
          </a>
      
      </nav>
    </header>
  );
};

export default Header;
