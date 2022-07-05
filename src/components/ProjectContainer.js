import React from "react";
import styled from "styled-components";

import github from "../assets/Images/github.svg";
import link from "../assets/Images/link.svg";

const ProjectContainer = (props) => {
  return (
    <Container>
      <Icons>
        <IconLink src={props.iconLink} alt="ProjectIcon" />
        <P2>
          <a href={props.githubLink} target="_blank">
            <img src={github} alt="GithubLink" />
          </a>
          <a href={props.projectLink} target="_blank">
            <img src={link} alt="ProjectLink" />
          </a>
        </P2>
      </Icons>
      <TextPart>
        <h1>{props.projectTitle}</h1>
        <p>{props.projectDescription}</p>
      </TextPart>
      <TechUsed>
        {props.spanList.map((tech) => (
          <img src={tech} alt="Icon" />
        ))}
      </TechUsed>
    </Container>
  );
};

const Container = styled.div`
  /* height: 35%; */
  max-width: 25rem;
  flex: 1;
  background-color: rgba(255, 255, 255, 0.85);
  box-shadow: rgba(255, 255, 255, 0.6) 0px 20px 30px -10px;
  margin: 0.8rem;
  border-radius: 0.7rem;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  transition: var(--transition);

  &:hover,
  &:active {
    transform: scale(0.97);
    box-shadow: rgba(255, 255, 255, 0.9) 0px 0px 0px 2px,
      rgba(255, 255, 255, 0.85) 0px 4px 6px -1px,
      rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
  }
`;

const Icons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  /* align-items: flex-end; */

  img {
    margin: 0 1rem;
    margin-top: 0.8rem;
  }
`;

const IconLink = styled.img`
  margin: 1rem;
  height: 48px;
  width: 48px;
`;

const P2 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const TextPart = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 1rem;

  h1 {
    font-size: clamp(1.3rem, 2vw, 2rem);
    /* border: 1px solid black; */
  }

  p {
    font-size: clamp(0.9rem, 2vw, 1.1rem);
    /* border: 1px solid black; */
  }
`;

const TechUsed = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;

  /* margin: 0rem 1rem; */

  span {
    margin: 1rem 0.7rem;
    color: grey;
  }

  img {
    height: 40px;
    width: 40px;
    margin: 0 0.7rem;
    margin-bottom: 1rem;
  }
`;

export default ProjectContainer;
