import './scss/styles.scss';
import { Navbar }              from './components/navbar/navbar.js';          // ✅
import { CheckoutForm }        from './components/checkout/checkout-form.js';
import { OrderSummary }        from './components/checkout/order-summary.js';
import { OrderConfirmation }   from './components/checkout/order-confirmation.js';
import { getState, clearCart } from './store/cartStore.js';
import { validateForm }        from './utils/validateForm.js';

/* ---------- Mount Navbar ---------- */
const appRoot = document.querySelector('#app');       // #app exists in checkout.html
if (appRoot) appRoot.appendChild(Navbar());           // ✅ now the nav shows

/* ---------- DOM slots ---------- */
const formSlot    = document.querySelector('#checkout-form');
const summarySlot = document.querySelector('#order-summary');

/* ---------- Overlay root for modal ---------- */
let overlay = document.querySelector('#order-confirmation');
if (!overlay) {
  overlay = document.createElement('div');
  overlay.id = 'order-confirmation';
  overlay.className = 'order-confirmation-overlay';
  document.body.appendChild(overlay);
}

/* ---------- Mount Form + Summary ---------- */
const formComp = CheckoutForm();
formSlot.appendChild(formComp);
summarySlot.appendChild(OrderSummary());

/* ---------- Form submit handler ---------- */
const formEl = formComp.querySelector('form');
formEl.addEventListener('submit', e => {
  e.preventDefault();
  if (!validateForm(formEl)) return;

  const { items, total } = getState();
  if (items.length === 0) {
    alert('Your cart is empty.');
    return;
  }

  /* Build modal & show overlay */
  overlay.innerHTML = '';
  overlay.appendChild(OrderConfirmation({ items, total }));
  overlay.classList.add('is-visible');

  clearCart();
});

/* ---------- Optional: click backdrop to close ---------- */
overlay.addEventListener('click', e => {
  if (e.target === overlay) overlay.classList.remove('is-visible');
});