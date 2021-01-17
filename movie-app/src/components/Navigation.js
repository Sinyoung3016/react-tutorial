import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Navigation() {
  return (
    <center>
      <Header>
        <Link_Container to="/">HOME</Link_Container>
        <Link_Container to="about">ABOUT</Link_Container>
      </Header>
    </center>
  );
}

const Header = styled.div`
  width: 100vw;
  background-color: white;
  margin-bottom: 10px;
  text-align: left;
  justify-content: space-between;
  padding: 20px;
  border-radius: 5px;
  color: #ff0000;
  box-shadow: 0 8px 8px -8px rgba(0, 0, 0, 0.3);
`;

const Link_Container = styled(Link)`
  font-weight: 800;
  padding: 25px;
  text-decoration-line: none;
  font-family: Roboto;
`;

export default Navigation;
