import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const SmallMenu = (props) => {
  return (
    <MainBody>
      <Link to="/about">
        <span>About</span>
      </Link>
      <Link to="/projects">
        <span>Projects</span>
      </Link>
      <Link to="/contact">
        <span>Contact</span>
      </Link>
    </MainBody>
  );
};

const MainBody = styled.div`
  display: ${(props) => (props.open ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: blue;
  padding-top: 5rem;
  height: 100vh;
  width: 100vw;
  z-index: 100;

  a {
    text-decoration: none;
    color: white;
    font-size: 2rem;
    margin: 0.7rem 0;
    transition: var(--transition);

    :hover {
      color: #3500d3;
    }
  }
`;

export default SmallMenu;
