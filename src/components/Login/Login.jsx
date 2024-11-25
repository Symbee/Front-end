import React from "react";
import Vetor from "./img/vetor.png";
import "./login.css";
import { useNavigate } from "react-router-dom";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from "yup";
import axios from "axios";

const Login = () => {
  const navegar = useNavigate();

  const validationLogin = yup.object().shape({
    email: yup
      .string()
      .email("Não é um e-mail válido")
      .required("Esse campo é obrigatório."),
    password: yup
      .string()
      .min(8, "A senha deve conter 8 caractéres")
      .required("Esse é um campo obrigatório"),
  });

  const handleClickLogin = (values) => {
    axios
      .post("http://localhost:3000/login", {
        email: values.email,
        password: values.password,
      })
      .then((response) => {
        console.log(response);

        if (response.data.msg == "Logado com sucesso!") {
          navegar("/profile-choice");
        } else {
          alert(response.data.msg); // Mensagem do servidor, como "Usuário já está cadastrado."
        }
      });
  };

  return (
    <section className="LoginPage">
      <div className="layout">
        <div className="fieldInformations">
          <div className="titleInf">
            <h2>Bem-vindo de volta!</h2>
          </div>
          <Formik
            className="informations"
            initialValues={{
              email: "",
              password: "",
            }}
            onSubmit={handleClickLogin}
            validationSchema={validationLogin}
          >
            <Form className="form-login">
              <div className="input-login">
                <Field
                  name="email"
                  type="email"
                  className="login-field"
                  placeholder="Email"
                />
                <ErrorMessage
                  component="span"
                  name="email"
                  className="form-error"
                />
              </div>
              <div className="input-login">
                <Field
                  name="password"
                  type="password"
                  className="login-field"
                  placeholder="Senha"
                />
                <ErrorMessage
                  component="span"
                  name="password"
                  className="form-error"
                />
              </div>
              <button className="button" type="submit">
                Entrar
              </button>
            </Form>
          </Formik>
        </div>
        <div className="LogoSvg">
          <img src={Vetor} alt="logo" />
        </div>
      </div>
    </section>
  );
};
export default Login;
