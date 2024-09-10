import { useEffect, useState } from 'react';
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
// type Circle = {
//   switch: string
// }

export function Carousel({ images }: Props) {
  const [index, setIndex] = useState(0);

  // function handleCircleSwitch(num: string) {
  //   if (Number(num) === index){
  //     return 'filled';
  //   }
  // }

  useEffect(() => {
    const timerId = setInterval(() => {
      if (index >= images.length) {
        setIndex(0);
      } else {
        setIndex(index + 1);
      }
    }, 5000);
    return () => clearInterval(timerId);
  }, [images.length, index]);

  function handleSubmitPrev() {
    if (index >= images.length || index < 1) {
      setIndex(5);
    } else {
      setIndex(index - 1);
    }
  }
  function handleSubmitNext() {
    if (index >= images.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
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
  return (
    <>
      <div className="img-dots">
        <span className="what" id="dot1"></span>
        <span className="empty" id="dot2"></span>
        <span className="empty" id="dot3"></span>
        <span className="empty" id="dot4"></span>
        <span className="empty" id="dot5"></span>
      </div>
    </>
  );
}
