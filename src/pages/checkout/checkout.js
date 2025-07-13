import { CheckoutForm }       from '../../components/checkout/checkout-form.js';
import { OrderSummary }       from '../../components/checkout/order-summary.js';
import { OrderConfirmation }  from '../../components/checkout/order-confirmation.js';

import { getState, clearCart } from '../../store/cartStore.js';
import { validateForm }        from '../../utils/validateForm.js';

document.addEventListener('DOMContentLoaded', () => {
  /* DOM slots */
  const formSlot   = document.querySelector('#checkout-form');
  const summarySlot= document.querySelector('#order-summary');
  const confirmSlot= document.querySelector('#order-confirmation');

  /* 1️⃣  Mount the checkout form */
  const formComponent = CheckoutForm();
  formSlot?.appendChild(formComponent);

  /* 2️⃣  Mount the live order summary */
  const summaryComponent = OrderSummary(handleSubmit);
  summarySlot?.appendChild(summaryComponent);

  /* --------------- Submit handler --------------- */
  function handleSubmit() {
    const formEl = formComponent.querySelector('form');
    if (!validateForm(formEl)) return;            // HTML5 validity + custom helper

    // Build order object from cart
    const { items, total } = getState();
    if (items.length === 0) {
      alert('Your cart is empty.');
      return;
    }
    const order = { items, total };

    // Swap UI to confirmation modal
    formSlot.style.display    = 'none';
    summarySlot.style.display = 'none';
    confirmSlot.innerHTML     = '';
    confirmSlot.appendChild(OrderConfirmation(order));

    // Clear the cart for next session
    clearCart();
  }
});