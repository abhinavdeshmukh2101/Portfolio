import React from "react";
import styled from "styled-components";

import codechef from "../assets/Images/codechef.svg";
import codeforces from "../assets/Images/codeforces.svg";
import leetcode from "../assets/Images/leetcode.svg";

const CompetitiveProgramming = () => {
  return (
    <MainBody>
      <TextPart>
        <h1>Problem Solving and Competitive Programming</h1>
        <ul>
          <li>
            <Text>I love picking my brain solving algorithmic problems.</Text>
          </li>
          <li>
            <Text>
              I have given few Google Kickstart Rounds and my best rank was
              3530(Round E, 2021){" "}
              <span>
                <a
                  href="https://drive.google.com/file/d/132kqs83spSilQ_EfyiHSComKikjt3RSt/view?usp=sharing"
                  target="_blank"
                >
                  2021
                </a>
              </span>
            </Text>
          </li>
          <li>
            <Text>
              Google Kickstart{" "}
              <span>
                <a
                  href="https://drive.google.com/file/d/1qefSbGg1tFjH9rYOjYh2hD_yzhdX7gW3/view?usp=sharing"
                  target="_blank"
                >
                  2022
                </a>
              </span>
            </Text>
          </li>
          <li>
            <Text>
              Ranked 988, 942 in CodeChef Starters 11, 14 amongest 8048 and 8994
              participants respectively.{" "}
              <span>
                <a
                  href="https://www.codechef.com/users/secret_user_01"
                  target="_blank"
                >
                  CodeChef Profile Link
                </a>
              </span>
            </Text>
          </li>
          <li>
            <Text>
              I have solved 400+ problems based on Data Structure & Algorithms.
              {""}
              <span>
                <a
                  href="https://www.stopstalk.com/user/profile/shaktiman"
                  target="_blank"
                >
                  Click Here
                </a>{" "}
              </span>
              to check my profile.
            </Text>
          </li>
          <li>
            <Text>
              Check out my{" "}
              <span>
                <a
                  href="https://drive.google.com/file/d/1_HCp1PPkO9UeG-1so95oHQxkMTfzxftB/view?usp=sharing"
                  target="_blank"
                >
                  Competitive Programming Essentials certificate,
                </a>
              </span>{" "}
              made by Coding Minutes.
              {""}
            </Text>
          </li>
        </ul>
      </TextPart>
      <ImagesPart>
        <ImageOne>
          <span>CodeChef</span>
          <img src={codechef} alt="" />
        </ImageOne>
        <ImageOne>
          <span>CodeForces</span>
          <img src={codeforces} alt="" />
        </ImageOne>
        <ImageOne>
          <span>LeetCode</span>
          <img src={leetcode} alt="" />
        </ImageOne>
      </ImagesPart>
    </MainBody>
  );
};

const MainBody = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 4%;

  @media screen and (max-width: 1100px) {
    flex-direction: column;
  }
`;

const TextPart = styled.div`
  display: flex;
  flex-direction: column;

  li {
    list-style: circle;
  }

  h1 {
    font-size: clamp(2rem, 6vw, 3rem);
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    color: #3500d3;
  }
`;

const ImagesPart = styled.div`
  /* width: 100%; */
  /* margin-left: 2rem; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;

  @media screen and (max-width: 1100px) {
    flex-direction: row;
    width: 100%;
  }
`;

const ImageOne = styled.div`
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

const Text = styled.p`
  font-size: clamp(1rem, 3vw, 1.4rem);
  font-family: "Roboto Mono";
  margin: 0.5rem 0;

  a {
    text-decoration: none;
    cursor: pointer;
    color: green;
  }

  span {
    position: static;
    margin-left: 0.2rem;
    border-bottom: 4px solid #3500d3;
    transition: all 0.2s ease-in-out;

    :hover {
      border-bottom: 0;
      height: 5vh;
      background-color: rgba(255, 255, 255, 0.75);
      transform: scaleY(1.02);
      color: lightgreen;
    }
  }
`;

export default CompetitiveProgramming;
