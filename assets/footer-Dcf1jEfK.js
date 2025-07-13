(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&t(a)}).observe(document,{childList:!0,subtree:!0});function c(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function t(e){if(e.ep)return;e.ep=!0;const n=c(e);fetch(e.href,n)}})();function h(){const r=document.createElement("header");return r.className="navbar",r.innerHTML=`
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
    `,r}function b({id:r,label:s,placeholder:c=""}){const t=document.createElement("div");t.className="form-field form-field--text";const e=document.createElement("label");e.className="form-field__label",e.setAttribute("for",r),e.textContent=s;const n=document.createElement("input");return n.className="form-field__input",n.type="text",n.id=r,n.placeholder=c,n.addEventListener("focus",()=>{t.classList.add("is-active")}),n.addEventListener("blur",()=>{t.classList.remove("is-active")}),t.appendChild(e),t.appendChild(n),t.setError=function(a){t.classList.toggle("has-error",a)},t}function v({name:r,legend:s="",options:c=[]}){const t=document.createElement("fieldset");if(t.className="form-field form-field--radio",s){const e=document.createElement("legend");e.className="form-field__legend",e.textContent=s,t.appendChild(e)}return c.forEach(({id:e,label:n})=>{const a=document.createElement("div");a.className="radio-option";const l=document.createElement("input");l.type="radio",l.name=r,l.id=e,l.className="radio-input";const i=document.createElement("span");i.className="radio-mark";const d=document.createElement("label");d.className="radio-label",d.setAttribute("for",e),d.textContent=n,a.addEventListener("click",u=>{u.target.tagName!=="LABEL"&&(l.checked=!0,l.dispatchEvent(new Event("change",{bubbles:!0})))}),a.appendChild(l),a.appendChild(i),a.appendChild(d),t.appendChild(a)}),t}function _({id:r,min:s=1,max:c=10,initial:t=1,name:e,onChange:n}){const a=document.createElement("div");a.className="form-field form-field--number",a.id=r,a.setAttribute("role","group"),a.setAttribute("aria-label","Number picker");const l=document.createElement("button");l.className="form-field__number-btn",l.type="button",l.textContent="−";const i=document.createElement("input");i.type="hidden",i.name=e||r,i.value=t;const d=document.createElement("div");d.className="form-field__number-value",d.textContent=t;const u=document.createElement("button");u.className="form-field__number-btn",u.type="button",u.textContent="+";let o=t;function f(m,p=!0){o=m,d.textContent=o,i.value=o,l.disabled=o<=s,u.disabled=o>=c,i.dispatchEvent(new Event("change",{bubbles:!0})),p&&typeof n=="function"&&n(o)}return l.addEventListener("click",()=>{o>s&&f(o-1,!0)}),u.addEventListener("click",()=>{o<c&&f(o+1,!0)}),f(t,!1),o=t,d.textContent=o,i.value=o,l.disabled=o<=s,u.disabled=o>=c,a.getValue=()=>o,a.setValue=m=>f(Math.max(s,Math.min(c,m))),a.append(l,d,u,i),a}const E=`
  <svg width="8" height="12" xmlns="http://www.w3.org/2000/svg">
    <path d="M1.322 1l5 5-5 5" stroke="currentColor" stroke-width="2" fill="none" fill-rule="evenodd"/>
  </svg>
`;function g({label:r,variant:s="primary",icon:c=""}){const t=document.createElement("button");return t.className=`btn btn--${s}`,t.type="button",t.innerHTML=`
    <span class="btn__label">${r}</span>
    ${c?`<span class="btn__icon">${c}</span>`:""}
  `,t}function y(){const r=document.createElement("footer");return r.className="footer",r.innerHTML=`
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
    `,r}export{y as F,h as N,_ as a,E as b,g as c,b as d,v as e};
