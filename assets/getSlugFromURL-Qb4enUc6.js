import{a as m,c as d}from"./footer-Dcf1jEfK.js";import{a as u,g as p}from"./fetchData-Cd7YnJtq.js";function h(t){const e=document.createElement("section");e.classList.add("product-detail"),e.innerHTML=`
    <div class="product-detail__image-container">
      <img
        src="${t.image}"
        alt="${t.name}"
        class="product-detail__image"
      />
    </div>

    <div class="product-detail__info">
      ${t.isNew?'<p class="product-detail__new overline">New Product</p>':""}
      <h1 class="product-detail__name heading-2">${t.name}</h1>
      <p class="product-detail__desc body">${t.description}</p>
      <p class="product-detail__price heading-6">
        $${t.price.toLocaleString()}
      </p>

      <div class="product-detail__actions">
        <div class="product-detail__quantity" id="quantity-picker"></div>
        <div class="product-detail__add-to-cart"></div>
      </div>
    </div>
  `;const a=e.querySelector("#quantity-picker"),c=m({id:`qty-${t.slug}`,initial:1,min:1,max:10,name:`quantity-${t.slug}`});a.appendChild(c);const n=d({label:"Add to Cart",variant:"primary"});return n.addEventListener("click",()=>{const i=c.getValue();u(t,i),console.log(`🛒 Added ${i} × ${t.name}`,p())}),e.querySelector(".product-detail__add-to-cart").appendChild(n),e}function y(t){const e=document.createElement("div");return e.className="product-features__text",e.innerHTML=`
    <h2>Features</h2>
    <p>${t.features.replace(/\n\n/g,"</p><p>")}</p>
  `,e}function v(t){const e=document.createElement("div");return e.className="product-features__box",e.innerHTML=`
      <h2>In the Box</h2>
      <ul>
        ${t.includes.map(a=>`
              <li class="product-features__item">
                <span class="product-features__quantity">${a.quantity}x</span>
                <span class="product-features__item-name">${a.item}</span>
              </li>
            `).join("")}
      </ul>
    `,e}function $(t){const e=document.createElement("section");e.className="product-gallery";const{first:a,second:c,third:n}=t.gallery;return e.innerHTML=`
      <div class="product-gallery__item">
        <img class="product-gallery__image" src="${a}" alt="${t.name} gallery image 1">
      </div>
      <div class="product-gallery__item">
        <img class="product-gallery__image" src="${c}" alt="${t.name} gallery image 2">
      </div>
      <div class="product-gallery__item">
        <img class="product-gallery__image" src="${n}" alt="${t.name} gallery image 3">
      </div>
    `,e}function f(t){const e=document.createElement("section");e.className="product-recommendations";const a=document.createElement("h2");a.className="product-recommendations__title",a.textContent="You may also like";const c=document.createElement("div");return c.className="product-recommendations__list",t.others.forEach(n=>{const i=document.createElement("div");i.className="product-recommendations__card";const s=document.createElement("img");s.src=n.image.mobile,s.alt=n.name;const l=document.createElement("h3");l.className="product-recommendations__name",l.textContent=n.name;const r=document.createElement("a");r.href=`./product-${n.slug}.html`;const o=d({label:"See Product",variant:"primary"});r.appendChild(o),i.appendChild(s),i.appendChild(l),i.appendChild(r),c.appendChild(i)}),e.appendChild(a),e.appendChild(c),e}function E(){return window.location.pathname.split("/").pop().replace("product-","").replace(".html","")}export{h as P,y as a,v as b,$ as c,f as d,E as g};
