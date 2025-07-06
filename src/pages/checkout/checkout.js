import { CheckoutForm } from '../../components/checkout/checkout-form.js';
import { OrderSummary } from '../../components/checkout/order-summary.js';
import { OrderConfirmation } from '../../components/checkout/order-confirmation.js';

document.addEventListener('DOMContentLoaded', () => {
  const checkoutFormContainer = document.querySelector('#checkout-form');
  const orderSummaryContainer = document.querySelector('#order-summary');
  const confirmationContainer = document.querySelector('#order-confirmation');

  // Render Checkout Form
  if (checkoutFormContainer) {
    checkoutFormContainer.appendChild(CheckoutForm());
  }

  // Render Order Summary
  if (orderSummaryContainer) {
    orderSummaryContainer.appendChild(OrderSummary());
  }

  // 🔧 TEMP: Render Confirmation (for testing layout)
  const mockOrder = {
    items: [
      {
        name: 'XX99 MK II',
        price: 2999,
        quantity: 1,
        image: 'images/xx99-mark-two.jpg'
      },
      {
        name: 'ZX9 Speaker',
        price: 4500,
        quantity: 1,
        image: 'images/zx9.jpg'
      }
    ],
    total: 5499
  };

  if (confirmationContainer) {
    confirmationContainer.appendChild(OrderConfirmation(mockOrder));
  }

  // 🔜 Later you’ll remove that and trigger OrderConfirmation on form submission
});