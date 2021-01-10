import React from "react"
import styled, { keyframes } from "styled-components"
import { H2, H3 } from "../styles/TextStyles"
import { themes } from "../styles/ColorStyles"
import { FiXOctagon, FiAlertCircle, FiCheckCircle } from "react-icons/fi"
import axios from "axios"

const Contact = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  const [alert, setAlert] = React.useState({
    status: "",
    message: "",
    display: false,
  })

  const [form, setForm] = React.useState({
    name: "",
    email: "",
    subject: "🔥Personal Portfolio Email🔥, you better read this...",
    message: "",
  })

  function handleCloseAlert() {
    setAlert({
      ...alert,
      status: "",
      message: "",
      display: false,
    })
  }

  function handleChange(e) {
    const { name, value } = e.target

    setForm({
      ...form,
      [name]: value,
    })
  }

  async function handleSubmit(e) {
    e.preventDefault()

    if (
      form.name.length > 2 &&
      form.email.length > 5 &&
      form.message.length > 5
    ) {
      const response = await axios.post(
        "https://portfolio-email-sender.herokuapp.com/api/v1/contact",

        form
      )

      console.log("response->", response)

      if (response.data.status === "success") {
        setAlert({
          ...alert,
          status: response.data.status,
          message: response.data.msg,
          display: true,
        })

        setForm({
          name: "",
          email: "",
          subject: "🔥Personal Portfolio Email🔥, you better read this...",
          message: "",
        })
      } else {
        setAlert({
          ...alert,
          status: "error",
          message:
            "Something went wrong, try again later or use a different service to contact me",
          display: true,
        })
      }
    }
  }

  return (
    <Wrapper>
      <Alert
        status={alert.status}
        message={alert.message}
        display={alert.display}
        handleCloseAlert={handleCloseAlert}
      />
      <Heading>04.What's Next?</Heading>
      <Title>Get In Touch</Title>

      <p>
        Although I'm not currently working at Banco General, my inbox is always
        open. Whether you have a question or just want to say hi, as soon as I
        see it I'll get back to you.
      </p>

      <ContactButton onClick={() => setIsOpen(!isOpen)}>
        Say Hello
      </ContactButton>

      <Modal isOpen={isOpen}>
        <IconContainer>
          <FiXOctagon onClick={() => setIsOpen(!isOpen)} />
        </IconContainer>
        <ContactForm onSubmit={handleSubmit}>
          <ContactTitle>Send a Message</ContactTitle>

          <FormGroup>
            <label htmlFor="name">Name</label>

            <Input type="text" id="name" name="name" onChange={handleChange} />
          </FormGroup>

          <FormGroup>
            <label htmlFor="email">Email</label>

            <Input
              type="email"
              id="email"
              name="email"
              onChange={handleChange}
            />
          </FormGroup>

          <FormGroup>
            <label htmlFor="message">Message</label>

            <TextArea
              rows="5"
              id="message"
              name="message"
              onChange={handleChange}
            ></TextArea>
          </FormGroup>

          <SendButton type="submit" onClick={handleSubmit}>
            Send
          </SendButton>
        </ContactForm>
      </Modal>
    </Wrapper>
  )
}

export default Contact

const Alert = ({ status, message, display, handleCloseAlert }) => {
  return (
    <AlertContainer show={display}>
      <AlertIconContainer>
        <FiXOctagon onClick={() => handleCloseAlert()} />
      </AlertIconContainer>

      <AlertTitle>{status}</AlertTitle>

      <div
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          justifyContent: "center",
        }}
      >
        {status === "success" ? (
          <FiCheckCircle style={{ color: `${themes.dark.primary}` }} />
        ) : (
          <FiAlertCircle style={{ color: "red" }} />
        )}

        <AlertMessage>{message}</AlertMessage>
      </div>
    </AlertContainer>
  )
}

const fadeIn = keyframes`

0%{
opacity:0;
}

50%{
  opacity:0.5;
}

100%{
  opacity:1;
}

`

const AlertContainer = styled.div`
  position: relative;
  top: 0;
  left: 0;
  height: 100px;
  width: 250px;
  display: ${props => (props.show ? "block" : "none")};
  background-color: #172a45;
  padding: 10px;
  border-radius: 5px;
  z-index: 100;
  animation: ${fadeIn} 1s linear;
`

const AlertIconContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;

  svg {
    height: 1.5rem;
    width: 1.5rem;
    color: ${themes.dark.primary};
  }
`
const AlertTitle = styled.h3`
  font-size: 22px !important;
  color: ${themes.dark.lightText};
  text-transform: capitalize;
  text-decoration: underline;
  margin-bottom: 15px;
`
const AlertMessage = styled.p`
  font-size: 12px !important;
  margin-left: 5px;
`

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
  animation: ${fadeIn} 0.5s linear;

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
  row-gap: 10px;
`

const ContactTitle = styled(H3)`
  color: ${themes.dark.lightText};
  margin-bottom: 30px;
`

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  label {
    align-self: flex-start;
    margin-bottom: 0.5rem;
    color: ${themes.dark.lightText};
  }
`

const Input = styled.input`
  padding: 0.7rem 1rem;
  outline-color: ${themes.dark.darkText};

  border-radius: 5px;
`

const TextArea = styled.textarea`
  border-radius: 5px;
  outline-color: ${themes.dark.darkText};
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
