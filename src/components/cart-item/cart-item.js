import { createNumberPicker } from '../form-elements/form-elements.js';
import { updateQty, removeItem } from '../../store/cartStore.js';

export function CartItem({ slug, name, price, qty, image }) {
  const div = document.createElement('div');
  div.className = 'cart-item';
  div.dataset.slug = slug;

  div.innerHTML = `
    <img src="${image}" alt="${name}" class="cart-item__image" />
    <div class="cart-item__details">
      <p class="cart-item__name">${name}</p>
      <p class="cart-item__price">$${price.toLocaleString()}</p>
    </div>
  `;

  // quantity picker (now allows 0)
  const picker = createNumberPicker({
    id: `qty-${slug}`,
    initial: qty,
    min: 0,
    max: 10,
    onChange: newQty => {
      if (newQty === 0) {
        removeItem(slug);
      } else {
        updateQty(slug, newQty);
      }
    },
  });

  const qtyWrap = document.createElement('div');
  qtyWrap.className = 'cart-item__quantity-selector';
  qtyWrap.appendChild(picker);
  div.appendChild(qtyWrap);

  return div;
}
