import{N as i,F as n}from"./footer-C0Dips3J.js";function r(){const e=document.createElement("div");return e.className="cart-modal",e.id="cart-modal",e.innerHTML=`
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
    `,e}function c(){const e=document.createElement("section");return e.className="about",e.innerHTML=`
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
    `,e}function l(){const e=[{name:"Headphones",image:"images/shared/desktop/image-category-thumbnail-headphones.png",link:"./headphones.html"},{name:"Speakers",image:"images/shared/desktop/image-category-thumbnail-speakers.png",link:"./speakers.html"},{name:"Earphones",image:"images/shared/desktop/image-category-thumbnail-earphones.png",link:"./earphones.html"}],a=document.createElement("section");return a.className="categories",a.innerHTML=e.map(t=>`
      <article class="categories__item">
        <img src="${t.image}" alt="${t.name}" class="categories__image" />
        <h3 class="categories__name">${t.name}</h3>
        <a href="${t.link}" class="categories__link">Shop <span>→</span></a>
      </article>
    `).join(""),a}document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector("#app"),a=document.querySelector("#page"),t=document.querySelector("#footer");e&&e.append(i(),r()),a&&a.appendChild(l()),a&&a.appendChild(c()),t&&t.appendChild(n());const s=document.querySelector("#cart-toggle"),o=document.querySelector("#cart-modal");s&&o&&s.addEventListener("click",()=>{o.classList.toggle("is-visible")})});
