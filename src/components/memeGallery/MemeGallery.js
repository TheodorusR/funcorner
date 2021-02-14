import React, {useState} from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators
} from 'reactstrap';
import {items} from './memeCollection';

const MemeGallery = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        className='meme-container'
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img draggable='false' src={item.src} alt={item.altText} />
      </CarouselItem>
    );
  });

  return (
    <div className='gallery-container'>
      <p>Your daily dose of memes, enjoy~~ </p>
      <Carousel
        interval={false}
        activeIndex={activeIndex}
        next={next}
        previous={previous}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
        {slides}
        <CarouselControl direction='prev' directionText='Previous' onClickHandler={previous} />
        <CarouselControl direction='next' directionText='Next' onClickHandler={next} />
      </Carousel>
    </div>
  )
}

export default MemeGallery
