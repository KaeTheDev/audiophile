(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}})();function l(){const t=document.createElement("header");return t.className="navbar",t.innerHTML=`
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
    `,t}function i(){const t=document.createElement("footer");return t.className="footer",t.innerHTML=`
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
    `,t}export{i as F,l as N};
