import axios from 'axios';

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

export function getImagesByQuery(query) {

    const searchParams = new URLSearchParams({
        key: "52733365-810bb5faaf6ec9d90304400a7",
        q: query,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: "true"
    });
    
    // axios(`https://pixabay.com/api/?key=52733365-810bb5faaf6ec9d90304400a7&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`)
    /*axios.get(`https://pixabay.com/api/?${searchParams}) */
    return axios.get(`https://pixabay.com/api/?${searchParams}`)
        .then(response => { 
        if(response.data.hits.length === 0){
            iziToast.error({
            position: 'topRight',
            message: 'Sorry, there are no images matching your search query. Please try again!',
        });
        }
        return response.data;
    })
    .catch(() => {
        return {hits: []};
    });
    
    
}