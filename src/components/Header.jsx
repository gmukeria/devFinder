import React from "react";
import classes from "./Header.module.css";
import darkThemeIcon from "../assets/icon-moon.svg";

const Header = () => {
  return (
    <div className={classes["header-container"]}>
      <div className={classes["logo"]}>devfinder</div>

      <div className={classes["theme"]}>
        <p className={classes["theme-title"]}>DARK</p>
        <img className={classes["theme-icon"]} src={darkThemeIcon} alt="" />
      </div>
    </div>
  );
};

export default Header;
