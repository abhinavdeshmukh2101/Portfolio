import React from "react";
import styled from "styled-components";

import programmer from "../assets/Images/programmer.svg";
import html from "../assets/Images/html.svg";
import css from "../assets/Images/css.svg";
import js from "../assets/Images/js.svg";
import react from "../assets/Images/react.svg";
import redux from "../assets/Images/redux.svg";

import node from "../assets/Images/node.svg";
import mysql from "../assets/Images/mysql.svg";
import mongodb from "../assets/Images/mongodb.svg";
import express from "../assets/Images/express.svg";
import firebase from "../assets/Images/firebase.svg";

import CompetitiveProgramming from "../components/CompetitiveProgramming";

function about() {
  return (
    <Body>
      <FrontendPart>
        <Text>
          <h1>Frontend Development</h1>
          <p>
            I am passionate about building beautiful, responsive and interactive
            web apps. I am currently hooked up with React.
          </p>
        </Text>
        <FrontendImages>
          <DisplayImage>
            <span>HTML</span>
            <img src={html} alt="" />
          </DisplayImage>
          <DisplayImage>
            <span>CSS</span>
            <img src={css} alt="" />
          </DisplayImage>
          <DisplayImage>
            <span>Javascript</span>
            <img src={js} alt="" />
          </DisplayImage>
          <DisplayImage>
            <span>ReactJS</span>
            <img src={react} alt="" />
          </DisplayImage>
          <DisplayImage>
            <span>Redux</span>
            <img src={redux} alt="" />
          </DisplayImage>
        </FrontendImages>
      </FrontendPart>
      <BackendPart>
        <Text>
          <h1>Backend Development</h1>
          <p>
            I use NodeJs combined with MongoDB for creating the backend. I have
            worked with each of these technologies.
          </p>{" "}
        </Text>
        <BackendImages>
          <DisplayImage>
            <span>NodeJS</span>
            <img src={node} alt="" />
          </DisplayImage>
          <DisplayImage>
            <span>MongoDB</span>
            <img src={mongodb} alt="" />
          </DisplayImage>
          <DisplayImage>
            <span>Express</span>
            <img src={express} alt="" />
          </DisplayImage>
          <DisplayImage>
            <span>Firebase</span>
            <img src={firebase} alt="" />
          </DisplayImage>
          <DisplayImage>
            <span>MySQL</span>
            <img src={mysql} alt="" />
          </DisplayImage>
        </BackendImages>
      </BackendPart>
      <CompetitiveProgramming />
    </Body>
  );
}

const Body = styled.div`
  display: inline-flex;
  flex-direction: column;
  color: white;

  h1 {
    font-family: "PT Sans";
    font-size: clamp(1.4rem, 5vh, 3rem);
  }
`;
const Photo = styled.div`
  margin-left: 35%;
  padding-top: 2rem;
  img {
    width: 40%;
  }
`;

const FrontendPart = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 2rem;

  @media screen and (max-width: 1145px) {
    flex-direction: column;
  }
`;

const FrontendImages = styled.div`
  display: flex;
  flex: 0.5 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  @media (max-width: 670px) {
    flex-wrap: wrap;
  }
`;

const BackendPart = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 2rem;

  @media screen and (max-width: 1145px) {
    flex-direction: column;
  }
`;

const BackendImages = styled.div`
  display: flex;
  flex: 0.5 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  @media (max-width: 670px) {
    flex-wrap: wrap;
  }
`;

const DisplayImage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 1rem;
  max-width: 90px;

  img {
    width: 90px;
  }
`;

const Text = styled.div`
  font-size: clamp(1.2rem, 4vw, 2rem);
  width: 100%;
  margin: 4% 2%;

  h1 {
    font-size: clamp(2rem, 6vw, 3rem);
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    color: #3500d3;
  }

  p {
    font-size: clamp(1rem, 3vw, 1.4rem);
    font-family: "Roboto Mono";
  }

  @media (mix-with: 1146px) {
    width: 50%;
  }
`;

export default about;
