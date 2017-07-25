import images from '../constants/images';

export default () => {
  const sliderImagePlaceholder = document.querySelector('.slider-image-placeholder');
  const image = new Image();

  if (window.matchMedia('(min-width: 2560px)').matches) {
    image.src = images.sliderImageLarge
  } else if (window.matchMedia('(min-width: 1365px)').matches) {
    image.src = images.sliderImageMedium
  } else {
    image.src = images.sliderImageSmall
  }

  image.onload = () => {
    const placeholderImage = document.querySelector('.slider-image-placeholder .placeholder-image')
    placeholderImage.classList.add('loaded')
    sliderImagePlaceholder.appendChild(image);
  };
};
