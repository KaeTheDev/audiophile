import{N as s,F as r}from"./footer-C0Dips3J.js";function c(){const a=document.createElement("div");return a.className="cart-modal",a.id="cart-modal",a.innerHTML=`
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
    `,a}document.addEventListener("DOMContentLoaded",()=>{const a=document.querySelector("#app"),e=document.querySelector("#footer");a&&a.append(s(),c()),e&&e.appendChild(r());const t=document.querySelector("#cart-toggle"),o=document.querySelector("#cart-modal");t&&o&&t.addEventListener("click",()=>{o.classList.toggle("is-visible")})});function n(a){const e=document.createElement("section");return e.className="product-categories",e.innerHTML=a.map(t=>`
    <article class="categories__item">
      <picture>
        <source media="(min-width: 1024px)" srcset="${t.image.desktop}" />
        <source media="(min-width: 768px)" srcset="${t.image.tablet}" />
        <img src="${t.image.mobile}" alt="${t.name}" class="categories__image" />
      </picture>
      <h3 class="categories__name">${t.name}</h3>
      <a href="${t.link}" class="categories__link">Shop <span>→</span></a>
    </article>
  `).join(""),e}function l(){const a=document.createElement("section");return a.className="about",a.innerHTML=`
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
    `,a}async function d(){try{const a=await fetch("/audiophile/data.json");if(!a.ok)throw new Error(`HTTP error! status: ${a.status}`);return await a.json()}catch(a){throw console.error("❌ Failed to fetch product data:",a),a}}export{l as A,n as P,d as f};
