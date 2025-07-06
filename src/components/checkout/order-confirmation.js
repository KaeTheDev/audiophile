export function OrderConfirmation(order) {
    const div = document.createElement('div');
    div.className = 'order-confirmation';
  
    div.innerHTML = `
      <img class="order-confirmation__icon" src="/assets/checkout/icon-order-confirmation.svg" alt="Order Confirmed" />
      <h2 class="order-confirmation__title">Thank you for your order</h2>
      <p class="order-confirmation__message">You will receive an email confirmation shortly.</p>
  
      <div class="order-confirmation__summary">
        <div class="order-confirmation__summary-left">
          <div class="order-confirmation__item">
            <div class="order-confirmation__item-left">
              <img src="${order.items[0].image}" alt="${order.items[0].name}" class="order-confirmation__item-img" />
              <div class="order-confirmation__item-details">
                <p class="order-confirmation__item-name">${order.items[0].name}</p>
                <p class="order-confirmation__item-price">$${order.items[0].price}</p>
              </div>
            </div>
            <p class="order-confirmation__item-qty">x${order.items[0].quantity}</p>
          </div>
  
          ${order.items.length > 1
            ? `<hr class="order-confirmation__divider" />
               <p class="order-confirmation__more">and ${order.items.length - 1} other item(s)</p>`
            : ''
          }
        </div>
  
        <div class="order-confirmation__summary-right">
          <p class="order-confirmation__grand-label">Grand Total</p>
          <p class="order-confirmation__grand-amount">$${order.total}</p>
        </div>
      </div>
  
      <a href="/" class="order-confirmation__button button button--primary">Back to Home</a>
    `;
  
    return div;
  }