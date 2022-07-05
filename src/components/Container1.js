import React from "react";
import styled from "styled-components";

const Container1 = (props) => {
  return (
    <Container>
      <Image src={props.image} />
      <p>{props.text}</p>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 0.4rem;
  padding: 5px;
  min-width: 15rem;
  margin: 2% 0;
  box-shadow: rgba(255, 255, 255, 0.4) 0px 20px 30px -10px;
  transition: var(--transition);

  p {
    font-size: clamp(0.7rem, 3vh, 1rem);
    word-break: break-all;
  }

  :hover {
    transform: scale(0.97);
    box-shadow: rgba(255, 255, 255, 0.9) 0px 0px 0px 2px,
      rgba(255, 255, 255, 0.85) 0px 4px 6px -1px,
      rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
  }
`;

const Image = styled.img``;

export default Container1;
