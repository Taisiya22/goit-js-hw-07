import { galleryItems } from './gallery-items.js';
// Change code below this line


const gallery = document.querySelector(".gallery")

const markup = createImgMarkup(galleryItems);

gallery.insertAdjacentHTML("beforeend", markup);

gallery.addEventListener("click", onGalleryImgClick)

function createImgMarkup(galleryItems) { 
//     return galleryItems.map(({ preview, original, description }) => { 
//         return `<div class="gallery__item">
//   <a class="gallery__link" href="${original}">
//     <img
//       class="gallery__image"
//       src="${preview}"
//       data-source="${original}"
//       alt="${description}"
//     />
//   </a>
// </div>`
//     }).join("")
    return galleryItems.reduce((acc, { preview, original, description }) => {
        return acc + `<div class="gallery__item">
   <a class="gallery__link" href="${original}">
     <img
       class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
   </a>
 </div>`
     }, '')
    // const items = [];
    // galleryItems.forEach(el => {
    //     const div = document.createElement('div');
    //     div.className = "gallery__item";
    //     const a = document.createElement('a');
    //     a.className = "gallery__link";
    //     a.href = el.original;
    //     const img = document.createElement('img');
    //     img.className = "gallery__image";
    //     img.src = el.preview;
    //     img.dataset.source = el.original;
    //     img.alt = el.description;
    //     div.append(a);
    //     a.append(img);
    //     items.push(div);
    // })
    // gallery.append(...items);
}

function onGalleryImgClick(e) { 
    e.preventDefault();
    const isImgClass = e.target.classList.contains('gallery__image')
    
    if (!isImgClass) { 
        return;
    }
    const largeImg = e.target.dataset.source;
    const instance = basicLightbox.create(`
    <img src="${largeImg}" width="800" height="600">
`)
    
    
    instance.show()
    
    window.addEventListener("keydown", (e) => { 
        if (e.code === "Escape") { 
            instance.close();
        }
    })

}