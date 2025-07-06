function t(c){const a=document.createElement("article");return a.className="product-card",a.innerHTML=`
      ${c.isNew?'<p class="product-card__overline">New Product</p>':""}
      <img src="${c.image}" alt="${c.name}" class="product-card__image" />
      <div class="product-card__content">
        <h2 class="product-card__name">${c.name}</h2>
        <p class="product-card__desc">${c.description}</p>
        <a href="./product.html?slug=${c.slug}">
          <button class="product-card__button button">See Product</button>
        </a>
      </div>
    `,a}export{t as P};
