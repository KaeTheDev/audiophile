import{N as g,C as b,F as f,c as v,d as _}from"./footer-CQl-bO07.js";function w(){const e=document.createElement("div");e.className="toast";let a=[],t=!1;function s(){if(a.length===0){t=!1;return}t=!0;const{message:o,duration:i}=a.shift();e.textContent=o,e.classList.add("is-visible"),setTimeout(()=>{e.classList.remove("is-visible"),setTimeout(s,300)},i)}return e.show=(o,i=3e3)=>{a.push({message:o,duration:i}),t||s()},e}document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector("#app"),a=document.querySelector("#footer"),t=g(),s=b();e&&e.append(t,s),a&&a.appendChild(f());const o=w();document.body.appendChild(o);const i=n=>o.show(n),r=document.querySelector("#cart-toggle");r==null||r.addEventListener("click",()=>{const n=document.querySelector("#cart-modal");n==null||n.classList.toggle("is-visible")}),document.addEventListener("cart:itemAdded",n=>{const{product:c,qty:l,items:m}=n.detail,u=m.reduce((p,h)=>p+h.qty,0);i(`Added ${l} × ${c.name}! You now have ${u} item${u!==1?"s":""}.`);const d=document.querySelector("#cart-modal");d&&d.classList.add("is-visible"),setTimeout(()=>d==null?void 0:d.classList.remove("is-visible"),2500)})});function y(e){const a=document.createElement("section");return a.className="categories",e.forEach(t=>{const s=document.createElement("article");s.className="categories__item";const o=document.createElement("div");o.className="categories__box";const i=document.createElement("div");i.className="categories__image-wrapper",i.innerHTML=`
      <picture>
        <source media="(min-width: 1024px)" srcset="${t.image.desktop}" />
        <source media="(min-width: 768px)" srcset="${t.image.tablet}" />
        <img src="${t.image.mobile}" alt="${t.name}" class="categories__image" />
      </picture>
    `;const r=document.createElement("h3");r.className="categories__name",r.textContent=t.name;const n="/audiophile/".replace(/\/$/,""),c=document.createElement("a");c.href=`${n}${t.link}`,c.className="categories__link";const l=v({label:"Shop",variant:"link",icon:_});c.appendChild(l),s.appendChild(o),s.appendChild(i),s.appendChild(r),s.appendChild(c),a.appendChild(s)}),a}function x(){const e=document.createElement("section");return e.className="about",e.innerHTML=`
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
  `,e}async function L(){try{const e=await fetch("/audiophile/data.json");if(!e.ok)throw new Error(`HTTP error! status: ${e.status}`);return await e.json()}catch(e){throw console.error("❌ Failed to fetch product data:",e),e}}export{x as A,y as P,L as f};
