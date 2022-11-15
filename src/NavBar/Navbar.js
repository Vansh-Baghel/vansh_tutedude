import classes from "./Navbar.module.css";
import logo from "../Resources/tuteDude_Logo.png";
import Nav_Profile from "../Resources/Nav_Profile.png";
import Nav_Arrow from "../Resources/Nav_Arrow.png";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const setHorizontalWidth = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", setHorizontalWidth);
    return () => {
      window.removeEventListener("resize", setHorizontalWidth);
    };
  }, [width]);

  return (
    <div className={classes.container}>
      <div className="navLogo">
        <img src={logo} alt="logo" className={classes.logo}></img>
      </div>
      <ul className="nav_right">
        {width >= 850 ?  <>       <li>
          <a href="/#">My Assignment</a>
        </li>
        <li>
          <a href="/#">Chat with Mentor</a>
        </li></> : <></>}

        <li className={classes.profileText}>
            <img src={Nav_Profile} alt="profile"></img>
            <a href="/#">ProfileName</a>
            <img src={Nav_Arrow} alt="arrow"></img>
          {/* <ul>
            <li>
              <a href="#"> Demo </a>
            </li>
          </ul> */}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
