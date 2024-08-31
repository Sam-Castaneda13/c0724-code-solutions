type Props = {
  items: string[];
};
type Banner = {
  item: string;
};
type Indicators = {
  count: number;
};

export function RotatingBanner({ items }: Props) {
  return (
    <div>
      <Banner item={items[0]} />
      <PrevButton />
      <Indicators count={items.length} />
      <NextButton />
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

function PrevButton() {
  return (
    <button type="submit" className="button">
      Prev
    </button>
  );
}

function Indicators({ count }: Indicators) {
  const buttons = [];
  for (let i = 0; i < count; i++) {
    buttons.push(
      <button type="submit" className="button">
        {i}
      </button>
    );
  }
  return (
    <div>
      {buttons[0]}
      {buttons[1]}
      {buttons[2]}
      {buttons[3]}
      {buttons[4]}
      {buttons[5]}
    </div>
  );
}

function NextButton() {
  return (
    <button type="submit" className="button">
      Next
    </button>
  );
}
