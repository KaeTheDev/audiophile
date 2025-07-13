import { createButton } from '../button/button.js';

export function OrderSummary() {
  const aside = document.createElement('aside');
  aside.className = 'order-summary';

  // ✅ Temporary test data
  const cartItems = [
    {
      name: 'XX99 MK II',
      price: 2999,
      quantity: 1,
      image: 'images/xx99-mark-two.jpg'
    },
    {
      name: 'YX1 Earphones',
      price: 599,
      quantity: 2,
      image: 'images/yx1.jpg'
    }
  ];

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 50;
  const vat = total * 0.2;
  const grandTotal = total + shipping;

  // ✅ Initial layout
  aside.innerHTML = `
    <h2 class="order-summary__title">Summary</h2>

    <div class="order-summary__items">
      ${cartItems.map(item => `
        <div class="order-summary__item">
          <img src="${item.image}" alt="${item.name}">
          <div class="order-summary__info">
            <p class="order-summary__name">${item.name}</p>
            <p class="order-summary__price">$${item.price.toLocaleString()}</p>
          </div>
          <p class="order-summary__quantity">x${item.quantity}</p>
        </div>
      `).join('')}
    </div>

    <div class="order-summary__totals">
      <div><span>Total</span><span>$${total.toLocaleString()}</span></div>
      <div><span>Shipping</span><span>$${shipping}</span></div>
      <div><span>VAT (Included)</span><span>$${vat.toFixed(0)}</span></div>
      <div class="order-summary__grand-total">
        <span>Grand Total</span><span>$${grandTotal.toLocaleString()}</span>
      </div>
    </div>

    <div class="order-summary__button"></div>
  `;

  // ✅ Replace placeholder with reusable button
  const buttonContainer = aside.querySelector('.order-summary__button');
  const payButton = createButton({ label: 'Continue & Pay', variant: 'primary' });

  // Optional: Add click behavior
  payButton.addEventListener('click', () => {
    console.log('🧾 Submitting checkout...');
    // TODO: Validate form + send order
  });

  buttonContainer.appendChild(payButton);

  return aside;
}