import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryListMarkup = document.querySelector('.gallery');

const makeGalleryCard = ({ preview, description, original } = galleryItems) => {
    return ` 
<div class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"    />
    </a>
</div>`;
};
const galleryCards = galleryItems.map((el) => {
    return makeGalleryCard(el);
});
galleryListMarkup.insertAdjacentHTML('afterbegin', galleryCards.join(''));

const galleryClick = event => {
    event.preventDefault();    

    const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
`);
    instance.show();

    galleryListMarkup.addEventListener('keydown', (event) => {
        if (event.code === "Escape") {
            instance.close();
        };
    });
};

galleryListMarkup.addEventListener('click', galleryClick)

