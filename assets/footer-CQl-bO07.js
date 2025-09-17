(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function l(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(a){if(a.ep)return;a.ep=!0;const s=l(a);fetch(a.href,s)}})();function w(){const e=document.createElement("header");e.className="navbar",e.innerHTML=`
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
  `;const t=e.querySelector(".navbar__toggle"),l=e.querySelector(".navbar__links");return t.addEventListener("click",()=>{l.classList.toggle("is-open")}),e}const v="audiophile-cart";let m=b();Object.defineProperty(m,"subtotal",{get(){return this.items.reduce((e,t)=>e+t.price*t.qty,0)}});Object.defineProperty(m,"vat",{get(){return this.subtotal*.2}});Object.defineProperty(m,"shipping",{get(){return this.subtotal>0?50:0}});Object.defineProperty(m,"grandTotal",{get(){return this.subtotal+this.vat+this.shipping}});Object.defineProperty(m,"total",{get(){return this.subtotal}});function b(){try{return JSON.parse(localStorage.getItem(v))||{items:[]}}catch{return{items:[]}}}function f(){localStorage.setItem(v,JSON.stringify(m)),document.dispatchEvent(new CustomEvent("cart:updated",{detail:m}))}const g="/audiophile/";function x(e,t=1){if(!e||!e.slug){console.warn("[cartStore] addItem received bad product:",e);return}let l="";typeof e.image=="string"?l=e.image:e.image&&typeof e.image=="object"&&(l=e.image.desktop||e.image.mobile||"");const r=e.cartImage||(l.startsWith("/assets")?`${g}${l.slice(1)}`:`${g}assets/cart/image-${e.slug}.jpg`),a=m.items.find(s=>s.slug===e.slug);a?a.qty+=t:m.items.push({slug:e.slug,name:e.name,price:e.price,cartImage:r,image:l,qty:t}),f(),document.dispatchEvent(new CustomEvent("cart:itemAdded",{detail:{product:e,qty:t,items:m.items}}))}function E(e,t){const l=m.items.find(r=>r.slug===e);l&&(l.qty=Math.max(1,t),f())}function y(e){m.items=m.items.filter(t=>t.slug!==e),f()}function k(){m.items=[],f()}function L(){return m}function O({id:e,label:t,placeholder:l="",required:r=!1,type:a="text"}){const s=document.createElement("div");s.className="form-field form-field--text";const o=document.createElement("label");o.className="form-field__label",o.setAttribute("for",e),o.textContent=t;const n=document.createElement("input");n.className="form-field__input",n.type=a,n.id=e,n.name=e,n.placeholder=l,n.required=r,n.addEventListener("focus",()=>s.classList.add("is-active")),n.addEventListener("blur",()=>s.classList.remove("is-active"));const i=document.createElement("span");i.className="form-field__error",i.style.cssText="display:none; color:var(--error-color); font-size:0.75rem;";function u(){const c=n.checkValidity();return s.classList.toggle("has-error",!c),i.textContent=c?"":n.validationMessage,i.style.display=c?"none":"block",c}return n.addEventListener("input",u),n.addEventListener("blur",u),s.append(o,n,i),s.setError=c=>s.classList.toggle("has-error",c),s}function M({name:e,legend:t="",options:l=[]}){const r=document.createElement("fieldset");if(r.className="form-field form-field--radio",t){const a=document.createElement("legend");a.className="form-field__legend",a.textContent=t,r.appendChild(a)}return l.forEach(({id:a,label:s})=>{const o=document.createElement("div");o.className="radio-option";const n=document.createElement("input");n.type="radio",n.name=e,n.id=a,n.className="radio-input";const i=document.createElement("span");i.className="radio-mark";const u=document.createElement("label");u.className="radio-label",u.setAttribute("for",a),u.textContent=s,o.addEventListener("click",c=>{c.target.tagName!=="LABEL"&&(n.checked=!0,n.dispatchEvent(new Event("change",{bubbles:!0})))}),o.appendChild(n),o.appendChild(i),o.appendChild(u),r.appendChild(o)}),r}function N({id:e,min:t=1,max:l=10,initial:r=1,name:a,onChange:s}){const o=document.createElement("div");o.className="form-field form-field--number",o.id=e,o.setAttribute("role","group"),o.setAttribute("aria-label","Number picker");const n=document.createElement("button");n.className="form-field__number-btn",n.type="button",n.textContent="−";const i=document.createElement("input");i.type="hidden",i.name=a||e,i.value=r;const u=document.createElement("div");u.className="form-field__number-value",u.textContent=r;const c=document.createElement("button");c.className="form-field__number-btn",c.type="button",c.textContent="+";let d=r;function p(h,_=!0){d=h,u.textContent=d,i.value=d,n.disabled=d<=t,c.disabled=d>=l,i.dispatchEvent(new Event("change",{bubbles:!0})),_&&typeof s=="function"&&s(d)}return n.addEventListener("click",()=>{d>t&&p(d-1,!0)}),c.addEventListener("click",()=>{d<l&&p(d+1,!0)}),p(r,!1),d=r,u.textContent=d,i.value=d,n.disabled=d<=t,c.disabled=d>=l,o.getValue=()=>d,o.setValue=h=>p(Math.max(t,Math.min(l,h))),o.append(n,u,c,i),o}function C({slug:e,name:t,price:l,qty:r,image:a}){const s=document.createElement("div");s.className="cart-item",s.dataset.slug=e,s.innerHTML=`
    <img src="${a}" alt="${t}" class="cart-item__image" />
    <div class="cart-item__details">
      <p class="cart-item__name">${t}</p>
      <p class="cart-item__price">$${l.toLocaleString()}</p>
    </div>
  `;const o=N({id:`qty-${e}`,initial:r,min:0,max:10,onChange:i=>{i===0?y(e):E(e,i)}}),n=document.createElement("div");return n.className="cart-item__quantity-selector",n.appendChild(o),s.appendChild(n),s}const $=`
  <svg width="8" height="12" xmlns="http://www.w3.org/2000/svg">
    <path d="M1.322 1l5 5-5 5" stroke="currentColor" stroke-width="2" fill="none" fill-rule="evenodd"/>
  </svg>
`;function S({label:e,variant:t="primary",type:l="button",icon:r=""}){const a=document.createElement("button");return a.className=`btn btn--${t}`,a.type=l,a.innerHTML=`
    <span class="btn__label">${e}</span>
    ${r?`<span class="btn__icon">${r}</span>`:""}
  `,a}function A(e){const t=document.createElement("div");t.id="cart-modal",t.className="cart-modal";function l(){const{items:r,total:a}=L();t.innerHTML=`
      <div class="cart-modal__header">
        <h2 class="cart-modal__title">Cart (${r.length})</h2>
        <button class="cart-modal__remove-all">Remove All</button>
      </div>

      <div class="cart-modal__items"></div>

      <div class="cart-modal__total">
        <span>Total</span>
        <span class="cart-modal__total-price">$${a.toLocaleString()}</span>
      </div>

      <div class="cart-modal__checkout"></div>
    `;const s=t.querySelector(".cart-modal__items");s.innerHTML="",r.length===0?s.innerHTML=`
        <p class="cart-modal__empty">
          Your cart is empty.<br>
          Ready to upgrade your sound? 🎧<br>
          <a href="/index.html" class="cart-modal__shop-link">Continue Shopping</a>
        </p>
      `:r.forEach(n=>s.appendChild(C(n))),t.querySelector(".cart-modal__remove-all").addEventListener("click",k);const o=S({label:"Checkout",variant:"primary"});o.addEventListener("click",()=>{r.length===0?(t.classList.add("cart-modal__shake"),setTimeout(()=>t.classList.remove("cart-modal__shake"),300)):window.location.href="checkout.html"}),t.querySelector(".cart-modal__checkout").appendChild(o)}return l(),document.addEventListener("cart:updated",l),t}function T(){const e=document.createElement("footer");return e.className="footer",e.innerHTML=`
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
  `,e}export{A as C,T as F,w as N,N as a,x as b,S as c,$ as d,O as e,M as f,L as g,k as h};
