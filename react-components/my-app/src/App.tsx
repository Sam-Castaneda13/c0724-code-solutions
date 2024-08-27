import { ImageCaption } from './ImageCaption';
import { ImageContainer } from './ImageContainer';
import { ImageDescription } from './ImageDescription';
import { Header } from './Header';
import { ButtonContainer } from './ButtonContainer';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <ImageContainer />
      <ImageCaption />
      <ImageDescription />
      <ButtonContainer />
    </>
  );
}

export default App;
