import React, { useState } from "react";
import styled, { css } from "styled-components";
import { darken, lighten } from "polished";
import Dialog from "../components/Dialog";

function About() {
  const [dialog, setDialog] = useState(false);
  const onClick = () => {
    setDialog(true);
  };
  const onConfirm = () => {
    setDialog(false);
  };
  const onCancel = () => {
    setDialog(false);
  };

  return (
    <Container>
      <Circle color="#228bee" huge onClick={onClick} />
      <h3>2021 React JS Fundamentals course</h3>
      <p>Movie App</p>
      <a
        href="https://github.com/Sinyoung3016/React_Tutorial"
        text-decoration="none"
      >
        Link
      </a>
      <Dialog
        visible={dialog}
        title="엥"
        content="왜 눌렀어여?"
        btn1={onConfirm}
        btn1_text="미안"
        btn2={onCancel}
        btn2_text="뭐야"
      />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-contents: center;
`;

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
