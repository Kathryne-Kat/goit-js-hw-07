import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryListMarkup = document.querySelector('.gallery');

const makeGalleryCard = ({ preview, description, original } = galleryItems) => {
    return ` 
    <a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
    `;
};
const galleryCards = galleryItems.map((el) => {
    return makeGalleryCard(el);
});
galleryListMarkup.insertAdjacentHTML('afterbegin', galleryCards.join(''));

    const lightbox = new SimpleLightbox('.gallery a', {
        captionsData: 'alt',
        captionPosition: 'bottom',
        captionDelay: 250,
    }); 
