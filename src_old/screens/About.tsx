import React from "react";
import SideBar from "../components/SideBar";
import styled from "styled-components";
import Main from "../components/Menus/Main";
import createGlobalStyle from "../styles/global";

const GlobalStyle = createGlobalStyle;
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
`;
const About: React.FC = () => (
  <Container>
    <GlobalStyle />
    <SideBar />
    <Main welcome="Quem Somos" route="Quem Somos" />
  </Container>
);

export default About;
