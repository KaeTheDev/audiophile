import { createButton } from '../button/button.js';

export function OrderConfirmation(order, onClose) {
  const div = document.createElement('div');
  div.className = 'order-confirmation';

  // Ensure we have valid data with fallbacks
  const safeOrder = {
    items: order?.items || [],
    grandTotal: order?.grandTotal || order?.total || 0,
    subtotal: order?.subtotal || 0,
    vat: order?.vat || 0,
    shipping: order?.shipping || 0
  };

  // Format price safely
  const formatPrice = (price) => {
    const numPrice = Number(price) || 0;
    return numPrice.toLocaleString();
  };

  div.innerHTML = `
    <img class="order-confirmation__icon" src="/audiophile/assets/checkout/icon-order-confirmation.svg" alt="Order Confirmed" />
    <h2 class="order-confirmation__title">Thank you for your order</h2>
    <p class="order-confirmation__message">You will receive an email confirmation shortly.</p>

    <div class="order-confirmation__summary">
      <div class="order-confirmation__summary-left">
        ${safeOrder.items.map((item, idx) => {
          if (idx === 0 && item) {
            return `
              <div class="order-confirmation__item">
                <div class="order-confirmation__item-left">
                  <img src="${item.image || ''}" alt="${item.name || 'Product'}" class="order-confirmation__item-img" />
                  <div class="order-confirmation__item-details">
                    <p class="order-confirmation__item-name">${item.name || 'Unknown Product'}</p>
                    <p class="order-confirmation__item-price">$${formatPrice(item.price)}</p>
                  </div>
                </div>
                <p class="order-confirmation__item-qty">x${item.qty || 1}</p>
              </div>
            `;
          }
          return '';
        }).join('')}

        ${safeOrder.items.length > 1 
          ? `<hr class="order-confirmation__divider" />
             <p class="order-confirmation__more">and ${safeOrder.items.length - 1} other item(s)</p>`
          : ''}
      </div>

      <div class="order-confirmation__summary-right">
        <p class="order-confirmation__grand-label">Grand Total</p>
        <p class="order-confirmation__grand-amount">$${formatPrice(safeOrder.grandTotal)}</p>
      </div>
    </div>

    <div class="order-confirmation__button-container"></div>
  `;

  const button = createButton({ label: 'Back to Home', variant: 'primary' });
  button.addEventListener('click', () => {
    // Call the close callback first (this will clear the cart)
    if (onClose) onClose();
    // Then navigate to home
    window.location.href = '/audiophile/';
  });
  div.querySelector('.order-confirmation__button-container').appendChild(button);

  return div;
}