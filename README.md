# Documentação da Pokedex em React.js

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


## Espero que você aproveite a Pokedex! Se tiver dúvidas ou sugestões, entre em contato.


<img src="https://raw.githubusercontent.com/luizcarmoo/pokedex_react/main/public/to_readme/pokedex-react-pokeAPI.jpg" />

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
