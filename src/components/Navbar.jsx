import React from "react"
import styled from "styled-components"
import { themes } from "./styles/ColorStyles"
import logoSvg from "../static/svg/logo.svg"
import { FiMenu } from "react-icons/fi"
const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <Nav>
      <LogoWrapper>
        <Logo src={logoSvg} alt="logo" />
      </LogoWrapper>
      <MenuWrapper>
        <MenuItem>
          <span>01.</span>
          <a href="/#about">About</a>
        </MenuItem>
        <MenuItem>
          <span>02.</span>
          <a href="/#experience">Experience</a>
        </MenuItem>
        <MenuItem>
          <span>03.</span>
          <a href="/#work">Work</a>
        </MenuItem>
        <MenuItem>
          <span>04.</span>
          <a href="/#contact">Contact</a>
        </MenuItem>

        <MenuItem>
          <button>Resume</button>
        </MenuItem>
      </MenuWrapper>

      <IconWrapper onClick={() => setIsOpen(!isOpen)}>
        <FiMenu />
      </IconWrapper>
      <MobileMenuWrapper isOpen={isOpen}>
        <MobileMenu>
          <MenuItem>
            <span>01.</span>
            <a href="/#about">About</a>
          </MenuItem>
          <MenuItem>
            <span>02.</span>
            <a href="/#experience">Experience</a>
          </MenuItem>
          <MenuItem>
            <span>03.</span>
            <a href="/#work">Work</a>
          </MenuItem>
          <MenuItem>
            <span>04.</span>
            <a href="/#contact">Contact</a>
          </MenuItem>

          <MenuItem>
            <button>Resume</button>
          </MenuItem>
        </MobileMenu>
      </MobileMenuWrapper>
      <BlurDiv isOpen={isOpen} />
    </Nav>
  )
}

export default Navbar

const MobileMenu = styled.div`
  height: 100%;
  display: grid;
  justify-content: center;
  grid-template-rows: repeat(5, 100px);
`
const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  svg {
    color: ${themes.dark.primary};
    width: 50px;
    height: 50px;
  }

  @media (min-width: 768px) {
    display: none;
  }
`
const MobileMenuWrapper = styled.div`
  padding: 100px 0;
  position: absolute;
  top: 0;
  right: 0;
  height: 100vh;
  width: 80vw;
  z-index: -1;
  background: rgba(10, 25, 47);
  backdrop-filter: blur(10px);
  box-shadow: -450px 0px 250px rgba(0, 0, 0, 0.25);
  ${props => (props.isOpen ? "display:block" : "display:none")}
`
const BlurDiv = styled.div`
  position: absolute;
  top: 0;
  height: 100vh;
  width: 100vw;
  //background: white;
  backdrop-filter: blur(30px);
  z-index: -2;
  ${props => (props.isOpen ? "display:block" : "display:none")}
`

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 4rem;
  display: grid;
  grid-template-columns: 50px auto;
  justify-content: space-between;
  padding: 0 2rem;
  backdrop-filter: blur(10px);
  border: 1px solid red;
`
const Logo = styled.img``

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`

const MenuWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, auto);
  column-gap: 20px;

  @media (max-width: 400px) {
    display: none;
  }
`

const MenuItem = styled.div`
  display: flex;
  align-items: center;

  span {
    color: ${themes.dark.primary};
    margin-right: 0.2rem;
  }
  a {
    color: ${themes.dark.lightText};
    transition: 0.5s ease-out;
    :hover {
      color: ${themes.dark.primary};
    }
  }

  button {
    padding: 0.7rem;
    border-radius: 5px;
    background: transparent;
    border: 1px solid ${themes.dark.primary};
    color: ${themes.dark.primary};
    transition: 0.5s ease-out;

    :focus {
      background: rgba(100, 255, 218, 0.1);
      color: ${themes.dark.primary};
    }

    :hover {
      background: rgba(100, 255, 218, 0.1);
      color: ${themes.dark.primary};
    }

    @media (max-width: 400px) {
      padding: 1rem 2.5rem;
    }
  }
`
