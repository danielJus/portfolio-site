import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { GlobalStyles } from "./styles/GlobalStyles"
import Navbar from "./Navbar"
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <MainContainer>
        <GlobalStyles />
        {/* <Navbar /> */}
        <Wrapper>
          <MainColumn>{children}</MainColumn>
        </Wrapper>
      </MainContainer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

const MainContainer = styled.div`
  width: 100vw;
  border: 1px solid red;
`

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`

const MainColumn = styled.div`
  width: 80%;
  border: 1px solid red;
`
