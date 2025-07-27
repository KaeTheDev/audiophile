import{c as p}from"./footer-BsYQgZI-.js";function u(e,t=0){const c=document.createElement("article"),o=t%2!==0;c.className=`product-card${o?" product-card--reverse":""}`;const a=`/audiophile/assets/product-${e.slug}`,s=`${a}/desktop/image-category-page-preview.jpg`,n=`${a}/tablet/image-category-page-preview.jpg`,i=`${a}/mobile/image-category-page-preview.jpg`;c.innerHTML=`
        <div class="product-card__image-container">
            <picture class="product-card__picture">
                <source media="(min-width: 1025px)" srcset="${s}">
                <source media="(min-width: 769px)" srcset="${n}">
                <img src="${i}" alt="${e.name}" class="product-card__image" />
            </picture>
        </div>
        <div class="product-card__content">
            ${e.new?'<p class="product-card__overline">New Product</p>':""}
            <h2 class="product-card__name">${e.name}</h2>
            <p class="product-card__desc">${e.description}</p>
        </div>
    `;const r=document.createElement("a");r.href=`./product-${e.slug}.html`;const d=p({label:"See Product",variant:"primary"});return r.appendChild(d),c.querySelector(".product-card__content").appendChild(r),c}function g(e){const t=document.createElement("section");return t.className="category-hero",t.innerHTML=`
        <div class="category-hero__content">
            <h1 class="category-hero__title">${e}</h1>
        </div>
    `,t}export{g as C,u as P};
