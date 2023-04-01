import moment from "moment";
import React, { useState } from "react";
import styled from "styled-components";
import { save } from "../services/Sheet";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const contactMeHandler = (e) => {
    const data = {
      Nome: name,
      Email: email,
      Mensagem: message,
      Data: moment().format("DD/MM/YYYY"),
    };
    save(data);
  };

  return (
    <Form onSubmit={contactMeHandler}>
      <Input>
        <label>Nome:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </Input>
      <Input>
        <label> Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </Input>
      <Input>
        <label> Mensagem:</label>
        <textarea
          rows="5"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />
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
