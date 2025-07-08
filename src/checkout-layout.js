import './scss/styles.scss';

import { Navbar } from './components/navbar/navbar.js';
import { Footer } from './components/footer/footer.js';
import { CheckoutForm } from './components/checkout/checkout-form.js';
import { OrderSummary } from './components/checkout/order-summary.js';
import { OrderConfirmation } from './components/checkout/order-confirmation.js';

document.addEventListener('DOMContentLoaded', () => {
  const app = document.querySelector('#app');
  const footer = document.querySelector('#footer');

  if (app) app.append(Navbar());
  if (footer) footer.append(Footer());

  // Inject components into pre-defined containers
  const formSlot = document.querySelector('#checkout-form');
  const summarySlot = document.querySelector('#order-summary');
  const confirmationSlot = document.querySelector('#order-confirmation');

  if (formSlot) formSlot.appendChild(CheckoutForm());
  if (summarySlot) summarySlot.appendChild(OrderSummary());

  // Optional — show only after checkout
  const fakeOrder = {
    items: [
      {
        name: 'XX99 MK II',
        price: 2999,
        quantity: 1,
        image: 'images/xx99-mark-two.jpg'
      }
    ],
    total: 2999
  };
  if (confirmationSlot) confirmationSlot.appendChild(OrderConfirmation(fakeOrder));
});