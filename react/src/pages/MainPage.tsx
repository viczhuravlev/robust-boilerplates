import React from 'react';
import { styled } from 'linaria/react';

const Container = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100vh;
`;

const Content = styled.div`
  display: flex;

  align-items: center;
  justify-content: space-around;

  height: 100px;
`;

const TextContainer = styled.div`
  width: 360px;
`;

const Title = styled.h1`
  font-size: 2rem;
  text-align: right;
`;

const Description = styled.div`
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
          <Title>
            Hello world!{' '}
            <span role="img" aria-label="Fire">
              🔥
            </span>
          </Title>
        </TextContainer>
        <Partition />
        <TextContainer>
          <Description>
            It{String.fromCharCode(39)}s robust frontend <br /> boilerplate.{' '}
            <span role="img" aria-label="Flexed Biceps">
              💪
            </span>
          </Description>
        </TextContainer>
      </Content>
    </Container>
  );
}

export default MainPage;
