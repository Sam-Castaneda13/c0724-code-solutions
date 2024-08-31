type Props = {
  count: number;
};

export function Indicators({ count }: Props) {
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
