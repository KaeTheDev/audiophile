// base.js

import { Navbar } from './components/navbar/navbar.js';
import { CartModal } from './components/cart-modal/cart-modal.js';
import { Footer } from './components/footer/footer.js';

document.addEventListener('DOMContentLoaded', () => {
  const app = document.querySelector('#app');
  const footerContainer = document.querySelector('#footer');

  if (app) {
    app.append(Navbar(), CartModal());
  }

  if (footerContainer) {
    footerContainer.appendChild(Footer());
  }

  const cartButton = document.querySelector('#cart-toggle');
  const cartModal = document.querySelector('#cart-modal');

  if (cartButton && cartModal) {
    cartButton.addEventListener('click', () => {
      cartModal.classList.toggle('is-visible');
    });
  }
});