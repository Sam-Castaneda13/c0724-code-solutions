type Props = {
  Class: string | undefined;
  onClick: () => void;
};

export function ButtonContainer({ Class, onClick }: Props) {
  return (
    <button className={Class} onClick={onClick}>
      Hot Button
    </button>
  );
}
