type Props = {
  buttonContainerText: string;
};

export function ButtonContainer(props: Props) {
  return (
    <div>
      <button>{props.buttonContainerText}</button>
    </div>
  );
}
