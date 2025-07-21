import { getState } from '../../store/cartStore.js';
import { createButton } from '../button/button.js';

export function OrderSummary() {
  const aside = document.createElement('aside');
  aside.className = 'order-summary';
  
  const render = () => {
    const { items, total } = getState();
    const shipping = 50;
    const vat = total * 0.2;
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
        <div class="order-summary__grand-total">
          <span class="order-summary__grand-total-label">Grand Total</span>
          <span class="order-summary__grand-total-amount">$${grandTotal.toLocaleString()}</span>
        </div>
      </div>
    `;
    
    // ✅ Fixed: Trigger form submission instead of custom event
    const button = createButton({
      label: 'Continue & Pay',
      variant: 'primary',
      type: 'button', // This triggers JS click — DO NOT use 'submit' here
    });
    
    button.addEventListener('click', () => {
      const checkoutForm = document.querySelector('#checkout-form form');
      if (checkoutForm) {
        const submitEvent = new Event('submit', { bubbles: true, cancelable: true });
        checkoutForm.dispatchEvent(submitEvent);
      }
    });
    
    aside.appendChild(button);
  };
  
  render();
  document.addEventListener('cart:updated', render);
  return aside;
}