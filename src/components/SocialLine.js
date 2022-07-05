import React from "react";
import Image from "next/image";
import styled from "styled-components";

// import mailsvg from "../public/images/mail.svg";
// import linkedinsvg from "../public/images/linkedin.svg";
// import githubsvg from "../public/images/github.svg";

function SocialLine() {
  return (
    <SocialArea>
      <Links>
        <a>
          <Image src={mailsvg} alt="" />
        </a>
        <a>
          <Image src={linkedinsvg} alt="" />
        </a>
        <a>
          <Image src={githubsvg} alt="" />
        </a>
      </Links>
      <Line />
    </SocialArea>
  );
}

const SocialArea = styled.div`
  position: fixed;
  bottom: 0;
  margin-left: 1.8rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 5rem;
  height: 16rem;
  /* background-color: red; */
`;

const Links = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;

  z-index: 1;

  a {
    cursor: pointer;
    margin: 1rem;

    :hover {
      transform: scale(1.5) rotate(360deg);
      transition: transform 400ms;
    }
  }
`;

const Line = styled.div`
  position: relative;
  top: 17px;
  width: 4px;
  height: 3rem;
  background-color: black;
`;

export default SocialLine;
