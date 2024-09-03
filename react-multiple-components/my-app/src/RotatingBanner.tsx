import { useState } from 'react';

type Props = {
  items: string[];
};
type Banner = {
  item: string;
};
type Indicators = {
  count: number;
  active: number;
  selector: (index: number) => void;
};
type Previous = {
  prev: () => void;
};
type Next = {
  next: () => void;
};

export function RotatingBanner({ items }: Props) {
  const [active, setActive] = useState(0);
  function changeButtonClick(num: number) {
    setActive(num);
  }

  function handleSubmitPrev() {
    if (active >= items.length || active < 1) {
      setActive(5);
    } else {
      setActive(active - 1);
    }
  }
  function handleSubmitNext() {
    if (active >= items.length - 1) {
      setActive(0);
    } else {
      setActive(active + 1);
    }
  }
  return (
    <div>
      <Banner item={items[active]} />
      <PrevButton prev={handleSubmitPrev} />
      <Indicators
        count={items.length}
        selector={changeButtonClick}
        active={active}
      />
      <NextButton next={handleSubmitNext} />
    </div>
  );
}

function Banner({ item }: Banner) {
  return (
    <div>
      <h1>{item}</h1>
    </div>
  );
}

function PrevButton({ prev }: Previous) {
  return (
    <button onClick={prev} type="button" className="button">
      Prev
    </button>
  );
}

function Indicators({ count, active, selector }: Indicators) {
  const buttons = [];

  for (let i = 0; i < count; i++) {
    if (i === active) {
      buttons.push(
        <button
          onClick={() => selector(i)}
          type="submit"
          className="button active">
          {i}
        </button>
      );
      console.log('safe', active);
    } else {
      buttons.push(
        <button onClick={() => selector(i)} type="submit" className="button">
          {i}
        </button>
      );
      console.log(active);
    }
  }
  return (
    <div>
      <span>{buttons[0]}</span>
      <span>{buttons[1]}</span>
      <span>{buttons[2]}</span>
      <span>{buttons[3]}</span>
      <span>{buttons[4]}</span>
      <span>{buttons[5]}</span>
    </div>
  );
}

function NextButton({ next }: Next) {
  return (
    <button onClick={next} type="button" className="button">
      Next
    </button>
  );
}
