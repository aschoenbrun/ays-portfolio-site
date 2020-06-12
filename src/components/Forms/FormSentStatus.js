import React from "react";
import styled from "styled-components/macro";
import { color } from "../GlobalStyles";
import { ButtonStyles } from "../Button/Button";

const FormSentStatusStyles = styled(ButtonStyles)`
  &,
  &:hover,
  &:focus {
    padding: 11px 13px;
    margin-right: 10px;
    background-color: ${color("green")};
    color: white;
    cursor: default;
    box-shadow: 0px 0.5px 2px 0px rgba(0, 0, 0, 0.5);
  }
`;

const FormSentStatus = () => {
  return <FormSentStatusStyles>Sent</FormSentStatusStyles>;
};

export default FormSentStatus;
