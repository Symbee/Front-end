import React from "react";
import styles from "./Assinaturas.module.css";
import Footer from "../footer/Footer";

const Assinaturas = () => {
  return (
    <main>
      <section className={styles.plansSection}>
        <h1>
          Eleve sua jornada de desenvolvimento e conquiste as melhores
          oportunidades com o plano premium!"
        </h1>
        <hr class="w-40 h-1 mx-auto my-4 bg-customBlack border-0 rounded md:my-10 opacity-100"></hr>
        <div className={styles.plansContainer}>
          <div className={styles.planWorker}>
            <h2>Operários</h2>
          </div>
          <div className={styles.planQueen}></div>
        </div>
      </section>
      <Footer
        symbee={{ color: "black" }}
        footer={{ backgroundImage: "none" }}
        links={{ color: "black" }}
        icones={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        stroke="black"
      />
    </main>
  );
};

export default Assinaturas;
