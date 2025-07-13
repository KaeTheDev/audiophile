import{c as i}from"./footer-Dcf1jEfK.js";import{f as p,P as s,A as l}from"./fetchData-Cd7YnJtq.js";function h(){const e=document.createElement("section");e.className="hero",e.innerHTML=`
      <p class="hero__overline">New Product</p>
      <h1 class="hero__title">XX99 Mark II Headphones</h1>
      <p class="hero__description">
        Experience natural, lifelike audio and exceptional build quality.
      </p>
      
    `;const t=i({label:"See Product",variant:"primary"}),a=document.createElement("a");return a.href="./product-xx99-mark-two-headphones.html",a.appendChild(t),e.appendChild(a),e}function u(){const e=document.createElement("section");e.className="featured-products";function t(a,c,r,o=""){const n=document.createElement("article");n.className=`product-highlight product-highlight--${r}`,n.innerHTML=`
      <h2 class="product-highlight__title">${a}</h2>
      ${o?`<p class="product-highlight__description">${o}</p>`:""}
    `;const d=document.createElement("a");return d.href=c,d.appendChild(i({label:"See Product",variant:"outline"})),n.appendChild(d),n}return e.appendChild(t("ZX9 Speaker","./product-zx9-speaker.html","zx9","Upgrade to premium speakers that deliver truly remarkable sound.")),e.appendChild(t("ZX7 Speaker","./product-zx7-speaker.html","zx7")),e.appendChild(t("YX1 Earphones","./product-yx1-earphones.html","yx1")),e}document.addEventListener("DOMContentLoaded",async()=>{const e=document.querySelector("#page");if(!e)return;const t=await p(),c=["headphones","speakers","earphones"].map(r=>{const o=t.find(n=>n.category===r);return{name:r.charAt(0).toUpperCase()+r.slice(1),image:o.categoryImage,link:`/${r}.html`}});e.appendChild(h()),e.appendChild(s(c)),e.appendChild(u()),e.appendChild(l())});
