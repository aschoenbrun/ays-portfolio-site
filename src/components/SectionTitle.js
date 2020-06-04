import React from "react";
import styled from "styled-components/macro";
import { color } from "./GlobalStyles";

const SectionTitleStyles = styled.h3`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-family: "Fira Code", monospace;
  text-transform: lowercase;
  font-weight: 400;
  font-size: 30px;
  margin: 0 0 30px;
  color: ${color("blue")};
  @media screen and (min-width: 1024px) {
    margin: 0 0 35px -17px;
  }
`;

const TitleTag = styled.span`
  font-size: 17px;
  font-weight: 300;
  margin-top: 2px;
  color: ${color("tan")};
  &:first-child {
    margin-right: 5px;
  }
  &:last-child {
    margin-left: 5px;
  }
`;

const TitleText = styled.span`
  line-height: 27px;
`;

export const SectionTitle = ({ children }) => {
  return (
    <SectionTitleStyles>
      <TitleTag>&lt; </TitleTag>
      <TitleText>{children}</TitleText>
      <TitleTag> &#47;&gt;</TitleTag>
    </SectionTitleStyles>
  );
};

export default SectionTitle;
