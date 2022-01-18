import React from "react";
import styled from "styled-components";

const H1 = styled.h1`
  font-size: 1.5em;
  color: #333;

  @media (min-width: 576px) {
    font-size: 4em;
    color: #333;
    transition-duration: 0.5s;
    &:hover {
      color: #2980b9;
      transform: rotate(100px);
      cursor: pointer;
    }
  }
  @media (min-width: 920px) {
    font-size: 5em;
  }

  @media (min-width: 1280px) {
    font-size: 7em;
  }
`;

const fontSize = "3em";
const color = "#002857";

const H2 = styled.h2`
  font-size: ${fontSize};
  color: ${color};
`;

const NavBar: React.FC = () => (
  <>
    <H1>Bem vindo ao curso React Developer</H1>
    <H2>Formando especialistas</H2>
  </>
);

export default NavBar;
