import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryContainer = document.querySelector(".gallery");

const imgMarkup = createGalleryImgMarkup(galleryItems);
galleryContainer.insertAdjacentHTML("beforeend", imgMarkup)
galleryContainer.addEventListener("click", onGalleryContainerClick)

function createGalleryImgMarkup(galleryItems) { 
 
    return galleryItems.map(({ preview, original, description }) => {
        return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
     }).join('')

}

// console.log(imgMarkup)

function onGalleryContainerClick(event) {
    event.preventDefault();
    const isGalleryImgEl = event.target.classList.contains('gallery__image');
    if (!isGalleryImgEl)  return; 
      
    const largeImg = event.target.dataset.source;
    const instance = basicLightbox.create(`
    <img src="${largeImg}" width="800" height="600">
`) 
   console.log(instance)
    
    instance.show()

window.addEventListener("keydown", closeEscape)
function closeEscape(event) {
 
  if (event.code === 'Escape') {
    instance.close();
        }
    }
   
 }

 

