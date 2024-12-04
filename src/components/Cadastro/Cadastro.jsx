import React from "react";
import styles from "./cadastro.module.css";
import Vetor from "./img/vetor.png";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { ErrorMessage, Field, Form, Formik } from "formik";
import axios from "axios";

const Cadastro = () => {
  const navigate = useNavigate();

  const regraSenha = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  // min 8 caracteres, 1 letra maiúsucla, 1 letra minuscual, 1 numero.

  const validationRegister = yup.object().shape({
    first_name: yup
      .string()
      .min(3, "Deve conter pelo menos 3 caractéres.")
      .required("Esse campo é obrigatório."),
    last_name: yup
      .string()
      .min(3, "Deve conter pelo menos 3 caractéres.")
      .required("Esse campo é obrigatório."),
    email: yup
      .string()
      .email("Precisa ser um e-mail válido.")
      .min(5, "Deve conter pelo menos 3 caractéres.")
      .required("Esse campo é obrigatório."),
    cpf: yup
      .string()
      .min(11, "Deve conter pelo menos 11 caractéres.")
      .max(11, "CPF inválido")
      .required("Esse campo é obrigatório."),
    data_nascimento: yup
      .string()
      // .min(11, "Deve conter pelo menos 11 caractéres.")
      .required("Esse campo é obrigatório."),
    password: yup
      .string()
      .matches(regraSenha, { message: "Por favor, crie uma senha mais forte!" })
      .required("Esse campo é obrigatório."),
  });

  const handleClickRegister = (values) => {
    axios
      .post("http://localhost:3000/registro", {
        first_name: values.first_name,
        last_name: values.last_name,
        email: values.email,
        cpf: values.cpf,
        data_nascimento: values.data_nascimento,
        password: values.password,
      })
      .then((response) => {
        console.log(response);
        if (response.data.msg == "Usuário cadastrado com sucesso.") {
          navigate("/profile-choice");
        } else {
          alert(response.data); // Mensagem do servidor, como "Usuário já está cadastrado."
        }
      })
      .catch((error) => {
        if (error.response) {
          console.error("Erro no servidor:", error.response.data);
        } else {
          console.error("Erro na requisição:", error.message);
        }
      });
  };

  return (
    <section className={styles.RegisterPage}>
      <div className={styles.layout}>
        <div className={styles.fieldInformations}>
          <h2>Seja muito bem vindo!</h2>

          <Formik
            className="informations"
            initialValues={{
              first_name: "",
              last_name: "",
              email: "",
              cpf: "",
              data_nascimento: "",
              password: "",
            }}
            onSubmit={handleClickRegister}
            validationSchema={validationRegister}
          >
            <Form className="register-form">
              <div className="input-field">
                <Field
                  name="first_name"
                  className="form-field"
                  placeholder="Primeiro nome"
                />
                <ErrorMessage
                  component="span"
                  name="first_name"
                  className="form-error"
                />
              </div>
              <div className="input-field">
                <Field
                  name="last_name"
                  className="form-field"
                  placeholder="Último nome"
                />
                <ErrorMessage
                  component="span"
                  name="last_name"
                  className="form-error"
                />
              </div>
              <div className="input-field">
                <Field
                  name="email"
                  className="form-field"
                  placeholder="E-mail"
                />
                <ErrorMessage
                  component="span"
                  name="email"
                  className="form-error"
                />
              </div>
              <div className="input-field">
                <Field name="cpf" className="form-field" placeholder="CPF" />
                <ErrorMessage
                  component="span"
                  name="cpf"
                  className="form-error"
                />
              </div>
              <div className="input-field">
                <Field
                  name="data_nascimento"
                  className="form-field"
                  placeholder="Data de nascimento"
                  type="date"
                />
                <ErrorMessage
                  component="span"
                  name="data_nascimento"
                  className="form-error"
                />
              </div>
              <div className="input-field">
                <Field
                  name="password"
                  className="form-field"
                  placeholder="Digite sua senha."
                  type="password"
                />
                <ErrorMessage
                  component="span"
                  name="password"
                  className="form-error"
                />
              </div>
              <button type="submit" className="button">
                Enviar
              </button>
            </Form>
          </Formik>
        </div>
        <div className={styles.svgLogo}>
          <img src={Vetor} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Cadastro;
