import React from "react"
import styled from "styled-components"
import { themes } from "../styles/ColorStyles"
import { H3 } from "../styles/TextStyles"

function Sidenav() {
  return (
    <Nav>
      <MenuWrapper>
        <MenuButton>OAS</MenuButton>
        <MenuButton>Clau.io</MenuButton>
      </MenuWrapper>
    </Nav>
  )
}
const Experience = () => {
  return (
    <Wrapper>
      <TitleWrapper>
        <Title>
          <span>02. </span>
          Work Experience
        </Title>
      </TitleWrapper>
      <ContentWrapper>
        <Sidenav />
        <Description></Description>
      </ContentWrapper>
    </Wrapper>
  )
}

export default Experience

const Wrapper = styled.div`
  padding: 4rem;
  display: grid;
  grid-template-rows: auto 1fr;
`
const TitleWrapper = styled.div`
  display: flex;

  span {
    color: ${themes.dark.primary};
  }
`
const Title = styled(H3)`
  color: ${themes.dark.lightText};
`

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 20% 1fr;
  height: 70vh;
  border: 1px solid red;
`

const Nav = styled.div`
  display: flex;
  padding: 1rem;
`

const MenuWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

const MenuButton = styled.button`
  background: transparent;
  color: ${themes.dark.darkText};
  height: 40px;
  border: none;
  outline: none;
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

const Description = styled.div`
  border: 1px solid red;
`
