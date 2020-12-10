import React from "react"
import styled from "styled-components"
import { H2 } from "../styles/TextStyles"
import { themes } from "../styles/ColorStyles"

const Contact = () => {
  return (
    <Wrapper>
      <Heading>04.What's Next?</Heading>
      <Title>Get In Touch</Title>

      <p>
        Although I'm not currently looking for any new opportunities, my inbox
        is always open. Whether you have a question or just want to say hi, I'll
        try my best to get back to you!
      </p>

      <ContactButton>Say Hello</ContactButton>
    </Wrapper>
  )
}

export default Contact
const Wrapper = styled.div`
  margin: 0 auto;
  padding: 100px 0;
  max-width: 600px;
  text-align: center;

  visibility: visible;
  opacity: 1;
  transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  transition: opacity 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s,
    transform 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s;

  p {
    color: ${themes.dark.darkText};
    font-size: 20px;
  }
`

const Heading = styled(H2)`
  font-size: 1rem;
  color: ${themes.dark.primary};
  font-weight: 400;
  margin-bottom: 20px;
`
const Title = styled(H2)`
  color: ${themes.dark.lightText};
  font-weight: 800;
  font-size: 50px;
  line-height: 1.1;
  margin-bottom: 10px;
`
const ContactButton = styled.button`
  color: ${themes.dark.primary};
  background-color: transparent;
  border: 1px solid ${themes.dark.primary};
  border-radius: 5px;
  padding: 1.25rem 1.75rem;
  font-size: 1rem;
  line-height: 1;
  text-decoration: none;
  cursor: pointer;
  transition: 0.5s ease-out;
  margin-top: 50px;
  outline: none;

  :hover {
    background: rgba(100, 255, 218, 0.1);
  }
`
