
const carouselContainer = document.querySelector('.carousel-container');
const carouselSlides = document.querySelectorAll('.carousel-slide');
const slideWidth = carouselSlides[0].clientWidth;
let currentIndex = 0;

function updateCarousel() {
    carouselContainer.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % carouselSlides.length;
    updateCarousel();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + carouselSlides.length) % carouselSlides.length;
    updateCarousel();
}

setInterval(nextSlide, 5000); // Auto-advance every 5 seconds