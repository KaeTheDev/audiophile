(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function r(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function l(t){if(t.ep)return;t.ep=!0;const a=r(t);fetch(t.href,a)}})();function w(){const e=document.createElement("header");e.className="navbar",e.innerHTML=`
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
  `;const n=e.querySelector(".navbar__toggle"),r=e.querySelector(".navbar__links");return n.addEventListener("click",()=>{r.classList.toggle("is-open")}),e}const v="audiophile-cart";let u=b();Object.defineProperty(u,"total",{get(){return this.items.reduce((e,n)=>e+n.price*n.qty,0)}});function b(){try{return JSON.parse(localStorage.getItem(v))||{items:[]}}catch{return{items:[]}}}function h(){localStorage.setItem(v,JSON.stringify(u)),document.dispatchEvent(new CustomEvent("cart:updated",{detail:u}))}const g="/audiophile/";function S(e,n=1){if(!e||!e.slug){console.warn("[cartStore] addItem received bad product:",e);return}let r="";typeof e.image=="string"?r=e.image:typeof e.image=="object"&&e.image!==null&&(r=e.image.desktop||e.image.mobile||"");const l=e.cartImage||(r.startsWith("/assets")?`${g}${r.slice(1)}`:`${g}assets/cart/image-${e.slug}.jpg`),t=u.items.find(a=>a.slug===e.slug);t?t.qty+=n:u.items.push({slug:e.slug,name:e.name,price:e.price,cartImage:l,image:r,qty:n}),h()}function E(e,n){const r=u.items.find(l=>l.slug===e);r&&(r.qty=Math.max(1,n),h())}function y(){u.items=[],h()}function k(){return u}function x({id:e,label:n,placeholder:r="",required:l=!1,type:t="text"}){const a=document.createElement("div");a.className="form-field form-field--text";const o=document.createElement("label");o.className="form-field__label",o.setAttribute("for",e),o.textContent=n;const s=document.createElement("input");s.className="form-field__input",s.type=t,s.id=e,s.name=e,s.placeholder=r,s.required=l,s.addEventListener("focus",()=>a.classList.add("is-active")),s.addEventListener("blur",()=>a.classList.remove("is-active"));const i=document.createElement("span");i.className="form-field__error",i.style.cssText="display:none; color:var(--error-color); font-size:0.75rem;";function m(){const c=s.checkValidity();return a.classList.toggle("has-error",!c),i.textContent=c?"":s.validationMessage,i.style.display=c?"none":"block",c}return s.addEventListener("input",m),s.addEventListener("blur",m),a.append(o,s,i),a.setError=c=>a.classList.toggle("has-error",c),a}function $({name:e,legend:n="",options:r=[]}){const l=document.createElement("fieldset");if(l.className="form-field form-field--radio",n){const t=document.createElement("legend");t.className="form-field__legend",t.textContent=n,l.appendChild(t)}return r.forEach(({id:t,label:a})=>{const o=document.createElement("div");o.className="radio-option";const s=document.createElement("input");s.type="radio",s.name=e,s.id=t,s.className="radio-input";const i=document.createElement("span");i.className="radio-mark";const m=document.createElement("label");m.className="radio-label",m.setAttribute("for",t),m.textContent=a,o.addEventListener("click",c=>{c.target.tagName!=="LABEL"&&(s.checked=!0,s.dispatchEvent(new Event("change",{bubbles:!0})))}),o.appendChild(s),o.appendChild(i),o.appendChild(m),l.appendChild(o)}),l}function L({id:e,min:n=1,max:r=10,initial:l=1,name:t,onChange:a}){const o=document.createElement("div");o.className="form-field form-field--number",o.id=e,o.setAttribute("role","group"),o.setAttribute("aria-label","Number picker");const s=document.createElement("button");s.className="form-field__number-btn",s.type="button",s.textContent="−";const i=document.createElement("input");i.type="hidden",i.name=t||e,i.value=l;const m=document.createElement("div");m.className="form-field__number-value",m.textContent=l;const c=document.createElement("button");c.className="form-field__number-btn",c.type="button",c.textContent="+";let d=l;function f(p,_=!0){d=p,m.textContent=d,i.value=d,s.disabled=d<=n,c.disabled=d>=r,i.dispatchEvent(new Event("change",{bubbles:!0})),_&&typeof a=="function"&&a(d)}return s.addEventListener("click",()=>{d>n&&f(d-1,!0)}),c.addEventListener("click",()=>{d<r&&f(d+1,!0)}),f(l,!1),d=l,m.textContent=d,i.value=d,s.disabled=d<=n,c.disabled=d>=r,o.getValue=()=>d,o.setValue=p=>f(Math.max(n,Math.min(r,p))),o.append(s,m,c,i),o}function N({slug:e,name:n,price:r,qty:l,image:t}){const a=document.createElement("div");a.className="cart-item",a.dataset.slug=e,a.innerHTML=`
    <img src="${t}" alt="${n}" class="cart-item__image" />
    <div class="cart-item__details">
      <p class="cart-item__name">${n}</p>
      <p class="cart-item__price">$${r.toLocaleString()}</p>
    </div>
  `;const o=L({id:`qty-${e}`,initial:l,min:1,max:10,onChange:i=>E(e,i)}),s=document.createElement("div");return s.className="cart-item__quantity-selector",s.appendChild(o),a.appendChild(s),a}const M=`
  <svg width="8" height="12" xmlns="http://www.w3.org/2000/svg">
    <path d="M1.322 1l5 5-5 5" stroke="currentColor" stroke-width="2" fill="none" fill-rule="evenodd"/>
  </svg>
`;function C({label:e,variant:n="primary",type:r="button",icon:l=""}){const t=document.createElement("button");return t.className=`btn btn--${n}`,t.type=r,t.innerHTML=`
    <span class="btn__label">${e}</span>
    ${l?`<span class="btn__icon">${l}</span>`:""}
  `,t}function A(){const e=document.createElement("div");e.id="cart-modal",e.className="cart-modal";function n(){const{items:r,total:l}=k();e.innerHTML=`
  <div class="cart-modal__header">
    <h2 class="cart-modal__title">Cart (${r.length})</h2>
    <button class="cart-modal__remove-all">Remove All</button>
  </div>

  <div class="cart-modal__items"></div>

  <div class="cart-modal__total">
    <span>Total</span>
    <span class="cart-modal__total-price">$${l.toLocaleString()}</span>
  </div>

  <div class="cart-modal__checkout"></div>
`;const t=e.querySelector(".cart-modal__items");r.forEach(o=>t.appendChild(N(o))),e.querySelector(".cart-modal__remove-all").addEventListener("click",y);const a=C({label:"Checkout",variant:"primary"});a.addEventListener("click",()=>{window.location.href="checkout.html"}),e.querySelector(".cart-modal__checkout").appendChild(a)}return n(),document.addEventListener("cart:updated",n),e}function O(){const e=document.createElement("footer");return e.className="footer",e.innerHTML=`
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
  `,e}export{A as C,O as F,w as N,L as a,S as b,C as c,M as d,x as e,$ as f,k as g,y as h};
