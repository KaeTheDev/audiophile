import { createButton } from '../button/button.js';

export function OrderConfirmation(order) {
  const div = document.createElement('div');
  div.className = 'order-confirmation';

  div.innerHTML = `
    <img class="order-confirmation__icon" src="/audiophile/assets/checkout/icon-order-confirmation.svg" alt="Order Confirmed" />
    <h2 class="order-confirmation__title">Thank you for your order</h2>
    <p class="order-confirmation__message">You will receive an email confirmation shortly.</p>

    <div class="order-confirmation__summary">
      <div class="order-confirmation__summary-left">
        ${order.items.map((item, idx) => idx === 0 ? `
          <div class="order-confirmation__item">
            <div class="order-confirmation__item-left">
              <img src="${item.image}" alt="${item.name}" class="order-confirmation__item-img" />
              <div class="order-confirmation__item-details">
                <p class="order-confirmation__item-name">${item.name}</p>
                <p class="order-confirmation__item-price">$${item.price}</p>
              </div>
            </div>
            <p class="order-confirmation__item-qty">x${item.qty}</p>
          </div>
        ` : '').join('')}

        ${order.items.length > 1 
          ? `<hr class="order-confirmation__divider" />
             <p class="order-confirmation__more">and ${order.items.length - 1} other item(s)</p>`
          : ''}
      </div>

      <div class="order-confirmation__summary-right">
        <p class="order-confirmation__grand-label">Grand Total</p>
        <p class="order-confirmation__grand-amount">$${order.total}</p>
      </div>
    </div>

    <div class="order-confirmation__button-container"></div>
  `;

  const button = createButton({ label: 'Back to Home', variant: 'primary' });
  button.addEventListener('click', () => (window.location.href = '/'));
  div.querySelector('.order-confirmation__button-container').appendChild(button);

  return div;
}