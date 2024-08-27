import './ImageContainer.css';

type Props = {
  srcs: string;
};

export function ImageContainer({ srcs }: Props) {
  return (
    <div className="d-flex justify-content-center">
      <div className="width-50 ">
        <img className="image-fill" src={srcs} alt="space-image" />
      </div>
    </div>
  );
}
