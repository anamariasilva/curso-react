import React from "react";
import Main from "../components/Menus/Main";
import SideBar from "../components/SideBar";
import styled from "styled-components";
import createGlobalStyle from "../styles/global";

const GlobalStyle = createGlobalStyle;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
`;

const Home: React.FC = () => (
  <Container>
    <SideBar />
    <Main welcome="Bem vinda!!!" route="Home" />
  </Container>
);

export default Home;
