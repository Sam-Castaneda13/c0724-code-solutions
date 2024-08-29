import { Switch } from './Switch';
import './App.css';

const switchNames = ['flip', 'flip on'];
const circleNames = ['circle', 'circle is-on'];
const sideChecker = ['OFF', 'ON'];

function App() {
  return (
    <>
      <Switch
        SwitchFlip={switchNames}
        SwitchCircle={circleNames}
        onOff={sideChecker}
      />
    </>
  );
}

export default App;
