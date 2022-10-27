import React from "react";
import { Form } from "../MainPage/styles";

const ConfirmationForm = (props) => {
  return (
    <Form>
      <button onClick={props.sendData}>Enviar dados</button>
    </Form>
  );
};

export default ConfirmationForm;
