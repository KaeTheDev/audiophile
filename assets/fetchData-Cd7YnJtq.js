import{a as p,c as d,N as h,F as _,b as g}from"./footer-Dcf1jEfK.js";const m="audiophile-cart";let n=f();Object.defineProperty(n,"total",{get(){return this.items.reduce((e,t)=>e+t.price*t.qty,0)}});function f(){try{return JSON.parse(localStorage.getItem(m))||{items:[]}}catch{return{items:[]}}}function l(){localStorage.setItem(m,JSON.stringify(n)),document.dispatchEvent(new CustomEvent("cart:updated",{detail:n}))}function $(e,t=1){const a=n.items.find(c=>c.slug===e.slug);a?a.qty+=t:n.items.push({...e,qty:t}),l()}function v(e,t){const a=n.items.find(c=>c.slug===e);a&&(a.qty=Math.max(1,t),l())}function b(){n.items=[],l()}function k(){return n}function y({slug:e,name:t,price:a,qty:c,image:o}){const i=document.createElement("div");i.className="cart-item",i.dataset.slug=e,i.innerHTML=`
    <img src="${o}" alt="${t}" class="cart-item__image" />
    <div class="cart-item__details">
      <p class="cart-item__name">${t}</p>
      <p class="cart-item__price">$${a.toLocaleString()}</p>
    </div>
  `;const s=p({id:`qty-${e}`,initial:c,min:1,max:10,onChange:u=>v(e,u)}),r=document.createElement("div");return r.className="cart-item__quantity-selector",r.appendChild(s),i.appendChild(r),i}function C(){const e=document.createElement("div");e.id="cart-modal",e.className="cart-modal";function t(){const{items:a,total:c}=k();e.innerHTML=`
      <h2 class="cart-modal__title">Cart (${a.length})</h2>
      <button class="cart-modal__remove-all">Remove All</button>
      <div class="cart-modal__items"></div>
      <div class="cart-modal__total">
        <span>Total</span>
        <span class="cart-modal__total-price">$${c.toLocaleString()}</span>
      </div>
      <div class="cart-modal__checkout"></div>
    `;const o=e.querySelector(".cart-modal__items");a.forEach(s=>o.appendChild(y(s))),e.querySelector(".cart-modal__remove-all").addEventListener("click",b);const i=d({label:"Checkout",variant:"primary"});i.addEventListener("click",()=>{window.location.href="checkout.html"}),e.querySelector(".cart-modal__checkout").appendChild(i)}return t(),document.addEventListener("cart:updated",t),e}document.addEventListener("DOMContentLoaded",()=>{var a;const e=document.querySelector("#app"),t=document.querySelector("#footer");e&&e.append(h(),C()),t&&t.appendChild(_()),(a=document.querySelector("#cart-toggle"))==null||a.addEventListener("click",()=>{var c;return(c=document.querySelector("#cart-modal"))==null?void 0:c.classList.toggle("is-visible")})});function S(e){const t=document.createElement("section");return t.className="product-categories",e.forEach(a=>{const c=document.createElement("article");c.className="categories__item",c.innerHTML=`
      <picture>
        <source media="(min-width: 1024px)" srcset="${a.image.desktop}" />
        <source media="(min-width: 768px)" srcset="${a.image.tablet}" />
        <img src="${a.image.mobile}" alt="${a.name}" class="categories__image" />
      </picture>
      <h3 class="categories__name">${a.name}</h3>
    `;const o="/audiophile/",i=document.createElement("a");i.href=`${o}${a.link}`,i.className="categories__link";const s=d({label:"Shop",variant:"link",icon:g});i.appendChild(s),c.appendChild(i),t.appendChild(c)}),t}function L(){const e=document.createElement("section");return e.className="about",e.innerHTML=`
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
    `,e}async function w(){try{const e=await fetch("/audiophile/data.json");if(!e.ok)throw new Error(`HTTP error! status: ${e.status}`);return await e.json()}catch(e){throw console.error("❌ Failed to fetch product data:",e),e}}export{L as A,S as P,$ as a,w as f,k as g};
