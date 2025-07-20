export function ProductSpecs(product) {
  const section = document.createElement('div');
  section.className = 'product-specs';
  section.innerHTML = `
    <div class="product-specs__text">
      <h2>Features</h2>
      <p>${product.features.replace(/\n\n/g, '</p><p>')}</p>
    </div>
    <div class="product-specs__box">
      <h2>In the Box</h2>
      <ul>
        ${product.includes
          .map(
            (item) => `
              <li class="product-specs__item">
                <span class="product-specs__quantity">${item.quantity}x</span>
                <span class="product-specs__item-name">${item.item}</span>
              </li>
            `
          )
          .join('')}
      </ul>
    </div>
  `;
  return section;
}