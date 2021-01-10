import React from "react"
import styled from "styled-components"
import { themes } from "../styles/ColorStyles"
import { H3 } from "../styles/TextStyles"
import helmetSvg from "../../static/svg/helmet.svg"

const About = () => {
  return (
    <Wrapper>
      <TitleWrapper>
        <Title>
          <span>01.</span>
          About Me
        </Title>
      </TitleWrapper>

      <ContentWrapper>
        <TextWrapper>
          <Text>
            Hello! I'm Daniel, a software engineer based in Panama, PA.
          </Text>
          <Text>
            I enjoy creating things that live on the internet, whether that be
            websites, applications, or anything in between. My goal is to always
            build products that provide pixel-perfect, performant experiences.
          </Text>
          <Text>
            Shortly after graduating from Northeastern University, I joined the
            engineering team at Upstatement where I work on a wide variety of
            interesting and meaningful projects on a daily basis.
          </Text>
          <Text>
            Here are a few technologies I've been working with recently:
          </Text>

          <SkillsUl>
            <SkillLi>Javascript</SkillLi>
            <SkillLi>HTML & CSS</SkillLi>
            <SkillLi>React</SkillLi>
            <SkillLi>PostgreSQL</SkillLi>
            <SkillLi>Node.js</SkillLi>
            <SkillLi>Django</SkillLi>
          </SkillsUl>
        </TextWrapper>

        <Img src={helmetSvg} alt="helmet" />
      </ContentWrapper>
    </Wrapper>
  )
}

export default About

const Wrapper = styled.div`
  margin: 0px auto;
  padding: 100px 0px;
  max-width: 900px;
`

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  white-space: nowrap;
  margin: 10px 0 40px;

  span {
    color: ${themes.dark.primary};
  }

  ::after {
    content: "";
    display: block;
    position: relative;
    top: -5px;
    width: 300px;
    height: 1px;
    margin-left: 20px;
    background-color: ${themes.dark.secondary};
  }
`
const Title = styled(H3)`
  color: ${themes.dark.lightText};
`

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  column-gap: 50px;

  @media (max-width: 400px) {
    grid-template-columns: 1fr;

    img {
      margin-top: 30px;
    }
  }
`
const TextWrapper = styled.div`
  line-height: 1.5;
  color: ${themes.dark.darkText};
`
const Text = styled.p`
  margin: 0px 0px 15px;
`
const SkillsUl = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, minmax(140px, 200px));
  padding: 0px;
  margin: 20px 0px 0px;
  overflow: hidden;
  list-style: none;
`
const SkillLi = styled.li`
  position: relative;
  margin-bottom: 10px;
  padding-left: 20px;

  ::before {
    content: "▹";
    position: absolute;
    left: 0px;
    color: ${themes.dark.primary};
    font-size: 13px;
  }
`

const Img = styled.img``
