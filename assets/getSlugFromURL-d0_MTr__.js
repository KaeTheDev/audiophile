import{a as p,c as r,b as m,g as u}from"./footer-CGc9ZoBn.js";import{G as g}from"./back-btn-D-r1veg2.js";function y(e){const t=document.createElement("div");t.classList.add("product-detail-container");const a=g(),n=document.createElement("section");n.classList.add("product-detail");const s=l=>`/audiophile/assets/product-${e.slug}/${l}/image-product.jpg`;n.innerHTML=`
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
  `;const i=n.querySelector("#quantity-picker"),o=p({id:`qty-${e.slug}`,initial:1,min:1,max:10,name:`quantity-${e.slug}`});i.appendChild(o);const c=r({label:"ADD TO CART",variant:"primary"});return c.addEventListener("click",()=>{const l=o.getValue();m(e,l),console.log(`🛒 Added ${l} × ${e.name}`,u())}),n.querySelector(".product-detail__add-to-cart").appendChild(c),t.appendChild(a),t.appendChild(n),t}function b(e){const t=document.createElement("div");return t.className="product-specs",t.innerHTML=`
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
  `,t}function k(e){const t=document.createElement("section");t.className="product-gallery";const a=h(e.name),s=[{mobile:`/audiophile/assets/${a}/mobile/image-gallery-1.jpg`,tablet:`/audiophile/assets/${a}/tablet/image-gallery-1.jpg`,desktop:`/audiophile/assets/${a}/desktop/image-gallery-1.jpg`,alt:`${e.name} gallery image 1`},{mobile:`/audiophile/assets/${a}/mobile/image-gallery-2.jpg`,tablet:`/audiophile/assets/${a}/tablet/image-gallery-2.jpg`,desktop:`/audiophile/assets/${a}/desktop/image-gallery-2.jpg`,alt:`${e.name} gallery image 2`},{mobile:`/audiophile/assets/${a}/mobile/image-gallery-3.jpg`,tablet:`/audiophile/assets/${a}/tablet/image-gallery-3.jpg`,desktop:`/audiophile/assets/${a}/desktop/image-gallery-3.jpg`,alt:`${e.name} gallery image 3`}].map((i,o)=>`
    <div class="product-gallery__item">
      <picture>
        <source media="(min-width: 1024px)" srcset="${i.desktop}">
        <source media="(min-width: 768px)" srcset="${i.tablet}">
        <img class="product-gallery__image" src="${i.mobile}" alt="${i.alt}">
      </picture>
    </div>
  `).join("");return t.innerHTML=s,t}function h(e){return{"XX99 Mark I Headphones":"product-xx99-mark-one-headphones","XX99 Mark II Headphones":"product-xx99-mark-two-headphones","XX59 Headphones":"product-xx59-headphones","YX1 Wireless Earphones":"product-yx1-earphones","ZX7 Speaker":"product-zx7-speaker","ZX9 Speaker":"product-zx9-speaker"}[e]||e.toLowerCase().replace(/\s+/g,"-")}function x(e){const t=document.createElement("section");t.className="product-recommendations";const a=document.createElement("h2");a.className="product-recommendations__title",a.textContent="You may also like";const n=document.createElement("div");return n.className="product-recommendations__list",e.others.forEach(s=>{const i=document.createElement("div");i.className="product-recommendations__card";const o=document.createElement("img");o.className="product-recommendations__image",o.src=s.image.mobile,o.srcset=`${s.image.mobile} 654w, ${s.image.tablet} 562w, ${s.image.desktop} 350w`,o.sizes="(min-width: 1200px) 350px, (min-width: 768px) 562px, 654px",o.alt=s.name;const c=document.createElement("h3");c.className="product-recommendations__name",c.textContent=s.name;const l=document.createElement("a");l.href=`./product-${s.slug}.html`;const d=r({label:"See Product",variant:"primary"});d.classList.add("product-recommendations__button"),l.appendChild(d),i.appendChild(o),i.appendChild(c),i.appendChild(l),n.appendChild(i)}),t.appendChild(a),t.appendChild(n),t}function v(){return window.location.pathname.split("/").pop().replace("product-","").replace(".html","")}export{y as P,b as a,k as b,x as c,v as g};
