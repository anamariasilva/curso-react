import styled from "styled-components";

export const SideBar = styled.nav`
  width: 100%;
  > div {
    font-size: 2em;
    font-weight: 100;
  }
  > ul {
    margin: 0;
    padding: 0;
    display: flex;
    > li {
      min-width: 100px;
      text-align: center;
      &:hover {
        border-bottom: solid 2px orange;
      }
    }
  }
`;