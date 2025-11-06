import React, { useContext } from "react";
import FavoriteContext from "../context/FavoritesContext";

const typeColors = {
  grass: "#78C850",
  fire: "#F08030",
  water: "#6890F0",
  electric: "#F8D030",
  bug: "#A8B820",
  normal: "#A8A878",
  poison: "#A040A0",
  ground: "#E0C068",
  fairy: "#EE99AC",
  fighting: "#C03028",
  psychic: "#F85888",
  rock: "#B8A038",
  ghost: "#705898",
  ice: "#98D8D8",
  dragon: "#7038F8",
  dark: "#705848",
  steel: "#B8B8D0",
  flying: "#aca6a6ff",
};

const Pokemon = (props) => {
  const { favoritePokemons, updateFavoritePokemons } = useContext(FavoriteContext);
  const { pokemon } = props;

  const onHeartClick = () => {
    updateFavoritePokemons(pokemon.name);
  };

  const heart = favoritePokemons.includes(pokemon.name) ? "💙" : "🤍";

  return (
    <div className="pokemon-card">
      <div className="pokemon-image-container">
        <img
          alt={pokemon.name}
          src={pokemon.sprites.front_default}
          className="pokemon-image"
        />
      </div>
      <div className="card-body">
        <div className="card-top">
          <h3>{pokemon.name}</h3>
          <div>#{pokemon.id}</div>
        </div>

        <div className="pokemon-type">
          {pokemon.types.map((type, index) => {
            const typeName = type.type.name;
            return (
              <div
                key={index}
                className="pokemon-type-text"
                style={{ backgroundColor: typeColors[typeName] }}
              >
                {typeName}
              </div>
            );
          })}
        </div>

        <button className="pokemon-heart-btn" onClick={onHeartClick}>
          {heart}
        </button>
      </div>
    </div>
  );
};

export default Pokemon;
