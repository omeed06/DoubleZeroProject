import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const CardCarousel = ({cards}) => {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1
    }
  };
      
  return (
    <>
    <Carousel responsive={responsive} className="px-5 md:px-24 md:my-10">
      {cards}
      {cards}
      {cards}
      {cards}
      {cards}
    </Carousel>

      
    </>
  )
}

export default CardCarousel