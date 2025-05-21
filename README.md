# sumerian
Sumerian is a vanilla javascript image slider that is small and rather easy to use with zero dependencies and uncomplicated HTML and CSS.
In order to use this script you should have some knowledge about how to edit and implement HTML, CSS and the javascript code.

## Code (the same as in the files)

```javascript
// Sumerian Slider. A vanilla Javascript, HTML and CSS slider.
// Made by Aiwass666 (https://github.com/aiwass666)
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
```
```css
.post-detail-sumerian{
    position:relative;
    overflow:hidden
}
 .sumerian-list{
    overflow:hidden
}
 .sumerian-track{
    display:flex;
    transition:transform .3s ease-in-out
}
 .post-detail-sumerian-item{
    flex:0 0 100%;
    min-width:100%;
    display:flex;
    flex-direction:column;
    align-items:center
}
 .post-detail-sumerian-item img{
    display:block;
    width:100%;
    height:auto
}
 .img-description{
    display:block;
    width:100%
}
 .post-detail-sumerian-nav{
    position:absolute;
    top:10px;
    right:10px;
    display:flex;
    gap:10px
}
 .post-detail-sumerian-nav button{
    background:#00000080;
    color:#fff;
    border:none;
    padding:10px;
    cursor:pointer;
    font-size:1.2em;
    outline:none;
    border-radius:5px;
    z-index:10
}
 .post-detail-sumerian-nav button:hover{
    background:#000000b3
}
 .visually-hidden{
    position:absolute;
    width:1px;
    height:1px;
    padding:0;
    margin:-1px;
    overflow:hidden;
    clip:rect(0,0,0,0);
    white-space:nowrap;
    border:0
}
 .post-detail-sumerian-nav{
    position:absolute;
    top:15px;
    right:15px;
    display:flex;
    align-items:center
}
 .post-detail-sumerian-nav .prev,.post-detail-sumerian-nav .next{
    position:relative;
    display:flex;
    height:44px;
    width:44px;
    justify-content:center;
    align-items:center;
    border:0!important;
    pointer-events:auto;
    background-color:#000;
    opacity:.8
}
 .post-detail-sumerian-nav .next{
    margin-left:5px
}
 .post-detail-sumerian-nav .next i,.post-detail-sumerian-nav .prev i{
    display:inline-block;
    position:relative;
    border-radius:0.25rem;
    color:#f8f9fa;
    font-weight:700;
    height:38px;
    line-height:38px;
    text-align:center;
    width:38px;
    opacity:.9
}
```

```html
<div id="post-detail-sumerian" class="post-detail-slider" tabindex="0">
<div class="sumerian-list">
<div class="sumerian-track">
<div class="post-detail-sumerian-item">
<img src="IMG URL" alt="<?= esc($post->title); ?>" width="XXX" height="XXX" loading="eager" fetchpriority="high">
<span class="img-description"><?= esc($post->image_description); ?></span>
</div>

// Example on how to dynamically via add more images in to the Sumerian Slider. Copy and paste the following 4 lines to add more images.
<div class="post-detail-sumerian-item">
<img src="IMG URL" alt="<?= esc($post->title); ?>" width="XXX" height="XXX" loading="lazy">
<span class="img-description"><?= esc($post->image_description); ?></span>
</div>
// Example on how to dynamically via add more images in to the Sumerian Slider. Copy and paste the following 4 lines above to add more images.

</div>
</div>
</div>
<div id="post-detail-sumerian-nav" class="post-detail-sumerian-nav">
<button class="prev sumerian-arrow" title="Previous"><i class="bi bi-chevron-left"></i></button>
<button class="next sumerian-arrow" title="Next"><i class="bi bi-chevron-right"></i></button>
</div>
```
