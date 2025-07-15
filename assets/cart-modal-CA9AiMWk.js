(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function c(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(t){if(t.ep)return;t.ep=!0;const a=c(t);fetch(t.href,a)}})();function k(){const e=document.createElement("header");e.className="navbar",e.innerHTML=`
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
  `;const r=e.querySelector(".navbar__toggle"),c=e.querySelector(".navbar__links");return r.addEventListener("click",()=>{c.classList.toggle("is-open")}),e}const v="audiophile-cart";let m=g();Object.defineProperty(m,"total",{get(){return this.items.reduce((e,r)=>e+r.price*r.qty,0)}});function g(){try{return JSON.parse(localStorage.getItem(v))||{items:[]}}catch{return{items:[]}}}function h(){localStorage.setItem(v,JSON.stringify(m)),document.dispatchEvent(new CustomEvent("cart:updated",{detail:m}))}function x(e,r=1){const c=m.items.find(o=>o.slug===e.slug);c?c.qty+=r:m.items.push({...e,qty:r}),h()}function _(e,r){const c=m.items.find(o=>o.slug===e);c&&(c.qty=Math.max(1,r),h())}function E(){m.items=[],h()}function y(){return m}function S({id:e,label:r,placeholder:c="",required:o=!1,type:t="text"}){const a=document.createElement("div");a.className="form-field form-field--text";const s=document.createElement("label");s.className="form-field__label",s.setAttribute("for",e),s.textContent=r;const n=document.createElement("input");n.className="form-field__input",n.type=t,n.id=e,n.name=e,n.placeholder=c,n.required=o,n.addEventListener("focus",()=>a.classList.add("is-active")),n.addEventListener("blur",()=>a.classList.remove("is-active"));const l=document.createElement("span");l.className="form-field__error",l.style.cssText="display:none; color:var(--error-color); font-size:0.75rem;";function u(){const i=n.checkValidity();return a.classList.toggle("has-error",!i),l.textContent=i?"":n.validationMessage,l.style.display=i?"none":"block",i}return n.addEventListener("input",u),n.addEventListener("blur",u),a.append(s,n,l),a.setError=i=>a.classList.toggle("has-error",i),a}function w({name:e,legend:r="",options:c=[]}){const o=document.createElement("fieldset");if(o.className="form-field form-field--radio",r){const t=document.createElement("legend");t.className="form-field__legend",t.textContent=r,o.appendChild(t)}return c.forEach(({id:t,label:a})=>{const s=document.createElement("div");s.className="radio-option";const n=document.createElement("input");n.type="radio",n.name=e,n.id=t,n.className="radio-input";const l=document.createElement("span");l.className="radio-mark";const u=document.createElement("label");u.className="radio-label",u.setAttribute("for",t),u.textContent=a,s.addEventListener("click",i=>{i.target.tagName!=="LABEL"&&(n.checked=!0,n.dispatchEvent(new Event("change",{bubbles:!0})))}),s.appendChild(n),s.appendChild(l),s.appendChild(u),o.appendChild(s)}),o}function L({id:e,min:r=1,max:c=10,initial:o=1,name:t,onChange:a}){const s=document.createElement("div");s.className="form-field form-field--number",s.id=e,s.setAttribute("role","group"),s.setAttribute("aria-label","Number picker");const n=document.createElement("button");n.className="form-field__number-btn",n.type="button",n.textContent="−";const l=document.createElement("input");l.type="hidden",l.name=t||e,l.value=o;const u=document.createElement("div");u.className="form-field__number-value",u.textContent=o;const i=document.createElement("button");i.className="form-field__number-btn",i.type="button",i.textContent="+";let d=o;function p(f,b=!0){d=f,u.textContent=d,l.value=d,n.disabled=d<=r,i.disabled=d>=c,l.dispatchEvent(new Event("change",{bubbles:!0})),b&&typeof a=="function"&&a(d)}return n.addEventListener("click",()=>{d>r&&p(d-1,!0)}),i.addEventListener("click",()=>{d<c&&p(d+1,!0)}),p(o,!1),d=o,u.textContent=d,l.value=d,n.disabled=d<=r,i.disabled=d>=c,s.getValue=()=>d,s.setValue=f=>p(Math.max(r,Math.min(c,f))),s.append(n,u,i,l),s}function N({slug:e,name:r,price:c,qty:o,image:t}){const a=document.createElement("div");a.className="cart-item",a.dataset.slug=e,a.innerHTML=`
    <img src="${t}" alt="${r}" class="cart-item__image" />
    <div class="cart-item__details">
      <p class="cart-item__name">${r}</p>
      <p class="cart-item__price">$${c.toLocaleString()}</p>
    </div>
  `;const s=L({id:`qty-${e}`,initial:o,min:1,max:10,onChange:l=>_(e,l)}),n=document.createElement("div");return n.className="cart-item__quantity-selector",n.appendChild(s),a.appendChild(n),a}const M=`
  <svg width="8" height="12" xmlns="http://www.w3.org/2000/svg">
    <path d="M1.322 1l5 5-5 5" stroke="currentColor" stroke-width="2" fill="none" fill-rule="evenodd"/>
  </svg>
`;function C({label:e,variant:r="primary",type:c="button",icon:o=""}){const t=document.createElement("button");return t.className=`btn btn--${r}`,t.type=c,t.innerHTML=`
    <span class="btn__label">${e}</span>
    ${o?`<span class="btn__icon">${o}</span>`:""}
  `,t}function $(){const e=document.createElement("div");e.id="cart-modal",e.className="cart-modal";function r(){const{items:c,total:o}=y();e.innerHTML=`
      <h2 class="cart-modal__title">Cart (${c.length})</h2>
      <button class="cart-modal__remove-all">Remove All</button>
      <div class="cart-modal__items"></div>
      <div class="cart-modal__total">
        <span>Total</span>
        <span class="cart-modal__total-price">$${o.toLocaleString()}</span>
      </div>
      <div class="cart-modal__checkout"></div>
    `;const t=e.querySelector(".cart-modal__items");c.forEach(s=>t.appendChild(N(s))),e.querySelector(".cart-modal__remove-all").addEventListener("click",E);const a=C({label:"Checkout",variant:"primary"});a.addEventListener("click",()=>{window.location.href="checkout.html"}),e.querySelector(".cart-modal__checkout").appendChild(a)}return r(),document.addEventListener("cart:updated",r),e}export{$ as C,k as N,L as a,x as b,C as c,M as d,S as e,w as f,y as g,E as h};
