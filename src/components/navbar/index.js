import React from "react";
import styled from "styled-components";
import Menu from "./menu";

const Container = styled.div`
  width: 100%;
  height: 56px;
  border-bottom: 1px solid gray;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Logo = styled.p`
  font-size: 24px;
  margin: 0px 24px;
`;

const Separator = styled.div`
  width: 1px;
  height: 32px;
  background: gray;
`;

const Navbar = () => {
  return (
    <Container>
      <Logo>Galleryeasy</Logo>
      <Separator />
      <Menu />
    </Container>
  );
};

export default Navbar;
