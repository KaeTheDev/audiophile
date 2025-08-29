import { getState, clearCart } from "../../store/cartStore.js";
import { CartItem } from "../cart-item/cart-item.js";
import { createButton } from "../button/button.js";

export function CartModal(toast) {
  const modal = document.createElement("div");
  modal.id = "cart-modal";
  modal.className = "cart-modal";

  function render() {
    const { items, total } = getState();

    modal.innerHTML = `
      <div class="cart-modal__header">
        <h2 class="cart-modal__title">Cart (${items.length})</h2>
        <button class="cart-modal__remove-all">Remove All</button>
      </div>

      <div class="cart-modal__items"></div>

      <div class="cart-modal__total">
        <span>Total</span>
        <span class="cart-modal__total-price">$${total.toLocaleString()}</span>
      </div>

      <div class="cart-modal__checkout"></div>
    `;

    const list = modal.querySelector(".cart-modal__items");
    list.innerHTML = "";

    if (items.length === 0) {
      list.innerHTML = `
        <p class="cart-modal__empty">
          Your cart is empty.<br>
          Ready to upgrade your sound? 🎧<br>
          <a href="/index.html" class="cart-modal__shop-link">Continue Shopping</a>
        </p>
      `;
    } else {
      items.forEach((item) => list.appendChild(CartItem(item)));
    }

    // Hook up “Remove All”
    modal.querySelector(".cart-modal__remove-all").addEventListener("click", clearCart);

    // Checkout button
    const checkoutBtn = createButton({ label: "Checkout", variant: "primary" });
    checkoutBtn.addEventListener("click", () => {
      if (items.length === 0) {
        // Show feedback instead of going to checkout
        if (toast) toast.show("Your cart is empty. Add something before checking out!", 3000);
        // Optionally shake modal or highlight button for extra feedback
        modal.classList.add("cart-modal__shake");
        setTimeout(() => modal.classList.remove("cart-modal__shake"), 300);
      } else {
        window.location.href = "checkout.html";
      }
    });

    modal.querySelector(".cart-modal__checkout").appendChild(checkoutBtn);
  }

  render();
  document.addEventListener("cart:updated", render);

  return modal;
}