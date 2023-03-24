import React from "react";
import styled from "styled-components";

const ContactForm = () => {
  return (
    <Form id="contact-form" method="post">
      <Input>
        <label>Nome:</label>
        <input type="text" />
      </Input>
      <Input>
        <label> Email:</label>
        <input type="email" />
      </Input>
      <Input>
        <label> Mensagem:</label>
        <textarea rows="5" />
      </Input>
      <button type="submit">Enviar</button>
    </Form>
  );
};

const Form = styled.form`
  button {
    margin-top: 2rem;
  }
`;
const Input = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 60vh;
  label {
    color: white;
    padding-top: 1rem;
  }
  input,
  textarea {
    border: 2px solid;
    padding: 10px 15px;
    border-radius: 10px;
    width: 100%;
    height: 100%;
  }
  input:focus {
    background-color: #ead5d5;
    
`;

export default ContactForm;
