// export function ProductDetail(product) {
//   const section = document.createElement('section');
//   section.classList.add('product-detail');

//   section.innerHTML = `
//     <div class="product-detail__image-container">
//       <img 
//         src="${product.image}" 
//         alt="${product.name}" 
//         class="product-detail__image" 
//       />
//     </div>
//     <div class="product-detail__info">
//       ${product.isNew ? '<p class="product-detail__new overline">New Product</p>' : ''}
//       <h1 class="product-detail__name heading-2">${product.name}</h1>
//       <p class="product-detail__desc body">${product.description}</p>
//       <p class="product-detail__price heading-6">$${product.price.toLocaleString()}</p>
      
//       <div class="product-detail__actions">
//         <!-- 🔢 Quantity Selector Placeholder -->
//         <div class="quantity-selector">
//           <button class="quantity-selector__btn">-</button>
//           <span class="quantity-selector__value">1</span>
//           <button class="quantity-selector__btn">+</button>
//         </div>

//         <!-- 🛒 Add to Cart Button -->
//         <button class="add-to-cart-button">Add to Cart</button>
//       </div>
//     </div>
//   `;

//   return section;
// }

import { createButton } from '../button/button.js';

export function ProductDetail(product) {
  // 1. Create the section
  const section = document.createElement('section');
  section.classList.add('product-detail');

  // 2. Set up the HTML layout
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
        
        <!-- Placeholder for Add to Cart Button -->
        <div class="product-detail__add-to-cart"></div>
      </div>
    </div>
  `;

  // 3. After HTML is in place, create the real button
  const addToCartBtn = createButton({ label: 'Add to Cart' });

  // 4. Attach click event to the button
  addToCartBtn.addEventListener('click', () => {
    console.log('🛒 Add to Cart clicked!');
    // Later: Call a function to add this product to the cart
  });

  // 5. Insert it into the placeholder container
  const buttonContainer = section.querySelector('.product-detail__add-to-cart');
  buttonContainer.appendChild(addToCartBtn);

  return section;
}