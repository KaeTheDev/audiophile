import { Navbar } from './components/navbar/navbar.js';
import { CartModal } from './components/cart-modal/cart-modal.js';
import { Footer } from './components/footer/footer.js';
import { Toast } from './components/toast/toast.js';

document.addEventListener('DOMContentLoaded', () => {
  const app = document.querySelector('#app');
  const footerContainer = document.querySelector('#footer');

  // Create Navbar and Cart Modal
  const navbar = Navbar();
  const cartModal = CartModal();

  if (app) app.append(navbar, cartModal);
  if (footerContainer) footerContainer.appendChild(Footer());

  // Mount toast
  const toast = Toast();
  document.body.appendChild(toast);

  // Helper to show toast messages
  const showToast = (message) => toast.show(message);

  // Toggle cart modal manually (clicking the cart icon)
  const cartToggleBtn = document.querySelector('#cart-toggle');
  cartToggleBtn?.addEventListener('click', () => {
    const cartModalEl = document.querySelector('#cart-modal');
    cartModalEl?.classList.toggle('is-visible');
  });

  // Listen for items added to the cart
  document.addEventListener('cart:itemAdded', (e) => {
    const { product, qty, items } = e.detail;

    // Show toast
    const totalQty = items.reduce((sum, i) => sum + i.qty, 0);
    showToast(
      `Added ${qty} × ${product.name}! You now have ${totalQty} item${totalQty !== 1 ? 's' : ''}.`
    );

    // Open the cart modal
    const cartModalEl = document.querySelector('#cart-modal');
    if (cartModalEl) cartModalEl.classList.add('is-visible');

    // Optional: auto-close after 4 seconds
    setTimeout(() => cartModalEl?.classList.remove('is-visible'), 2500);
  });
});