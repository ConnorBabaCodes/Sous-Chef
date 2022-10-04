import React from "react";
import Japanese from "/src/components/svgs/Japanese";
import Chinese from "/src/components/svgs/Chinese";
import Italian from "/src/components/svgs/Italian";
import Korean from "/src/components/svgs/Korean";
import American from "/src/components/svgs/American";
import Mexican from "/src/components/svgs/Mexican";
import Spicy from "/src/components/svgs/Spicy";
import Dessert from "/src/components/svgs/Dessert";
import Vegetarian from "/src/components/svgs/Vegetarian";
import Popular from "/src/components/svgs/Popular";
import French from "/src/components/svgs/French";
import Indian from "/src/components/svgs/Indian";

export default function GenreButtons(props) {
  return (
    <div id="recipes" className="genre-buttons">
      <div
        className="genre-container"
        onClick={() => props.selectGenre("Popular")}
      >
        <div className="genre">
          <Popular />
        </div>
        <p>Popular</p>
      </div>
      <div
        className="genre-container"
        onClick={() => props.selectGenre("American")}
      >
        <div className="genre">
          <American />
        </div>
        <p>American</p>
      </div>

      <div
        className="genre-container"
        onClick={() => props.selectGenre("Italian")}
      >
        <div className="genre">
          <Italian />
        </div>
        <p>Italian</p>
      </div>
      <div
        className="genre-container"
        onClick={() => props.selectGenre("French")}
      >
        <div className="genre">
          <French />
        </div>
        <p>French</p>
      </div>
      <div
        className="genre-container"
        onClick={() => props.selectGenre("Mexican")}
      >
        <div className="genre">
          <Mexican />
        </div>
        <p>Mexican</p>
      </div>

      <div
        className="genre-container"
        onClick={() => props.selectGenre("Japanese")}
      >
        <div className="genre">
          <Japanese />
        </div>
        <p>Japanese</p>
      </div>
      <div
        className="genre-container"
        onClick={() => props.selectGenre("Chinese")}
      >
        <div className="genre">
          <Chinese />
        </div>
        <p>Chinese</p>
      </div>
      <div
        className="genre-container"
        onClick={() => props.selectGenre("Korean")}
      >
        <div className="genre">
          <Korean />
        </div>
        <p>Korean</p>
      </div>
      <div
        className="genre-container"
        onClick={() => props.selectGenre("Indian")}
      >
        <div className="genre">
          <Indian />
        </div>
        <p>Indian</p>
      </div>

      <div
        className="genre-container"
        onClick={() => props.selectGenre("Vegetarian")}
      >
        <div className="genre">
          <Vegetarian />
        </div>
        <p>Vegetarian</p>
      </div>
      <div
        className="genre-container"
        onClick={() => props.selectGenre("Dessert")}
      >
        <div className="genre">
          <Dessert />
        </div>
        <p>Dessert</p>
      </div>
      <div
        className="genre-container"
        onClick={() => props.selectGenre("Spicy")}
      >
        <div className="genre">
          <Spicy />
        </div>
        <p>Spicy</p>
      </div>
    </div>
  );
}
