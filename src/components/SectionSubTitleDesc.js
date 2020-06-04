import React from "react";
import styled from "styled-components/macro";
import { color } from "./GlobalStyles";
import { SectionSubTitleStyles } from "./SectionSubTitle";

const SectionSubTitleDescStyles = styled(SectionSubTitleStyles)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 13px;
  margin: 0 0 15px;
  font-weight: 500;
  color: ${color("tan")};
  span {
    display: block;
    margin-bottom: 5px;
  }
  @media screen and (min-width: 760px) {
    margin: -8px 0 13px;
  }
`;
export const SectionSubTitleDesc = ({ children }) => {
  return <SectionSubTitleDescStyles>{children}</SectionSubTitleDescStyles>;
};

export default SectionSubTitleDesc;
