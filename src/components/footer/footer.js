import React from 'react';
import styled from 'styled-components';

const Container = styled.div `
  width: 100%;
  height: 40px;
  border-bottom: 1px solid gray;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: fixed;
  bottom: 0;
  background: gray;
`;

const FooterTitle = styled.p `
    font-size: 16px;
    margin: 0px 24px;
`;

const Footer = () => {
    return (
        <Container>
            <FooterTitle>Galery POC Web app</FooterTitle>
        </Container>
    )
}

export default Footer;