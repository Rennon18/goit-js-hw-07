
import { galleryItems } from './gallery-items.js';
// Change code below this line


// const galleryElem = document.querySelector(".gallery");
// const galleryMarkup = createGalleryMarkup(galleryItems);

// function createGalleryMarkup(gallery) {
//     return gallery
//     .map(({preview,original,description}) => {
//             return ` 
//             <div class="gallery__item">
//                 <a class="gallery__link" href="large-image.jpg">
//                   <img
//                     class="gallery__image"
//                     src="${preview}"
//                     data-source="${original}"
//                     alt="${description}"
//                   />
//                 </a>
//               </div> `;
//             })
//             .join("");
//         }

//     galleryElem.insertAdjacentHTML("beforeend", galleryMarkup)
//     galleryElem.addEventListener("click", onGalleryItemsClick);
    
//     function onGalleryItemsClick(evt) {
//         evt.previewDefault();
//         if(evt.target.nodeName !== "IMG") {
//             return;
//         }
//         onModal(evt)
//     }

//     function onModal(evt) {
//         const instance = basicLightbox.create(
//             `<img src="${evt.target.dataset.source}">`,
//             { 
//                 onShow: (instance) => {
//                     galleryElem.addEventListener("keydown",onEscKeyPress);
//                     instance.show();
//                 },
//                 onClose: (instance) => {
//                     galleryElem.removeEventListener("keydown",onEscKeyPress);
//                     instance.show();
//                 }, 
                      
//             },       
             
//         );
                

//         function onEscKeyPress(evt) {
//             if (evt.code === "Escape") {
//             } instance.close();
//         }

        
//     }


const galleryElem  = document.querySelector('.gallery');
const galleryMarkup = createGalleryElement(galleryItems);

galleryElem.insertAdjacentHTML('beforeend',galleryMarkup);
galleryElem.addEventListener("click",galleryClick);


function createGalleryElement(element) {
    const elements = galleryItems.map(({preview,original,description}) => {
    return ` <div class="gallery__item">
        <a class="gallery__link" href="large-image.jpg">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </div> `;
    })
    .join("");
    
    return elements;
}

function galleryClick(evt) {
    evt.preventDefault();

    const isGaleryItem = evt.target.classList.contains("gallery__image");
    if(!isGaleryItem) {
        return;
    }


basicLightbox
.create(`<img src="${evt.target.dataset.source}">`)
.show();
}


console.log(galleryItems);
