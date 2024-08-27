import { Header } from './Header';
import { ImageContainer } from './ImageContainer';
import { ImageCaption } from './ImageCaption';
import { ImageDescription } from './ImageDescription';
import { ButtonContainer } from './ButtonContainer';
import './App.css';

const headerText = 'React Image Bank';
const imageSrc = [
  '/starry-sky.jpeg',
  '/vite.svg',
  'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/403.png',
];
const imageCap = [
  'A Beautiful Image of Space',
  'A image of the logo for Vite',
  'Shinx the Flash Pokemon',
];
const imageDescrip = [
  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam incidunt sit dolorum accusantium sapiente reiciendis maxime dolores ullam delectus, commodi placeat eveniet, quam voluptates facere et magnam architecto quaerat velit voluptas rerum quos asperiores quis in ! Nemo aut aliquam quas dolore quaerat, error numquam odio modi eos vero. Modi nisi eos autem ? Iusto hic impedit aspernatur labore quos nesciunt ? Ad dolore pariatur aperiam nemo, maiores laboriosam quam quod nisi ipsum, dicta sunt laborum similique repellat ? ',
  'This is the logo for the company Vite',
  "Shinx is a quadrupedal, feline Pokémon resembling a lion cub or lynx kitten. Its front half is light blue, while the rear is black. There is a short tuft of fur on its head and smaller tufts on each cheek. The top tuft is smaller on the female Shinx. It has large, oval ears with yellow, star-shaped markings on the insides; yellow eyes; and a tiny, red nose. Whenever its mouth is open, small fangs can be seen in its upper jaw. A black marking encircles Shinx's neck like a collar, and there are yellow bands above its forepaws. The hind paws are black on the male Shinx and blue on the female. Spiked fur surrounds the base of its long tail, which is tipped with a yellow star shape.Electricity is produced by the extension and contraction of muscles in Shinx's forelegs, which causes this Pokémon's fur to glow. If it senses danger, its fur can gleam brightly to blind predators so it can flee. Excited trembling is a sign that Shinx is generating tremendous amounts of electricity. It can send signals to other Shinx by shining the tip of its tail and shaking it. It has an aggressive nature; thus, taming a Shinx is said to take great patience.",
];
const buttonText = 'Click for Next Image';

export default function App() {
  return (
    <>
      <Header headerText={headerText} />
      <ImageContainer imageSrc={imageSrc} />
      <ImageCaption imageCap={imageCap} />
      <ImageDescription imageDescrip={imageDescrip} />
      <ButtonContainer buttonText={buttonText} />
    </>
  );
}
