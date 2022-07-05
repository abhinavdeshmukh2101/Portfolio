import React, { useState } from "react";
import styled from "styled-components";
import ProjectContainer from "../components/ProjectContainer";

import react from "../assets/Images/react.svg";
import redux from "../assets/Images/redux.svg";
import firebase from "../assets/Images/firebase.svg";
import imdb from "../assets/Images/imdb.svg";
import portfolioIcon from "../assets/Images/logo.jpeg";
import netflixIcon from "../assets/Images/netflix.svg";
import disneyPlusIcon from "../assets/Images/disneyPlus.svg";

const Projects = () => {
  var max = 10000000;

  return (
    <MainDiv>
      <Title>Some things I've Built</Title>
      <Display>
        <ProjectContainer
          key={Math.random() * max}
          iconLink={portfolioIcon}
          githubLink="https://github.com/abhinavdeshmukh2101/"
          projectLink="https://disney-react-clone-36f9b.web.app/"
          projectTitle="Portfolio"
          projectDescription="This is my portfolio website. It is made with the help of React."
          spanList={[react, redux, firebase]}
        />
        <ProjectContainer
          key={Math.random() * max}
          iconLink={disneyPlusIcon}
          githubLink="https://github.com/abhinavdeshmukh2101/Disney-plus-clone/"
          projectLink="https://disney-react-clone-36f9b.web.app/"
          projectTitle="Disney Plus Clone"
          projectDescription="A clone of Disney Plus website, built with React and Firebase."
          spanList={[react, redux, firebase]}
        />
        <ProjectContainer
          key={Math.random() * max}
          iconLink={netflixIcon}
          githubLink="https://github.com/abhinavdeshmukh2101/netflix-clone/"
          projectLink="https://netflix-clone-bc028.web.app/"
          projectTitle="Netflix Clone"
          projectDescription="A clone of Netflix, built with React and IMDB API."
          spanList={[react, imdb]}
        />
      </Display>
    </MainDiv>
  );
};

const MainDiv = styled.div`
  min-height: 100vh;
  width: 100%;
  /* border: 4px dotted blue; */
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  flex-wrap: wrap;
`;

const Title = styled.h1`
  font-size: clamp(2rem, 4vw, 4rem);
  margin-left: 30%;
  margin-top: 5rem;
  color: white;

  @media screen and (max-width: 510px) {
    margin-left: 20%;
  }
`;

const Display = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export default Projects;
