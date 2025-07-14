(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function c(e){if(e.ep)return;e.ep=!0;const a=o(e);fetch(e.href,a)}})();function k(){const t=document.createElement("header");return t.className="navbar",t.innerHTML=`
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
    `,t}const v="audiophile-cart";let m=_();Object.defineProperty(m,"total",{get(){return this.items.reduce((t,r)=>t+r.price*r.qty,0)}});function _(){try{return JSON.parse(localStorage.getItem(v))||{items:[]}}catch{return{items:[]}}}function h(){localStorage.setItem(v,JSON.stringify(m)),document.dispatchEvent(new CustomEvent("cart:updated",{detail:m}))}function x(t,r=1){const o=m.items.find(c=>c.slug===t.slug);o?o.qty+=r:m.items.push({...t,qty:r}),h()}function g(t,r){const o=m.items.find(c=>c.slug===t);o&&(o.qty=Math.max(1,r),h())}function E(){m.items=[],h()}function y(){return m}function w({id:t,label:r,placeholder:o="",required:c=!1,type:e="text"}){const a=document.createElement("div");a.className="form-field form-field--text";const s=document.createElement("label");s.className="form-field__label",s.setAttribute("for",t),s.textContent=r;const n=document.createElement("input");n.className="form-field__input",n.type=e,n.id=t,n.name=t,n.placeholder=o,n.required=c,n.addEventListener("focus",()=>a.classList.add("is-active")),n.addEventListener("blur",()=>a.classList.remove("is-active"));const l=document.createElement("span");l.className="form-field__error",l.style.cssText="display:none; color:var(--error-color); font-size:0.75rem;";function u(){const i=n.checkValidity();return a.classList.toggle("has-error",!i),l.textContent=i?"":n.validationMessage,l.style.display=i?"none":"block",i}return n.addEventListener("input",u),n.addEventListener("blur",u),a.append(s,n,l),a.setError=i=>a.classList.toggle("has-error",i),a}function S({name:t,legend:r="",options:o=[]}){const c=document.createElement("fieldset");if(c.className="form-field form-field--radio",r){const e=document.createElement("legend");e.className="form-field__legend",e.textContent=r,c.appendChild(e)}return o.forEach(({id:e,label:a})=>{const s=document.createElement("div");s.className="radio-option";const n=document.createElement("input");n.type="radio",n.name=t,n.id=e,n.className="radio-input";const l=document.createElement("span");l.className="radio-mark";const u=document.createElement("label");u.className="radio-label",u.setAttribute("for",e),u.textContent=a,s.addEventListener("click",i=>{i.target.tagName!=="LABEL"&&(n.checked=!0,n.dispatchEvent(new Event("change",{bubbles:!0})))}),s.appendChild(n),s.appendChild(l),s.appendChild(u),c.appendChild(s)}),c}function L({id:t,min:r=1,max:o=10,initial:c=1,name:e,onChange:a}){const s=document.createElement("div");s.className="form-field form-field--number",s.id=t,s.setAttribute("role","group"),s.setAttribute("aria-label","Number picker");const n=document.createElement("button");n.className="form-field__number-btn",n.type="button",n.textContent="−";const l=document.createElement("input");l.type="hidden",l.name=e||t,l.value=c;const u=document.createElement("div");u.className="form-field__number-value",u.textContent=c;const i=document.createElement("button");i.className="form-field__number-btn",i.type="button",i.textContent="+";let d=c;function p(f,b=!0){d=f,u.textContent=d,l.value=d,n.disabled=d<=r,i.disabled=d>=o,l.dispatchEvent(new Event("change",{bubbles:!0})),b&&typeof a=="function"&&a(d)}return n.addEventListener("click",()=>{d>r&&p(d-1,!0)}),i.addEventListener("click",()=>{d<o&&p(d+1,!0)}),p(c,!1),d=c,u.textContent=d,l.value=d,n.disabled=d<=r,i.disabled=d>=o,s.getValue=()=>d,s.setValue=f=>p(Math.max(r,Math.min(o,f))),s.append(n,u,i,l),s}function N({slug:t,name:r,price:o,qty:c,image:e}){const a=document.createElement("div");a.className="cart-item",a.dataset.slug=t,a.innerHTML=`
    <img src="${e}" alt="${r}" class="cart-item__image" />
    <div class="cart-item__details">
      <p class="cart-item__name">${r}</p>
      <p class="cart-item__price">$${o.toLocaleString()}</p>
    </div>
  `;const s=L({id:`qty-${t}`,initial:c,min:1,max:10,onChange:l=>g(t,l)}),n=document.createElement("div");return n.className="cart-item__quantity-selector",n.appendChild(s),a.appendChild(n),a}const $=`
  <svg width="8" height="12" xmlns="http://www.w3.org/2000/svg">
    <path d="M1.322 1l5 5-5 5" stroke="currentColor" stroke-width="2" fill="none" fill-rule="evenodd"/>
  </svg>
`;function C({label:t,variant:r="primary",type:o="button",icon:c=""}){const e=document.createElement("button");return e.className=`btn btn--${r}`,e.type=o,e.innerHTML=`
    <span class="btn__label">${t}</span>
    ${c?`<span class="btn__icon">${c}</span>`:""}
  `,e}function M(){const t=document.createElement("div");t.id="cart-modal",t.className="cart-modal";function r(){const{items:o,total:c}=y();t.innerHTML=`
      <h2 class="cart-modal__title">Cart (${o.length})</h2>
      <button class="cart-modal__remove-all">Remove All</button>
      <div class="cart-modal__items"></div>
      <div class="cart-modal__total">
        <span>Total</span>
        <span class="cart-modal__total-price">$${c.toLocaleString()}</span>
      </div>
      <div class="cart-modal__checkout"></div>
    `;const e=t.querySelector(".cart-modal__items");o.forEach(s=>e.appendChild(N(s))),t.querySelector(".cart-modal__remove-all").addEventListener("click",E);const a=C({label:"Checkout",variant:"primary"});a.addEventListener("click",()=>{window.location.href="checkout.html"}),t.querySelector(".cart-modal__checkout").appendChild(a)}return r(),document.addEventListener("cart:updated",r),t}export{M as C,k as N,L as a,x as b,C as c,$ as d,w as e,S as f,y as g,E as h};
