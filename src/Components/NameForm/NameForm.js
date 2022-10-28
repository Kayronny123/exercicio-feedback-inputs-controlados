import React from "react";
import { Form, Input } from "../MainPage/styles";

const NameForm = (props) => {
  const {
    onChangeName,
    onChangeAge,
    onChangeEmail,
    onChangeEmailConfirm,
    name1,
    age1,
    email1,
    email2,
    sendData
  } = props;

  return (
    <Form>
      <label>
        Nome:
        <Input placeholder="Nome" value={name1} onChange={onChangeName} />
      </label>
      <label>
        Idade:
        <Input placeholder="Idade" defaultValue={age1} onChange={onChangeAge} />
      </label>
      <label>
        E-mail:
        <Input
          placeholder="usuario@usuario.com"
          defaultValue={email1}
          onChange={onChangeEmail}
        />
      </label>
      <label>
        Confirmação de e-mail:
        <Input
          placeholder="usuario@usuario.com"
          defaultValue={email2}
          onChange={onChangeEmailConfirm}
        />
      </label>

      <button onClick={sendData}>Enviar dados</button>
    </Form>
  );
};

export default NameForm;
