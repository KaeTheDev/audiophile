import{a as d,u as m,g as u,d as p,c as i,N as h,e as _}from"./button-DmJ7t0La.js";function f({slug:e,name:a,price:t,qty:s,image:r}){const o=document.createElement("div");o.className="cart-item",o.dataset.slug=e,o.innerHTML=`
    <img src="${r}" alt="${a}" class="cart-item__image" />
    <div class="cart-item__details">
      <p class="cart-item__name">${a}</p>
      <p class="cart-item__price">$${t.toLocaleString()}</p>
    </div>
  `;const c=d({id:`qty-${e}`,initial:s,min:1,max:10,onChange:l=>m(e,l)}),n=document.createElement("div");return n.className="cart-item__quantity-selector",n.appendChild(c),o.appendChild(n),o}function v(){const e=document.createElement("div");e.id="cart-modal",e.className="cart-modal";function a(){const{items:t,total:s}=u();e.innerHTML=`
      <h2 class="cart-modal__title">Cart (${t.length})</h2>
      <button class="cart-modal__remove-all">Remove All</button>
      <div class="cart-modal__items"></div>
      <div class="cart-modal__total">
        <span>Total</span>
        <span class="cart-modal__total-price">$${s.toLocaleString()}</span>
      </div>
      <div class="cart-modal__checkout"></div>
    `;const r=e.querySelector(".cart-modal__items");t.forEach(c=>r.appendChild(f(c))),e.querySelector(".cart-modal__remove-all").addEventListener("click",p);const o=i({label:"Checkout",variant:"primary"});o.addEventListener("click",()=>{window.location.href="checkout.html"}),e.querySelector(".cart-modal__checkout").appendChild(o)}return a(),document.addEventListener("cart:updated",a),e}function g(){const e=document.createElement("footer");return e.className="footer",e.innerHTML=`
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
    `,e}document.addEventListener("DOMContentLoaded",()=>{var t;const e=document.querySelector("#app"),a=document.querySelector("#footer");e&&e.append(h(),v()),a&&a.appendChild(g()),(t=document.querySelector("#cart-toggle"))==null||t.addEventListener("click",()=>{var s;return(s=document.querySelector("#cart-modal"))==null?void 0:s.classList.toggle("is-visible")})});function b(e){const a=document.createElement("section");return a.className="product-categories",e.forEach(t=>{const s=document.createElement("article");s.className="categories__item",s.innerHTML=`
      <picture>
        <source media="(min-width: 1024px)" srcset="${t.image.desktop}" />
        <source media="(min-width: 768px)" srcset="${t.image.tablet}" />
        <img src="${t.image.mobile}" alt="${t.name}" class="categories__image" />
      </picture>
      <h3 class="categories__name">${t.name}</h3>
    `;const r="/audiophile/",o=document.createElement("a");o.href=`${r}${t.link}`,o.className="categories__link";const c=i({label:"Shop",variant:"link",icon:_});o.appendChild(c),s.appendChild(o),a.appendChild(s)}),a}function y(){const e=document.createElement("section");return e.className="about",e.innerHTML=`
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
    `,e}async function C(){try{const e=await fetch("/audiophile/data.json");if(!e.ok)throw new Error(`HTTP error! status: ${e.status}`);return await e.json()}catch(e){throw console.error("❌ Failed to fetch product data:",e),e}}export{y as A,b as P,C as f};
