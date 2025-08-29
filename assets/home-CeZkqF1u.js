import{c as o}from"./footer-Byl1aG2U.js";import{f as l,P as p,A as u}from"./fetchData-el5K_LHk.js";function m(){const e=document.createElement("section");e.className="hero",e.innerHTML=`
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
  `;const a=o({label:"See Product",variant:"primary"});return e.querySelector(".hero__btn-link").appendChild(a),e}function h(){const e=document.createElement("section");e.className="featured-products";const a=document.createElement("article");a.className="featured-products__banner featured-products__banner--zx9",a.innerHTML=`
    <div class="featured-products__banner--zx9-inner">
      <div class="featured-products__banner--zx9-image">
        <img src="/audiophile/assets/home/desktop/image-speaker-zx9.png" alt="ZX9 Speaker" />
      </div>
      <div class="featured-products__banner--zx9-content">
        <h2 class="featured-products__banner--zx9-title">ZX9<br>Speaker</h2>
        <p class="featured-products__banner--zx9-description">
          Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
        </p>
        <a href="./product-zx9-speaker.html" class="zx9-btn-link">
          <!-- Button will be inserted here -->
        </a>
      </div>
    </div>
  `;const n=document.createElement("article");n.className="featured-products__banner featured-products__banner--zx7",n.innerHTML=`
    <div class="featured-products__banner--zx7-content">
      <h2 class="featured-products__banner--zx7-content-title">ZX7 SPEAKER</h2>
      <a href="./product-zx7-speaker.html" class="featured-products__banner--zx7-content-link"></a>
    </div>
    <picture class="featured-products__banner--zx7-image-wrapper">
      <source media="(max-width: 600px)" srcset="/audiophile/assets/home/mobile/image-speaker-zx7.jpg" />
      <source media="(max-width: 900px)" srcset="/audiophile/assets/home/tablet/image-speaker-zx7.jpg" />
      <img src="/audiophile/assets/home/desktop/image-speaker-zx7.jpg" alt="ZX7 Speaker" />
    </picture>
  `;const t=document.createElement("div");t.className="featured-products__yx1";const s=document.createElement("div");s.className="featured-products__yx1-image-box",s.innerHTML=`
    <img src="/audiophile/assets/home/desktop/image-earphones-yx1.jpg" alt="YX1 Earphones" />
  `;const r=document.createElement("div");r.className="featured-products__yx1-content-box",r.innerHTML=`
    <h2 class="product-banner__title">YX1 EARPHONES</h2>
    <a href="./product-yx1-earphones.html" class="yx1-btn-link">
      <!-- Button will be inserted here -->
    </a>
  `,t.appendChild(s),t.appendChild(r),e.appendChild(a),e.appendChild(n),e.appendChild(t);const i=o({label:"See Product",variant:"outline"});i.classList.add("custom-outline-btn"),a.querySelector(".zx9-btn-link").appendChild(i);const d=o({label:"See Product",variant:"outline"});d.classList.add("custom-outline-btn"),n.querySelector(".featured-products__banner--zx7-content-link").appendChild(d);const c=o({label:"See Product",variant:"outline"});return c.classList.add("custom-outline-btn"),t.querySelector(".yx1-btn-link").appendChild(c),e}document.addEventListener("DOMContentLoaded",async()=>{const e=document.querySelector("#page");if(!e)return;const a=await l(),n=[{name:"Headphones",slug:"xx99-mark-one-headphones",link:"/headphones.html"},{name:"Speakers",slug:"zx9-speaker",link:"/speakers.html"},{name:"Earphones",slug:"yx1-earphones",link:"/earphones.html"}].map(t=>{const s=a.find(r=>r.slug===t.slug);return{name:t.name,image:s.categoryImage,link:t.link}});e.appendChild(m()),e.appendChild(p(n)),e.appendChild(h()),e.appendChild(u())});
