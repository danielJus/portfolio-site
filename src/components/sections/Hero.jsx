import React from "react"
import styled from "styled-components"
import { themes } from "../styles/ColorStyles"
import { BodyMain, H1 } from "../styles/TextStyles"

const Hero = () => {
  return (
    <Wrapper>
      <Greeting>Hi, my name is</Greeting>
      <Title>Daniel Justavino.</Title>
      <Subtitle>I build things for the web.</Subtitle>
      <Description>
        I'm a software engineer based in Boston, MA specializing in building
        (and occasionally designing) exceptional websites, applications, and
        everything in between.
      </Description>
      <ActionButton>Get In Touch</ActionButton>
    </Wrapper>
  )
}

export default Hero

const Wrapper = styled.div`
  height: 100vh;
  padding: 4rem;
  line-height: 1.5;
`

const Greeting = styled(BodyMain)`
  color: ${themes.dark.primary};
`
const Title = styled(H1)`
  color: ${themes.dark.lightText};
`
const Subtitle = styled(H1)`
  color: ${themes.dark.darkText};
`

const Description = styled(BodyMain)`
  color: ${themes.dark.darkText};
  max-width: 500px;
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
`
