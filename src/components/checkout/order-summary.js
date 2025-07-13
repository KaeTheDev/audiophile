import { getState } from '../../store/cartStore.js';

export function OrderSummary() {
  const aside = document.createElement('aside');
  aside.className = 'order-summary';

  const render = () => {
    const { items, total } = getState();
    const shipping   = 50;
    const vat        = total * 0.2;
    const grandTotal = total + shipping;

    aside.innerHTML = `
      <h2 class="order-summary__title">Summary</h2>
      <div class="order-summary__items">
        ${items.map(i => `
          <div class="order-summary__item">
            <img src="${i.image}" alt="${i.name}">
            <div class="order-summary__info">
              <p class="order-summary__name">${i.name}</p>
              <p class="order-summary__price">$${i.price.toLocaleString()}</p>
            </div>
            <p class="order-summary__quantity">x${i.qty}</p>
          </div>
        `).join('')}
      </div>
      <div class="order-summary__totals">
        <div><span>Total</span><span>$${total.toLocaleString()}</span></div>
        <div><span>Shipping</span><span>$${shipping}</span></div>
        <div><span>VAT (Included)</span><span>$${vat.toFixed(0)}</span></div>
        <div class="order-summary__grand-total"><span>Grand Total</span><span>$${grandTotal.toLocaleString()}</span></div>
      </div>`;
  };

  render();
  document.addEventListener('cart:updated', render);
  return aside;
}