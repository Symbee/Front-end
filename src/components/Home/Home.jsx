import React from "react";
import "./Home.css";
import Bee from "./assets/Bee";
import { ProgressBar } from "react-bootstrap";

function Home() {
  return (
    <>
      <section className="home-page">
        <div className="left-side">
          <h2 className="acquire-premium text-blue-800">Adquira o premium!</h2>
          <a
            className="hierarchy shadow-inner bg-blue-800"
            href="#"
            role="button"
          >
            <span>Suba na hierarquia!</span>
          </a>
          <hr className="w-48 h-1 my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700" />

          <div className="profile">
            <div className="profile-picture">
              <Bee stroke="#000000" />
            </div>
            <div className="profile-info">
              <span id="nickname">Kay_bonjour</span>
              <div className="level-box">
                <span id="nivel">Nível 30</span>
              </div>
              <div className="progress-bar">
                <div className="progress-filled"></div>
              </div>
              <p id="exp">
                Experience:{" "}
                <span style={{ color: "#7100B2", fontWeight: "700" }}>
                  5360/8000
                </span>
              </p>
            </div>
          </div>

          <div className="statisticsHome">
            <div className="dados">
              <div className="cartao">
                <h2>Projetos</h2>
                <h3>21</h3>
              </div>
              <div className="cartao">
                <h2>Conquistas</h2>
                <h3>119</h3>
              </div>
              <div className="cartao">
                <h2>Skills</h2>
                <h3>38</h3>
              </div>
            </div>
            <hr className="w-48 h-1 my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700" />
          </div>

          <a
            className="hierarchy2 shadow-inner bg-yellow-400"
            href="#"
            role="button"
          >
            <span>
              <i className="fa-solid fa-magnifying-glass"></i> Busque projetos
              com a Bee!
            </span>
          </a>
        </div>
      </section>
    </>
  );
}

export default Home;
