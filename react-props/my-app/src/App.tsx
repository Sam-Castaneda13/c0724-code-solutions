import { Header } from './Header';
import { ImageContainer } from './ImageContainer';
import { ImageCaption } from './ImageCaption';
import { ImageDescription } from './ImageDescription';
import { ButtonContainer } from './ButtonContainer';
import './App.css';

const headerText = 'React Props Text';
const newSrc = '/vite.svg';
const newImgCap = 'This is a newer Image Caption :)';
const newImgDscript = 'This the images new description :) Lets GO!!!!!!!!!';
const newButton = 'Time for New Image';

export default function App() {
  return (
    <>
      <Header headerText={headerText} />
      <ImageContainer newSrc={newSrc} />
      <ImageCaption imageCaptionText={newImgCap} />
      <ImageDescription imageDescriptionText={newImgDscript} />
      <ButtonContainer buttonContainerText={newButton} />
    </>
  );
}
