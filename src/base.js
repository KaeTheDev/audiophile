// base.js

import { Navbar } from './components/navbar/navbar.js';
import { CartModal } from './components/cart-modal/cart-modal.js';
import { Footer } from './components/footer/footer.js';
import { About } from './components/about/about.js';
import { ProductCategories } from './components/product-categories/product-categories.js';

document.addEventListener('DOMContentLoaded', () => {
  const app = document.querySelector('#app');
  const page = document.querySelector('#page');
  const footerContainer = document.querySelector('#footer');

  // 1. Navbar + Cart
  if (app) {
    app.append(Navbar(), CartModal());
  }

  // 3. Product Categories
  if (page) {
    page.appendChild(ProductCategories());
  }

  // 5. About
  if (page) {
    page.appendChild(About());
  }

  // 6. Footer
  if (footerContainer) {
    footerContainer.appendChild(Footer());
  }

  // Cart toggle logic
  const cartButton = document.querySelector('#cart-toggle');
  const cartModal = document.querySelector('#cart-modal');

  if (cartButton && cartModal) {
    cartButton.addEventListener('click', () => {
      cartModal.classList.toggle('is-visible');
    });
  }
});