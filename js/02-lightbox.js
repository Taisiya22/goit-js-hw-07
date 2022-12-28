import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const gallery = document.querySelector(".gallery")

const markup = createImgMarkup(galleryItems);

gallery.insertAdjacentHTML("beforeend", markup);

gallery.addEventListener("click", onGalleryImgClick)

function createImgMarkup(galleryItems) { 
//     return galleryItems.map(({ preview, original, description }) => { 
//         return `<a class="gallery__item" href="${original}">
//   <img class="gallery__image" src="${preview}" alt="${description}" />
// </a>`
//     }).join("")
    
    return galleryItems.reduce((acc, { preview, original, description } ) => {return acc + `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
 </a> ` }, '')
}


function onGalleryImgClick(e) { 
    e.preventDefault();
    const isImgClass = e.target.classList.contains('gallery__image')
    
    if (!isImgClass) { 
        return;
    }
    
    var lightbox = new SimpleLightbox('.gallery a', {
        captionDelay: 250,
        captionsData: 'alt',
       
    } );
    
   

}