import React, { useContext, useState } from "react";
import FavoriteContext from "../contexts/favoritesContext";
import Modal from "react-modal";
import ModalContent from "./ModalContent";

const Pokemon = (props) => {
  const { favoritePokemons, updateFavoritePokemons } = useContext(FavoriteContext);
  const { pokemon } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onHeartClick = () => {
    updateFavoritePokemons(pokemon.name);
  };

  const heart = favoritePokemons.includes(pokemon.name) ? "❤️" : "🖤";

  const primaryType = pokemon.types[0].type.name;

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={`pokemon__container ${pokemon.name} ${primaryType}`}>
      <div className="pokemon-image-container">
        <img alt={pokemon.name} src={pokemon.sprites.front_default} className="pokemon-image" />
      </div>
      <div className="card-body">
        <div className="card-top">
          <h3> {pokemon.name}</h3>
          <div>
            <h5>Nº {pokemon.id}</h5>
            </div>
        </div>
        <div className="card-bottom">
          <div className="pokemon-type">
            {pokemon.types.map((type, index) => (
              <h4 key={index} className={type.type.name}>
                {type.type.name}
              </h4>
            ))}
          </div>
          <button className="pokemon-heart-btn" onClick={onHeartClick}>
            {heart}
          </button>
          <button className="open-modal-btn" onClick={openModal}>
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-pokeball" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
            <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
            <path d="M3 12h6"></path>
            <path d="M15 12h6"></path>
          </svg>
          </button>
          <Modal
            isOpen={isModalOpen}
            onRequestClose={closeModal}
            color={primaryType}
            style={{
              content: {
                width: '80%',
                height: '90%',
                margin: 'auto', 
                padding: '0',
              },
            }}
            contentLabel="Exemplo de Janela Modal"
          >
            <ModalContent onClose={closeModal} pokemon={pokemon} type={primaryType} />
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Pokemon;
