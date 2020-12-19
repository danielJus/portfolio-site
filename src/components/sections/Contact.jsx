import React from "react"
import styled from "styled-components"
import { H2, H3 } from "../styles/TextStyles"
import { themes } from "../styles/ColorStyles"

import { FiXOctagon } from "react-icons/fi"

const Contact = () => {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <Wrapper>
      <Heading>04.What's Next?</Heading>
      <Title>Get In Touch</Title>

      <p>
        Although I'm not currently looking for any new opportunities, my inbox
        is always open. Whether you have a question or just want to say hi, I'll
        try my best to get back to you!
      </p>

      <ContactButton onClick={() => setIsOpen(!isOpen)}>
        Say Hello
      </ContactButton>

      <Modal isOpen={isOpen}>
        <IconContainer>
          <FiXOctagon onClick={() => setIsOpen(!isOpen)} />
        </IconContainer>
        <ContactForm>
          <ContactTitle>Send a Message</ContactTitle>

          <FormGroup>
            <label htmlFor="name">Name</label>

            <Input type="text" id="name" name="name" />
          </FormGroup>

          <FormGroup>
            <label htmlFor="email">Email</label>

            <Input type="email" id="email" name="email" />
          </FormGroup>

          <FormGroup>
            <label htmlFor="message">Message</label>

            <TextArea rows="10" id="message" name="message"></TextArea>
          </FormGroup>

          <SendButton type="button">Send</SendButton>
        </ContactForm>
      </Modal>
    </Wrapper>
  )
}

export default Contact

const Modal = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: rgba(10, 25, 47, 0.6);
  box-shadow: 0px 40px 250px rgba(10, 25, 47, 0.3);
  backdrop-filter: blur(10px);
  border-radius: 5px;

  display: ${props => (props.isOpen ? "block" : "none")};
`
const IconContainer = styled.div`
  position: absolute;
  top: 2;
  right: 0;
  cursor: pointer;

  svg {
    height: 1.5rem;
    width: 1.5rem;
    color: ${themes.dark.primary};
  }
`

const ContactForm = styled.form`
  padding: 3rem;
  display: grid;
  grid-template-rows: repeat(5, auto);
  row-gap: 15px;
`

const ContactTitle = styled(H3)`
  color: ${themes.dark.lightText};
`

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;

  label {
    color: ${themes.dark.lightText};
  }
`

const Input = styled.input`
  padding: 0.7rem 1rem;
  outline-color: ${themes.dark.lightText};
  border-radius: 5px;
`

const TextArea = styled.textarea`
  border-radius: 5px;
`

const SendButton = styled.button`
  padding: 0.7rem 1rem;
  border-radius: 5px;
  border: 1px solid ${themes.dark.primary};
  background: transparent;
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
`

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
