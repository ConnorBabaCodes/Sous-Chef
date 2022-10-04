import React from "react";
import XL from "/Hero.jpg";
import L from "/HeroImg-2804.jpg";
import M from "/HeroImg-1402.jpg";
import S from "/HeroImg-701.jpg";
import XS from "/HeroImg-351.jpg";

export default function Hero() {
  return (
    <div>
      <img
        className="hero-img"
        src={XS}
        srcSet={`${XS} 351w, ${S} 701w, ${M} 1402w, ${L} 2804w, ${XL} 5608w`}
        alt="hero image"
      />
    </div>
  );
}
