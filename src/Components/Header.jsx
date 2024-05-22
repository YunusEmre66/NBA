import React from "react";
import logo from "../Helpers/nba-logo.png";

const Header = () => {
  return (
    <div className="container">
      <img src={logo} width={150} alt="" />
      <h1 className="text-danger">NBA Legends</h1>
    </div>
  );
};

export default Header;
