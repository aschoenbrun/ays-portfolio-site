import styled from "styled-components/macro";
import { color } from "../GlobalStyles";

const fieldPadding = "10px";
const fieldBorderWidth = "2px";

export const FormStyles = styled.form`
  width: 90%;
  margin: 0 auto;
  @media screen and (min-width: 768px) {
    width: 600px;
  }
`;

export const FieldStyles = styled.div`
  margin-bottom: 20px;
  input,
  textarea,
  select {
    display: block;
    width: calc(100% - (${fieldPadding} + ${fieldBorderWidth}) * 2);
    border: 2px solid ${color("tan")};
    transition: 0.5s;
    padding: ${fieldPadding};
    font-family: "Open Sans", sans-serif;
    font-size: 13px;
  }
  &.focused {
    input,
    textarea,
    select {
      border-color: ${color("orange")};
      &:focus,
      &:hover {
        outline: none;
      }
    }
  }
`;

export const FieldRow = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 0;
  @media screen and (min-width: 800px) {
    grid-template-columns: repeat(${(props) => props.cols}, 1fr);
    grid-gap: 25px;
  }
`;

export const LabelWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  label,
  span {
    display: inline-block;
    color: white;
    text-transform: uppercase;
    font-size: 0.65rem;
    line-height: 1em;
    font-weight: 700;
    margin-right: 1px;
    padding: 5px 7px;
    transition: 0.5s;
  }
`;

export const Label = styled.label`
  background-color: ${color("tan")};
  .focused & {
    background-color: ${color("orange")};
  }
`;

export const Req = styled.span`
  background-color: ${color("red")};
  margin-bottom: 1px;
  font-size: 7px;
  padding: 7px 3px 3px;
`;

export const Err = styled.span`
  background-color: ${color("red")};
  margin-bottom: 1px;
  padding-bottom: 4px;
`;
