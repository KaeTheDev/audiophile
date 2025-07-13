import{f as i,h as q,c as f,g as h,d as S}from"./button-DLeOthyl.js";function C(){const e=document.createElement("section");e.className="checkout-form";const r=document.createElement("h1");r.className="checkout-form__title",r.textContent="Checkout";const n=document.createElement("form"),t=document.createElement("fieldset");t.className="checkout-form__section",t.innerHTML="<legend>Billing Details</legend>",t.append(i({id:"name",label:"Name",placeholder:"Alexei Ward",required:!0}),i({id:"email",label:"Email Address",placeholder:"alexei@mail.com",required:!0,type:"email"}),i({id:"phone",label:"Phone Number",placeholder:"+1 202‑555‑0136",required:!0,type:"tel"}));const a=document.createElement("fieldset");a.className="checkout-form__section",a.innerHTML="<legend>Shipping Info</legend>",a.append(i({id:"address",label:"Your Address",placeholder:"1137 Williams Avenue",required:!0}),i({id:"zip",label:"ZIP Code",placeholder:"10001",required:!0}),i({id:"city",label:"City",placeholder:"New York",required:!0}),i({id:"country",label:"Country",placeholder:"United States",required:!0}));const s=document.createElement("fieldset");s.className="checkout-form__section",s.innerHTML="<legend>Payment Details</legend>";const l=q({name:"payment-method",legend:"Payment Method",options:[{id:"e-money",label:"e‑Money"},{id:"cod",label:"Cash on Delivery"}]});s.append(l);const d=i({id:"e-money-number",label:"e‑Money Number",placeholder:"238521993",required:!0}),m=i({id:"e-money-pin",label:"e‑Money PIN",placeholder:"6891",required:!0});s.append(d,m),n.append(t,a,s);const g=f({label:"Continue & Pay",variant:"primary",type:"submit"});n.appendChild(g),e.append(r,n);const u=n.querySelector("#e-money"),b=n.querySelector("#cod");function p(){const c=u.checked;[d,m].forEach(y=>{const $=y.querySelector("input");$.required=c,y.style.display=c?"":"none"})}return p(),[u,b].forEach(c=>c.addEventListener("change",p)),e}function E(){const e=document.createElement("aside");e.className="order-summary";const r=()=>{const{items:n,total:t}=h(),a=50,s=t*.2,l=t+a;e.innerHTML=`
      <h2 class="order-summary__title">Summary</h2>
      <div class="order-summary__items">
        ${n.map(d=>`
          <div class="order-summary__item">
            <img src="${d.image}" alt="${d.name}">
            <div class="order-summary__info">
              <p class="order-summary__name">${d.name}</p>
              <p class="order-summary__price">$${d.price.toLocaleString()}</p>
            </div>
            <p class="order-summary__quantity">x${d.qty}</p>
          </div>
        `).join("")}
      </div>
      <div class="order-summary__totals">
        <div><span>Total</span><span>$${t.toLocaleString()}</span></div>
        <div><span>Shipping</span><span>$${a}</span></div>
        <div><span>VAT (Included)</span><span>$${s.toFixed(0)}</span></div>
        <div class="order-summary__grand-total"><span>Grand Total</span><span>$${l.toLocaleString()}</span></div>
      </div>`};return r(),document.addEventListener("cart:updated",r),e}function k(e){const r=document.createElement("div");r.className="order-confirmation",r.innerHTML=`
    <img class="order-confirmation__icon" src="/assets/checkout/icon-order-confirmation.svg" alt="Order Confirmed" />
    <h2 class="order-confirmation__title">Thank you for your order</h2>
    <p class="order-confirmation__message">You will receive an email confirmation shortly.</p>

    <div class="order-confirmation__summary">
      <div class="order-confirmation__summary-left">
        ${e.items.map((t,a)=>a===0?`
          <div class="order-confirmation__item">
            <div class="order-confirmation__item-left">
              <img src="${t.image}" alt="${t.name}" class="order-confirmation__item-img" />
              <div class="order-confirmation__item-details">
                <p class="order-confirmation__item-name">${t.name}</p>
                <p class="order-confirmation__item-price">$${t.price}</p>
              </div>
            </div>
            <p class="order-confirmation__item-qty">x${t.qty}</p>
          </div>
        `:"").join("")}

        ${e.items.length>1?`<hr class="order-confirmation__divider" />
             <p class="order-confirmation__more">and ${e.items.length-1} other item(s)</p>`:""}
      </div>

      <div class="order-confirmation__summary-right">
        <p class="order-confirmation__grand-label">Grand Total</p>
        <p class="order-confirmation__grand-amount">$${e.total}</p>
      </div>
    </div>

    <div class="order-confirmation__button-container"></div>
  `;const n=f({label:"Back to Home",variant:"primary"});return n.addEventListener("click",()=>window.location.href="/"),r.querySelector(".order-confirmation__button-container").appendChild(n),r}function L(e){return e.checkValidity()?!0:(e.reportValidity(),!1)}const M=document.querySelector("#checkout-form"),N=document.querySelector("#order-summary");let o=document.querySelector("#order-confirmation");o||(o=document.createElement("div"),o.id="order-confirmation",o.className="order-confirmation-overlay",document.body.appendChild(o));const v=C();M.appendChild(v);N.appendChild(E());const _=v.querySelector("form");_.addEventListener("submit",e=>{if(e.preventDefault(),!L(_))return;const{items:r,total:n}=h();if(r.length===0){alert("Your cart is empty.");return}o.innerHTML="",o.appendChild(k({items:r,total:n})),o.classList.add("is-visible"),S()});o.addEventListener("click",e=>{e.target===o&&o.classList.remove("is-visible")});
