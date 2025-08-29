import{c as O,e as p,f as U,g,h as A,N as W,C as J,F as Z}from"./footer-Byl1aG2U.js";import{G as K}from"./back-btn-D-r1veg2.js";function B(e,c){const n=document.createElement("div");n.className="order-confirmation";const t={items:(e==null?void 0:e.items)||[],grandTotal:(e==null?void 0:e.grandTotal)||(e==null?void 0:e.total)||0,subtotal:(e==null?void 0:e.subtotal)||0,vat:(e==null?void 0:e.vat)||0,shipping:(e==null?void 0:e.shipping)||0},a=r=>(Number(r)||0).toLocaleString();n.innerHTML=`
    <img class="order-confirmation__icon" src="/audiophile/assets/checkout/icon-order-confirmation.svg" alt="Order Confirmed" />
    <h2 class="order-confirmation__title">Thank you for your order</h2>
    <p class="order-confirmation__message">You will receive an email confirmation shortly.</p>

    <div class="order-confirmation__summary">
      <div class="order-confirmation__summary-left">
        ${t.items.map((r,d)=>d===0&&r?`
              <div class="order-confirmation__item">
                <div class="order-confirmation__item-left">
                  <img src="${r.image||""}" alt="${r.name||"Product"}" class="order-confirmation__item-img" />
                  <div class="order-confirmation__item-details">
                    <p class="order-confirmation__item-name">${r.name||"Unknown Product"}</p>
                    <p class="order-confirmation__item-price">$${a(r.price)}</p>
                  </div>
                </div>
                <p class="order-confirmation__item-qty">x${r.qty||1}</p>
              </div>
            `:"").join("")}

        ${t.items.length>1?`<hr class="order-confirmation__divider" />
             <p class="order-confirmation__more">and ${t.items.length-1} other item(s)</p>`:""}
      </div>

      <div class="order-confirmation__summary-right">
        <p class="order-confirmation__grand-label">Grand Total</p>
        <p class="order-confirmation__grand-amount">$${a(t.grandTotal)}</p>
      </div>
    </div>

    <div class="order-confirmation__button-container"></div>
  `;const l=O({label:"Back to Home",variant:"primary"});return l.addEventListener("click",()=>{c&&c(),window.location.href="/audiophile/"}),n.querySelector(".order-confirmation__button-container").appendChild(l),n}function Q(){const e=document.createElement("section");e.className="checkout-form",e.id="checkout-form";const c=K();e.appendChild(c);const n=document.createElement("h1");n.className="checkout-form__title",n.textContent="Checkout";const t=document.createElement("form"),a=document.createElement("fieldset");a.className="checkout-form__section",a.innerHTML='<legend class="checkout-form__legend">Billing Details</legend>';const l=p({id:"name",label:"Name",placeholder:"Alexei Ward",required:!0}),r=p({id:"email",label:"Email Address",placeholder:"alexei@mail.com",required:!0,type:"email"}),d=p({id:"phone",label:"Phone Number",placeholder:"+1 202‑555‑0136",required:!0,type:"tel"}),o=document.createElement("div");o.className="checkout-form__row",o.append(l,r);const y=document.createElement("div");y.className="checkout-form__row",y.append(d,document.createElement("div")),a.append(o,y);const f=document.createElement("fieldset");f.className="checkout-form__section",f.innerHTML='<legend class="checkout-form__legend">Shipping Info</legend>';const I=p({id:"address",label:"Address",placeholder:"1137 Williams Avenue",required:!0}),V=p({id:"zip",label:"ZIP Code",placeholder:"10001",required:!0}),z=p({id:"city",label:"City",placeholder:"New York",required:!0}),Y=p({id:"country",label:"Country",placeholder:"United States",required:!0}),b=document.createElement("div");b.className="checkout-form__row",b.append(I);const E=document.createElement("div");E.className="checkout-form__row",E.append(V,z);const k=document.createElement("div");k.className="checkout-form__row",k.append(Y,document.createElement("div")),f.append(b,E,k);const v=document.createElement("fieldset");v.className="checkout-form__section",v.innerHTML='<legend class="checkout-form__legend">Payment Details</legend>';const C=document.createElement("div");C.className="checkout-form__row payment-method-row";const q=document.createElement("div");q.className="payment-label-col",q.innerHTML="<label>Payment Method</label>";const w=document.createElement("div");w.className="payment-options-col";const S=U({name:"payment-method",options:[{id:"e-money",label:"e‑Money"},{id:"cod",label:"Cash on Delivery"}]});w.append(S),C.append(q,w);const M=p({id:"e-money-number",label:"e‑Money Number",placeholder:"238521993",required:!0}),$=p({id:"e-money-pin",label:"e‑Money PIN",placeholder:"6891",required:!0}),h=document.createElement("div");h.className="checkout-form__row e-money-fields-row",h.append(M,$);const _=document.createElement("div");_.className="cod-message",_.innerHTML=`
    <div class="cod-message__icon">
        <img class="cash_on_delivery__icon" src="/audiophile/assets/checkout/icon-cash-on-delivery.svg" alt="Cash On Delivery" />
    </div>
    <div class="cod-message__text">
      <p>The 'Cash on Delivery' option enables you to pay in cash when our delivery courier arrives at your residence. Just make sure your address is correct so that your order will not be cancelled.</p>
    </div>
  `,v.append(C,h,_),t.append(a,f,v),e.append(n,t);const N=S.querySelector("#e-money"),j=S.querySelector("#cod");function T(){const u=N.checked;h.style.display=u?"flex":"none",M.querySelector("input").required=u,$.querySelector("input").required=u,_.style.display=u?"none":"flex"}return N.checked=!0,T(),[N,j].forEach(u=>u.addEventListener("change",T)),t.addEventListener("submit",u=>{if(u.preventDefault(),console.log("Form submitted!"),!t.checkValidity()){console.log("Form validation failed"),t.reportValidity();return}const m=new FormData(t),i=g();console.log("Cart state:",i);const F={items:i.items||[],subtotal:i.subtotal||i.total||0,total:i.total||i.subtotal||0,vat:i.vat||0,shipping:i.shipping||0,grandTotal:i.grandTotal||i.total||i.subtotal||0,customerInfo:{name:m.get("name")||"",email:m.get("email")||"",phone:m.get("phone")||"",address:m.get("address")||"",zip:m.get("zip")||"",city:m.get("city")||"",country:m.get("country")||"",paymentMethod:m.get("payment-method")||"",eMoneyNumber:m.get("e-money-number")||"",eMoneyPin:m.get("e-money-pin")||""}};console.log("Order data being passed:",F),X(F,()=>{A()})}),document.addEventListener("checkout:submit",u=>{console.log("Custom checkout submit event received"),t.dispatchEvent(new Event("submit"))}),e}function X(e,c){const n=document.querySelector(".order-confirmation-overlay");n&&n.remove();const t=document.createElement("div");t.className="checkout-page";const a=document.createElement("div");a.className="order-confirmation-overlay is-visible";const l=()=>{document.body.style.overflow="",t.remove(),c&&c()},r=B(e,l);a.appendChild(r),t.appendChild(a),document.body.appendChild(t),a.addEventListener("click",o=>{o.target===a&&l()});const d=o=>{o.key==="Escape"&&(l(),document.removeEventListener("keydown",d))};document.addEventListener("keydown",d),document.body.style.overflow="hidden",document.dispatchEvent(new CustomEvent("order:confirmed",{detail:e}))}function ee(){const e=document.createElement("aside");e.className="order-summary";const c=()=>{const{items:n,total:t,vat:a,shipping:l,grandTotal:r}=g();e.innerHTML=`
      <h2 class="order-summary__title">Summary</h2>
      <div class="order-summary__items">
        ${n.map(o=>`
          <div class="order-summary__item">
            <img src="${o.image}" alt="${o.name}">
            <div class="order-summary__info">
              <p class="order-summary__name">${o.name}</p>
              <p class="order-summary__price">$${o.price.toLocaleString()}</p>
            </div>
            <p class="order-summary__quantity">x${o.qty}</p>
          </div>
        `).join("")}
      </div>
      <div class="order-summary__totals">
        <div><span>Total</span><span>$${t.toLocaleString()}</span></div>
        <div><span>Shipping</span><span>$${l}</span></div>
        <div><span>VAT (Included)</span><span>$${a.toFixed(1)}</span></div>
        <div class="order-summary__grand-total">
          <span class="order-summary__grand-total-label">Grand Total</span>
          <span class="order-summary__grand-total-amount">$${r.toLocaleString()}</span>
        </div>
      </div>
    `;const d=O({label:"Continue & Pay",variant:"primary",type:"button"});d.addEventListener("click",()=>{let o=document.querySelector("#checkout-form form")||document.querySelector(".checkout-form form")||document.querySelector("form");if(o){console.log("Found form, triggering submit");const y=new Event("submit",{bubbles:!0,cancelable:!0});o.dispatchEvent(y)}else console.error("Could not find checkout form. Available forms:",document.querySelectorAll("form")),document.dispatchEvent(new CustomEvent("checkout:submit",{detail:{orderData:g()}}))}),e.appendChild(d)};return c(),document.addEventListener("cart:updated",c),e}function te(e){return e.checkValidity()?!0:(e.reportValidity(),!1)}const P=document.querySelector("#app");var H;P&&(P.append(W(),J()),(H=document.querySelector("#cart-toggle"))==null||H.addEventListener("click",()=>{var e;return(e=document.querySelector("#cart-modal"))==null?void 0:e.classList.toggle("is-visible")}));const R=document.querySelector("#footer");R&&R.appendChild(Z());const x=document.querySelector("#checkout-form"),D=document.querySelector("#order-summary"),G=Q(),oe=ee();x&&x.appendChild(G);D&&D.appendChild(oe);let s=document.querySelector("#order-confirmation");s||(s=document.createElement("div"),s.id="order-confirmation",s.className="order-confirmation-overlay",document.body.appendChild(s));const L=G.querySelector("form");L&&L.addEventListener("submit",e=>{if(e.preventDefault(),!te(L))return;const{items:c,total:n}=g();if(c.length===0){alert("Your cart is empty.");return}s.innerHTML="",s.appendChild(B({items:c,total:n})),s.classList.add("is-visible"),A()});s.addEventListener("click",e=>{e.target===s&&s.classList.remove("is-visible")});
