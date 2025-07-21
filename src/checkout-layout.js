import './scss/styles.scss';
import { Navbar } from './components/navbar/navbar.js';          
import { CheckoutForm } from './components/checkout/checkout-form.js';
import { OrderSummary } from './components/checkout/order-summary.js';
import { OrderConfirmation } from './components/checkout/order-confirmation.js';
import { CartModal } from './components/cart-modal/cart-modal.js';
import { Footer } from './components/footer/footer.js';
import { getState, clearCart } from './store/cartStore.js';
import { validateForm } from './utils/validateForm.js';

/* ---------- Mount Navbar & Cart Modal ---------- */
const appRoot = document.querySelector('#app');
if (appRoot) {
  appRoot.append(Navbar(), CartModal());
  document.querySelector('#cart-toggle')
    ?.addEventListener('click', () =>
      document.querySelector('#cart-modal')?.classList.toggle('is-visible')
    );
}

/* ---------- Mount Footer ---------- */
const footerRoot = document.querySelector('#footer');
if (footerRoot) {
  footerRoot.appendChild(Footer());
}

/* ---------- Mount Form and Order Summary ---------- */
const formSlot    = document.querySelector('#checkout-form');
const summarySlot = document.querySelector('#order-summary');

const formComponent = CheckoutForm();
const summaryComponent = OrderSummary();

if (formSlot) formSlot.appendChild(formComponent);
if (summarySlot) summarySlot.appendChild(summaryComponent);

/* ---------- Set up Modal Overlay ---------- */
let overlay = document.querySelector('#order-confirmation');
if (!overlay) {
  overlay = document.createElement('div');
  overlay.id = 'order-confirmation';
  overlay.className = 'order-confirmation-overlay';
  document.body.appendChild(overlay);
}

/* ---------- Form Submit Handler ---------- */
const formEl = formComponent.querySelector('form');

if (formEl) {
  formEl.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!validateForm(formEl)) return;

    const { items, total } = getState();
    if (items.length === 0) {
      alert('Your cart is empty.');
      return;
    }

    overlay.innerHTML = '';
    overlay.appendChild(OrderConfirmation({ items, total }));
    overlay.classList.add('is-visible');

    clearCart();
  });
}

/* ---------- Close Modal on Outside Click ---------- */
overlay.addEventListener('click', (e) => {
  if (e.target === overlay) overlay.classList.remove('is-visible');
});