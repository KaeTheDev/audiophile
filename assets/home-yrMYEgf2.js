import"./footer-C0Dips3J.js";import{f as s,P as c,A as n}from"./fetchData-DdJ2I0UE.js";function h(){const t=document.createElement("section");return t.className="hero",t.innerHTML=`
      <p class="hero__overline">New Product</p>
      <h1 class="hero__title">XX99 Mark II Headphones</h1>
      <p class="hero__description">
        Experience natural, lifelike audio and exceptional build quality.
      </p>
      <button class="button button--primary">See Product</button>
    `,t}function l(){const t=document.createElement("section");return t.className="featured-products",t.innerHTML=`
      <article class="product-highlight product-highlight--zx9">
        <h2 class="product-highlight__title">ZX9 Speaker</h2>
        <p class="product-highlight__description">
          Upgrade to premium speakers that deliver truly remarkable sound.
        </p>
        <a href="./speakers.html">
          <button class="button button--primary">See Product</button>
        </a>
      </article>
  
      <article class="product-highlight product-highlight--zx7">
        <h2 class="product-highlight__title">ZX7 Speaker</h2>
        <a href="./speakers.html">
          <button class="button button--primary">See Product</button>
        </a>
      </article>
  
      <article class="product-highlight product-highlight--yx1">
        <h2 class="product-highlight__title">YX1 Earphones</h2>
        <a href="./earphones.html">
          <button class="button button--primary">See Product</button>
        </a>
      </article>
    `,t}document.addEventListener("DOMContentLoaded",async()=>{const t=document.querySelector("#page");if(!t)return;const r=await s(),a=["headphones","speakers","earphones"].map(e=>{const o=r.find(i=>i.category===e);return{name:e.charAt(0).toUpperCase()+e.slice(1),image:o.categoryImage,link:`/${e}.html`}});t.appendChild(h()),t.appendChild(c(a)),t.appendChild(l()),t.appendChild(n())});
