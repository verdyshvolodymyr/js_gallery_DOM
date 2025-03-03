'use strict';

const gallery = document.querySelector('.gallery');

const galleryList = document.querySelector('.gallery__list');

galleryList.addEventListener('click', (e) => {
  event.preventDefault();

  if (e.target.alt === 'thumb') {
    const arr = e.target.closest('a');

    gallery.children[0].children[0].attributes.src.value = arr.href;

    return;
  }

  gallery.children[0].children[0].attributes.src.value = e.target.href;
});
