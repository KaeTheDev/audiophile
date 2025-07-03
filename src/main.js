import './scss/styles.scss';
import { Navbar } from './components/navbar/navbar.js';
import { CartModal } from './components/cart-modal/cart-modal.js';
import { Footer } from './components/footer/footer.js';
import { About } from './components/about/about.js';
import { ProductCategories } from './components/product-categories/product-categories.js';
import { Hero } from './components/hero/hero.js';
import { FeaturedProducts } from './components/featured-products/feature-products.js';


document.addEventListener('DOMContentLoaded', () => {
  const app = document.querySelector('#app');
  const footerContainer = document.querySelector('#footer'); // ✅ Make sure it's NOT a <footer> tag

  // Mount components inside #app
  app.append(
    Navbar(),
    CartModal(),
    Hero(),
    ProductCategories()
  );

  page.appendChild(FeaturedProducts());

 // Mount About section at the bottom of the page content
  page.appendChild(About());

  // Mount Footer in footer container
  footerContainer.appendChild(Footer());

  // ✅ Basic toggle logic for testing CartModal
  const cartButton = document.querySelector('#cart-toggle');
  const cartModal = document.querySelector('#cart-modal');

  cartButton.addEventListener('click', () => {
    cartModal.classList.toggle('is-visible');
  });
});