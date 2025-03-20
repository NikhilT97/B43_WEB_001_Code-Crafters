let currenHerotIndex = 0;
let currenHeroSaletIndex = 0;


function changeHeroSlide(direction) {
    const slides = document.querySelector('.hero-slides');
    const totalSlides = document.querySelectorAll('.hero-slide').length;
    currenHerotIndex += direction;
    if (currenHerotIndex < 0){
        currenHerotIndex = totalSlides - 1;
    }
    else if (currenHerotIndex >= totalSlides){
        currenHerotIndex = 0;
    }

    slides.style.transform = `translateX(-${currenHerotIndex * 100}%)`;
}
function changeHeroSaleSlide(direction) {
    const slides = document.querySelector('.hero-sale-slides');
    const totalSlides = document.querySelectorAll('.hero-sale-slide').length;
    currenHeroSaletIndex += direction;
    if (currenHeroSaletIndex < 0){
        currenHeroSaletIndex = totalSlides - 1;
    }
    else if (currenHeroSaletIndex >= totalSlides){
        currenHeroSaletIndex = 0;
    }

    slides.style.transform = `translateX(-${currenHeroSaletIndex * 100}%)`;
}