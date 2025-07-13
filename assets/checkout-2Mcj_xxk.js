import{d,e as p,c as m,N as u,F as _}from"./footer-Dcf1jEfK.js";function h(){const e=document.createElement("section");e.className="checkout-form";const n=document.createElement("h1");n.className="checkout-form__title",n.textContent="Checkout";const t=document.createElement("form"),a=document.createElement("fieldset");a.className="checkout-form__section";const c=document.createElement("legend");c.textContent="Billing Details",a.appendChild(c),a.appendChild(d({id:"name",label:"Name",placeholder:"Alexei Ward"})),a.appendChild(d({id:"email",label:"Email Address",placeholder:"alexei@mail.com"})),a.appendChild(d({id:"phone",label:"Phone Number",placeholder:"+1 202-555-0136"}));const o=document.createElement("fieldset");o.className="checkout-form__section";const s=document.createElement("legend");s.textContent="Shipping Info",o.appendChild(s),o.appendChild(d({id:"address",label:"Your Address",placeholder:"1137 Williams Avenue"})),o.appendChild(d({id:"zip",label:"ZIP Code",placeholder:"10001"})),o.appendChild(d({id:"city",label:"City",placeholder:"New York"})),o.appendChild(d({id:"country",label:"Country",placeholder:"United States"}));const r=document.createElement("fieldset");r.className="checkout-form__section";const i=document.createElement("legend");i.textContent="Payment Details",r.appendChild(i);const l=p({name:"payment-method",legend:"Payment Method",options:[{id:"e-money",label:"e-Money"},{id:"cod",label:"Cash on Delivery"}]});return r.appendChild(l),r.appendChild(d({id:"e-money-number",label:"e-Money Number",placeholder:"238521993"})),r.appendChild(d({id:"e-money-pin",label:"e-Money PIN",placeholder:"6891"})),t.appendChild(a),t.appendChild(o),t.appendChild(r),e.appendChild(n),e.appendChild(t),e}function y(){const e=document.createElement("aside");e.className="order-summary";const n=[{name:"XX99 MK II",price:2999,quantity:1,image:"images/xx99-mark-two.jpg"},{name:"YX1 Earphones",price:599,quantity:2,image:"images/yx1.jpg"}],t=n.reduce((i,l)=>i+l.price*l.quantity,0),a=50,c=t*.2,o=t+a;e.innerHTML=`
    <h2 class="order-summary__title">Summary</h2>

    <div class="order-summary__items">
      ${n.map(i=>`
        <div class="order-summary__item">
          <img src="${i.image}" alt="${i.name}">
          <div class="order-summary__info">
            <p class="order-summary__name">${i.name}</p>
            <p class="order-summary__price">$${i.price.toLocaleString()}</p>
          </div>
          <p class="order-summary__quantity">x${i.quantity}</p>
        </div>
      `).join("")}
    </div>

    <div class="order-summary__totals">
      <div><span>Total</span><span>$${t.toLocaleString()}</span></div>
      <div><span>Shipping</span><span>$${a}</span></div>
      <div><span>VAT (Included)</span><span>$${c.toFixed(0)}</span></div>
      <div class="order-summary__grand-total">
        <span>Grand Total</span><span>$${o.toLocaleString()}</span>
      </div>
    </div>

    <div class="order-summary__button"></div>
  `;const s=e.querySelector(".order-summary__button"),r=m({label:"Continue & Pay",variant:"primary"});return r.addEventListener("click",()=>{console.log("🧾 Submitting checkout...")}),s.appendChild(r),e}function f(e){const n=document.createElement("div");n.className="order-confirmation",n.innerHTML=`
    <img class="order-confirmation__icon" src="/assets/checkout/icon-order-confirmation.svg" alt="Order Confirmed" />
    <h2 class="order-confirmation__title">Thank you for your order</h2>
    <p class="order-confirmation__message">You will receive an email confirmation shortly.</p>

    <div class="order-confirmation__summary">
      <div class="order-confirmation__summary-left">
        <div class="order-confirmation__item">
          <div class="order-confirmation__item-left">
            <img src="${e.items[0].image}" alt="${e.items[0].name}" class="order-confirmation__item-img" />
            <div class="order-confirmation__item-details">
              <p class="order-confirmation__item-name">${e.items[0].name}</p>
              <p class="order-confirmation__item-price">$${e.items[0].price}</p>
            </div>
          </div>
          <p class="order-confirmation__item-qty">x${e.items[0].quantity}</p>
        </div>

        ${e.items.length>1?`<hr class="order-confirmation__divider" />
               <p class="order-confirmation__more">and ${e.items.length-1} other item(s)</p>`:""}
      </div>

      <div class="order-confirmation__summary-right">
        <p class="order-confirmation__grand-label">Grand Total</p>
        <p class="order-confirmation__grand-amount">$${e.total}</p>
      </div>
    </div>

    <div class="order-confirmation__button-container"></div>
  `;const t=m({label:"Back to Home",variant:"primary"});return t.addEventListener("click",()=>{window.location.href="/"}),n.querySelector(".order-confirmation__button-container").appendChild(t),n}document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector("#app"),n=document.querySelector("#footer");e&&e.append(u()),n&&n.append(_());const t=document.querySelector("#checkout-form"),a=document.querySelector("#order-summary"),c=document.querySelector("#order-confirmation");t&&t.appendChild(h()),a&&a.appendChild(y());const o={items:[{name:"XX99 MK II",price:2999,quantity:1,image:"images/xx99-mark-two.jpg"}],total:2999};c&&c.appendChild(f(o))});
