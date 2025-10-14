import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";



let lightbox;
let loader;
const gallery = document.querySelector('.gallery');

export function createGallery(images) {

    let markUp = images.map(image => { 
        return `<li>
            <a href="${image.largeImageURL}">
                <img src="${image.webformatURL}" alt="${image.tags}" />
            </a>
            <ul class="image-description">
                <li><p>Likes</p><p>${image.likes}</p></li>
                <li><p>Viewes</p><p>${image.views}</p></li>
                <li><p>Comments</p><p>${image.comments}</p> </li>
                <li><p>Downloads</p><p>${image.downloads}</p> </li>
            </ul>
        </li>`;
    }).join("");

    gallery.innerHTML = markUp;

    if(lightbox) {
        lightbox.refresh();
    } else {
        lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });
    }
}

export function clearGallery() {
    gallery.innerHTML = "";
}

export function showLoader() {
    loader = document.createElement("p");
    loader.innerText = "Loading images, please wait...";
    gallery.prepend(loader);
}

export function hideLoader() {
    loader.remove();
}

