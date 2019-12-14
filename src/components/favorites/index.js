import React, {Suspense} from "react";
import { useAppContext } from "../../hooks/app-state";
import styled from 'styled-components';
import ListImages from "../list-images";


const Container = styled.div`
  width: 100%;
  padding: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Content = styled.div`
  width: 100%;
  padding: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;


const FavoritesContent = () => {

  const {
    state: {favorites}
  } = useAppContext();
  
  return (
    <Container>
      <Content>
        <Suspense fallback="Loading...">
          <ListImages data={favorites} />
        </Suspense>
      </Content>
    </Container>
  )
  
};

export default FavoritesContent;
