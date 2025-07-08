function c(e){const t=document.createElement("section");return t.classList.add("product-detail"),t.innerHTML=`
    <div class="product-detail__image-container">
      <img 
        src="${e.image}" 
        alt="${e.name}" 
        class="product-detail__image" 
      />
    </div>
    <div class="product-detail__info">
      ${e.isNew?'<p class="product-detail__new overline">New Product</p>':""}
      <h1 class="product-detail__name heading-2">${e.name}</h1>
      <p class="product-detail__desc body">${e.description}</p>
      <p class="product-detail__price heading-6">$${e.price.toLocaleString()}</p>
      
      <div class="product-detail__actions">
        <!-- 🔢 Quantity Selector Placeholder -->
        <div class="quantity-selector">
          <button class="quantity-selector__btn">-</button>
          <span class="quantity-selector__value">1</span>
          <button class="quantity-selector__btn">+</button>
        </div>

        <!-- 🛒 Add to Cart Button -->
        <button class="add-to-cart-button">Add to Cart</button>
      </div>
    </div>
  `,t}function i(e){const t=document.createElement("div");return t.className="product-features__text",t.innerHTML=`
    <h2>Features</h2>
    <p>${e.features.replace(/\n\n/g,"</p><p>")}</p>
  `,t}function o(e){const t=document.createElement("div");return t.className="product-features__box",t.innerHTML=`
      <h2>In the Box</h2>
      <ul>
        ${e.includes.map(a=>`
              <li class="product-features__item">
                <span class="product-features__quantity">${a.quantity}x</span>
                <span class="product-features__item-name">${a.item}</span>
              </li>
            `).join("")}
      </ul>
    `,t}function l(e){const t=document.createElement("section");t.className="product-gallery";const{first:a,second:s,third:n}=e.gallery;return t.innerHTML=`
      <div class="product-gallery__item">
        <img class="product-gallery__image" src="${a}" alt="${e.name} gallery image 1">
      </div>
      <div class="product-gallery__item">
        <img class="product-gallery__image" src="${s}" alt="${e.name} gallery image 2">
      </div>
      <div class="product-gallery__item">
        <img class="product-gallery__image" src="${n}" alt="${e.name} gallery image 3">
      </div>
    `,t}function r(e){const t=document.createElement("section");return t.className="product-recommendations",t.innerHTML=`
      <h2 class="product-recommendations__title">You may also like</h2>
      <div class="product-recommendations__list">
        ${e.others.map(a=>`
            <div class="product-recommendations__card">
            <img src="${a.image.mobile}" alt="${a.name}" />
              <h3 class="product-recommendations__name">${a.name}</h3>
              <a href="./product-${a.slug}.html">
                <button class="product-recommendations__button button">See Product</button>
              </a>
            </div>
          `).join("")}
      </div>
    `,t}export{c as P,i as a,o as b,l as c,r as d};
