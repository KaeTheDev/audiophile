import { getState, clearCart } from '../../store/cartStore.js';
import { CartItem } from '../cart-item/cart-item.js';
import { createButton } from '../button/button.js';

export function CartModal() {
  const modal = document.createElement('div');
  modal.id = 'cart-modal';
  modal.className = 'cart-modal';

  function render() {
    const { items, total } = getState();

    modal.innerHTML = `
      <h2 class="cart-modal__title">Cart (${items.length})</h2>
      <button class="cart-modal__remove-all">Remove All</button>
      <div class="cart-modal__items"></div>
      <div class="cart-modal__total">
        <span>Total</span>
        <span class="cart-modal__total-price">$${total.toLocaleString()}</span>
      </div>
      <div class="cart-modal__checkout"></div>
    `;

    // Populate cart items
    const list = modal.querySelector('.cart-modal__items');
    items.forEach(item => list.appendChild(CartItem(item)));

    // Hook up “Remove All”
    modal
      .querySelector('.cart-modal__remove-all')
      .addEventListener('click', clearCart);

    // Create and append the Checkout button using your button component
    const checkoutBtn = createButton({ label: 'Checkout', variant: 'primary' });
    checkoutBtn.addEventListener('click', () => {
      window.location.href = 'checkout.html';
    });
    modal.querySelector('.cart-modal__checkout').appendChild(checkoutBtn);
  }

  render();
  document.addEventListener('cart:updated', render);

  return modal;
}
