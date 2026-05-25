# API Pokémon - Projeto de criação de cards dinâmicos através de JavaScript

Este projeto consiste no desenvolvimento de uma aplicação web front-end utilizando consumo de dados em tempo real por meio de uma API. Por meio da utilização da PokeAPI, ligada ao universo do desenho Pokémon, a aplicação foi desenvolvida com HTML, CSS e JavaScript, tendo como principal objetivo a criação dinâmica de cards dos personagens através da manipulação do DOM e integração com esta API pública.

A proposta do projeto é apresentar uma interface visual organizada e responsiva, permitindo a exibição de cards dos diferentes Pokémons com informações como nome, imagem e tipos elementais.

## Escopo do projeto

O projeto foi desenvolvido com foco em:

- Consumo de API pública utilizando JavaScript.
- Manipulação dinâmica de elementos HTML.
- Criação automática de cards através do JavaScript.
- Organização visual utilizando CSS.
- Responsividade para diferentes dispositivos.
- Estruturação sem utilização de frameworks externos.

A aplicação realiza requisições para a PokéAPI buscando informações dos Pokémons e trazendo os conteúdos diretamente na interface do usuário de forma dinâmica.

## Tecnologias e Ferramentas Utilizadas

Linguagens Utilizadas
- HTML5.
- CSS3.
- JavaScript.

Recursos Utilizados
- Fetch API.
- CSS Grid Layout e Flexbox.
- Media Queries.

Ferramentas
- Visual Studio Code.
- GitHub.
- PokéAPI.

## Arquitetura da Aplicação

O projeto foi organizado de forma simples e modular, separando os arquivos responsáveis pela estrutura, estilização, imagens e lógica da aplicação. Essa organização facilita a manutenção do código e a compreensão do funcionamento dessa página.

- **index.html**
    Arquivo principal da aplicação, responsável pela estrutura da página web. Nele estão definidas as principais seções do site, como:
	- Header com menu de navegação.
	- Seção de exibição dos cards dos Pokémons.
	- Seção "Sobre".
	- Footer com informações de contato.

- **css/**
	Diretório responsável pelos arquivos de estilização da aplicação.
	- style.css
		Arquivo principal de estilos do projeto, contendo:
		- Estilização global da página.
		- Layout das seções.
		- Organização dos cards.
		- Responsividade com media queries.
		- Estilização dinâmica dos tipos dos Pokémons.

- **js/**
	Diretório responsável pela lógica da aplicação e consumo da API.
	- carregarPokemons.js
	    Arquivo responsável pelo funcionamento dinâmico da página web. Nele foram implementadas funcionalidades como:
		- Consumo da PokéAPI utilizando `fetch()`.
		- Manipulação assíncrona de dados com `async` e `await`.
		- Criação dinâmica dos cards utilizando `createElement()`.
		- Inserção de elementos HTML com `appendChild()`.
		- Processamento automático dos tipos de cada Pokémon através de elementos `span`.
		- Carregamento de nomes, imagens e ícones diretamente da API.

- **img/**
	Diretório utilizado para armazenar imagens locais do projeto, como:
	- Banner principal.
	- Ícones de redes sociais.
	- Ícone do menu mobile.
	- Imagens auxiliares utilizadas no layout.

## Estrutura de Dados Utilizada

A aplicação utiliza dados em formato JSON fornecidos pela PokéAPI através de requisições realizadas com o método fetch(). Inicialmente, é realizada uma primeira requisição responsável por obter uma lista geral dos Pokémons.

```bash
    let url = 'https://pokeapi.co/api/v2/pokemon'

    let response = await fetch(url)

    let dadosLista = await response.json()
```

Em seguida, uma segunda requisição é feita utilizando também o método fetch(), permitindo acessar dados mais detalhados de cada personagem a partir de url presente na própria API, como diferentes imagens e tipos elementais.

- Estrutura na API (exemplificada):
```bash
{
"count": 1350,
"next": "https://pokeapi.co/api/v2/pokemon?offset=20&limit=20",
"previous": null,
"results": [
{
"name": "bulbasaur",
"url": "https://pokeapi.co/api/v2/pokemon/1/"
},
{},
{}
]
}
```

- Segunda requisição usando método fetch():
```bash
let responsePokemon = await fetch(pokemon.url)

let dadosPokemon = await responsePokemon.json()
```

Um dos principais pontos da aplicação foi a manipulação dinâmica dos tipos dos Pokémons. Para isso, foi utilizado o array `types`, retornado pela API. Através do método forEach(), os tipos foram percorridos individualmente, possibilitando a criação automática de elementos span para cada tipo existente permitindo assim que Pokémons, independente de terem um ou dois tipos, fossem carregados corretamente, além de possibilitar também maior flexibilidade na estilização a partir do CSS e utilização dos spans como classes.

A aplicação também utilizou da manipulação de objetos aninhados para acessar imagens específicas da API, como por exemplo:

```bash
dadosPokemon.sprites.other['official-artwork'].front_default
```

## Considerações sobre Desempenho e Escalabilidade

A aplicação foi desenvolvida utilizando consumo de dados em tempo real através da PokéAPI, essa API já possui um sistema de paginação padrão, retornando inicialmente apenas 20 Pokémons por requisição, o que contribui para reduzir o tempo de carregamento da página.

A partir da separação entre HTML, CSS e JavaScript temos maior flexibilidade na manutenção e evolução dessa aplicação, permitindo adicionar novas funcionalidades sem comprometer a estrutura já existente. Portanto pensando em escalabilidade, a aplicação permite futuras implementações, como:

- Botão “Carregar mais Pokémons”.
- Barra de pesquisa por nome.
- Filtros por tipo.
- Ordenação por número ou categoria.

## Licença

- Este projeto está licenciado sob a licença MIT:

Copyright 2026 Lais

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.