import{N as d,C as p,c as m,d as u}from"./cart-modal-e94tEmip.js";function h(){const e=document.createElement("footer");return e.className="footer",e.innerHTML=`
    <div class="footer__container">
      <a href="./" class="footer__logo">
        <img src="public/assets/shared/desktop/logo.svg" alt="Audiophile" />
      </a>
      <nav class="footer__nav">
        <a href="./" class="footer__nav-link">HOME</a>
        <a href="./headphones.html" class="footer__nav-link">HEADPHONES</a>
        <a href="./speakers.html" class="footer__nav-link">SPEAKERS</a>
        <a href="./earphones.html" class="footer__nav-link">EARPHONES</a>
      </nav>
      <p class="footer__text">
        Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we're open 7 days a week.
      </p>
      <p class="footer__copyright">
        Copyright 2021. All Rights Reserved
      </p>
      <div class="footer__social">
        <a href="#" class="footer__social-link">
          <img src="public/assets/shared/desktop/icon-facebook.svg" alt="Facebook" />
        </a>
        <a href="#" class="footer__social-link">
          <img src="public/assets/shared/desktop/icon-twitter.svg" alt="Twitter" />
        </a>
        <a href="#" class="footer__social-link">
          <img src="public/assets/shared/desktop/icon-instagram.svg" alt="Instagram" />
        </a>
      </div>
    </div>
  `,e}document.addEventListener("DOMContentLoaded",()=>{var a;const e=document.querySelector("#app"),o=document.querySelector("#footer");e&&e.append(d(),p()),o&&o.appendChild(h()),(a=document.querySelector("#cart-toggle"))==null||a.addEventListener("click",()=>{var t;return(t=document.querySelector("#cart-modal"))==null?void 0:t.classList.toggle("is-visible")})});function g(e){const o=document.createElement("section");return o.className="categories",e.forEach(a=>{const t=document.createElement("article");t.className="categories__item";const n=document.createElement("div");n.className="categories__box";const r=document.createElement("div");r.className="categories__image-wrapper",r.innerHTML=`
      <picture>
        <source media="(min-width: 1024px)" srcset="${a.image.desktop}" />
        <source media="(min-width: 768px)" srcset="${a.image.tablet}" />
        <img src="${a.image.mobile}" alt="${a.name}" class="categories__image" />
      </picture>
    `;const i=document.createElement("h3");i.className="categories__name",i.textContent=a.name;const c="/audiophile/",s=document.createElement("a");s.href=`${c}${a.link}`,s.className="categories__link";const l=m({label:"Shop",variant:"link",icon:u});s.appendChild(l),t.appendChild(n),t.appendChild(r),t.appendChild(i),t.appendChild(s),o.appendChild(t)}),o}function _(){const e=document.createElement("section");return e.className="about",e.innerHTML=`
    <div class="about__container">
      <div class="about__content">
        <h2 class="about__title">
          Bringing you the <span>best</span> audio gear
        </h2>
        <p class="about__description">
          Located at the heart of New York City, Audiophile is the
          premier store for high end headphones, earphones,
          speakers, and audio accessories. We have a
          large showroom and luxury demonstration rooms
          available for you to browse and experience a wide
          range of our products. Stop by our store to meet
          some of the fantastic people who make Audiophile
          the best place to buy your portable audio equipment.
        </p>
      </div>
      <picture class="about__image">
        <source media="(min-width: 1024px)" srcset="assets/shared/desktop/image-best-gear.jpg">
        <source media="(min-width: 768px)" srcset="assets/shared/tablet/image-best-gear.jpg">
        <img src="assets/shared/mobile/image-best-gear.jpg" alt="Man enjoying audio gear">
      </picture>
    </div>
  `,e}async function b(){try{const e=await fetch("/audiophile/data.json");if(!e.ok)throw new Error(`HTTP error! status: ${e.status}`);return await e.json()}catch(e){throw console.error("❌ Failed to fetch product data:",e),e}}export{_ as A,g as P,b as f};
