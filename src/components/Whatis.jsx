import React from "react";
import L from "/public/Image2.jpg";
import M from "/public/Image2-960.jpg";
import S from "/public/Image2-480.jpg";

export default function Whatis() {
  return (
    <div className="landing-info">
      <div>
        <div className="landing-text yellow">
          <h1>But What is a sous chef?</h1>
          <p>
            A sous chef (pronounced "soo-shef")is a shortening of the French
            term "sous-chef de Cuisine" meaning "under-chief of the kitchen".
            Essentially, a sous chef is the second in command of the kitchen.
          </p>
        </div>
      </div>
      <div>
        <img src={S} srcSet={`${S} 480w, ${M} 960w, ${L} 1920w`} alt="img" />
      </div>
    </div>
  );
}
