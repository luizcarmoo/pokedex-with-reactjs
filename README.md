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

# Documentação da Pokedex em React.js em PT-BR 🇧🇷

Bem-vindo à documentação da Pokedex, um projeto React.js que utiliza a PokeAPI para fornecer informações sobre Pokémon. Esta aplicação permite que os usuários pesquisem Pokémon por nome ou número de ID, favoritem seus Pokémon favoritos e vejam detalhes adicionais por meio de um modal component.

## Índice

1. [Introdução](#introdução)
2. [Instalação](#instalação)
3. [Estrutura do Projeto](#estrutura-do-projeto)
4. [Configuração da PokeAPI](#configuração-da-pokeapi)
5. [Componentes Principais](#componentes-principais)
   - [Pokedex](#pokedex)
   - [Modal](#modal)
   - [Favoritos](#favoritos)
6. [Pesquisa de Pokémon](#pesquisa-de-pokémon)
7. [Favoritos](#favoritos)
8. [Modal](#modal)
9. [Estilos](#estilos)
10. [Contribuindo](#contribuindo)
11. [Licença](#licença)

## Introdução

A Pokedex é uma aplicação React.js que utiliza a PokeAPI para obter informações sobre Pokémons. Os usuários podem pesquisar Pokémons por nome ou números de ID, favoritar seus Pokémon preferidos e explorar detalhes adicionais por meio de um modal.

## Instalação

Para começar, clone este repositório e execute os seguintes comandos:

```bash
# Instale as dependências
npm install

# Inicie a aplicação
npm start
```

A aplicação estará disponível em `http://localhost:3000`.

## Estrutura do Projeto

A estrutura do projeto é organizada da seguinte forma:

    src/
        components/: Aqui estão todos os componentes do projeto, assim como as configurações e funções de serviço para interagir com a PokeAPI.
        styles/: Arquivos de estilos globais.
        App.js: Componente principal que renderiza a aplicação.

## Configuração da PokeAPI

A configuração da PokeAPI está localizada em src/components/Api.js. Modifique as variáveis URL conforme necessário.

```bash
// src/components/Api.js
let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
```

## Componentes Principais 
### Pokedex

O componente Pokedex é responsável por exibir a lista de Pokémon e lidar com a pesquisa.

```bash
// src/components/Pokedex.js
// ...
```

### Modal

O componente Modal exibe detalhes adicionais sobre um Pokémon selecionado.

```bash
// src/components/ModalContent.js
// ...
```

### Favoritos

O componente Favoritos exibe a lista de Pokémon favoritos.

```bash
// src/components/Favorites.js
// ...
```

## Pesquisa de Pokémon

Os usuários podem pesquisar Pokémon por nome ou número de ID. A lógica de pesquisa está implementada no componente Pokedex.

## Favoritos

Os usuários podem favoritar Pokémon clicando em um botão de favoritos. Os Pokémon favoritos são armazenados localmente e exibidos no componente Favoritos.

## Modal

Dentro do card de um Pokémon tem um icone de Pokedex para abrir um modal contendo detalhes adicionais sobre o Pokémon.

## Estilos

Os estilos globais estão localizados em src/styles. Personalize os estilos conforme necessário.

## Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests.

## Licença

Este projeto é licenciado sob a Licença MIT - veja o arquivo LICENSE para detalhes.

## Espero que você aproveite a Pokedex! Se tiver dúvidas ou sugestões, entre em contato.

---

<img src="https://raw.githubusercontent.com/luizcarmoo/pokedex-with-reactjs/main/public/to_readme/pokedex-react-pokeAPI.jpg" />

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
