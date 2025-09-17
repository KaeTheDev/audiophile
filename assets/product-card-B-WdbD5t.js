import{c as l}from"./footer-CQl-bO07.js";function _(e,t=0){const c=document.createElement("article"),s=t%2!==0;c.className=`product-card${s?" product-card--reverse":""}`;const a=`/audiophile/assets/product-${e.slug}`,r=["xx99-mark-one-headphones","yx1-earphones","zx9-speaker"].includes(e.slug)?"png":"jpg",n=`${a}/desktop/image-category-page-preview.${r}`,i=`${a}/tablet/image-category-page-preview.${r}`,d=`${a}/mobile/image-category-page-preview.${r}`;c.innerHTML=`
    <div class="product-card__image-container">
      <picture class="product-card__picture">
        <source media="(min-width: 1025px)" srcset="${n}">
        <source media="(min-width: 769px)" srcset="${i}">
        <img src="${d}" alt="${e.name}" class="product-card__image" />
      </picture>
    </div>
    <div class="product-card__content">
      ${e.new?'<p class="product-card__overline">New Product</p>':""}
      <h2 class="product-card__name">${e.name}</h2>
      <p class="product-card__desc">${e.description}</p>
    </div>
  `;const o=document.createElement("a");o.href=`./product-${e.slug}.html`;const p=l({label:"See Product",variant:"primary"});return o.appendChild(p),c.querySelector(".product-card__content").appendChild(o),c}function h(e){const t=document.createElement("section");return t.className="category-hero",t.innerHTML=`
    <div class="category-hero__content">
      <h1 class="category-hero__title">${e}</h1>
    </div>
  `,t}export{h as C,_ as P};
