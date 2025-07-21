import { getState } from '../../store/cartStore.js';
import { createButton } from '../button/button.js';

export function OrderSummary() {
  const aside = document.createElement('aside');
  aside.className = 'order-summary';
  
  const render = () => {
    const { items, total, vat, shipping, grandTotal } = getState();
    
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
        <div><span>VAT (Included)</span><span>$${vat.toFixed(1)}</span></div>
        <div class="order-summary__grand-total">
          <span class="order-summary__grand-total-label">Grand Total</span>
          <span class="order-summary__grand-total-amount">$${grandTotal.toLocaleString()}</span>
        </div>
      </div>
    `;
    
    // ✅ Try multiple selectors to find the form
    const button = createButton({
      label: 'Continue & Pay',
      variant: 'primary',
      type: 'button',
    });
    
    button.addEventListener('click', () => {
      // Try different ways to find the form
      let checkoutForm = document.querySelector('#checkout-form form') || 
                        document.querySelector('.checkout-form form') || 
                        document.querySelector('form');
      
      if (checkoutForm) {
        console.log('Found form, triggering submit');
        
        // Option 1: Try dispatching submit event
        const submitEvent = new Event('submit', { bubbles: true, cancelable: true });
        checkoutForm.dispatchEvent(submitEvent);
      } else {
        console.error('Could not find checkout form. Available forms:', document.querySelectorAll('form'));
        
        // Option 2: Fallback - trigger a custom event that your main app can listen for
        document.dispatchEvent(new CustomEvent('checkout:submit', { 
          detail: { orderData: getState() } 
        }));
      }
    });
    
    aside.appendChild(button);
  };
  
  render();
  document.addEventListener('cart:updated', render);
  return aside;
}