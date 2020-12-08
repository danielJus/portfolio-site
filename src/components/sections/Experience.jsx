import React from "react"
import styled from "styled-components"
import { themes } from "../styles/ColorStyles"
import { H3 } from "../styles/TextStyles"

const Experience = () => {
  return (
    <Wrapper>
      <Title>
        <span>02. </span>
        Work Experience
      </Title>

      <ContentWrapper>
        <JobsUl>
          <JobsLi>
            <JobsItem>OAS</JobsItem>
            <JobsItem>Clau.io</JobsItem>
          </JobsLi>
        </JobsUl>
        <Description>
          <CompanyAndTitle>
            <span style={{ color: `${themes.dark.lightText}` }}> Engineer</span>
            &nbsp; &nbsp;
            <span style={{ color: `${themes.dark.primary}` }}>
              @ Organization of American States
            </span>
          </CompanyAndTitle>
          <Range>Jan 2020 - September 2020</Range>

          <div>
            <TasksUl>
              <TasksLi>
                Write modern, performant, maintainable code for a diverse array
                of client and internal projects
              </TasksLi>

              <TasksLi>
                Work with a variety of different languages, platforms,
                frameworks, and content management systems such as JavaScript,
                TypeScript, Gatsby, React, Craft, WordPress, Prismic, and
                Netlify
              </TasksLi>

              <TasksLi>
                Communicate with multi-disciplinary teams of engineers,
                designers, producers, and clients on a daily basis
              </TasksLi>
            </TasksUl>
          </div>
        </Description>
      </ContentWrapper>
    </Wrapper>
  )
}

export default Experience

const Wrapper = styled.div`
  margin: 0 auto;
  padding: 100px 0px;
  max-width: 700px;
`

const Title = styled(H3)`
  display: flex;
  align-items: center;
  position: relative;
  margin: 10px 0px 40px;
  width: 100%;
  white-space: nowrap;
  color: ${themes.dark.lightText};

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

const ContentWrapper = styled.div`
  display: flex;
`
const JobsUl = styled.ul`
  position: relative;
  z-index: 3;
  width: max-content;
  padding: 0px;
  margin: 0px;
  list-style: none;
`
const JobsLi = styled.li`
  display: list-item;
`
const JobsItem = styled.button`
  text-decoration: none;
  text-decoration-skip-ink: auto;
  position: relative;
  /* transition: var(--transition); */
  cursor: pointer;
  display: flex;
  align-items: center;
  width: 100%;
  height: 42px;
  padding: 0px 20px 2px;
  background-color: transparent;
  color: ${themes.dark.primary};
  text-align: left;
  white-space: nowrap;
  outline: none;
  border: none;
  border-left: 2px solid ${themes.dark.darkText};
  transition: 0.5s ease-out;

  :focus {
    background: rgba(100, 255, 218, 0.1);
    color: ${themes.dark.primary};
    border-left: 2px solid ${themes.dark.secondary};
  }

  :hover {
    background: rgba(100, 255, 218, 0.1);
    color: ${themes.dark.primary};
  }
`

const Description = styled.div`
  width: 100%;
  height: auto;
  padding-top: 10px;
  padding-left: 30px;
`
const CompanyAndTitle = styled.h3`
  font-weight: 700;
  margin-bottom: 10px;
  font-size: 20px;
`

const Range = styled.p`
  margin-bottom: 30px;
  color: ${themes.dark.secondary};
  font-size: 0.8rem;
`

const TasksUl = styled.div`
  padding: 0px;
  margin: 0px;
  list-style: none;
`

const TasksLi = styled.li`
  display: list-item;
  position: relative;
  padding-left: 30px;
  margin-bottom: 10px;
  color: ${themes.dark.darkText};
  line-height: 1.5;
  ::before {
    content: "▹";
    position: absolute;
    left: 0px;
    color: ${themes.dark.primary};
  }
`
