import React from "react";
import axios from "axios";
import { Field, Formik, Form, ErrorMessage } from "formik";

function SpringTeste() {
  const handleInfo = (values) => {
    axios.post("http://localhost:8080/api/v1/user", {
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      cpf: values.cpf,
      birthDate: values.birthDate,
      password: values.password,
    });
  };

  return (
    <Formik onSubmit={handleInfo} initialValues={{}}>
      <Form>
        <div className="campo">
          <Field placeholder="Nome" name="firstName" />
          <ErrorMessage component="span" name="firstName" />
        </div>
        <div className="campo">
          <Field placeholder="Sobrenome" name="lastName" />
          <ErrorMessage component="span" name="lastName" />
        </div>
        <div className="campo">
          <Field placeholder="E-mail" name="email" />
          <ErrorMessage component="span" name="email" />
        </div>
        <div className="campo">
          <Field placeholder="CPF" name="cpf" />
          <ErrorMessage component="span" name="cpf" />
        </div>
        <div className="campo">
          <Field placeholder="Data de nascimento" name="birthDate" />
          <ErrorMessage component="span" name="birthDate" />
        </div>
        <div className="campo">
          <Field placeholder="Senha" name="password" />
          <ErrorMessage component="span" name="password" />
        </div>
        <button type="submit" style={{ color: "white" }}>
          envia saporra
        </button>
      </Form>
    </Formik>
  );
}

export default SpringTeste;
