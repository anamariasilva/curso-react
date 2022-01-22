import React from "react";
import SideBar from "../components/SideBar";
import styled from "styled-components";
import Main from "../components/Menus/Main";
import CoursesGrid from "../components/Menus/CoursesGrid";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
`;

const Courses: React.FC = () => (
  <Container>
    <SideBar />
    <CoursesGrid welcome="Cursos" route="Courses" />
  </Container>
);

export default Courses;
