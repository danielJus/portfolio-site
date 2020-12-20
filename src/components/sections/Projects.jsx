import React from "react"
import styled from "styled-components"
import { H2 } from "../styles/TextStyles"
import { themes } from "../styles/ColorStyles"
import ProjectCard from "../ProjectCard"
import TestCard from "../TestCard"

const Projects = () => {
  return (
    <Wrapper>
      <Title>
        <span>03.</span> Projects
      </Title>
      <ProjectsWrapper>
        <ProjectCard />
        <TestCard />
      </ProjectsWrapper>
    </Wrapper>
  )
}

export default Projects

const Wrapper = styled.div`
  margin: 0 auto;
  padding: 100px 0;
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Title = styled(H2)`
  color: ${themes.dark.lightText};

  span {
    color: ${themes.dark.primary};
  }
`

const ProjectsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 15px;
  position: relative;
  margin-top: 50px;
`
