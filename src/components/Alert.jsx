import React from "react"
import styled from "styled-components"

const Alert = ({ status, message, display }) => {
  return <AlertContainer show={display}></AlertContainer>
}

export default Alert

const AlertContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 80px;
  width: 250px;
  border: 1px solid white;
  display: ${props => (props.show ? "block" : "none")};
  z-index: 100;
`
