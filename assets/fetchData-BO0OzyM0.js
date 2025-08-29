import{N as l,C as m,F as p,c as u,d as h}from"./footer-CGc9ZoBn.js";document.addEventListener("DOMContentLoaded",()=>{var t;const e=document.querySelector("#app"),o=document.querySelector("#footer");e&&e.append(l(),m()),o&&o.appendChild(p()),(t=document.querySelector("#cart-toggle"))==null||t.addEventListener("click",()=>{var a;return(a=document.querySelector("#cart-modal"))==null?void 0:a.classList.toggle("is-visible")})});function b(e){const o=document.createElement("section");return o.className="categories",e.forEach(t=>{const a=document.createElement("article");a.className="categories__item";const n=document.createElement("div");n.className="categories__box";const r=document.createElement("div");r.className="categories__image-wrapper",r.innerHTML=`
      <picture>
        <source media="(min-width: 1024px)" srcset="${t.image.desktop}" />
        <source media="(min-width: 768px)" srcset="${t.image.tablet}" />
        <img src="${t.image.mobile}" alt="${t.name}" class="categories__image" />
      </picture>
    `;const i=document.createElement("h3");i.className="categories__name",i.textContent=t.name;const c="/audiophile/",s=document.createElement("a");s.href=`${c}${t.link}`,s.className="categories__link";const d=u({label:"Shop",variant:"link",icon:h});s.appendChild(d),a.appendChild(n),a.appendChild(r),a.appendChild(i),a.appendChild(s),o.appendChild(a)}),o}function _(){const e=document.createElement("section");return e.className="about",e.innerHTML=`
    <div class="about__container">
      <div class="about__content">
        <h2 class="about__title">
          Bringing you the <span>best</span> audio gear
        </h2>
        <p class="about__description">
          Located at the heart of New York City, Audiophile is the
          premier store for high end headphones, earphones,
          speakers, and audio accessories. We have a
          large showroom and luxury demonstration rooms
          available for you to browse and experience a wide
          range of our products. Stop by our store to meet
          some of the fantastic people who make Audiophile
          the best place to buy your portable audio equipment.
        </p>
      </div>
      <picture class="about__image">
        <source media="(min-width: 1024px)" srcset="assets/shared/desktop/image-best-gear.jpg">
        <source media="(min-width: 768px)" srcset="assets/shared/tablet/image-best-gear.jpg">
        <img src="assets/shared/mobile/image-best-gear.jpg" alt="Man enjoying audio gear">
      </picture>
    </div>
  `,e}async function f(){try{const e=await fetch("/audiophile/data.json");if(!e.ok)throw new Error(`HTTP error! status: ${e.status}`);return await e.json()}catch(e){throw console.error("❌ Failed to fetch product data:",e),e}}export{_ as A,b as P,f};
