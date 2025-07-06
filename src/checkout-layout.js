// import './layout.js'; // imports base + styles


// import { Navbar } from './components/navbar/navbar.js';
// import { CartModal } from './components/cart-modal/cart-modal.js';
// import { Footer } from './components/footer/footer.js';

// document.addEventListener('DOMContentLoaded', () => {
//   const app = document.querySelector('#app');
//   const footer = document.querySelector('#footer');

//   if (app) app.append(Navbar(), CartModal());
//   if (footer) footer.append(Footer());
// });

// import './layout.js'; // This already includes global styles

// import { Navbar } from './components/navbar/navbar.js';
// import { CartModal } from './components/cart-modal/cart-modal.js';
// import { Footer } from './components/footer/footer.js';

// document.addEventListener('DOMContentLoaded', () => {
//   const app = document.querySelector('#app');
//   const footer = document.querySelector('#footer');

//   if (app) {
//     app.append(Navbar(), CartModal());
//   }

//   if (footer && footer.children.length === 0) {
//     footer.append(Footer());
//   }

//   // Optional: cart toggle logic if you want it working here too
//   const cartButton = document.querySelector('.navbar__cart');
//   const cartModal = document.querySelector('.cart-modal');

//   if (cartButton && cartModal) {
//     cartButton.addEventListener('click', () => {
//       cartModal.classList.toggle('is-visible');
//     });
//   }
// });

// checkout.js
// checkout.js
// import './scss/styles.scss'; // Import styles directly instead of layout.js
// import { Navbar } from './components/navbar/navbar.js';
// import { Footer } from './components/footer/footer.js';
// import { CheckoutForm } from './components/checkout/checkout-form.js'; // Add your checkout form component

// document.addEventListener('DOMContentLoaded', () => {
//   const app = document.querySelector('#app');
//   const page = document.querySelector('#page');
//   const footerContainer = document.querySelector('#footer');

//   // 1. Navbar only (no CartModal for checkout)
//   if (app) {
//     app.append(Navbar());
//   }

//   // 2. Checkout Form
//   if (page) {
//     page.appendChild(CheckoutForm());
//   }

//   // 3. Footer
//   if (footerContainer) {
//     footerContainer.appendChild(Footer());
//   }

//   // Optional: If you need any checkout-specific logic
//   // Add your checkout form validation, payment processing, etc. here
// });

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