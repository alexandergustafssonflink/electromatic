import { slide as Menu } from "react-burger-menu";
import "./burgermenu.css";
import { Link } from "@reach/router";

const BurgerMenu = () => {
  //   showSettings(event) {
  //     event.preventDefault();
  //   }

  // render() {
  // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
  return (
    <Menu right>
      <a href="/">
        <button>Home</button>
      </a>
      <a href="/events">
        <button>Events</button>
      </a>
    </Menu>

    // <Menu right>
    //   <Link to="/#home">
    //     <h3>Home</h3>
    //   </Link>
    //   <Link to="/#events">
    //     <h3>Events</h3>
    //   </Link>
    //   <Link to="/#about">
    //     <h3>About</h3>
    //   </Link>
    //   <Link to="/#connect">
    //     <h3>Connect</h3>
    //   </Link>
    // </Menu>
  );
};
export default BurgerMenu;
