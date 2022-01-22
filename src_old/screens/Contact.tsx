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

const Contact: React.FC = () => (
  <Container>
    <SideBar />
    <Main welcome="Contatos" route="Contact" />
  </Container>
);

export default Contact;
