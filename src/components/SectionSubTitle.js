import React from "react";
import styled from "styled-components/macro";
import { color } from "./GlobalStyles";

export const SectionSubTitleStyles = styled.h4`
  text-transform: uppercase;
  font-weight: 600;
  font-size: 18px;
  letter-spacing: 0.2em;
  margin: 0 0 10px;
  color: ${color("blue")};
`;
export const SectionSubTitle = ({ children }) => {
  return <SectionSubTitleStyles>{children}</SectionSubTitleStyles>;
};

export default SectionSubTitle;
