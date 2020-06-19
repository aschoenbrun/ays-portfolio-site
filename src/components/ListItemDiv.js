import React from "react";
import styled from "styled-components/macro";
import { color } from "./GlobalStyles";

export const ListItemDivStyles = styled.div`
  display: none !important;
  display: inline-block !important;
  letter-spacing: -1px;
  font-size: 11px;
  margin: 1px 7px 0 6px;
  font-weight: 100;
  color: ${color("tan", "lt")};
`;
const ListItemDiv = () => {
  return <ListItemDivStyles>&#47;&#47;</ListItemDivStyles>;
};
export default ListItemDiv;
