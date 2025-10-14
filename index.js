import{a as f,i as d,S as m}from"./assets/vendor-xwsNXkQR.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();function y(i){const o=new URLSearchParams({key:"52733365-810bb5faaf6ec9d90304400a7",q:i,image_type:"photo",orientation:"horizontal",safesearch:"true"});return f.get(`https://pixabay.com/api/?${o}`).then(t=>(t.data.hits.length===0&&d.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}),t.data)).catch(()=>({hits:[]}))}let l,a;const p=document.querySelector(".gallery");function h(i){let o=i.map(t=>`<li>
            <a href="${t.largeImageURL}">
                <img src="${t.webformatURL}" alt="${t.tags}" />
            </a>
            <ul class="image-description">
                <li><p>Likes</p><p>${t.likes}</p></li>
                <li><p>Viewes</p><p>${t.views}</p></li>
                <li><p>Comments</p><p>${t.comments}</p> </li>
                <li><p>Downloads</p><p>${t.downloads}</p> </li>
            </ul>
        </li>`).join("");p.innerHTML=o,l?l.refresh():l=new m(".gallery a",{captionsData:"alt",captionDelay:250})}function g(){p.innerHTML=""}function L(){a=document.querySelector(".loader"),a&&(a.style.display="block")}function c(){a=document.querySelector(".loader"),a&&(a.style.display="none")}let u=document.querySelector(".form");u.addEventListener("submit",i=>{i.preventDefault(),g(),L();let o=i.target.elements["search-text"].value.trim().split(" ").join("+");y(o).then(t=>{c(),h(t.hits)}).finally(()=>{c()}),u.reset()});
//# sourceMappingURL=index.js.map
