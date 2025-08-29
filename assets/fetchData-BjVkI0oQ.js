import{N as p,C as h,F as g,c as b,d as f}from"./footer-CLAYWvaQ.js";function _(){const e=document.createElement("div");e.className="toast";let a=[],t=!1;function s(){if(a.length===0){t=!1;return}t=!0;const{message:o,duration:n}=a.shift();e.textContent=o,e.classList.add("is-visible"),setTimeout(()=>{e.classList.remove("is-visible"),setTimeout(s,300)},n)}return e.show=(o,n=3e3)=>{a.push({message:o,duration:n}),t||s()},e}document.addEventListener("DOMContentLoaded",()=>{var c;const e=document.querySelector("#app"),a=document.querySelector("#footer"),t=p(),s=h();e&&e.append(t,s),a&&a.appendChild(g());const o=_();document.body.appendChild(o);const n=i=>o.show(i);document.addEventListener("cart:updated",i=>{const r=i.detail,d=r.items[r.items.length-1];if(d){const l=r.items.reduce((m,u)=>m+u.qty,0);n(`🛒 Added ${d.qty} × ${d.name}! You now have ${l} item${l!==1?"s":""}.`)}}),(c=document.querySelector("#cart-toggle"))==null||c.addEventListener("click",()=>{var i;return(i=document.querySelector("#cart-modal"))==null?void 0:i.classList.toggle("is-visible")})});function w(e){const a=document.createElement("section");return a.className="categories",e.forEach(t=>{const s=document.createElement("article");s.className="categories__item";const o=document.createElement("div");o.className="categories__box";const n=document.createElement("div");n.className="categories__image-wrapper",n.innerHTML=`
      <picture>
        <source media="(min-width: 1024px)" srcset="${t.image.desktop}" />
        <source media="(min-width: 768px)" srcset="${t.image.tablet}" />
        <img src="${t.image.mobile}" alt="${t.name}" class="categories__image" />
      </picture>
    `;const c=document.createElement("h3");c.className="categories__name",c.textContent=t.name;const i="/audiophile/",r=document.createElement("a");r.href=`${i}${t.link}`,r.className="categories__link";const d=b({label:"Shop",variant:"link",icon:f});r.appendChild(d),s.appendChild(o),s.appendChild(n),s.appendChild(c),s.appendChild(r),a.appendChild(s)}),a}function C(){const e=document.createElement("section");return e.className="about",e.innerHTML=`
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
  `,e}async function y(){try{const e=await fetch("/audiophile/data.json");if(!e.ok)throw new Error(`HTTP error! status: ${e.status}`);return await e.json()}catch(e){throw console.error("❌ Failed to fetch product data:",e),e}}export{C as A,w as P,y as f};
