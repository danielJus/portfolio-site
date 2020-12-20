import React from "react"
import styled from "styled-components"
import { FiFolder, FiExternalLink } from "react-icons/fi"
import { themes } from "./styles/ColorStyles"
import { H3 } from "./styles/TextStyles"

const ProjectCard = () => {
  return (
    <Card>
      <ProjectContent>
        <Header>
          <FiFolder />
          <ProjectLinks>
            <a href="/">
              <FiExternalLink />
            </a>
          </ProjectLinks>
        </Header>

        <ProjectTitle>
          Integrating Algolia Search with WordPress Multisite
        </ProjectTitle>
        <ProjectDescription>
          <p>
            Building a custom multisite compatible WordPress plugin to build
            global search with Algolia
          </p>
        </ProjectDescription>

        <footer>
          <ProjectTechUl>
            <li>Alogila</li>
            <li>Alogila</li>
            <li>Alogila</li>
          </ProjectTechUl>
        </footer>
      </ProjectContent>
    </Card>
  )
}

export default ProjectCard

const Card = styled.div`
  transition-delay: 0ms;
  visibility: visible;
  opacity: 1;
  transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s,
    opacity 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0s,
    transform 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
`

const ProjectContent = styled.div`
  box-shadow: 0 10px 30px -15px #0a192f;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  height: 100%;
  padding: 2rem 1.75rem;
  border-radius: 5px;
  background-color: #172a45;
  transition: 1s ease-out;
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 35px;
  width: 100%;
  svg {
    color: ${themes.dark.primary};
    width: 40px;
    height: 40px;
  }
`
const ProjectLinks = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  margin-right: -10px;
  color: #a8b2d1;

  a {
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    padding: 5px 7px;

    svg {
      width: 22px;
      height: 22px;
      margin-top: -4px;
      color: ${themes.dark.darkText};
    }
  }
`

const ProjectTitle = styled(H3)`
  margin: 0px 0px 10px;
  color: ${themes.dark.lightText};
  font-size: 22px;
  font-weight: 600;
`

const ProjectDescription = styled.div`
  color: ${themes.dark.darkText};
  font-size: 17px;
  p {
    margin: 0;
  }
`

const ProjectTechUl = styled.ul`
  display: flex;
  align-items: flex-end;
  -webkit-box-flex: 1;
  flex-grow: 1;
  flex-wrap: wrap;
  padding: 0px;
  margin: 20px 0px 0px;
  list-style: none;
  color: ${themes.dark.darkText};
  li {
    font-size: 12px;
    margin-right: 15px;
  }
`
