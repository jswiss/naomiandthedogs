(() => {
  'use strict';

  const navHandler = () => {
    let refOffset = 0;
    let visible = true;
    const bannerHeight = 77;

    const bannerWrapper = document.querySelector('.banner-wrapper');
    const banner = document.querySelector('.banner');

    const newOffset = window.scrollY;

    console.log(newOffset);
    console.log(bannerHeight);
    if (newOffset > bannerHeight) {

      if (newOffset > refOffset) {
        bannerWrapper.classList.remove('animateIn');
        bannerWrapper.classList.add('animateOut');
      } else {
        bannerWrapper.classList.remove('animateOut');
        bannerWrapper.classList.add('animateIn');
      }
      banner.style.background = 'rgba(245, 241, 237, .6);';
      refOffset = newOffset;
    } else {
      banner.style.backgroundColor = 'rgba(245, 241, 237, 1);';
    }
  };

  // window.addEventListener('scroll', navHandler, false);
})();
