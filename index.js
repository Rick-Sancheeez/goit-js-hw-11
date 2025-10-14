import{a as p,i as d,S as f}from"./assets/vendor-xwsNXkQR.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();function m(i){const o=new URLSearchParams({key:"52733365-810bb5faaf6ec9d90304400a7",q:i,image_type:"photo",orientation:"horizontal",safesearch:"true"});return p.get(`https://pixabay.com/api/?${o}`).then(t=>(t.data.hits.length===0&&d.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}),t.data)).catch(()=>({hits:[]}))}let n,a;const l=document.querySelector(".gallery");function h(i){let o=i.map(t=>`<li>
            <a href="${t.largeImageURL}">
                <img src="${t.webformatURL}" alt="${t.tags}" />
            </a>
            <ul class="image-description">
                <li><p>Likes</p><p>${t.likes}</p></li>
                <li><p>Viewes</p><p>${t.views}</p></li>
                <li><p>Comments</p><p>${t.comments}</p> </li>
                <li><p>Downloads</p><p>${t.downloads}</p> </li>
            </ul>
        </li>`).join("");l.innerHTML=o,n?n.refresh():n=new f(".gallery a",{captionsData:"alt",captionDelay:250})}function y(){l.innerHTML=""}function g(){a=document.createElement("span"),a.innerText="Loading images, please wait...",a.classList.add("loader"),l.prepend(a)}function L(){a.remove()}let u=document.querySelector(".form");u.addEventListener("submit",i=>{i.preventDefault(),y(),g();let o=i.target.elements["search-text"].value.trim().split(" ").join("+");m(o).then(t=>{L(),h(t.hits)}),u.reset()});
//# sourceMappingURL=index.js.map
