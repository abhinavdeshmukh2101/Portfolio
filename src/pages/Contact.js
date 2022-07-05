import React from "react";
import styled from "styled-components";

import Container1 from "../components/Container1.js";

import phone from "../assets/Images/phone.svg";
import mail from "../assets/Images/mail.svg";
import location from "../assets/Images/location.svg";
import linkedin from "../assets/Images/linkedin.svg";
import github from "../assets/Images/github.svg";
import instagram from "../assets/Images/instagram.svg";
import contactUs from "../assets/Images/contact_us.svg";

const Contact = () => {
  return (
    <MainBody>
      <Image src={contactUs} alt="contact" />
      <Part1>
        <section>
          <h1>Contact Information</h1>
          <p>Fill in the form and I will get to you as soon as possible.</p>
        </section>
        <Details>
          <Container1 image={phone} text="+91-7972010480" />
          <Container1 image={mail} text="abhinavdeshmukh2101@gmail.com" />
          <Container1 image={location} text="Nagpur, India" />
        </Details>
        <SocialMediaLinks>
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/in/abhinav-deshmukh-a05108192/"
                target="_blank"
              >
                <img src={linkedin} alt="" />
              </a>
            </li>
            <li>
              <a href="https://github.com/abhinavdeshmukh2101" target="_blank">
                <img src={github} alt="" />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/abhinav_deshmukh1/"
                target="_blank"
              >
                <img src={instagram} alt="" />
              </a>
            </li>
          </ul>
        </SocialMediaLinks>
      </Part1>
    </MainBody>
  );
};

const MainBody = styled.div`
  max-height: 80vh;
  width: 90%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10%;
  flex-wrap: wrap;
  margin: 5%;
  color: white;
  /* margin-top: 2.5rem; */
`;

const Image = styled.img`
  width: 50%;
  padding-top: 3rem;
  img {
    /* width: 50%; */
    padding-bottom: 2rem;
  }

  @media screen and (max-width: 750px) {
    width: 70%;
  }
`;

const Part1 = styled.div`
  height: 34rem;
  /* width: 100%; */
  border-radius: 0.7rem;
  display: flex;
  flex-direction: column;

  section {
    margin-left: 6%;
  }

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SocialMediaLinks = styled.div`
  ul {
    list-style-type: none;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-center;
  }

  li {
    margin: 0 1rem;
    height: 40px;
    width: 40px;
    border-radius: 50%;
    transition: var(--transition);
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: rgba(255, 255, 255, 0.6) 0px 20px 30px -10px;

    img {
    }

    &:hover,
    &:active {
      transform: scale(0.97);
      box-shadow: rgba(255, 255, 255, 0.9) 0px 0px 0px 2px,
        rgba(255, 255, 255, 0.85) 0px 4px 6px -1px,
        rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
    }
  }
`;

export default Contact;
