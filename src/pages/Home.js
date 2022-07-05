import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import Typed from "typed.js";

import programmer from "../assets/Images/programmer.svg";

function Home() {
  const typing = useRef(null);

  useEffect(() => {
    const typingFunction = new Typed(typing.current, {
      strings: ["# Full Stack Web Developer", "# Love everything about code"],
      typeSpeed: 50,
      backSpeed: 85,
      smartBackspace: true,
      cursorChar: "|",
      showCursor: true,
      // autoInsertCss: true,
      cursorHeight: 100,
      startDelay: 100,
      backDelay: 250,
      loop: true,
    });

    return () => {
      typingFunction.destroy();
    };
  }, []);

  const goToContactPage = () => {
    window.open("/contact", "_blank");
  };

  return (
    <MainDiv>
      <img src={programmer} alt="Programmer" />
      <svg>
        <line x1="0" y1="0" x2="0" y2="600" stroke="white" />
      </svg>
      <Naming>
        <h1>Hello 👋🏻</h1>
        <h1>
          I'm <Name>Abhinav Deshmukh</Name>
        </h1>
        <Text1>Aspiring Software enginner.</Text1>
        <br />
        <Text>
          I love to make things for web and solving algorithmic related
          problems.
        </Text>
        <Typing>
          <Span ref={typing} />
        </Typing>
        <Button onClick={goToContactPage}>Get In Touch</Button>
      </Naming>
    </MainDiv>
  );
}

const MainDiv = styled.main`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-around;
  max-height: 100vh;
  max-width: 1440px;
  margin-top: 7%;
  color: white;

  img {
    width: 50%;
    margin-left: 4%;
    /* margin-top: 5rem; */

    @media screen and (max-width: 382px) {
      margin-top: 15%;
    }
  }

  svg {
    height: 60vh;
    width: 10px;
    margin: 0 4%;
  }

  /* @media screen and (min-width: 540px) and (max-width: 830px) {
    margin-top: 5%;
  } */

  @media screen and (min-width: 0px) and (max-width: 540px) {
    margin-top: 15%;

    img {
      width: 70%;
      margin-bottom: 2rem;
    }
  }

  @media screen and (max-width: 980px) {
    flex-direction: column;
    align-items: center;

    img {
      width: 60%;
      margin-bottom: 2rem;
      padding-top: 10%;
    }

    svg {
      display: none;
    }
  }
`;

const Naming = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;

  h1 {
    /* margin: 0 0 30px 4px; */
    font-size: clamp(1rem, 3vh, 1.5rem);
    display: inline-block;
  }
  max-width: 85%;
`;

const Name = styled.span`
  /* position: relative; */
  /* width: 30%; */
  font-size: clamp(1.2rem, 7vw, 3rem);
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  margin-left: 0.3rem;
`;

const Text1 = styled.p`
  margin: 0;
  font-size: clamp(1rem, 5vw, 1.7rem);
  font-family: "Roboto Mono";
`;

const Text = styled.p`
  margin: 0;
  font-size: clamp(1rem, 5vw, 1.7rem);
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
`;

const Button = styled.button`
  position: static;
  height: 3rem;
  width: 10rem;
  text-align: center;
  border-radius: 0.4rem;
  cursor: pointer;
  font-size: clamp(1rem, 5vw, 1.3rem);
  color: rgb(62, 82, 237);
  background-color: transparent;
  border: transparent;
  margin-bottom: 2rem;
  box-shadow: rgba(255, 255, 255, 0.6) 0px 20px 30px -10px;
  transition: var(--transition);

  &:hover,
  &:active {
    transform: scale(0.97);
    box-shadow: rgba(255, 255, 255, 0.9) 0px 0px 0px 2px,
      rgba(255, 255, 255, 0.85) 0px 4px 6px -1px,
      rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
  }
`;

const Typing = styled.div`
  position: static;
  display: inline-block;
  text-align: center;
  margin: 3% 0;
  max-height: 5rem;
`;

const Span = styled.span`
  text-align: center;
  display: inline-block;
  font-family: "Roboto Slab";
  font-size: clamp(1.3rem, 5vw, 2rem);
  margin: 0.4rem;
`;

export default Home;
