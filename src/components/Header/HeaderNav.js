import React, { useContext } from "react";
import PageContext from "../Layouts/LayoutMain";

const HeaderNav = () => {
  const pageContext = useContext(PageContext);
  console.log(pageContext);
  return <nav></nav>;
};
export default HeaderNav;
