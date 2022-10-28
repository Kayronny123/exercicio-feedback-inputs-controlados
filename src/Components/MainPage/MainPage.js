import React, { useState } from "react";
import { MainContainer } from "./styles";
import NameForm from "../NameForm/NameForm";
import ConfirmationForm from "../ConfirmationForm/ConfirmationForm";

const MainPage = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [formFlow, setFormFlow] = useState(1);
  const [emailConfirm, setEmailConfirm] = useState("");
  //você não precisa mexer neste estado, ele faz parte da lógica da linha 30 do JSX

  const onChangeName = (event) => {
    setName(event.target.value);
  };

  const onChangeAge = (event) => {
    setAge(event.target.value);
  };

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };
  const onChangeEmailConfirm = (event) => {
    setEmailConfirm(event.target.value);
  };

  const sendData = () => {
    if (
      age >= 18 &&
      name.length >= 10 &&
      name.length <= 30 &&
      email.includes("@") &&
      email === emailConfirm
    ) {
      setFormFlow(2);
    } else if (age <= 18) {
      alert("Idade mínima insuficiente");
    } else if (age > 30) {
      alert("Idade máxima ultrapassada");
    } else if (name.çenght < 10 || name.lenght > 30) {
      alert("Nome não atende a quantidade mínima");
    } else if (email.includes("@") === false) {
      alert("Digite um email válido");
    } else if (email !== emailConfirm) {
      alert("Email diferente");
    }
    //aqui deve vir uma verificação para mudar de formulario apenas se todos os requisitos tiverem sido cumpridos
  };

  return (
    <MainContainer>
      <h2>Formulário de inscrição</h2>
      {formFlow === 1 ? (
        <NameForm
          // insira aqui suas props
          onchangeName={onChangeName}
          onchangeAge={onChangeAge}
          onchangeEmail={onChangeEmail}
          onchangeEmailConfirm={onChangeEmailConfirm}
          nome1={name}
          age1={age}
          email1={email}
          email2={emailConfirm}
          sendData={sendData}
        />
      ) : (
        <ConfirmationForm />
      )}
    </MainContainer>
  );
};

export default MainPage;
