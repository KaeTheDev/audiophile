(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&c(l)}).observe(document,{childList:!0,subtree:!0});function s(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function c(t){if(t.ep)return;t.ep=!0;const a=s(t);fetch(t.href,a)}})();function $(){const e=document.createElement("header");e.className="navbar",e.innerHTML=`
    <nav class="navbar__container">
      <a href="./" class="navbar__logo">
        <img src="assets/shared/desktop/logo.svg" alt="audiophile logo" />
      </a>

      <button class="navbar__toggle" aria-label="Open Menu">
        <img src="assets/shared/tablet/icon-hamburger.svg" alt="" />
      </button>

      <ul class="navbar__links">
        <li><a href="./">Home</a></li>
        <li><a href="./headphones.html">Headphones</a></li>
        <li><a href="./speakers.html">Speakers</a></li>
        <li><a href="./earphones.html">Earphones</a></li>
      </ul>

      <button id="cart-toggle" class="navbar__cart" aria-label="Cart">
        <img src="assets/shared/desktop/icon-cart.svg" alt="" />
      </button>
    </nav>
  `;const r=e.querySelector(".navbar__toggle"),s=e.querySelector(".navbar__links");return r.addEventListener("click",()=>{s.classList.toggle("is-open")}),e}const v="audiophile-cart";let u=_();Object.defineProperty(u,"total",{get(){return this.items.reduce((e,r)=>e+r.price*r.qty,0)}});function _(){try{return JSON.parse(localStorage.getItem(v))||{items:[]}}catch{return{items:[]}}}function g(){localStorage.setItem(v,JSON.stringify(u)),document.dispatchEvent(new CustomEvent("cart:updated",{detail:u}))}const h="/audiophile/";function x(e,r=1){if(!e||!e.slug){console.warn("[cartStore] addItem received bad product:",e);return}let s="";typeof e.image=="string"?s=e.image:typeof e.image=="object"&&e.image!==null&&(s=e.image.desktop||e.image.mobile||"");const c=e.cartImage||(s.startsWith("/assets")?`${h}${s.slice(1)}`:`${h}assets/cart/image-${e.slug}.jpg`),t=u.items.find(a=>a.slug===e.slug);t?t.qty+=r:u.items.push({slug:e.slug,name:e.name,price:e.price,cartImage:c,image:s,qty:r}),g()}function E(e,r){const s=u.items.find(c=>c.slug===e);s&&(s.qty=Math.max(1,r),g())}function y(){u.items=[],g()}function L(){return u}function S({id:e,label:r,placeholder:s="",required:c=!1,type:t="text"}){const a=document.createElement("div");a.className="form-field form-field--text";const l=document.createElement("label");l.className="form-field__label",l.setAttribute("for",e),l.textContent=r;const n=document.createElement("input");n.className="form-field__input",n.type=t,n.id=e,n.name=e,n.placeholder=s,n.required=c,n.addEventListener("focus",()=>a.classList.add("is-active")),n.addEventListener("blur",()=>a.classList.remove("is-active"));const o=document.createElement("span");o.className="form-field__error",o.style.cssText="display:none; color:var(--error-color); font-size:0.75rem;";function m(){const i=n.checkValidity();return a.classList.toggle("has-error",!i),o.textContent=i?"":n.validationMessage,o.style.display=i?"none":"block",i}return n.addEventListener("input",m),n.addEventListener("blur",m),a.append(l,n,o),a.setError=i=>a.classList.toggle("has-error",i),a}function w({name:e,legend:r="",options:s=[]}){const c=document.createElement("fieldset");if(c.className="form-field form-field--radio",r){const t=document.createElement("legend");t.className="form-field__legend",t.textContent=r,c.appendChild(t)}return s.forEach(({id:t,label:a})=>{const l=document.createElement("div");l.className="radio-option";const n=document.createElement("input");n.type="radio",n.name=e,n.id=t,n.className="radio-input";const o=document.createElement("span");o.className="radio-mark";const m=document.createElement("label");m.className="radio-label",m.setAttribute("for",t),m.textContent=a,l.addEventListener("click",i=>{i.target.tagName!=="LABEL"&&(n.checked=!0,n.dispatchEvent(new Event("change",{bubbles:!0})))}),l.appendChild(n),l.appendChild(o),l.appendChild(m),c.appendChild(l)}),c}function N({id:e,min:r=1,max:s=10,initial:c=1,name:t,onChange:a}){const l=document.createElement("div");l.className="form-field form-field--number",l.id=e,l.setAttribute("role","group"),l.setAttribute("aria-label","Number picker");const n=document.createElement("button");n.className="form-field__number-btn",n.type="button",n.textContent="−";const o=document.createElement("input");o.type="hidden",o.name=t||e,o.value=c;const m=document.createElement("div");m.className="form-field__number-value",m.textContent=c;const i=document.createElement("button");i.className="form-field__number-btn",i.type="button",i.textContent="+";let d=c;function p(f,b=!0){d=f,m.textContent=d,o.value=d,n.disabled=d<=r,i.disabled=d>=s,o.dispatchEvent(new Event("change",{bubbles:!0})),b&&typeof a=="function"&&a(d)}return n.addEventListener("click",()=>{d>r&&p(d-1,!0)}),i.addEventListener("click",()=>{d<s&&p(d+1,!0)}),p(c,!1),d=c,m.textContent=d,o.value=d,n.disabled=d<=r,i.disabled=d>=s,l.getValue=()=>d,l.setValue=f=>p(Math.max(r,Math.min(s,f))),l.append(n,m,i,o),l}function C({slug:e,name:r,price:s,qty:c,image:t}){const a=document.createElement("div");a.className="cart-item",a.dataset.slug=e,a.innerHTML=`
    <img src="${t}" alt="${r}" class="cart-item__image" />
    <div class="cart-item__details">
      <p class="cart-item__name">${r}</p>
      <p class="cart-item__price">$${s.toLocaleString()}</p>
    </div>
  `;const l=N({id:`qty-${e}`,initial:c,min:1,max:10,onChange:o=>E(e,o)}),n=document.createElement("div");return n.className="cart-item__quantity-selector",n.appendChild(l),a.appendChild(n),a}const M=`
  <svg width="8" height="12" xmlns="http://www.w3.org/2000/svg">
    <path d="M1.322 1l5 5-5 5" stroke="currentColor" stroke-width="2" fill="none" fill-rule="evenodd"/>
  </svg>
`;function k({label:e,variant:r="primary",type:s="button",icon:c=""}){const t=document.createElement("button");return t.className=`btn btn--${r}`,t.type=s,t.innerHTML=`
    <span class="btn__label">${e}</span>
    ${c?`<span class="btn__icon">${c}</span>`:""}
  `,t}function q(){const e=document.createElement("div");e.id="cart-modal",e.className="cart-modal";function r(){const{items:s,total:c}=L();e.innerHTML=`
  <div class="cart-modal__header">
    <h2 class="cart-modal__title">Cart (${s.length})</h2>
    <button class="cart-modal__remove-all">Remove All</button>
  </div>

  <div class="cart-modal__items"></div>

  <div class="cart-modal__total">
    <span>Total</span>
    <span class="cart-modal__total-price">$${c.toLocaleString()}</span>
  </div>

  <div class="cart-modal__checkout"></div>
`;const t=e.querySelector(".cart-modal__items");s.forEach(l=>t.appendChild(C(l))),e.querySelector(".cart-modal__remove-all").addEventListener("click",y);const a=k({label:"Checkout",variant:"primary"});a.addEventListener("click",()=>{window.location.href="checkout.html"}),e.querySelector(".cart-modal__checkout").appendChild(a)}return r(),document.addEventListener("cart:updated",r),e}export{q as C,$ as N,N as a,x as b,k as c,M as d,S as e,w as f,L as g,y as h};
