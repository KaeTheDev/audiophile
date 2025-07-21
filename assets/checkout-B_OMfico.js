import{e as c,f as B,g as R,c as x,N as G,C as V,F as Y,h as j}from"./footer-DBmFDwpy.js";function z(){const e=document.createElement("section");e.className="checkout-form";const o=document.createElement("h1");o.className="checkout-form__title",o.textContent="Checkout";const a=document.createElement("form"),t=document.createElement("fieldset");t.className="checkout-form__section",t.innerHTML='<legend class="checkout-form__legend">Billing Details</legend>';const i=c({id:"name",label:"Name",placeholder:"Alexei Ward",required:!0}),y=c({id:"email",label:"Email Address",placeholder:"alexei@mail.com",required:!0,type:"email"}),_=c({id:"phone",label:"Phone Number",placeholder:"+1 202‑555‑0136",required:!0,type:"tel"}),s=document.createElement("div");s.className="checkout-form__row",s.append(i,y);const r=document.createElement("div");r.className="checkout-form__row",r.append(_,document.createElement("div")),t.append(s,r);const d=document.createElement("fieldset");d.className="checkout-form__section",d.innerHTML='<legend class="checkout-form__legend">Shipping Info</legend>';const P=c({id:"address",label:"Address",placeholder:"1137 Williams Avenue",required:!0}),D=c({id:"zip",label:"ZIP Code",placeholder:"10001",required:!0}),A=c({id:"city",label:"City",placeholder:"New York",required:!0}),I=c({id:"country",label:"Country",placeholder:"United States",required:!0}),f=document.createElement("div");f.className="checkout-form__row",f.append(P);const h=document.createElement("div");h.className="checkout-form__row",h.append(D,A);const v=document.createElement("div");v.className="checkout-form__row",v.append(I,document.createElement("div")),d.append(f,h,v);const m=document.createElement("fieldset");m.className="checkout-form__section",m.innerHTML='<legend class="checkout-form__legend">Payment Details</legend>';const g=document.createElement("div");g.className="checkout-form__row payment-method-row";const b=document.createElement("div");b.className="payment-label-col",b.innerHTML="<label>Payment Method</label>";const E=document.createElement("div");E.className="payment-options-col";const k=B({name:"payment-method",options:[{id:"e-money",label:"e‑Money"},{id:"cod",label:"Cash on Delivery"}]});E.append(k),g.append(b,E);const N=c({id:"e-money-number",label:"e‑Money Number",placeholder:"238521993",required:!0}),$=c({id:"e-money-pin",label:"e‑Money PIN",placeholder:"6891",required:!0}),u=document.createElement("div");u.className="checkout-form__row e-money-fields-row",u.append(N,$);const p=document.createElement("div");p.className="cod-message",p.innerHTML=`
    <div class="cod-message__icon">
        <img class="cash_on_delivery__icon" src="/audiophile/assets/checkout/icon-cash-on-delivery.svg" alt="Cash On Delivery" />
    </div>
    <div class="cod-message__text">
      <p>The 'Cash on Delivery' option enables you to pay in cash when our delivery courier arrives at your residence. Just make sure your address is correct so that your order will not be cancelled.</p>
    </div>
  `,m.append(g,u,p),a.append(t,d,m),e.append(o,a);const q=k.querySelector("#e-money"),O=k.querySelector("#cod");function S(){const l=q.checked;u.style.display=l?"flex":"none",N.querySelector("input").required=l,$.querySelector("input").required=l,p.style.display=l?"none":"flex"}return q.checked=!0,S(),[q,O].forEach(l=>l.addEventListener("change",S)),e}function W(){const e=document.createElement("aside");e.className="order-summary";const o=()=>{const{items:a,total:t}=R(),i=50,y=t*.2,_=t+i;e.innerHTML=`
      <h2 class="order-summary__title">Summary</h2>
      <div class="order-summary__items">
        ${a.map(r=>`
          <div class="order-summary__item">
            <img src="${r.image}" alt="${r.name}">
            <div class="order-summary__info">
              <p class="order-summary__name">${r.name}</p>
              <p class="order-summary__price">$${r.price.toLocaleString()}</p>
            </div>
            <p class="order-summary__quantity">x${r.qty}</p>
          </div>
        `).join("")}
      </div>
      <div class="order-summary__totals">
        <div><span>Total</span><span>$${t.toLocaleString()}</span></div>
        <div><span>Shipping</span><span>$${i}</span></div>
        <div><span>VAT (Included)</span><span>$${y.toFixed(0)}</span></div>
        <div class="order-summary__grand-total">
          <span class="order-summary__grand-total-label">Grand Total</span>
          <span class="order-summary__grand-total-amount">$${_.toLocaleString()}</span>
        </div>
      </div>
    `;const s=x({label:"Continue & Pay",variant:"primary",type:"button"});s.addEventListener("click",()=>{const r=document.querySelector("#checkout-form form");if(r){const d=new Event("submit",{bubbles:!0,cancelable:!0});r.dispatchEvent(d)}}),e.appendChild(s)};return o(),document.addEventListener("cart:updated",o),e}function J(e){const o=document.createElement("div");o.className="order-confirmation",o.innerHTML=`
    <img class="order-confirmation__icon" src="/audiophile/assets/checkout/icon-order-confirmation.svg" alt="Order Confirmed" />
    <h2 class="order-confirmation__title">Thank you for your order</h2>
    <p class="order-confirmation__message">You will receive an email confirmation shortly.</p>

    <div class="order-confirmation__summary">
      <div class="order-confirmation__summary-left">
        ${e.items.map((t,i)=>i===0?`
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
  `;const a=x({label:"Back to Home",variant:"primary"});return a.addEventListener("click",()=>window.location.href="/"),o.querySelector(".order-confirmation__button-container").appendChild(a),o}function U(e){return e.checkValidity()?!0:(e.reportValidity(),!1)}const w=document.querySelector("#app");var F;w&&(w.append(G(),V()),(F=document.querySelector("#cart-toggle"))==null||F.addEventListener("click",()=>{var e;return(e=document.querySelector("#cart-modal"))==null?void 0:e.classList.toggle("is-visible")}));const L=document.querySelector("#footer");L&&L.appendChild(Y());const M=document.querySelector("#checkout-form"),T=document.querySelector("#order-summary"),H=z(),Z=W();M&&M.appendChild(H);T&&T.appendChild(Z);let n=document.querySelector("#order-confirmation");n||(n=document.createElement("div"),n.id="order-confirmation",n.className="order-confirmation-overlay",document.body.appendChild(n));const C=H.querySelector("form");C&&C.addEventListener("submit",e=>{if(e.preventDefault(),!U(C))return;const{items:o,total:a}=R();if(o.length===0){alert("Your cart is empty.");return}n.innerHTML="",n.appendChild(J({items:o,total:a})),n.classList.add("is-visible"),j()});n.addEventListener("click",e=>{e.target===n&&n.classList.remove("is-visible")});
