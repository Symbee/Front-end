import React from "react";
import styles from "./Section.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

function Secao() {
  const navegar = useNavigate();
  const handleNavegar = () => {
    navegar("/cadastro");
  };

  return (
    <>
      <section className={styles.section}>
        <h1>Comece agora e descubra o poder da simbiose.</h1>
        <span>Projetos que crescem, talentos que enriquecem.</span>

        <a class="btn" onClick={handleNavegar} role="button">
          Conhecer agora! <br />
          <i class="fa-solid fa-arrow-right"></i>
        </a>
      </section>
    </>
  );
}

export default Secao;
