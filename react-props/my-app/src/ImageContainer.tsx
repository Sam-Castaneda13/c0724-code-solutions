import './ImageContainer.css';

type Props = {
  newSrc: string;
};

export function ImageContainer(props: Props) {
  return (
    <div className="d-flex justify-content-center">
      <div className="width-50 ">
        <img className="image-fill" src={props.newSrc} alt="space-image" />
      </div>
    </div>
  );
}
