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
    
    // const items = [];
    // galleryItems.forEach(el => { 
       
    //     const a = document.createElement('a');
    //     const img = document.createElement('img');
    //     a.append(img);
    //     a.classList.add('gallery__item');
    //     a.href = el.original;
    //     img.classList.add('gallery__image');
    //     img.src = el.preview;
    //     img.alt = el.description;
       
    //     items.push(a);
    //     console.log(items)
       
    // })
    // gallery.append(...items)

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