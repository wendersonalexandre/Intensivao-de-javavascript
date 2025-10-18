import React from "react";
import Banneer from "../assets/hashtaurante.webp"

const Banner = () => {
  return (
    <div className="banner">
      <img src={Banneer} className="capa" alt="imagem-do-restaurante" />
    </div>
  );
};

export default Banner;
