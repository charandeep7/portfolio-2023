import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [alter, setAlter] = useState(true);
  const navMenu = (txt, id) => {
    return (
      <Link
        to={id}
        spy={true}
        smooth={true}
        offset={50}
        duration={100}
        onClick={() => {toggle && setToggle(false)}}
      >
        <span>{txt}</span>
      </Link>
    );
  };
  useEffect(() => {
    if (toggle) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "visible";
    }
  }, [toggle]);
  return (
    <Nav>
      <Logo onClick={() => setAlter(!alter)}>
        {alter ? "Charandeep" : "Kitish"}
      </Logo>

      <NavMenu>
        {navMenu("Home", "home")}
        {navMenu("About Me", "aboutme")}
        {navMenu("Projects", "project")}
        {navMenu("Contact", "contact")}
      </NavMenu>

      <CustomMenu onClick={() => setToggle(true)} className="mobile">
        Menu
      </CustomMenu>
      <BurgerNav show={toggle}>
        <CloseWrapper>
          {" "}
          <CustomClose onClick={() => setToggle(false)}> X </CustomClose>{" "}
        </CloseWrapper>
        <CustomNavMenu>
          {navMenu("Home", "home")}
          {navMenu("About Me", "aboutme")}
          {navMenu("Projects", "project")}
          {navMenu("Contact", "contact")}
        </CustomNavMenu>
      </BurgerNav>
      {toggle && <Overlay />}
    </Nav>
  );
};

export default Header;

const Nav = styled.nav`
  position: -webkit-sticky;
  position: sticky;
  top: 0;

  height: 70px;
  background: var(--header-color);
  overflow-x: hidden;
  overflow-y: hidden;
  z-index: 5;

  display: flex;
  align-items: center;

  padding: 0 36px;

  .mobile {
    display: none;
  }

  @media (max-width: 950px) {
    justify-content: space-between;
    padding: 0 10px;
  }
  @media (max-width: 950px) {
    .mobile {
      display: block;
    }
  }
`;

const Logo = styled.p`
  font-size: 1.5rem;

  &::first-letter {
    font-size: 3rem;
    letter-spacing: 0.1em;
    font-weight: 550;
    color: var(--primary-color);
    font-family: "Caveat", cursive;

    @media (max-width: 950px) {
      font-size: 2.8rem;
    }
  }
  @media (max-width: 950px) {
    font-size: 1.2rem;
  }
`;

const NavMenu = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: flex-end;

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;

    span {
      font-size: 13px;
      letter-spacing: 1.42px;
      text-transform: uppercase;
      position: relative;
      font-weight: 500;

      &::after {
        content: "";
        height: 2px;
        background: white;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        opacity: 0;
        transform-origin: left center;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        transform: scaleX(0);
      }
    }
    &:hover {
      span::after {
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }

  @media (max-width: 950px) {
    display: none;
  }
`;

const CustomMenu = styled.p`
  margin-left: 10px;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 0.2;
  background-color: var(--secondary-color);
  padding: 15px;
  border-radius: 5px;
  font-size: 10px;
`;

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: var(--header-color);
  width: 300px;
  overflow-x: hidden;
  z-index: 16;
  list-style: none;
  padding: 20px;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  text-align: start;
  ::-webkit-scrollbar {
    width: 1px;
  }
  li {
    padding: 15px 0;

    a {
      width: 100%;
      font-weight: 600;
      padding: 1em;
    }

    a:hover {
      background: whitesmoke;
      opacity: 0.8;
    }
  }
`;

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  position: sticky;
  top: 0;
`;

const CustomClose = styled.p`
  cursor: pointer;
  color: var(--white);
  font-size: 20px;
`;

const CustomNavMenu = styled.div`
  display: flex;
  flex-direction: column;

  a {
    display: flex;
    align-items: center;
    padding: 12px 12px;
    cursor: pointer;

    img {
      height: 20px;
    }
    span {
      font-size: 18px;
      letter-spacing: 1.42px;
      text-transform: uppercase;
      position: relative;
    }
    &:hover {
      color: blueviolet;
    }
  }

  span {
    display: flex;
    align-items: center;
    padding: 15px 0;
    cursor: pointer;

    p {
      display: inline;
      font-weight: bold;
      margin-left: 25px;
      transition: all 250ms;

      &:hover {
        transform: scale(1.5);
      }
    }
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  backdrop-filter: blur(2px) opacity(95%);
  z-index: 9;
  overflow: hidden;
`;
