import React from "react";

const ModalContent = ({ onClose, pokemon, type }) => {
  return (
    <div className={`modal__container ${type}`}>
      <div className="id_number">
        <h1>Nº {pokemon.id}</h1>
      </div>
      <div className="pokemon-modal__content">
        <img className="pokemon-img__modal" alt={pokemon.name} src={pokemon.sprites.other.home.front_default} />
        <div className="pokemon-name_modal">
          <h1>{pokemon.name}</h1>
        </div>
        <div className="pokemon-modal_type">
          <h1>Pokemon type</h1>
          {pokemon.types.map((type, index) => (
            <div key={index} className={type.type.name}>
              <h2>{type.type.name}</h2>
            </div>
          ))}
        </div>
      </div>
      <div className="pokemon-stats__container">
        <h1>Stats</h1>
        {pokemon.stats.map((stat, index) => (
          <div key={index}>
            <h2>{stat.stat.name}: {stat.base_stat}</h2>
          </div>
        ))}
        <div className="abilities-container">
          <h1>Abilities</h1>
          {pokemon.abilities.map((ability, index) => (
            <div key={index}>
              <h2>{ability.ability.name}</h2>
            </div>
          ))}
        </div>
      </div>
      <div className="btn-close">
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default ModalContent;
