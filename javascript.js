document.addEventListener('DOMContentLoaded', function() {
const slider = document.getElementById('post-detail-sumerian');
const sliderList = slider.querySelector('.sumerian-list');
const sliderTrack = sliderList.querySelector('.sumerian-track');
const slides = sliderTrack.querySelectorAll('.post-detail-sumerian-item');
const nav = document.getElementById('post-detail-sumerian-nav');
const prevButton = nav.querySelector('.prev');
const nextButton = nav.querySelector('.next');
let currentIndex = 0;
let slideWidth = slides[0].offsetWidth;
let isTransitioning = false;
function updateSlider() {
sliderTrack.style.transform = `translateX(${-currentIndex * slideWidth}px)`;
}
function goToSlide(index) {
if (isTransitioning) return;
isTransitioning = true;
sliderTrack.addEventListener('transitionend', () => {
isTransitioning = false;
}, { once: true });
if (index < 0) {
currentIndex = slides.length - 1;
} else if (index >= slides.length) {
currentIndex = 0;
} else {
currentIndex = index;
}
updateSlider();
}
function nextSlide() {
goToSlide(currentIndex + 1);
}
function prevSlide() {
goToSlide(currentIndex - 1);
}
function handleResize() {
slideWidth = slides[0].offsetWidth;
updateSlider();
}
prevButton.addEventListener('click', prevSlide);
nextButton.addEventListener('click', nextSlide);
slider.setAttribute('tabindex', '0');
slider.addEventListener('keydown', function(event) {
if (event.key === 'ArrowLeft') {
prevSlide();
} else if (event.key === 'ArrowRight') {
nextSlide();
}
});
updateSlider();
window.addEventListener('resize', handleResize);
});
