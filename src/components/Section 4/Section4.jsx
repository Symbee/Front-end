import React from "react";
import "./Section4.css";

function Section4() {
  return (
    <section className="section-four">
        <div className="liquify">
            <img src="./public/liquify.svg" alt="" srcset="" />
        </div>
      <div className="main-content">
        <div className="objective">
          <div className="text">
            <h1>Qual o nosso objetivo?</h1>
            <h3>
              Possibilitar o networking profissional, de maneira automática e
              detalhada!
            </h3>
          </div>

          <img
            src="./public/molde.png"
            alt="Abelhas realizando a simbiose!"
            width={"40%"}
            style={{ borderRadius: "50%" }}
          />
        </div>
        <div className="what-we-want">
          <h1>Qual o nosso impacto?</h1>
          <h3>
            Transformar vidas e gerar oportunidades, por meio da plataforma
            SymBee!
          </h3>
          <img src="./public/we want you.png" alt="Precisamos de você!" />
        </div>
      </div>
    </section>
  );
}

export default Section4;
