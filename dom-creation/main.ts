interface Pokemon {
  number: string;
  name: string;
  description: string;
  imageUrl: string;
}

const pokedex: Pokemon[] = [
  {
    number: '001',
    name: 'Bulbasaur',
    description:
      'There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.',
    imageUrl: 'images/bulbasaur.png',
  },
  {
    number: '004',
    name: 'Charmander',
    description:
      'It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.',
    imageUrl: 'images/charmander.png',
  },
  {
    number: '007',
    name: 'Squirtle',
    description:
      'When it retracts its long neck into its shell, it squirts out water with vigorous force.',
    imageUrl: 'images/squirtle.png',
  },
  {
    number: '002',
    name: 'Ivysaur',
    description:
      'When the bulb on its back grows large, it appears to lose the ability to stand on its hind legs.',
    imageUrl: 'images/ivysaur.png',
  },
  {
    number: '005',
    name: 'Charmeleon',
    description:
      'It has a barbaric nature. In battle, it whips its fiery tail around and slashes away with sharp claws.',
    imageUrl: 'images/charmeleon.png',
  },
  {
    number: '008',
    name: 'Wartortle',
    description:
      'It is recognized as a symbol of longevity. If its shell has algae on it, that Wartortle is very old.',
    imageUrl: 'images/wartortle.png',
  },
  {
    number: '003',
    name: 'Venusaur',
    description:
      'Its plant blooms when it is absorbing solar energy. It stays on the move to seek sunlight.',
    imageUrl: 'images/venusaur.png',
  },
  {
    number: '006',
    name: 'Charizard',
    description:
      'It spits fire that is hot enough to melt boulders. It may cause forest fires by blowing flames.',
    imageUrl: 'images/charizard.png',
  },
  {
    number: '009',
    name: 'Blastoise',
    description:
      'It crushes its foe under its heavy body to cause fainting. In a pinch, it will withdraw inside its shell.',
    imageUrl: 'images/blastoise.png',
  },
];

const $row = document.querySelector('.row');

function pokeLoader(array: Pokemon[]): void {
  if (!$row) throw new Error('Could not grab the row');
  for (let i = 0; i < array.length; i++) {
    const count = renderPoke(array[i]);
    $row.append(count);
  }
}

function renderPoke(object: Pokemon): HTMLDivElement {
  /* <div class="column-third">
      <div class='pokemon-card'>
        <img src='link'/>
      </div>
      <div class='pokemon-card--text'>
        <h2>Pokemon Name</h2>
        <h3>Pokedex NUm</h2>
        <p>...<p>
      </div>
     </div>
  */

  const column = document.createElement('div');
  column.className = 'column-third';
  const pokeCard = document.createElement('div');
  pokeCard.className = 'pokemon-card';
  const imgPoke = document.createElement('img');
  imgPoke.setAttribute('src', object.imageUrl);
  const pokeText = document.createElement('div');
  pokeText.className = 'pokemon-card-text';
  const pokeName = document.createElement('h2');
  pokeName.textContent = object.name;
  const pokeNum = document.createElement('h3');
  pokeNum.textContent = `#${object.number}`;
  const pokePara = document.createElement('p');
  pokePara.textContent = object.description;

  column.append(pokeCard);
  pokeCard.appendChild(imgPoke);
  pokeCard.append(pokeText);
  pokeText.append(pokeName);
  pokeText.append(pokeNum);
  pokeText.append(pokePara);

  return column;
}

pokeLoader(pokedex);
