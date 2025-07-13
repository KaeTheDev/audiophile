import { Navbar } from './components/navbar/navbar.js';
import { CartModal } from './components/cart-modal/cart-modal.js';
import { Footer } from './components/footer/footer.js';

document.addEventListener('DOMContentLoaded', () => {
  const app = document.querySelector('#app');
  const footerContainer = document.querySelector('#footer');

  if (app) app.append(Navbar(), CartModal());
  if (footerContainer) footerContainer.appendChild(Footer());

  document
    .querySelector('#cart-toggle')
    ?.addEventListener('click', () =>
      document.querySelector('#cart-modal')?.classList.toggle('is-visible')
    );
});
