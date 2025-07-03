export function CartModal() {
    const modal = document.createElement('div');
    modal.className = 'cart-modal';
    modal.id = 'cart-modal'; 
    
    modal.innerHTML = `
      <h2 class="cart-modal__title">Cart (3)</h2>
      <button class="cart-modal__remove-all">Remove All</button>
  
      <!-- Cart Items (placeholder) -->
      <div class="cart-modal__item">
        <img src="images/xx99-mark-two.jpg" alt="XX99 Mark II Headphones" class="cart-modal__image">
        <div class="cart-modal__details">
          <p class="cart-modal__name">XX99 MK II</p>
          <p class="cart-modal__price">$2,999</p>
        </div>
        <p class="cart-modal__quantity">x1</p>
      </div>
  
      <!-- Repeat similar blocks for more items -->
  
      <!-- Total -->
      <div class="cart-modal__total">
        <span>Total</span>
        <span>$5,396</span>
      </div>
  
      <!-- Checkout Button -->
      <button class="cart-modal__checkout button button--primary">Checkout</button>
    `;
  
    return modal;
  }  