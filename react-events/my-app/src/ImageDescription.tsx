type Props = {
  descs: string;
};

export function ImageDescription({ descs }: Props) {
  return (
    <div>
      <p>{descs}</p>
    </div>
  );
}
