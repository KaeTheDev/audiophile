(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function s(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(t){if(t.ep)return;t.ep=!0;const a=s(t);fetch(t.href,a)}})();function i(){const e=document.createElement("header");return e.className="navbar",e.innerHTML=`
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
    `,e}function l(){const e=document.createElement("div");return e.className="cart-modal",e.id="cart-modal",e.innerHTML=`
      <h2 class="cart-modal__title">Cart (3)</h2>
      <button class="cart-modal__remove-all">Remove All</button>
  
      <!-- Cart Items (placeholder) -->
      <div class="cart-modal__item">
        <img src="images/xx99-mark-two.jpg" alt="XX99 Mark II Headphones" class="cart-modal__image">
        <div class="cart-modal__details">
          <p class="cart-modal__name">XX99 MK II</p>
          <p class="cart-modal__price">$2,999</p>
        </div>
        <p class="cart-modal__quantity">x1</p>
      </div>
  
      <!-- Repeat similar blocks for more items -->
  
      <!-- Total -->
      <div class="cart-modal__total">
        <span>Total</span>
        <span>$5,396</span>
      </div>
  
      <!-- Checkout Button -->
      <button class="cart-modal__checkout button button--primary">Checkout</button>
    `,e}function c(){const e=document.createElement("footer");return e.className="footer",e.innerHTML=`
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
    `,e}function d(){const e=document.createElement("section");return e.className="about",e.innerHTML=`
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
    `,e}function u(){const e=[{name:"Headphones",image:"images/shared/desktop/image-category-thumbnail-headphones.png",link:"./headphones.html"},{name:"Speakers",image:"images/shared/desktop/image-category-thumbnail-speakers.png",link:"./speakers.html"},{name:"Earphones",image:"images/shared/desktop/image-category-thumbnail-earphones.png",link:"./earphones.html"}],o=document.createElement("section");return o.className="categories",o.innerHTML=e.map(s=>`
      <article class="categories__item">
        <img src="${s.image}" alt="${s.name}" class="categories__image" />
        <h3 class="categories__name">${s.name}</h3>
        <a href="${s.link}" class="categories__link">Shop <span>→</span></a>
      </article>
    `).join(""),o}function h(){const e=document.createElement("section");return e.className="hero",e.innerHTML=`
      <p class="hero__overline">New Product</p>
      <h1 class="hero__title">XX99 Mark II Headphones</h1>
      <p class="hero__description">
        Experience natural, lifelike audio and exceptional build quality.
      </p>
      <button class="button button--primary">See Product</button>
    `,e}function p(){const e=document.createElement("section");return e.className="featured-products",e.innerHTML=`
      <article class="product-highlight product-highlight--zx9">
        <h2 class="product-highlight__title">ZX9 Speaker</h2>
        <p class="product-highlight__description">
          Upgrade to premium speakers that deliver truly remarkable sound.
        </p>
        <a href="./speakers.html">
          <button class="button button--primary">See Product</button>
        </a>
      </article>
  
      <article class="product-highlight product-highlight--zx7">
        <h2 class="product-highlight__title">ZX7 Speaker</h2>
        <a href="./speakers.html">
          <button class="button button--primary">See Product</button>
        </a>
      </article>
  
      <article class="product-highlight product-highlight--yx1">
        <h2 class="product-highlight__title">YX1 Earphones</h2>
        <a href="./earphones.html">
          <button class="button button--primary">See Product</button>
        </a>
      </article>
    `,e}document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector("#app"),o=document.querySelector("#footer");e.append(i(),l(),h(),u()),page.appendChild(p()),page.appendChild(d()),o.appendChild(c());const s=document.querySelector("#cart-toggle"),r=document.querySelector("#cart-modal");s.addEventListener("click",()=>{r.classList.toggle("is-visible")})});
