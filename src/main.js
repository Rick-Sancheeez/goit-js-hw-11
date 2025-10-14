import {getImagesByQuery} from "./js/pixabay-api.js";
import {createGallery} from "./js/render-functions.js";
import {clearGallery, showLoader, hideLoader} from "./js/render-functions.js";


let form = document.querySelector(".form");

form.addEventListener("submit", event => {
    event.preventDefault();

    clearGallery();
    showLoader();

    let userRequest = event.target.elements["search-text"].value.trim().split(" ").join("+");
    getImagesByQuery(userRequest)
    .then(data => {
        hideLoader();
        createGallery(data.hits);
    })
    .finally(() => {
        hideLoader();
    });
    
    form.reset();
});