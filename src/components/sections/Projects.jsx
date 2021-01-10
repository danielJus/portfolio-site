import React from "react"
import styled from "styled-components"
import { H2 } from "../styles/TextStyles"
import { themes } from "../styles/ColorStyles"
import ProjectCard from "../ProjectCard"
//import TestCard from "../TestCard"

const projects = [
  {
    title: "STP",
    link: "https://stp-transparencia.netlify.app/",
    description:
      "Partnered with the Organization of American States to build a Gov tech web application that provides panamenian citizens a detailed view of the gorvenment's income and expenses",
    technologies: ["React", "Nodejs", "MongoDB"],
  },
  {
    title: "Portfolio",
    link: "https://danieljustavino.netlify.app/",
    description:
      "This very own site built using GatsbyJS and styled components",
    technologies: ["GastbyJS", "Styled-Components", "Netlify"],
  },

  {
    title: "Crown Store",
    link: "http://crown-store.s3-website-us-east-1.amazonaws.com/",
    description:
      "Built a demo E-commerce web app for a possible freelance project, to showcase an indie clothing line",
    technologies: ["React", "Redux-Sagas", "Firebase"],
  },

  {
    title: "Colors App",
    link: "http://d-colors-app.s3-website-us-east-1.amazonaws.com/",
    description:
      "Inspired by flatuicolors.com, built it for color selection for various products while working at Clau.io",
    technologies: ["React", "Redux", "Firebase"],
  },

  {
    title: "Crediviva",
    link: "https://crediviva.clau.io/",
    description:
      "Digital transformation project that automates the process of credit search for Multimax.net",
    technologies: ["React", "Material-UI", "NodeJS", "Firebase"],
  },

  {
    title: "Amazon UI clone",
    link: "https://clone-600c9.web.app/",
    description:
      "Project built from a developer challenge while working at Clau.io to make a clone of the UI of amazon.com",
    technologies: ["React", "Firebase"],
  },
  {
    title: "Expensify",
    link: "https://expensify-rr.herokuapp.com/",
    description:
      "First app built to learn ReactJS, Redux, Redux Thunk and Firebase. In which a user can track its income and expenses",
    technologies: ["React", "Redux-Thunk", "Firebase"],
  },
]

const Projects = () => {
  return (
    <Wrapper id="work">
      <Title>
        <span>03.</span> Projects
      </Title>
      <ProjectsWrapper>
        {projects.map(({ title, link, description, technologies }, i) => (
          <ProjectCard
            key={i}
            title={title}
            link={link}
            description={description}
            technologies={technologies}
          />
        ))}
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
