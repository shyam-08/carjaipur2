// components/ImageSlider.js
import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImageSlider = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const images = [
    'src/assets/img/c-b-cAbH8B-14Vo-unsplash.jpg',
    'src/assets/img/pexels-pixabay-261985.jpg',
    'src/assets/img/pexels-geometric-photography-13324313.jpg'
  ];

  return (
    <Slider {...sliderSettings}>
      {images.map((image, index) => (
        <div key={index}>
          <img
            src={image}
            alt={`Slide ${index + 1}`}
            className="w-full h-auto"
            style={{ maxHeight:'300', maxWidth: '100%' }}
          />
        </div>
      ))}
    </Slider>
  );
};

export default ImageSlider;
