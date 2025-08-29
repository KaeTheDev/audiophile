import { Navbar } from './components/navbar/navbar.js';
import { CartModal } from './components/cart-modal/cart-modal.js';
import { Footer } from './components/footer/footer.js';
import { Toast } from './components/toast/toast.js';

document.addEventListener('DOMContentLoaded', () => {
  const app = document.querySelector('#app');
  const footerContainer = document.querySelector('#footer');

  // Navbar & Cart
  const navbar = Navbar();
  const cartModal = CartModal();

  if (app) app.append(navbar, cartModal);
  if (footerContainer) footerContainer.appendChild(Footer());

  // Mount toast
  const toast = Toast();
  document.body.appendChild(toast);

  // Helper to show toast messages
  const showToast = (message) => toast.show(message);

  // Listen for cart updates globally
  document.addEventListener('cart:updated', (e) => {
    const state = e.detail;
    const lastItem = state.items[state.items.length - 1];
    if (lastItem) {
      const totalQty = state.items.reduce((sum, i) => sum + i.qty, 0);
      showToast(
        `🛒 Added ${lastItem.qty} × ${lastItem.name}! You now have ${totalQty} item${totalQty !== 1 ? 's' : ''}.`
      );
    }
  });

  // Cart toggle
  document
    .querySelector('#cart-toggle')
    ?.addEventListener('click', () =>
      document.querySelector('#cart-modal')?.classList.toggle('is-visible')
    );
});