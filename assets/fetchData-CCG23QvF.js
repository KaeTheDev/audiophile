import{N as r,C as c,c as l,d}from"./cart-modal-CA9AiMWk.js";function u(){const e=document.createElement("footer");return e.className="footer",e.innerHTML=`
      <div class="footer__container">
        <a href="./" class="footer__logo">audiophile</a>
  
        <nav class="footer__nav">
          <a href="./" class="footer__nav-link">Home</a>
          <a href="./headphones.html" class="footer__nav-link">Headphones</a>
          <a href="./speakers.html" class="footer__nav-link">Speakers</a>
          <a href="./earphones.html" class="footer__nav-link">Earphones</a>
        </nav>
  
        <p class="footer__text">
          Audiophile is an all-in-one stop to fulfill your audio needs. We’re a small team of music lovers and sound specialists devoted to helping you get the most out of personal audio. Come and visit our demo facility — we’re open 7 days a week.
        </p>
  
        <p class="footer__copyright">
          © 2024 Audiophile. All Rights Reserved.
        </p>
      </div>
    `,e}document.addEventListener("DOMContentLoaded",()=>{var a;const e=document.querySelector("#app"),t=document.querySelector("#footer");e&&e.append(r(),c()),t&&t.appendChild(u()),(a=document.querySelector("#cart-toggle"))==null||a.addEventListener("click",()=>{var o;return(o=document.querySelector("#cart-modal"))==null?void 0:o.classList.toggle("is-visible")})});function h(e){const t=document.createElement("section");return t.className="product-categories",e.forEach(a=>{const o=document.createElement("article");o.className="categories__item",o.innerHTML=`
      <picture>
        <source media="(min-width: 1024px)" srcset="${a.image.desktop}" />
        <source media="(min-width: 768px)" srcset="${a.image.tablet}" />
        <img src="${a.image.mobile}" alt="${a.name}" class="categories__image" />
      </picture>
      <h3 class="categories__name">${a.name}</h3>
    `;const n="/audiophile/",s=document.createElement("a");s.href=`${n}${a.link}`,s.className="categories__link";const i=l({label:"Shop",variant:"link",icon:d});s.appendChild(i),o.appendChild(s),t.appendChild(o)}),t}function m(){const e=document.createElement("section");return e.className="about",e.innerHTML=`
      <div class="about__container">
       <img src="public/assets/shared/mobile/image-best-gear.jpg" alt="Man enjoying audio gear" class="about__image" />
        <div class="about__text">
          <h2 class="about__title">Bringing you the <span>best</span> audio gear</h2>
          <p class="about__description">
            Located at the heart of New York City, Audiophile is the premier store for high-end headphones,
            earphones, speakers, and audio accessories. Visit our demo facility — we’re open 7 days a week.
          </p>
        </div>
      </div>
    `,e}async function f(){try{const e=await fetch("/audiophile/data.json");if(!e.ok)throw new Error(`HTTP error! status: ${e.status}`);return await e.json()}catch(e){throw console.error("❌ Failed to fetch product data:",e),e}}export{m as A,h as P,f};
