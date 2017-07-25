import images from '../constants/images';

export default () => {
  const sliderImagePlaceholder = document.querySelector('.slider-image-placeholder');
  const imgLarge = new Image();

  if (window.matchMedia('(min-width: 2560px)').matches) {
    imgLarge.src = images.sliderImageLarge
  } else if (window.matchMedia('(min-width: 1365px)').matches) {
    imgLarge.src = images.sliderImageMedium
  } else {
    imgLarge.src = images.sliderImageSmall
  }

  imgLarge.onload = () => {
    sliderImagePlaceholder.appendChild(imgLarge);
  };
};
