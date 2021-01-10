import React from "react"
import styled, { keyframes } from "styled-components"
import { themes } from "../styles/ColorStyles"
import { BodyMain, H1 } from "../styles/TextStyles"
import hexagonSvg from "../../static/svg/hexagon.svg"

const Hero = () => {
  return (
    <Wrapper>
      <Greeting>Hi, my name is</Greeting>
      <Title>Daniel Justavino.</Title>
      <Subtitle>I build things for the web.</Subtitle>
      <Description>
        I'm a software engineer based in Panama, PA specializing in building
        websites and applications, that improve business performance and user
        satisfaction.
      </Description>
      <ActionButton>
        <a style={{ textDecoration: "none" }} href="#contact">
          Get In Touch
        </a>
      </ActionButton>
      <Hexagon src={hexagonSvg} alt="hexagon" />
    </Wrapper>
  )
}

/* <ImgContainer>
        <Hexagon src={hexagonSvg} alt="hexagon" />
      </ImgContainer> */

export default Hero

const spin = keyframes`
    from {
        transform:rotate(0deg);
    }
    to {
        transform:rotate(360deg);
    }

`

const Hexagon = styled.img`
  position: absolute;
  right: 140px;
  animation-name: ${spin};
  animation-duration: 80s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  line-height: 1.5;
  margin: 0 auto;
  padding: 100px 0;
  max-width: 1000px;

  @media (max-width: 400px) {
  }
`

const Greeting = styled(BodyMain)`
  color: ${themes.dark.primary};
`
const Title = styled(H1)`
  color: ${themes.dark.lightText};

  @media (max-width: 400px) {
    font-size: 40px;
  }
`
const Subtitle = styled(H1)`
  color: ${themes.dark.darkText};
  @media (max-width: 400px) {
    font-size: 40px;
  }
`

const Description = styled(BodyMain)`
  color: ${themes.dark.darkText};
  max-width: 500px;

  @media (max-width: 400px) {
    font-size: 1rem;
    line-height: 1.5;
  }
`

const ActionButton = styled.button`
  margin-top: 50px;
  background: transparent;
  border: 1px solid ${themes.dark.primary};
  padding: 1.25rem 1.75rem;
  border-radius: 5px;
  color: ${themes.dark.primary};
  outline: none;
  font-size: 1rem;
  transition: 0.5s ease-out;

  :focus {
    background: rgba(100, 255, 218, 0.1);
    color: ${themes.dark.primary};
  }

  :hover {
    background: rgba(100, 255, 218, 0.1);
    color: ${themes.dark.primary};
  }
`
