type Props = {
  captions: string;
};

export function ImageCaption({ captions }: Props) {
  return (
    <div>
      <h3>{captions}</h3>
    </div>
  );
}
