import{a as p,c as r,b as m,g as u}from"./cart-modal-e94tEmip.js";function g(){const e=document.createElement("button");return e.className="go-back-button",e.textContent="Go Back",e.addEventListener("click",()=>{window.history.back()}),e}function b(e){const t=document.createElement("div");t.classList.add("product-detail-container");const a=g(),c=document.createElement("section");c.classList.add("product-detail");const s=l=>`public/assets/product-${e.slug}/${l}/image-product.jpg`;c.innerHTML=`
    <div class="product-detail__image-container">
      <picture>
        <source media="(min-width: 1024px)" srcset="${s("desktop")}">
        <source media="(min-width: 768px)" srcset="${s("tablet")}">
        <img
          src="${s("mobile")}"
          alt="${e.name}"
          class="product-detail__image"
        />
      </picture>
    </div>
    <div class="product-detail__info">
      ${e.new?'<p class="product-detail__new overline">NEW PRODUCT</p>':""}
      <h1 class="product-detail__name heading-2">${e.name}</h1>
      <p class="product-detail__desc body">${e.description}</p>
      <p class="product-detail__price heading-6">
        $${e.price.toLocaleString()}
      </p>
      <div class="product-detail__actions">
        <div class="product-detail__quantity" id="quantity-picker"></div>
        <div class="product-detail__add-to-cart"></div>
      </div>
    </div>
  `;const n=c.querySelector("#quantity-picker"),i=p({id:`qty-${e.slug}`,initial:1,min:1,max:10,name:`quantity-${e.slug}`});n.appendChild(i);const o=r({label:"ADD TO CART",variant:"primary"});return o.addEventListener("click",()=>{const l=i.getValue();m(e,l),console.log(`🛒 Added ${l} × ${e.name}`,u())}),c.querySelector(".product-detail__add-to-cart").appendChild(o),t.appendChild(a),t.appendChild(c),t}function $(e){const t=document.createElement("div");return t.className="product-specs",t.innerHTML=`
    <div class="product-specs__text">
      <h2>Features</h2>
      <p>${e.features.replace(/\n\n/g,"</p><p>")}</p>
    </div>
    <div class="product-specs__box">
      <h2>In the Box</h2>
      <ul>
        ${e.includes.map(a=>`
              <li class="product-specs__item">
                <span class="product-specs__quantity">${a.quantity}x</span>
                <span class="product-specs__item-name">${a.item}</span>
              </li>
            `).join("")}
      </ul>
    </div>
  `,t}function y(e){const t=document.createElement("section");t.className="product-gallery";const a=h(e.name),s=[{mobile:`public/assets/${a}/mobile/image-gallery-1.jpg`,tablet:`public/assets/${a}/tablet/image-gallery-1.jpg`,desktop:`public/assets/${a}/desktop/image-gallery-1.jpg`,alt:`${e.name} gallery image 1`},{mobile:`public/assets/${a}/mobile/image-gallery-2.jpg`,tablet:`public/assets/${a}/tablet/image-gallery-2.jpg`,desktop:`public/assets/${a}/desktop/image-gallery-2.jpg`,alt:`${e.name} gallery image 2`},{mobile:`public/assets/${a}/mobile/image-gallery-3.jpg`,tablet:`public/assets/${a}/tablet/image-gallery-3.jpg`,desktop:`public/assets/${a}/desktop/image-gallery-3.jpg`,alt:`${e.name} gallery image 3`}].map((n,i)=>`
    <div class="product-gallery__item">
      <picture>
        <source media="(min-width: 1024px)" srcset="${n.desktop}">
        <source media="(min-width: 768px)" srcset="${n.tablet}">
        <img class="product-gallery__image" src="${n.mobile}" alt="${n.alt}">
      </picture>
    </div>
  `).join("");return t.innerHTML=s,t}function h(e){return{"XX99 Mark I Headphones":"product-xx99-mark-one-headphones","XX99 Mark II Headphones":"product-xx99-mark-two-headphones","XX59 Headphones":"product-xx59-headphones","YX1 Wireless Earphones":"product-yx1-earphones","ZX7 Speaker":"product-zx7-speaker","ZX9 Speaker":"product-zx9-speaker"}[e]||e.toLowerCase().replace(/\s+/g,"-")}function k(e){const t=document.createElement("section");t.className="product-recommendations";const a=document.createElement("h2");a.className="product-recommendations__title",a.textContent="You may also like";const c=document.createElement("div");return c.className="product-recommendations__list",e.others.forEach(s=>{const n=document.createElement("div");n.className="product-recommendations__card";const i=document.createElement("img");i.className="product-recommendations__image",i.src=s.image.mobile,i.srcset=`${s.image.mobile} 654w, ${s.image.tablet} 562w, ${s.image.desktop} 350w`,i.sizes="(min-width: 1200px) 350px, (min-width: 768px) 562px, 654px",i.alt=s.name;const o=document.createElement("h3");o.className="product-recommendations__name",o.textContent=s.name;const l=document.createElement("a");l.href=`./product-${s.slug}.html`;const d=r({label:"See Product",variant:"primary"});d.classList.add("product-recommendations__button"),l.appendChild(d),n.appendChild(i),n.appendChild(o),n.appendChild(l),c.appendChild(n)}),t.appendChild(a),t.appendChild(c),t}function x(){return window.location.pathname.split("/").pop().replace("product-","").replace(".html","")}export{b as P,$ as a,y as b,k as c,x as g};
