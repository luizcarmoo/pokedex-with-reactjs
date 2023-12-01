import React, { useContext } from "react";
import FavoriteContext from "../contexts/favoritesContext";

const Navbar = () => {
  const { favoritePokemons } = useContext(FavoriteContext);
  const logoImg =
    "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";
  return (
    <nav>
      <div>
        <a href="https://pokeapi.co/" target="blank">
          <img alt="pokeapi-logo" src={logoImg} className="navbar-img" />
        </a>
      </div>
      <div className="all-favorites">Favorites: {favoritePokemons.length} ❤️</div>
    </nav>
  );
};

export default Navbar;
