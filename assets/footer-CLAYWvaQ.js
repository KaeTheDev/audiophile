(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function r(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(t){if(t.ep)return;t.ep=!0;const a=r(t);fetch(t.href,a)}})();function w(){const e=document.createElement("header");e.className="navbar",e.innerHTML=`
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
  `;const s=e.querySelector(".navbar__toggle"),r=e.querySelector(".navbar__links");return s.addEventListener("click",()=>{r.classList.toggle("is-open")}),e}const v="audiophile-cart";let m=b();Object.defineProperty(m,"subtotal",{get(){return this.items.reduce((e,s)=>e+s.price*s.qty,0)}});Object.defineProperty(m,"vat",{get(){return this.subtotal*.2}});Object.defineProperty(m,"shipping",{get(){return this.subtotal>0?50:0}});Object.defineProperty(m,"grandTotal",{get(){return this.subtotal+this.vat+this.shipping}});Object.defineProperty(m,"total",{get(){return this.subtotal}});function b(){try{return JSON.parse(localStorage.getItem(v))||{items:[]}}catch{return{items:[]}}}function f(){localStorage.setItem(v,JSON.stringify(m)),document.dispatchEvent(new CustomEvent("cart:updated",{detail:m}))}const g="/audiophile/";function x(e,s=1){if(!e||!e.slug){console.warn("[cartStore] addItem received bad product:",e);return}let r="";typeof e.image=="string"?r=e.image:e.image&&typeof e.image=="object"&&(r=e.image.desktop||e.image.mobile||"");const i=e.cartImage||(r.startsWith("/assets")?`${g}${r.slice(1)}`:`${g}assets/cart/image-${e.slug}.jpg`),t=m.items.find(a=>a.slug===e.slug);t?t.qty+=s:m.items.push({slug:e.slug,name:e.name,price:e.price,cartImage:i,image:r,qty:s}),f(),document.dispatchEvent(new CustomEvent("cart:itemAdded",{detail:{product:e,qty:s,items:m.items}}))}function E(e,s){const r=m.items.find(i=>i.slug===e);r&&(r.qty=Math.max(1,s),f())}function y(e){m.items=m.items.filter(s=>s.slug!==e),f()}function k(){m.items=[],f()}function L(){return m}function O({id:e,label:s,placeholder:r="",required:i=!1,type:t="text"}){const a=document.createElement("div");a.className="form-field form-field--text";const o=document.createElement("label");o.className="form-field__label",o.setAttribute("for",e),o.textContent=s;const n=document.createElement("input");n.className="form-field__input",n.type=t,n.id=e,n.name=e,n.placeholder=r,n.required=i,n.addEventListener("focus",()=>a.classList.add("is-active")),n.addEventListener("blur",()=>a.classList.remove("is-active"));const l=document.createElement("span");l.className="form-field__error",l.style.cssText="display:none; color:var(--error-color); font-size:0.75rem;";function u(){const c=n.checkValidity();return a.classList.toggle("has-error",!c),l.textContent=c?"":n.validationMessage,l.style.display=c?"none":"block",c}return n.addEventListener("input",u),n.addEventListener("blur",u),a.append(o,n,l),a.setError=c=>a.classList.toggle("has-error",c),a}function M({name:e,legend:s="",options:r=[]}){const i=document.createElement("fieldset");if(i.className="form-field form-field--radio",s){const t=document.createElement("legend");t.className="form-field__legend",t.textContent=s,i.appendChild(t)}return r.forEach(({id:t,label:a})=>{const o=document.createElement("div");o.className="radio-option";const n=document.createElement("input");n.type="radio",n.name=e,n.id=t,n.className="radio-input";const l=document.createElement("span");l.className="radio-mark";const u=document.createElement("label");u.className="radio-label",u.setAttribute("for",t),u.textContent=a,o.addEventListener("click",c=>{c.target.tagName!=="LABEL"&&(n.checked=!0,n.dispatchEvent(new Event("change",{bubbles:!0})))}),o.appendChild(n),o.appendChild(l),o.appendChild(u),i.appendChild(o)}),i}function N({id:e,min:s=1,max:r=10,initial:i=1,name:t,onChange:a}){const o=document.createElement("div");o.className="form-field form-field--number",o.id=e,o.setAttribute("role","group"),o.setAttribute("aria-label","Number picker");const n=document.createElement("button");n.className="form-field__number-btn",n.type="button",n.textContent="−";const l=document.createElement("input");l.type="hidden",l.name=t||e,l.value=i;const u=document.createElement("div");u.className="form-field__number-value",u.textContent=i;const c=document.createElement("button");c.className="form-field__number-btn",c.type="button",c.textContent="+";let d=i;function p(h,_=!0){d=h,u.textContent=d,l.value=d,n.disabled=d<=s,c.disabled=d>=r,l.dispatchEvent(new Event("change",{bubbles:!0})),_&&typeof a=="function"&&a(d)}return n.addEventListener("click",()=>{d>s&&p(d-1,!0)}),c.addEventListener("click",()=>{d<r&&p(d+1,!0)}),p(i,!1),d=i,u.textContent=d,l.value=d,n.disabled=d<=s,c.disabled=d>=r,o.getValue=()=>d,o.setValue=h=>p(Math.max(s,Math.min(r,h))),o.append(n,u,c,l),o}function C({slug:e,name:s,price:r,qty:i,image:t}){const a=document.createElement("div");a.className="cart-item",a.dataset.slug=e,a.innerHTML=`
    <img src="${t}" alt="${s}" class="cart-item__image" />
    <div class="cart-item__details">
      <p class="cart-item__name">${s}</p>
      <p class="cart-item__price">$${r.toLocaleString()}</p>
    </div>
  `;const o=N({id:`qty-${e}`,initial:i,min:0,max:10,onChange:l=>{l===0?y(e):E(e,l)}}),n=document.createElement("div");return n.className="cart-item__quantity-selector",n.appendChild(o),a.appendChild(n),a}const $=`
  <svg width="8" height="12" xmlns="http://www.w3.org/2000/svg">
    <path d="M1.322 1l5 5-5 5" stroke="currentColor" stroke-width="2" fill="none" fill-rule="evenodd"/>
  </svg>
`;function S({label:e,variant:s="primary",type:r="button",icon:i=""}){const t=document.createElement("button");return t.className=`btn btn--${s}`,t.type=r,t.innerHTML=`
    <span class="btn__label">${e}</span>
    ${i?`<span class="btn__icon">${i}</span>`:""}
  `,t}function A(){const e=document.createElement("div");e.id="cart-modal",e.className="cart-modal";function s(){const{items:r,total:i}=L();e.innerHTML=`
      <div class="cart-modal__header">
        <h2 class="cart-modal__title">Cart (${r.length})</h2>
        <button class="cart-modal__remove-all">Remove All</button>
      </div>

      <div class="cart-modal__items"></div>

      <div class="cart-modal__total">
        <span>Total</span>
        <span class="cart-modal__total-price">$${i.toLocaleString()}</span>
      </div>

      <div class="cart-modal__checkout"></div>
    `;const t=e.querySelector(".cart-modal__items");t.innerHTML="",r.length===0?t.innerHTML=`
  <p class="cart-modal__empty">
    Your cart is empty.<br>
    Ready to upgrade your sound? 🎧<br>
    <a href="/index.html" class="cart-modal__shop-link">Continue Shopping</a>
  </p>
`:r.forEach(o=>t.appendChild(C(o))),e.querySelector(".cart-modal__remove-all").addEventListener("click",k);const a=S({label:"Checkout",variant:"primary"});a.addEventListener("click",()=>{window.location.href="checkout.html"}),e.querySelector(".cart-modal__checkout").appendChild(a)}return s(),document.addEventListener("cart:updated",s),e}function H(){const e=document.createElement("footer");return e.className="footer",e.innerHTML=`
    <div class="footer__container">
      <a href="./" class="footer__logo">
        <img src="/audiophile/assets/shared/desktop/logo.svg" alt="Audiophile" />
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
          <img src="/audiophile/assets/shared/desktop/icon-facebook.svg" alt="Facebook" />
        </a>
        <a href="#" class="footer__social-link">
          <img src="/audiophile/assets/shared/desktop/icon-twitter.svg" alt="Twitter" />
        </a>
        <a href="#" class="footer__social-link">
          <img src="/audiophile/assets/shared/desktop/icon-instagram.svg" alt="Instagram" />
        </a>
      </div>
    </div>
  `,e}export{A as C,H as F,w as N,N as a,x as b,S as c,$ as d,O as e,M as f,L as g,k as h};
