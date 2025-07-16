import{c}from"./cart-modal-CUqEL2O_.js";import{f as d,P as p,A as h}from"./fetchData-Dshu1y_G.js";function l(){const e=document.createElement("section");e.className="hero",e.innerHTML=`
    <div class="hero__content">
      <p class="hero__overline">New Product</p>
      <h1 class="hero__title">XX99 Mark II Headphones</h1>
      <p class="hero__description">
        Experience natural, lifelike audio and exceptional build quality made 
        for the passionate music enthusiast.
      </p>
      <a href="./product-xx99-mark-two-headphones.html" class="hero__btn-link"></a>
    </div>
    <div class="hero__image-wrapper">
      <picture>
        <source media="(max-width: 600px)" srcset="/audiophile/assets/home/mobile/image-header.jpg" />
        <source media="(max-width: 900px)" srcset="/audiophile/assets/home/tablet/image-header.jpg" />
        <img src="/audiophile/assets/home/desktop/image-hero.jpg" alt="XX99 Mark II Headphones" class="hero__image" />
      </picture>
    </div>
  `;const t=c({label:"See Product",variant:"primary"});return e.querySelector(".hero__btn-link").appendChild(t),e}function u(){const e=document.createElement("section");e.className="featured-products";function t(n,i,a,o=""){const r=document.createElement("article");r.className=`product-highlight product-highlight--${a}`,r.innerHTML=`
      <h2 class="product-highlight__title">${n}</h2>
      ${o?`<p class="product-highlight__description">${o}</p>`:""}
    `;const s=document.createElement("a");return s.href=i,s.appendChild(c({label:"See Product",variant:"outline"})),r.appendChild(s),r}return e.appendChild(t("ZX9 Speaker","./product-zx9-speaker.html","zx9","Upgrade to premium speakers that deliver truly remarkable sound.")),e.appendChild(t("ZX7 Speaker","./product-zx7-speaker.html","zx7")),e.appendChild(t("YX1 Earphones","./product-yx1-earphones.html","yx1")),e}document.addEventListener("DOMContentLoaded",async()=>{const e=document.querySelector("#page");if(!e)return;const t=await d(),i=["headphones","speakers","earphones"].map(a=>{const o=t.find(r=>r.category===a);return{name:a.charAt(0).toUpperCase()+a.slice(1),image:o.categoryImage,link:`/${a}.html`}});e.appendChild(l()),e.appendChild(p(i)),e.appendChild(u()),e.appendChild(h())});
