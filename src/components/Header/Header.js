import React from "react";
import HeaderBartop from "./HeaderBarTop";
import HeaderBarBottom from "./HeaderBarBottom";
import HeaderNav from "./HeaderNav";

const Header = () => {
  return (
    <header>
      <HeaderBartop />
      <HeaderBarBottom />
      <HeaderNav />
    </header>
  );
};

export default Header;
