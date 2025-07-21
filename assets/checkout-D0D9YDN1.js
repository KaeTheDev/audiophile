import{c as H,e as p,f as j,g as _,h as O,N as U,C as W,F as J}from"./footer-rnHte5mL.js";function A(e,a){const t=document.createElement("div");t.className="order-confirmation";const o={items:(e==null?void 0:e.items)||[],grandTotal:(e==null?void 0:e.grandTotal)||(e==null?void 0:e.total)||0,subtotal:(e==null?void 0:e.subtotal)||0,vat:(e==null?void 0:e.vat)||0,shipping:(e==null?void 0:e.shipping)||0},c=r=>(Number(r)||0).toLocaleString();t.innerHTML=`
    <img class="order-confirmation__icon" src="/audiophile/assets/checkout/icon-order-confirmation.svg" alt="Order Confirmed" />
    <h2 class="order-confirmation__title">Thank you for your order</h2>
    <p class="order-confirmation__message">You will receive an email confirmation shortly.</p>

    <div class="order-confirmation__summary">
      <div class="order-confirmation__summary-left">
        ${o.items.map((r,i)=>i===0&&r?`
              <div class="order-confirmation__item">
                <div class="order-confirmation__item-left">
                  <img src="${r.image||""}" alt="${r.name||"Product"}" class="order-confirmation__item-img" />
                  <div class="order-confirmation__item-details">
                    <p class="order-confirmation__item-name">${r.name||"Unknown Product"}</p>
                    <p class="order-confirmation__item-price">$${c(r.price)}</p>
                  </div>
                </div>
                <p class="order-confirmation__item-qty">x${r.qty||1}</p>
              </div>
            `:"").join("")}

        ${o.items.length>1?`<hr class="order-confirmation__divider" />
             <p class="order-confirmation__more">and ${o.items.length-1} other item(s)</p>`:""}
      </div>

      <div class="order-confirmation__summary-right">
        <p class="order-confirmation__grand-label">Grand Total</p>
        <p class="order-confirmation__grand-amount">$${c(o.grandTotal)}</p>
      </div>
    </div>

    <div class="order-confirmation__button-container"></div>
  `;const d=H({label:"Back to Home",variant:"primary"});return d.addEventListener("click",()=>{a&&a(),window.location.href="/"}),t.querySelector(".order-confirmation__button-container").appendChild(d),t}function Z(){const e=document.createElement("section");e.className="checkout-form",e.id="checkout-form";const a=document.createElement("h1");a.className="checkout-form__title",a.textContent="Checkout";const t=document.createElement("form"),o=document.createElement("fieldset");o.className="checkout-form__section",o.innerHTML='<legend class="checkout-form__legend">Billing Details</legend>';const c=p({id:"name",label:"Name",placeholder:"Alexei Ward",required:!0}),d=p({id:"email",label:"Email Address",placeholder:"alexei@mail.com",required:!0,type:"email"}),r=p({id:"phone",label:"Phone Number",placeholder:"+1 202‑555‑0136",required:!0,type:"tel"}),i=document.createElement("div");i.className="checkout-form__row",i.append(c,d);const n=document.createElement("div");n.className="checkout-form__row",n.append(r,document.createElement("div")),o.append(i,n);const y=document.createElement("fieldset");y.className="checkout-form__section",y.innerHTML='<legend class="checkout-form__legend">Shipping Info</legend>';const V=p({id:"address",label:"Address",placeholder:"1137 Williams Avenue",required:!0}),z=p({id:"zip",label:"ZIP Code",placeholder:"10001",required:!0}),B=p({id:"city",label:"City",placeholder:"New York",required:!0}),G=p({id:"country",label:"Country",placeholder:"United States",required:!0}),g=document.createElement("div");g.className="checkout-form__row",g.append(V);const b=document.createElement("div");b.className="checkout-form__row",b.append(z,B);const E=document.createElement("div");E.className="checkout-form__row",E.append(G,document.createElement("div")),y.append(g,b,E);const f=document.createElement("fieldset");f.className="checkout-form__section",f.innerHTML='<legend class="checkout-form__legend">Payment Details</legend>';const k=document.createElement("div");k.className="checkout-form__row payment-method-row";const C=document.createElement("div");C.className="payment-label-col",C.innerHTML="<label>Payment Method</label>";const q=document.createElement("div");q.className="payment-options-col";const w=j({name:"payment-method",options:[{id:"e-money",label:"e‑Money"},{id:"cod",label:"Cash on Delivery"}]});q.append(w),k.append(C,q);const L=p({id:"e-money-number",label:"e‑Money Number",placeholder:"238521993",required:!0}),M=p({id:"e-money-pin",label:"e‑Money PIN",placeholder:"6891",required:!0}),v=document.createElement("div");v.className="checkout-form__row e-money-fields-row",v.append(L,M);const h=document.createElement("div");h.className="cod-message",h.innerHTML=`
    <div class="cod-message__icon">
        <img class="cash_on_delivery__icon" src="/audiophile/assets/checkout/icon-cash-on-delivery.svg" alt="Cash On Delivery" />
    </div>
    <div class="cod-message__text">
      <p>The 'Cash on Delivery' option enables you to pay in cash when our delivery courier arrives at your residence. Just make sure your address is correct so that your order will not be cancelled.</p>
    </div>
  `,f.append(k,v,h),t.append(o,y,f),e.append(a,t);const S=w.querySelector("#e-money"),Y=w.querySelector("#cod");function $(){const u=S.checked;v.style.display=u?"flex":"none",L.querySelector("input").required=u,M.querySelector("input").required=u,h.style.display=u?"none":"flex"}return S.checked=!0,$(),[S,Y].forEach(u=>u.addEventListener("change",$)),t.addEventListener("submit",u=>{if(u.preventDefault(),console.log("Form submitted!"),!t.checkValidity()){console.log("Form validation failed"),t.reportValidity();return}const m=new FormData(t),s=_();console.log("Cart state:",s);const T={items:s.items||[],subtotal:s.subtotal||s.total||0,total:s.total||s.subtotal||0,vat:s.vat||0,shipping:s.shipping||0,grandTotal:s.grandTotal||s.total||s.subtotal||0,customerInfo:{name:m.get("name")||"",email:m.get("email")||"",phone:m.get("phone")||"",address:m.get("address")||"",zip:m.get("zip")||"",city:m.get("city")||"",country:m.get("country")||"",paymentMethod:m.get("payment-method")||"",eMoneyNumber:m.get("e-money-number")||"",eMoneyPin:m.get("e-money-pin")||""}};console.log("Order data being passed:",T),K(T,()=>{O()})}),document.addEventListener("checkout:submit",u=>{console.log("Custom checkout submit event received"),t.dispatchEvent(new Event("submit"))}),e}function K(e,a){const t=document.querySelector(".order-confirmation-overlay");t&&t.remove();const o=document.createElement("div");o.className="checkout-page";const c=document.createElement("div");c.className="order-confirmation-overlay is-visible";const d=()=>{document.body.style.overflow="",o.remove(),a&&a()},r=A(e,d);c.appendChild(r),o.appendChild(c),document.body.appendChild(o),c.addEventListener("click",n=>{n.target===c&&d()});const i=n=>{n.key==="Escape"&&(d(),document.removeEventListener("keydown",i))};document.addEventListener("keydown",i),document.body.style.overflow="hidden",document.dispatchEvent(new CustomEvent("order:confirmed",{detail:e}))}function Q(){const e=document.createElement("aside");e.className="order-summary";const a=()=>{const{items:t,total:o,vat:c,shipping:d,grandTotal:r}=_();e.innerHTML=`
      <h2 class="order-summary__title">Summary</h2>
      <div class="order-summary__items">
        ${t.map(n=>`
          <div class="order-summary__item">
            <img src="${n.image}" alt="${n.name}">
            <div class="order-summary__info">
              <p class="order-summary__name">${n.name}</p>
              <p class="order-summary__price">$${n.price.toLocaleString()}</p>
            </div>
            <p class="order-summary__quantity">x${n.qty}</p>
          </div>
        `).join("")}
      </div>
      <div class="order-summary__totals">
        <div><span>Total</span><span>$${o.toLocaleString()}</span></div>
        <div><span>Shipping</span><span>$${d}</span></div>
        <div><span>VAT (Included)</span><span>$${c.toFixed(1)}</span></div>
        <div class="order-summary__grand-total">
          <span class="order-summary__grand-total-label">Grand Total</span>
          <span class="order-summary__grand-total-amount">$${r.toLocaleString()}</span>
        </div>
      </div>
    `;const i=H({label:"Continue & Pay",variant:"primary",type:"button"});i.addEventListener("click",()=>{let n=document.querySelector("#checkout-form form")||document.querySelector(".checkout-form form")||document.querySelector("form");if(n){console.log("Found form, triggering submit");const y=new Event("submit",{bubbles:!0,cancelable:!0});n.dispatchEvent(y)}else console.error("Could not find checkout form. Available forms:",document.querySelectorAll("form")),document.dispatchEvent(new CustomEvent("checkout:submit",{detail:{orderData:_()}}))}),e.appendChild(i)};return a(),document.addEventListener("cart:updated",a),e}function X(e){return e.checkValidity()?!0:(e.reportValidity(),!1)}const F=document.querySelector("#app");var D;F&&(F.append(U(),W()),(D=document.querySelector("#cart-toggle"))==null||D.addEventListener("click",()=>{var e;return(e=document.querySelector("#cart-modal"))==null?void 0:e.classList.toggle("is-visible")}));const P=document.querySelector("#footer");P&&P.appendChild(J());const R=document.querySelector("#checkout-form"),x=document.querySelector("#order-summary"),I=Z(),ee=Q();R&&R.appendChild(I);x&&x.appendChild(ee);let l=document.querySelector("#order-confirmation");l||(l=document.createElement("div"),l.id="order-confirmation",l.className="order-confirmation-overlay",document.body.appendChild(l));const N=I.querySelector("form");N&&N.addEventListener("submit",e=>{if(e.preventDefault(),!X(N))return;const{items:a,total:t}=_();if(a.length===0){alert("Your cart is empty.");return}l.innerHTML="",l.appendChild(A({items:a,total:t})),l.classList.add("is-visible"),O()});l.addEventListener("click",e=>{e.target===l&&l.classList.remove("is-visible")});
