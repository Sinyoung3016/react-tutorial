import React from "react";
import styled from "styled-components";
import Button from "./Button";

function Dialog({ visible, title, content, btn1, btn1_text, btn2, btn2_text }) {
  if (!visible) return null;
  return (
    <DarkBackGround>
      <DialogBlock>
        <h3>{title}</h3>
        <p>{content}</p>
        <ButtonGroup>
          <Button onClick={btn1}>{btn1_text}</Button>
          <Button onClick={btn2}>{btn2_text}</Button>
        </ButtonGroup>
      </DialogBlock>
    </DarkBackGround>
  );
}

const DarkBackGround = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.8);
`;

const DialogBlock = styled.div`
  width: 320px;
  padding: 20px;
  background: white;
  border-radius: 2px;
  h3 {
    font-size: 20px;
  }
  p {
    font-size: 15px;
  }
`;

const ButtonGroup = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: flex-end;
`;

export default Dialog;
