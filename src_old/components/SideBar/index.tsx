import React from "react";
import MenuItem from "../Menus/MenuItem";
import { menu } from "../Menus/MenuItem/MenuItemData";
import { SideBarNav } from "./styles";
import styled from "styled-components";

//TypeScript - Superset JavaScript que cria e obriga o uso de dados tipados

const SideBarContainer = styled.section`
  width: 50px;
  height: 100vh;
  background: #273c75;
  color: #f5f6fa;
  transition-property: width;
  transition-duration: 0.5s;
  transition-timing-function: cubic-bezier(0.5, 0.5, 0.5);
  a {
    color: #f5f6fa;
    text-decoration: none;
    display: flex;
    align-items: center;
  }
  a:hover {
    text-decoration: none;
  }
  &:hover {
    width: 350px;
    &:hover ul > li span.label {
      display: inline-flex;
    }
  }
`;
interface SideBarProps {
  menuLateralText?: string;
}

export default function SideBar({ menuLateralText }: SideBarProps) {
  //    condicao E condicao
  return (
    <SideBarContainer>
      <SideBarNav>
        {menuLateralText && <div>{menuLateralText}</div>}
        <MenuItem linkProps={menu} />
      </SideBarNav>
    </SideBarContainer>
  );
}
