import React, { useState } from "react";
import { MainContainer } from "./styles";
import NameForm from "../NameForm/NameForm";
import ConfirmationForm from "../ConfirmationForm/ConfirmationForm";

const MainPage = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [formFlow, setFormFlow] = useState(1); //você não precisa mexer neste estado, ele faz parte da lógica da linha 30 do JSX

  const onChangeName = (event) => {
    setName(event.target.value);
  };

  const onChangeAge = (event) => {
    setAge(event.target.value);
  };

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const sendData = () => {
    const usuario = {
      nome: name,
      idade: age,
      email: email
    };
    setName("");
    setAge("");
    setEmail("");
    setFormFlow(2);
    return console.log(sendData);
    //aqui deve vir uma verificação para mudar de formulario apenas se todos os requisitos tiverem sido cumpridos
  };

  return (
    <MainContainer>
      <h2>Formulário de inscrição</h2>
      {formFlow === 1 ? (
        <NameForm
          // insira aqui suas props
          onchange={onChangeName}
          onchange1={onChangeAge}
          onchange2={onChangeEmail}
          usuario={sendData}
        />
      ) : (
        <ConfirmationForm
          name={name}
          setName={setName}
          age={age}
          setAge={setAge}
          email={email}
          setEmail={setEmail}
          sendData={sendData}
        />
      )}
    </MainContainer>
  );
};

export default MainPage;
