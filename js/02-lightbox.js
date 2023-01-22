
// import simpleLightbox from 'simplelightbox';
import { galleryItems } from './gallery-items.js';
// Change code below this line



const galleryElem  = document.querySelector('.gallery');
const galleryMarkup = galleryItems
.map(({preview,original,description}) => {
    return ` 
        <a class="gallery__item" href="${original}">
          <img class="gallery__image"
            src="${preview}"
            alt="${description}"
          />
        </a>
          `;
    })
    .join("");


galleryElem.insertAdjacentHTML('beforeend',galleryMarkup);
galleryElem.addEventListener("click",galleryClick);

function galleryClick(event) {
    event.preventDefault();
    if(event.target.nodeName !== "IMG"){
        return;
    }
    
}

new SimpleLightbox(".gallery a");



const gallery = new SimpleLightbox('.gallery a',{
    captions: true,
    captionsData: "alt",
    captionsDelay:250,
});





console.log(galleryItems);







