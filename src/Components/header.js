import React from "react";
import styled from "styled-components";
import { HashLink as Link } from "react-router-hash-link";

const HeaderComponent = styled.header`
  height: 10vh;
  width: 100%;

  /*   @media (max-width: 700px) {
    overflow: hidden;
    &::before {
      content: "MENU";
      width: 10px;
      color: #000;
      position: absolute;
      left: 5px;
      top: 5px;
    }
  } */
`;

const Nav = styled.nav`
  height: 100%;
  width: 100%;
  margin: 0px;
  padding: 0px;
  position: relative;
  transition: all 0.5s ease;

  /*   @media (max-width: 700px) {
    transform: translatex(100rem);
    &.active {
      background-color: #fff;
      transform: translatex(-1rem);
      z-index: 3;
      position: absolute;
    }
  } */
`;

const Ul = styled.ul`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
  margin: 0px;
  padding: 0px 15px;
  column-gap: 2rem;
  > li:first-child {
    position: absolute;
    left: 0px;
    font-size: 1.5rem;
  }
  @media (max-width: 700px) {
    > li:first-child {
      position: absolute;
      top: 11vh;
    }
  }
  /*
    flex-direction: column;
    justify-content: center;
    gap: 2rem;
    > li:first-child {
      top: 20px;
    }
  } */
`;

const Li = styled.li`
  list-style: none;
  font-size: 1.11rem;
`;

const Header = () => {
  return (
    <HeaderComponent>
      <Nav>
        <Ul>
          <Li>{"<Cristian />"}</Li>
          <Li>
            <Link to="/#home">Home</Link>
          </Li>
          <Li>
            <Link to="/#about">About me</Link>
          </Li>
          <Li>
            <Link to="/#skill">Skills</Link>
          </Li>
          <Li>
            <Link to="/#experience">Experience</Link>
          </Li>
        </Ul>
      </Nav>
    </HeaderComponent>
  );
};

export default Header;
