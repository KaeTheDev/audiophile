import"./footer-C0Dips3J.js";import"./base-UJhTV_Nj.js";function r(){const t=document.createElement("section");return t.className="hero",t.innerHTML=`
      <p class="hero__overline">New Product</p>
      <h1 class="hero__title">XX99 Mark II Headphones</h1>
      <p class="hero__description">
        Experience natural, lifelike audio and exceptional build quality.
      </p>
      <button class="button button--primary">See Product</button>
    `,t}function o(){const t=document.createElement("section");return t.className="featured-products",t.innerHTML=`
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
    `,t}document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector("#page");if(t){const e=t.querySelector(".product-categories");e?t.insertBefore(r(),e):t.prepend(r()),t.insertBefore(o(),t.querySelector(".about")||null)}});
