import{N as c,F as l}from"./footer-C0Dips3J.js";function m(){const e=document.createElement("section");return e.className="checkout-form",e.innerHTML=`
      <h1 class="checkout-form__title">Checkout</h1>
  
      <form>
        <!-- Billing Details -->
        <fieldset class="checkout-form__section">
          <legend>Billing Details</legend>
          <div class="checkout-form__group">
            <label for="name">Name</label>
            <input type="text" id="name" placeholder="Alexei Ward">
          </div>
          <div class="checkout-form__group">
            <label for="email">Email Address</label>
            <input type="email" id="email" placeholder="alexei@mail.com">
          </div>
          <div class="checkout-form__group">
            <label for="phone">Phone Number</label>
            <input type="tel" id="phone" placeholder="+1 202-555-0136">
          </div>
        </fieldset>
  
        <!-- Shipping Info -->
        <fieldset class="checkout-form__section">
          <legend>Shipping Info</legend>
          <div class="checkout-form__group">
            <label for="address">Your Address</label>
            <input type="text" id="address" placeholder="1137 Williams Avenue">
          </div>
          <div class="checkout-form__group">
            <label for="zip">ZIP Code</label>
            <input type="text" id="zip" placeholder="10001">
          </div>
          <div class="checkout-form__group">
            <label for="city">City</label>
            <input type="text" id="city" placeholder="New York">
          </div>
          <div class="checkout-form__group">
            <label for="country">Country</label>
            <input type="text" id="country" placeholder="United States">
          </div>
        </fieldset>
  
        <!-- Payment -->
        <fieldset class="checkout-form__section">
          <legend>Payment Details</legend>
          <div class="checkout-form__group">
            <p>Payment Method</p>
            <div class="checkout-form__radio-group">
              <label><input type="radio" name="payment-method" value="e-money" checked> e-Money</label>
              <label><input type="radio" name="payment-method" value="cod"> Cash on Delivery</label>
            </div>
          </div>
          <div class="checkout-form__group">
            <label for="e-money-number">e-Money Number</label>
            <input type="text" id="e-money-number" placeholder="238521993">
          </div>
          <div class="checkout-form__group">
            <label for="e-money-pin">e-Money PIN</label>
            <input type="text" id="e-money-pin" placeholder="6891">
          </div>
        </fieldset>
      </form>
    `,e}function d(){const e=document.createElement("aside");e.className="order-summary";const o=[{name:"XX99 MK II",price:2999,quantity:1,image:"images/xx99-mark-two.jpg"},{name:"YX1 Earphones",price:599,quantity:2,image:"images/yx1.jpg"}],t=o.reduce((a,s)=>a+s.price*s.quantity,0),i=50,r=t*.2,n=t+i;return e.innerHTML=`
      <h2 class="order-summary__title">Summary</h2>
  
      <div class="order-summary__items">
        ${o.map(a=>`
          <div class="order-summary__item">
            <img src="${a.image}" alt="${a.name}">
            <div class="order-summary__info">
              <p class="order-summary__name">${a.name}</p>
              <p class="order-summary__price">$${a.price.toLocaleString()}</p>
            </div>
            <p class="order-summary__quantity">x${a.quantity}</p>
          </div>
        `).join("")}
      </div>
  
      <div class="order-summary__totals">
        <div><span>Total</span><span>$${t.toLocaleString()}</span></div>
        <div><span>Shipping</span><span>$${i}</span></div>
        <div><span>VAT (Included)</span><span>$${r.toFixed(0)}</span></div>
        <div class="order-summary__grand-total"><span>Grand Total</span><span>$${n.toLocaleString()}</span></div>
      </div>
  
      <button class="button button--primary">Continue & Pay</button>
    `,e}function p(e){const o=document.createElement("div");return o.className="order-confirmation",o.innerHTML=`
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
  
      <a href="/" class="order-confirmation__button button button--primary">Back to Home</a>
    `,o}document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector("#app"),o=document.querySelector("#footer");e&&e.append(c()),o&&o.append(l());const t=document.querySelector("#checkout-form"),i=document.querySelector("#order-summary"),r=document.querySelector("#order-confirmation");t&&t.appendChild(m()),i&&i.appendChild(d());const n={items:[{name:"XX99 MK II",price:2999,quantity:1,image:"images/xx99-mark-two.jpg"}],total:2999};r&&r.appendChild(p(n))});
