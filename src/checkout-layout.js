import './scss/styles.scss';
import { CheckoutForm } from './components/checkout/checkout-form.js';
import { OrderSummary } from './components/checkout/order-summary.js';
import { OrderConfirmation } from './components/checkout/order-confirmation.js';
import { getState, clearCart } from './store/cartStore.js';
import { validateForm } from './utils/validateForm.js';

/* mount slots */
const formSlot    = document.querySelector('#checkout-form');
const summarySlot = document.querySelector('#order-summary');

/* overlay root for modal */
let overlay = document.querySelector('#order-confirmation');
if (!overlay) {
  overlay = document.createElement('div');
  overlay.id = 'order-confirmation';
  overlay.className = 'order-confirmation-overlay'; // position:fixed; top:0; …
  document.body.appendChild(overlay);
}

/* 1️⃣ Form + Summary */
const formComp = CheckoutForm();
formSlot.appendChild(formComp);
summarySlot.appendChild(OrderSummary());

/* 2️⃣ Form submit */
const formEl = formComp.querySelector('form');
formEl.addEventListener('submit', e => {
  e.preventDefault();

  if (!validateForm(formEl)) return;

  const { items, total } = getState();
  if (items.length === 0) {
    alert('Your cart is empty.');
    return;
  }

  /* build modal & show overlay */
  overlay.innerHTML = '';
  overlay.appendChild(OrderConfirmation({ items, total }));
  overlay.classList.add('is-visible');   // CSS fades it in (opaque backdrop)

  clearCart();
});

/* optional: click outside to close */
overlay.addEventListener('click', e => {
  if (e.target === overlay) overlay.classList.remove('is-visible');
});
