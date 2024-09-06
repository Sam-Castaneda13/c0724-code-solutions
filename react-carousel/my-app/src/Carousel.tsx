import { useState } from 'react';
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from 'react-icons/md';

type Props = {
  images: { src: string; alt: string }[];
};
type NextButton = {
  nextButton: () => void;
};
type PrevButton = {
  prevButton: () => void;
};
type Image = {
  image: { src: string; alt: string };
};

export function Carousel({ images }: Props) {
  const [index, setIndex] = useState(0);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout>();

  function startInterval() {
    clearInterval(intervalId);
    setIntervalId(setInterval(timeInterval, 5000));
  }

  function timeInterval() {
    if (index >= images.length) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }
  function handleSubmitPrev() {
    if (index >= images.length || index < 1) {
      setIndex(5);
      startInterval();
    } else {
      setIndex(index - 1);
      startInterval();
    }
  }
  function handleSubmitNext() {
    if (index >= images.length - 1) {
      setIndex(0);
      startInterval();
    } else {
      setIndex(index + 1);
      startInterval();
    }
  }
  return (
    <>
      <div className="row">
        <PrevButton prevButton={handleSubmitPrev} />
        <Image image={images[index]} />
        <NextButton nextButton={handleSubmitNext} />
      </div>
      <div>
        <CircleButton />
      </div>
    </>
  );
}

function PrevButton({ prevButton }: PrevButton) {
  return (
    <div onClick={prevButton} className="arrow">
      <MdOutlineKeyboardArrowLeft />
    </div>
  );
}

function Image({ image }: Image) {
  console.log(image.src);
  return <img src={image.src} alt={image.alt} />;
}

function NextButton({ nextButton }: NextButton) {
  return (
    <div onClick={nextButton} className="arrow">
      <MdOutlineKeyboardArrowRight />
    </div>
  );
}

function CircleButton() {
  return <h1>Hello</h1>;
}
