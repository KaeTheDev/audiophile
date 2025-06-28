(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();function i(){const t=document.createElement("header");return t.className="navbar",t.innerHTML=`
      <nav class="navbar__container">
        <a href="./" class="navbar__logo">audiophile</a>
        <button class="navbar__toggle">☰</button>
        <ul class="navbar__links">
          <li><a href="./">Home</a></li>
          <li><a href="./headphones.html">Headphones</a></li>
          <li><a href="./speakers.html">Speakers</a></li>
          <li><a href="./earphones.html">Earphones</a></li>
        </ul>
        <button class="navbar__cart">🛒</button>
      </nav>
    `,t}const l=document.querySelector("#app");l.appendChild(i());
