import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import logo from "../assets/Images/logo.jpeg";
import menu from "../assets/Images/menu.svg";
// import SmallMenu from "./SmallMenu";

import "./NavigationBar.css";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const url =
    "https://drive.google.com/file/d/1BLjwj-9WPdgPRIyHPsKdrqn0idcG_MPs/view?usp=sharing";

  const downloadResume = () => {
    window.open(url, "_blank");
  };

  const toggleHamBurger = () => {
    setOpen(!open);
  };

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY < lastScrollY) {
        // if scroll down hide the navbar
        setShow(false);
      } else {
        // if scroll up show the navbar
        setShow(true);
      }

      // remember current page location to use in the next move
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <div className={`Nav ${open && "SmallMenu"}`}>
      <Logo>
        <a href="/">
          <img src={logo} alt="" />
        </a>
      </Logo>

      <MenuOption onClick={toggleHamBurger}>
        <img src={menu} alt="Hamburger" />
        {open && (
          <HamburgerMenu>
            <Link to="/">
              <span>Home</span>
            </Link>
            <Link to="/about">
              <span>About</span>
            </Link>
            <Link to="/projects">
              <span>Projects</span>
            </Link>
            <Link to="/contact">
              <span>Contact</span>
            </Link>
            <Link to="/" onClick={downloadResume}>
              <span>Resume</span>
            </Link>
          </HamburgerMenu>
        )}
      </MenuOption>
      {/* {console.log(open)} */}

      <Menu>
        <Link to="/about">
          <span>About</span>
        </Link>
        <Link to="/projects">
          <span>Projects</span>
        </Link>
        <Link to="/contact">
          <span>Contact</span>
        </Link>
        <Button onClick={downloadResume}>Resume</Button>
      </Menu>
    </div>
  );
}

const HamburgerMenu = styled.div`
  display: flex;
  position: fixed;
  inset: 0;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: black;
  padding-top: 5rem;
  height: 100vh;
  width: 100%;
  z-index: 1000;

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

const Logo = styled.div`
  margin: 0 3rem;
  margin-top: 1.5rem;

  a {
    img {
      height: 25%;
      width: 25%;
    }
  }
`;

const MenuOption = styled.button`
  position: absolute;
  height: 2rem;
  width: 2rem;
  right: 1rem;
  cursor: pointer;
  z-index: 101;
  background-color: transparent;
  border: none;

  img {
    height: 100%;
    width: 100%;
  }

  @media screen and (min-width: 668px) {
    display: none;
  }
`;

const Menu = styled.div`
  display: flex;
  margin: 1rem;
  min-width: 30%;

  a {
    display: flex;
    text-decoration: none;
    align-items: center;
    margin: 0.5rem;
    cursor: pointer;

    img {
      height: 25px;
      min-width: 25px;
      width: 20px;
      z-index: 2;
    }

    span {
      color: white;
      font-size: 18px;
      letter-spacing: 1.42px;
      line-height: 1.08;
      padding: 2px 0px;
      white-space: nowrap;
      position: relative;

      &:before {
        background-color: white;
        position: absolute;
        content: "";
        left: 0px;
        right: 0px;
        height: 2px;
        width: auto;
        transform: scaleX(0);
        border-radius: 0 0 4px 4px;
        bottom: -6px;
        transform-origin: left;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
      }
    }

    &:hover {
      span:before {
        transform: scaleX(1);
      }
    }
  }

  @media screen and (max-width: 668px) {
    display: none;

    :menuoption {
      display: block;
    }
  }
`;

const Button = styled.button`
  height: 2.7rem;
  width: 6rem;
  text-align: center;
  border-radius: 0.4rem;
  cursor: pointer;
  font-size: clamp(1rem, 5vw, 1.3rem);
  color: rgb(62, 82, 237);
  background-color: transparent;
  border: transparent;
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

export default Navbar;
