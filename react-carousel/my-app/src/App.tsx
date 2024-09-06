import './App.css';
import { Carousel } from './Carousel';

function App() {
  const images = [
    {
      src: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/403.png',
      alt: 'Shinx',
    },
    {
      src: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/613.png',
      alt: 'Cubchoo',
    },
    {
      src: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/396.png',
      alt: 'Starly',
    },
    {
      src: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/399.png',
      alt: 'Bidoof',
    },
    {
      src: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/725.png',
      alt: 'Litten',
    },
    {
      src: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/435.png',
      alt: 'Skuntank',
    },
  ];
  return (
    <>
      <Carousel images={images} />
    </>
  );
}

export default App;
