import { useState } from 'react';

type Props = {
  SwitchFlip: string[];
  SwitchCircle: string[];
  onOff: string[];
};

export function Switch({ SwitchFlip, SwitchCircle, onOff }: Props) {
  const [isOn, setIsOn] = useState(0);
  function handleIsOn() {
    if (isOn > 0) {
      setIsOn(0);
    } else {
      setIsOn(isOn + 1);
    }
  }
  return (
    <>
      <div className={SwitchFlip[isOn]} onClick={handleIsOn}>
        <div className={SwitchCircle[isOn]}></div>
      </div>
      <span>{onOff[isOn]}</span>
    </>
  );
}
