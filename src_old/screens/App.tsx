import React from "react";
import SideBar from "../components/SideBar";
import styled from "styled-components";
import Main from "../components/Menus/Main";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
`;

const App: React.FC = () => (
  <Container>
    <SideBar />
    <Main welcome="Bem vindo" route="Home" />
  </Container>
);

export default App;
