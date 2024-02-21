// components/ImageSlider.js
import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImageSlider2 = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const images = [
    '/img/banner-img-1.jpg',
    // "src/assets/img/volvo v90black.jpg",
    // "src/assets/img/rangerover2.jpg",
    // 'src/assets/img/pexels-pixabay-261985.jpg',
    // '/img/pexels-geometric-photography-13324313.jpg'
  ];

  return (
    <Slider {...sliderSettings} className="mx-auto max-w-screen-xl">
      {images.map((image, index) => (
        <div key={index} className="focus:outline-none">
          <img
            src={image}
            alt={`Slide ${index + 1}`}
            className="h-auto w-auto"
          />
        </div>
      ))}
    </Slider>
  );
};

export default ImageSlider2;
