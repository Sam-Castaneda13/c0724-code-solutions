type Props = {
  imageDescriptionText: string;
};

export function ImageDescription(props: Props) {
  return (
    <div>
      <p>{props.imageDescriptionText}</p>
    </div>
  );
}
