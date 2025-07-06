export function ProductInTheBox(product) {
    const section = document.createElement('div');
    section.className = 'product-features__box';
  
    section.innerHTML = `
      <h2>In the Box</h2>
      <ul>
        ${product.includes
          .map(
            (item) => `
              <li class="product-features__item">
                <span class="product-features__quantity">${item.quantity}x</span>
                <span class="product-features__item-name">${item.item}</span>
              </li>
            `
          )
          .join('')}
      </ul>
    `;
  
    return section;
  }  