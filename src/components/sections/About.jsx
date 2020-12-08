import React from "react"
import styled from "styled-components"
import { themes } from "../styles/ColorStyles"
import { H3 } from "../styles/TextStyles"
const About = () => {
  return (
    <Wrapper>
      <TitleWrapper>
        <Title>
          <span>01.</span> About me
          <hr />
        </Title>
      </TitleWrapper>

      <ContentWrapper>
        <TextWrapper>
          Hello! I'm Brittany, a software engineer based in Boston, MA.
          <br />
          <br />I enjoy creating things that live on the internet, whether that
          be websites, applications, or anything in between. My goal is to
          always build products that provide pixel-perfect, performant
          experiences.
          <br />
          <br /> Shortly after graduating from Northeastern University, I joined
          the engineering team at Upstatement where I work on a wide variety of
          interesting and meaningful projects on a daily basis. <br />
          <br />
          Here are a few technologies I've been working with recently:
          <br />
          <br />
          <TechWrapper>
            <ul>
              <li>Javascript</li>
              <li>Javascript</li>
              <li>Javascript</li>
            </ul>
            <ul>
              <li>Javascript</li>
              <li>Javascript</li>
              <li>Javascript</li>
            </ul>
          </TechWrapper>
        </TextWrapper>
        <ImgWrapper></ImgWrapper>
      </ContentWrapper>
    </Wrapper>
  )
}

export default About

const Wrapper = styled.div`
  padding: 0 4rem;

  border: 1px solid red;
`

const TitleWrapper = styled.div`
  display: flex;
  border: 1px solid red;

  span {
    color: ${themes.dark.primary};
  }
`
const Title = styled(H3)`
  color: ${themes.dark.lightText};
`

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  border: 1px solid red;
`
const TextWrapper = styled.div`
  line-height: 1.5;
  color: ${themes.dark.darkText};
  border: 1px solid red;
`

const TechWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`
const ImgWrapper = styled.div`
  border: 1px solid red;
`
