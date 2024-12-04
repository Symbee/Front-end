import React from "react";
import Girassol from "./assets/Girassol";
import Abelha from "./assets/Abelha";
import "./section4.css";

function Section4Rework() {
  return (
    <section className="section4">
      <div className="layout">
        <h1 className="pergunta-symbee">Porque escolher a Symbee?</h1>
        <div className="cards-pq">
          <div className="beneficio-mutuo">
            <h3 className="bm-bm">Benefício Mútuo</h3>
            <div className="girassol-abelha">
              <Girassol />
            </div>
            <p>
              A <span className="bm-symbee">SymBee</span> é uma plataforma que
              busca ser simbiótica para os freelancers desenvolvedores.
            </p>
          </div>
          <div className="beneficio-mutuo">
            <h3 className="bm-bm">Conexão</h3>
            <div className="girassol-abelha">
              {" "}
              <Abelha />{" "}
            </div>
            <p>
              Valorizamos criar relações que tenham impacto{" "}
              <span className="bm-symbee">positivo</span> na vida profissional
              e pessoal dos usuários.
            </p>
          </div>
          <div className="beneficio-mutuo">
            <h3 className="bm-bm">Competitividade</h3>
            <div className="girassol-abelha">
              <Girassol /> <Abelha />
            </div>

            <p>
              Incentivamos a disputa <span className="bm-symbee">saúdavel</span> entre nossos usuários por meio de nosso ranking e reputação.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section4Rework;
