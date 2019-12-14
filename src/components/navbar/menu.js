import React from "react";
import styled from "styled-components";
import { useAppContext } from "../../hooks/app-state";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0px 24px;
`;

const Title = styled.p`
  cursor: pointer;
  font-size: 24px;
  margin: 0px 24px 0px 0px;
  color: ${({ isActive }) => (isActive ? "black" : "gray")};
`;

const Menu = () => {
  const [{ activeMenu, favorites }, { onMenuClick }] = useMenuHook();
  return (
    <Container>
      <Title isActive={activeMenu === "search"} onClick={onMenuClick("search")}>
        Search
      </Title>
      <Title
        isActive={activeMenu === "favorites"}
        onClick={onMenuClick("favorites")}
      >
        Favourites ({favorites.length})
      </Title>
    </Container>
  );
};

const useMenuHook = () => {
  const {
    state: { activeMenu, favorites },
    actions: { setActiveMenu }
  } = useAppContext();

  const onMenuClick = val => () => setActiveMenu(val);

  return [
    {
      activeMenu,
      favorites
    },
    {
      onMenuClick
    }
  ];
};

export default Menu;
