type Props = {
  imageCaptionText: string;
};

export function ImageCaption(props: Props) {
  return (
    <div>
      <h3>{props.imageCaptionText}</h3>
    </div>
  );
}
