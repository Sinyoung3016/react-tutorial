import React from "react";
import styled, { css } from "styled-components";
import { darken, lighten } from "polished";

function About() {
  return (
    <center>
      <Circle color="#228bee" huge />
      <h3>2021 React JS Fundamentals course</h3>
      <p>Movie App</p>
      <a
        href="https://github.com/Sinyoung3016/React_Tutorial"
        text-decoration="none"
      >
        Link
      </a>
    </center>
  );
}

const Circle = styled.div`
  width: 5rem;
  height: 5rem;
  &:hover {
    background: ${lighten(0.2, "#228be6")};
  }
  &:active {
    background: ${darken(0.2, "#228be6")};
  }
  background: ${(props) => props.color || "black"};
  border-radius: 50%;
  ${(props) =>
    props.huge &&
    css`
      width: 10rem;
      height: 10rem;
    `}
`;

export default About;
