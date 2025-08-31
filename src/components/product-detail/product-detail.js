import { createButton } from '../button/button.js';
import { createNumberPicker } from '../form-elements/form-elements.js';
import { GoBackButton } from '../back-btn/back-btn.js';
// 🛒 bring in the cart API
import { addItem } from '../../store/cartStore.js'; // ← adjust dots if needed

export function ProductDetail(product) {
  const container = document.createElement('div');
  container.classList.add('product-detail-container');
  
  // Create Go Back button
  const goBackButton = GoBackButton();
  
  // Create main product detail section
  const section = document.createElement('section');
  section.classList.add('product-detail');
  
  // Generate responsive image sources
  const getProductImageSrc = (breakpoint) => {
    return `/audiophile/assets/product-${product.slug}/${breakpoint}/image-product.jpg`;
  };
  
  section.innerHTML = `
    <div class="product-detail__image-container">
      <picture>
        <source media="(min-width: 1024px)" srcset="${getProductImageSrc('desktop')}">
        <source media="(min-width: 768px)" srcset="${getProductImageSrc('tablet')}">
        <img
          src="${getProductImageSrc('mobile')}"
          alt="${product.name}"
          class="product-detail__image"
        />
      </picture>
    </div>
    <div class="product-detail__info">
      ${product.new ? '<p class="product-detail__new overline">NEW PRODUCT</p>' : ''}
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
  const pickerTarget = section.querySelector('#quantity-picker');
  const numberPicker = createNumberPicker({
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
  const addBtn = createButton({ label: 'ADD TO CART', variant: 'primary' });
  addBtn.addEventListener('click', () => {
    const qty = numberPicker.getValue();
    addItem(product, qty); // << pushes to store
  });

  section
    .querySelector('.product-detail__add-to-cart')
    .appendChild(addBtn);

  // Append go back button and section to container
  container.appendChild(goBackButton);
  container.appendChild(section);

  return container;
}