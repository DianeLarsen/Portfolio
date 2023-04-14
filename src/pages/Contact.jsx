import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";

const Section = styled.div`
  min-height: 100vh;
  scroll-snap-align: center;
  scroll-padding-top: 60px;
  margin-top: 70px;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
`;

const Title = styled.h1`
  color: #da4ea2;
  font-weight: bold;
`;

const Form = styled.form`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 25px;

  @media only screen and (max-width: 768px) {
    width: 300px;
  }
`;

const Input = styled.input`
  padding: 20px;
  background-color: #e8e6e6;
  border: none;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  padding: 20px;
  border: none;
  border-radius: 5px;
  background-color: #e8e6e6;
`;

const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  border: none;
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;
  padding: 20px;
`;

const Contact = () => {
  const ref = useRef();
  const [success, setSuccess] = useState(null);
  const [formStatus, setFormStatus] = React.useState("Send");

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus("Submitting...");
    const { name, email, message } = e.target.elements;
    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    console.log(conFom);
  
  emailjs
    .sendForm(
      "service_850tnlq",
      "template_o0mzf4e",
      ref.current,
      "YHSfDcEW6SkAHYJyg"
    )
    .then(
      (result) => {
        console.log(result.text);
        setSuccess(true);
      },
      (error) => {
        console.log(error.text);
        setSuccess(false);
      }
    );
  };
  return (
    <Section id="contact">
      <Container>
        <Form ref={ref} onSubmit={handleSubmit}>
          <Title>Contact Us</Title>
          <Input
            className="from-control"
            type="text"
            id="name"
            placeholder="Name"
            name="name"
            required
          />
          <Input
            className="from-control"
            type="email"
            id="email"
            required
            placeholder="Email"
            name="email"
          />
          <TextArea
            className="form-control"
            id="message"
            required
            placeholder="Write your message"
            name="message"
            rows={10}
          />
          <Button type="submit" className="btn btn-danger" >Send</Button>
          {formStatus}
          {success &&
            "Your message has been sent. We'll get back to you soon :)"}
        </Form>
      </Container>
    </Section>
  );
};

export default Contact;
