import React from "react";
import styled from "styled-components/macro";
import ListItemDiv from "./ListItemDiv";

export const ListItemStyles = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: ${(props) => (props.dir === "row" ? "center" : "flex-start")};
  margin-bottom: ${(props) => (props.dir === "row" ? "3px" : "5px")};
  line-height: 1.5em;
  letter-spacing: 0.1em;
`;

const ListItemText = styled.div`
  font-size: 14px;
`;

const ListItem = ({ children, dir }) => {
  return (
    <ListItemStyles dir={dir}>
      <ListItemDiv />
      <ListItemText>{children}</ListItemText>
    </ListItemStyles>
  );
};

export default ListItem;
