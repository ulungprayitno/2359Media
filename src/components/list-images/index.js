import React from "react";
import styled from "styled-components";
import { Row, Column } from "../../components/grid";
import { useAppContext } from "../../hooks/app-state";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Image = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
`;

const FavoriteButton = styled.img`
  cursor: pointer;
  position: absolute;
  bottom: 0;
  right: 0;
  margin: 8px;
  height: 50px;
  width: 50px;
  opacity: ${({ isFavorite }) => (isFavorite ? 1 : 0)};
`;

const Card = styled.div`
  width: 100%;
  position: relative;
  background: lightgray;

  :hover {
    ${FavoriteButton} {
      opacity: ${({ isFavorite }) => (isFavorite ? 1 : 0.5)};
    }
  }
`;

const useListImagesHook = () => {
  const {
    state: { favorites },
    actions: { setFavorites }
  } = useAppContext();

  const newFavorites = favorites.map(item => item.id);

  const onFavoriteClick = data => () => {
      const newData = [...favorites, data];
      setFavorites(newData);
  };

  const onRemoveFavoriteClick = id => () => {
    const newData = favorites.filter(item => item.id !== id)
    setFavorites(newData)
  }

  return [{ favorites: newFavorites }, { onFavoriteClick, onRemoveFavoriteClick }];
};

const ListImages = ({ data }) => {
  const [{ favorites }, { onFavoriteClick, onRemoveFavoriteClick }] = useListImagesHook();
  return (
    <Container>
      <Row width="100%">
        {data.map(item => (
          <Column key={item.id} sm="12" md="12" lg="3" padding="12px">
            <Card isFavorite={favorites.includes(item.id)}>
              <Image key={item.id} src={item.images.original.url} />
              <FavoriteButton
                src="fav-icon.png"
                isFavorite={favorites.includes(item.id)}
                onClick={favorites.includes(item.id) ? onRemoveFavoriteClick(item.id) : onFavoriteClick(item)}
              />
            </Card>
          </Column>
        ))}
      </Row>
    </Container>
  );
};

export default ListImages;
