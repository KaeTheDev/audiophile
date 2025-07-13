import{a as d,u as m,g as u,d as p,c,e as h}from"./button-DLeOthyl.js";function _(){const e=document.createElement("header");return e.className="navbar",e.innerHTML=`
      <nav class="navbar__container">
        <a href="./" class="navbar__logo">audiophile</a>
        <button class="navbar__toggle">☰</button>
        <ul class="navbar__links">
          <li><a href="./">Home</a></li>
          <li><a href="./headphones.html">Headphones</a></li>
          <li><a href="./speakers.html">Speakers</a></li>
          <li><a href="./earphones.html">Earphones</a></li>
        </ul>
        <button id="cart-toggle" class="navbar__cart">🛒</button>
      </nav>
    `,e}function f({slug:e,name:t,price:a,qty:s,image:n}){const o=document.createElement("div");o.className="cart-item",o.dataset.slug=e,o.innerHTML=`
    <img src="${n}" alt="${t}" class="cart-item__image" />
    <div class="cart-item__details">
      <p class="cart-item__name">${t}</p>
      <p class="cart-item__price">$${a.toLocaleString()}</p>
    </div>
  `;const r=d({id:`qty-${e}`,initial:s,min:1,max:10,onChange:l=>m(e,l)}),i=document.createElement("div");return i.className="cart-item__quantity-selector",i.appendChild(r),o.appendChild(i),o}function v(){const e=document.createElement("div");e.id="cart-modal",e.className="cart-modal";function t(){const{items:a,total:s}=u();e.innerHTML=`
      <h2 class="cart-modal__title">Cart (${a.length})</h2>
      <button class="cart-modal__remove-all">Remove All</button>
      <div class="cart-modal__items"></div>
      <div class="cart-modal__total">
        <span>Total</span>
        <span class="cart-modal__total-price">$${s.toLocaleString()}</span>
      </div>
      <div class="cart-modal__checkout"></div>
    `;const n=e.querySelector(".cart-modal__items");a.forEach(r=>n.appendChild(f(r))),e.querySelector(".cart-modal__remove-all").addEventListener("click",p);const o=c({label:"Checkout",variant:"primary"});o.addEventListener("click",()=>{window.location.href="checkout.html"}),e.querySelector(".cart-modal__checkout").appendChild(o)}return t(),document.addEventListener("cart:updated",t),e}function g(){const e=document.createElement("footer");return e.className="footer",e.innerHTML=`
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
    `,e}document.addEventListener("DOMContentLoaded",()=>{var a;const e=document.querySelector("#app"),t=document.querySelector("#footer");e&&e.append(_(),v()),t&&t.appendChild(g()),(a=document.querySelector("#cart-toggle"))==null||a.addEventListener("click",()=>{var s;return(s=document.querySelector("#cart-modal"))==null?void 0:s.classList.toggle("is-visible")})});function k(e){const t=document.createElement("section");return t.className="product-categories",e.forEach(a=>{const s=document.createElement("article");s.className="categories__item",s.innerHTML=`
      <picture>
        <source media="(min-width: 1024px)" srcset="${a.image.desktop}" />
        <source media="(min-width: 768px)" srcset="${a.image.tablet}" />
        <img src="${a.image.mobile}" alt="${a.name}" class="categories__image" />
      </picture>
      <h3 class="categories__name">${a.name}</h3>
    `;const n="/audiophile/",o=document.createElement("a");o.href=`${n}${a.link}`,o.className="categories__link";const r=c({label:"Shop",variant:"link",icon:h});o.appendChild(r),s.appendChild(o),t.appendChild(s)}),t}function y(){const e=document.createElement("section");return e.className="about",e.innerHTML=`
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
    `,e}async function C(){try{const e=await fetch("/audiophile/data.json");if(!e.ok)throw new Error(`HTTP error! status: ${e.status}`);return await e.json()}catch(e){throw console.error("❌ Failed to fetch product data:",e),e}}export{y as A,k as P,C as f};
