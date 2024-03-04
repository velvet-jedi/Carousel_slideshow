const slides = document.querySelectorAll('.carousel__slide');

let currentSlideIndex = 0;

let intervalId;

const autoClick = () => {
    const currentSlide = slides[currentSlideIndex];
    const nextButton = currentSlide.querySelector('.carousel__next');

    nextButton.click();
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;
};

intervalId = setInterval(autoClick, 2000);
