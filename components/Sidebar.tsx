import React from "react";
import styled from "styled-components";
import Navigation from "./Navigation";

const Sidebar: React.FC<{ navToggle: boolean }> = (props) => {
  return (
    <SidebarStyled className={`${props.navToggle ? "nav-show" : "nav-hide"}`}>
      <Navigation />
    </SidebarStyled>
  );
};

const SidebarStyled = styled.div`
  width: 16.3rem;
  position: fixed;
  height: 100vh;
  background-color: var(--sidebar-dark-color);
  overflow: hidden;
  transition: all 0.4s ease-in-out;
  
`;

export default Sidebar;
