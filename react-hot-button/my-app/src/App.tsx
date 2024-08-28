import { useState } from 'react';
import './App.css';
import { ButtonContainer } from './ButtonContainer';

function App() {
  const [clicks, setClicks] = useState(0);

  function handleClicks() {
    setClicks(clicks + 1);
  }
  function clickChecker(clicks: number) {
    if (clicks < 3) {
      return 'black';
    } else if (clicks > 2 && clicks < 6) {
      return 'frozen';
    } else if (clicks > 5 && clicks < 9) {
      return 'cold';
    } else if (clicks > 8 && clicks < 12) {
      return 'warm';
    } else if (clicks > 11 && clicks < 15) {
      return 'hot';
    } else if (clicks > 14 && clicks < 18) {
      return 'extreme';
    } else if (clicks > 18) {
      return 'nuclear';
    }
  }
  return (
    <>
      <div>
        <ButtonContainer Class={clickChecker(clicks)} onClick={handleClicks} />
        <h2>{clicks}-Clicks</h2>
      </div>
    </>
  );
}

export default App;
