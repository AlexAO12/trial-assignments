const spoilerTitle = document.querySelector('.product-dscrp__spoiler-title');
const buttonSpoiler = document.querySelector('.product-dscrp-body__button-spoiler');
const socialBlock = document.querySelector('.product-dscrp__spoiler-social');
const socialBlockWrapp = document.querySelector('.product-dscrp__spoiler-body');

spoilerTitle.addEventListener('click', function (e) {
    e.preventDefault();
    setTimeout(function () {
        spoilerTitle.classList.toggle('product-dscrp__spoiler-title--arrow');
        socialBlockWrapp.classList.toggle('product-dscrp__spoiler-body--visible');
    }, 300);
});

buttonSpoiler.addEventListener('click', function (e) {
    e.preventDefault();
    setTimeout(function () {
        socialBlock.classList.toggle('product-dscrp__spoiler-social--visible');
    }, 500);
});