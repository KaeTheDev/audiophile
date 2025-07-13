import { createButton } from '../button/button.js';
import { createNumberPicker } from '../form-elements/form-elements.js';

// 🛒 bring in the cart API
import { addItem, getState } from '../../store/cartStore.js';   // ← adjust dots if needed

export function ProductDetail(product) {
  const section = document.createElement('section');
  section.classList.add('product-detail');

  section.innerHTML = `
    <div class="product-detail__image-container">
      <img
        src="${product.image}"
        alt="${product.name}"
        class="product-detail__image"
      />
    </div>

    <div class="product-detail__info">
      ${product.isNew ? '<p class="product-detail__new overline">New Product</p>' : ''}
      <h1 class="product-detail__name heading-2">${product.name}</h1>
      <p class="product-detail__desc body">${product.description}</p>
      <p class="product-detail__price heading-6">
        $${product.price.toLocaleString()}
      </p>

      <div class="product-detail__actions">
        <div class="product-detail__quantity" id="quantity-picker"></div>
        <div class="product-detail__add-to-cart"></div>
      </div>
    </div>
  `;

  // ───────────────────────────────
  // Quantity selector
  // ───────────────────────────────
  const pickerTarget  = section.querySelector('#quantity-picker');
  const numberPicker  = createNumberPicker({
    id: `qty-${product.slug}`,
    initial: 1,
    min: 1,
    max: 10,
    name: `quantity-${product.slug}`,
  });
  pickerTarget.appendChild(numberPicker);

  // ───────────────────────────────
  // Add‑to‑Cart button
  // ───────────────────────────────
  const addBtn = createButton({ label: 'Add to Cart', variant: 'primary' });

  addBtn.addEventListener('click', () => {
    const qty = numberPicker.getValue();
    addItem(product, qty);                        // << pushes to store
    console.log(`🛒 Added ${qty} × ${product.name}`, getState());
  });

  section
    .querySelector('.product-detail__add-to-cart')
    .appendChild(addBtn);

  return section;
}