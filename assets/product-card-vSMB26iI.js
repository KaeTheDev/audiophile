import{c as r}from"./button-DmJ7t0La.js";function o(e){const c=document.createElement("article");c.className="product-card",c.innerHTML=`
    ${e.isNew?'<p class="product-card__overline">New Product</p>':""}
    <img src="${e.image}" alt="${e.name}" class="product-card__image" />
    <div class="product-card__content">
      <h2 class="product-card__name">${e.name}</h2>
      <p class="product-card__desc">${e.description}</p>
    </div>
  `;const t=document.createElement("a");t.href=`./product-${e.slug}.html`;const a=r({label:"See Product",variant:"primary"});return t.appendChild(a),c.querySelector(".product-card__content").appendChild(t),c}export{o as P};
