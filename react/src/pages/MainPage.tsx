import React from 'react';
import { styled } from 'linaria/react';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100vh;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100px;
`;

const TextContainer = styled.div`
  width: 360px;
`;

const Title = styled.h1`
  font-size: 2rem;
  text-align: right;
`;

const Description = styled.h2`
  width: 360px;
  font-size: 1.5rem;
  line-height: 1.5;
  color: var(--font-color-secondary);
`;

const Partition = styled.div`
  width: 5px;
  height: 100%;
  margin: 0 50px;
  background-color: #f7981c;
`;

function MainPage() {
  return (
    <Container>
      <Content>
        <TextContainer>
          <Title>Hello world! 🔥</Title>
        </TextContainer>
        <Partition />
        <TextContainer>
          <Description>
            It's robust frontend <br /> boilerplate. 💪
          </Description>
        </TextContainer>
      </Content>
    </Container>
  );
}

export default MainPage;
