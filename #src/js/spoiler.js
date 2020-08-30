const spoilerTitle = document.querySelector('.product-dscrp__spoiler-title');
const buttonSpoiler = document.querySelector('.product-dscrp-body__button-spoiler');
const socialBlock = document.querySelector('.product-dscrp__spoiler-social');

spoilerTitle.addEventListener('click', function (e) {
    e.preventDefault();
    spoilerTitle.classList.toggle('product-dscrp__spoiler-title--arrow');
    spoilerTitle.nextElementSibling.classList.toggle('product-dscrp__spoiler-body--visible');
});

buttonSpoiler.addEventListener('click', function (e) {
    e.preventDefault();
    socialBlock.classList.toggle('product-dscrp__spoiler-social--visible');
});