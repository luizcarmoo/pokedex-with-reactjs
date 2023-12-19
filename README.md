# Pokedex documentation with React.js

Welcome to the documentation for Pokedex, a React.js project that uses the PokeAPI to provide information about Pokémon. This application allows users to search for Pokémon by name or ID number, favorite their favorite Pokémon, and view additional details through a modal component.

## Index

1. [Introduction](#introduction)
2. [Installation](#installation)
3. [Project Structure](#project-structure)
4. [PokeAPI Configuration](#pokeapi-configuration)
5. [Main Components](#main-components)
    - [Pokedex](#pokedex)
    - [Modal](#modal)
    - [Favorites](#favorites)
6. [Pokémon Search](#pokemon-search)
7. [Favorites](#favorites)
8. [Modal](#modal)
9. [Styles](#styles)
10. [Contributing](#contributing)
11. [License](#license)

## Introduction

Pokedex is a React.js application that uses the PokeAPI to obtain information about Pokémon. Users can search for Pokémon by name or ID numbers, favorite their favorite Pokémon, and explore additional details through a modal.

## Installation

To get started, clone this repository and run the following commands:

```bash
# Install dependencies
npm install

# Start the application
npm start
```

The application will be available at `http://localhost:3000`.

## Project Structure

The project structure is organized as follows:

     src/
         components/: Here are all the project components, as well as the configurations and service functions to interact with the PokeAPI.
         styles/: Global style files.
         App.js: Main component that renders the application.

## PokeAPI Configuration

The PokeAPI configuration is located in src/components/Api.js. Modify the URL variables as needed.

```bash
// src/components/Api.js
let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
```

## Main Components
### Pokedex

The Pokedex component is responsible for displaying the list of Pokémon and handling the search.

```bash
// src/components/Pokedex.js
// ...
```

### Modal

The Modal component displays additional details about a selected Pokémon.

```bash
// src/components/ModalContent.js
// ...
```

### Favorites

The Favorites component displays the list of favorite Pokémon.

```bash
// src/components/Favorites.js
// ...
```

## Pokemon Search

Users can search for Pokémon by name or ID number. The search logic is implemented in the Pokedex component.

## Favorites

Users can favorite Pokémon by clicking a favorite button. Favorite Pokémon are stored locally and displayed in the Favorites component.

## Modal

Inside a Pokémon card there is a Pokedex icon to open a modal containing additional details about the Pokémon.

## Styles

Global styles are located in src/styles. Customize styles as needed.

## Contributing

Contributions are welcome! Feel free to open issues or pull requests.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Hope you enjoy the Pokedex! If you have questions or suggestions, get in touch.

---

<img src="https://raw.githubusercontent.com/luizcarmoo/pokedex-with-reactjs/main/public/to_readme/pokedex-react-pokeAPI.jpg" />

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
