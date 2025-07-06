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
      <p class="product-detail__price heading-6">$${product.price.toLocaleString()}</p>
      
      <div class="product-detail__actions">
        <!-- 🔢 Quantity Selector Placeholder -->
        <div class="quantity-selector">
          <button class="quantity-selector__btn">-</button>
          <span class="quantity-selector__value">1</span>
          <button class="quantity-selector__btn">+</button>
        </div>

        <!-- 🛒 Add to Cart Button -->
        <button class="add-to-cart-button">Add to Cart</button>
      </div>
    </div>
  `;

  return section;
}