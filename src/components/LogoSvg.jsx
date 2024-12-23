import React from "react";

const LogoSvg = (props) => {
  return (
    <svg
      width="31"
      height="46"
      viewBox="0 0 31 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.0283 30.6339L15.8962 23.1917L28.7075 30.8862V23.444L15.8962 16.254L1.5 23.6962V15.7494L15.8962 8.30713L29.5 16.5062"
        stroke="#F9D504"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M5.99023 34.292L12.7261 38.0533L15.436 39.5669L18.2733 38.0533L25.0091 34.292"
        stroke={props.stroke}
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M10.877 6.41482C10.877 6.41482 9.92783 4.73327 9.02799 3.89202C8.17943 3.09872 6.51855 2.2522 6.51855 2.2522"
        stroke={props.stroke}
        strokestroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M20.5185 6.16263C20.5185 6.16263 21.4677 4.48107 22.3675 3.63982C23.2161 2.84652 24.877 2 24.877 2"
        stroke={props.stroke}
        strokestroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default LogoSvg;
